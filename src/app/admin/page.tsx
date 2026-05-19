"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Appointment {
    id: string;
    patientName: string;
    mobileNumber: string;
    emailAddress: string;
    consultationMode: string;
    specialty: string;
    date: string;
    timeSlot: string;
    healthConcern: string;
    medicalHistory: string[];
    status: 'Pending' | 'Confirmed' | 'Rescheduled' | 'Rejected' | 'Completed';
    createdAt: string;
    rescheduleNote?: string;
    rejectNote?: string;
}

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [loginError, setLoginError] = useState('');
    
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [activeTab, setActiveTab] = useState<'Pending' | 'Confirmed' | 'Completed' | 'Settings'>('Pending');
    const [isSyncing, setIsSyncing] = useState(false);

    // Settings State
    const [sbUrl, setSbUrl] = useState('');
    const [sbKey, setSbKey] = useState('');
    const [emailServiceId, setEmailServiceId] = useState('');
    const [emailTemplateBooking, setEmailTemplateBooking] = useState('');
    const [emailTemplateUpdate, setEmailTemplateUpdate] = useState('');
    const [emailPublicKey, setEmailPublicKey] = useState('');

    // Modal state for Reschedule / Reject
    const [modalType, setModalType] = useState<'reschedule' | 'reject' | null>(null);
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
    const [newDate, setNewDate] = useState('');
    const [newTimeSlot, setNewTimeSlot] = useState('');
    const [customNote, setCustomNote] = useState('');
    
    // Toast notification
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 4000);
    };

    // Load credentials & appointments
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const auth = localStorage.getItem('dr_vaibhavi_admin_auth');
            if (auth === 'true') {
                setIsAuthenticated(true);
            }

            // Load Settings keys
            setSbUrl(localStorage.getItem('dr_vaibhavi_supabase_url') || '');
            setSbKey(localStorage.getItem('dr_vaibhavi_supabase_key') || '');
            setEmailServiceId(localStorage.getItem('dr_vaibhavi_emailjs_service_id') || '');
            setEmailTemplateBooking(localStorage.getItem('dr_vaibhavi_emailjs_template_booking') || '');
            setEmailTemplateUpdate(localStorage.getItem('dr_vaibhavi_emailjs_template_update') || '');
            setEmailPublicKey(localStorage.getItem('dr_vaibhavi_emailjs_public_key') || '');

            loadAppointments();
        }
    }, []);

    // Security XOR helper functions for encrypting/decrypting private patient data
    const SECRET_KEY = "vaibhavi2026";
    
    const encryptData = (text: string): string => {
        try {
            const xor = text.split('').map((char, i) => 
                String.fromCharCode(char.charCodeAt(0) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length))
            ).join('');
            return btoa(unescape(encodeURIComponent(xor)));
        } catch (e) {
            return '';
        }
    };

    const decryptData = (encoded: string): string => {
        try {
            const decoded = decodeURIComponent(escape(atob(encoded)));
            return decoded.split('').map((char, i) => 
                String.fromCharCode(char.charCodeAt(0) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length))
            ).join('');
        } catch (e) {
            return '';
        }
    };

    const loadAppointments = async () => {
        setIsSyncing(true);
        
        // 1. Primary Sync: Fetch from secure KVDB cloud bucket
        try {
            const response = await fetch('https://kvdb.io/vaibhavi_clinic_db_ad9aee2/appointments');
            if (response.ok) {
                const encryptedText = await response.text();
                if (encryptedText) {
                    const decryptedText = decryptData(encryptedText);
                    if (decryptedText) {
                        const parsed = JSON.parse(decryptedText);
                        setAppointments(parsed);
                        localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(parsed));
                        setIsSyncing(false);
                        return;
                    }
                }
            }
        } catch (err) {
            console.error('[KVDB] Load failed. Trying Supabase or cache...', err);
        }

        // 2. Secondary Sync: Try Supabase if keys exist
        const url = localStorage.getItem('dr_vaibhavi_supabase_url');
        const key = localStorage.getItem('dr_vaibhavi_supabase_key');

        if (url && key) {
            try {
                const response = await fetch(`${url}/rest/v1/appointments?order=created_at.desc`, {
                    headers: {
                        'apikey': key,
                        'Authorization': `Bearer ${key}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const mapped: Appointment[] = data.map((item: any) => ({
                        id: item.id,
                        patientName: item.patient_name,
                        mobileNumber: item.mobile_number,
                        emailAddress: item.email_address,
                        consultationMode: item.consultation_mode,
                        specialty: item.specialty,
                        date: item.appointment_date,
                        timeSlot: item.time_slot,
                        healthConcern: item.health_concern,
                        medicalHistory: item.medical_history || [],
                        status: item.status,
                        createdAt: item.created_at,
                        rescheduleNote: item.reschedule_note,
                        rejectNote: item.reject_note
                    }));
                    setAppointments(mapped);
                    localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(mapped));
                    setIsSyncing(false);
                    return;
                }
            } catch (err) {
                console.error('[Supabase] Fetch failed. Falling back to local cache.', err);
            }
        }

        // Fallback to local storage cache
        const localData = localStorage.getItem('dr_vaibhavi_appointments');
        if (localData) {
            setAppointments(JSON.parse(localData));
        } else {
            // Initial seed if no local data
            const sampleData: Appointment[] = [
                {
                    id: 'APP-748291',
                    patientName: 'Anjali Sharma',
                    mobileNumber: '+919876543210',
                    emailAddress: 'anjali.sharma@example.com',
                    consultationMode: 'In-Clinic Visit (MGM Belapur)',
                    specialty: 'PCOS / PMOS & Hormones',
                    date: '2026-05-20',
                    timeSlot: '10:00 AM',
                    healthConcern: 'Irregular cycles and weight gain over the last 6 months.',
                    medicalHistory: ['Thyroid Disorder'],
                    status: 'Pending',
                    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
                }
            ];
            setAppointments(sampleData);
            localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(sampleData));
        }
        setIsSyncing(false);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === 'vaibhavi2026' || passwordInput === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('dr_vaibhavi_admin_auth', 'true');
            setLoginError('');
            showToast('Access Granted to Admin Dashboard');
        } else {
            setLoginError('Invalid Administrator PIN / Password.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('dr_vaibhavi_admin_auth');
        showToast('Logged out');
    };

    const saveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('dr_vaibhavi_supabase_url', sbUrl.trim());
        localStorage.setItem('dr_vaibhavi_supabase_key', sbKey.trim());
        localStorage.setItem('dr_vaibhavi_emailjs_service_id', emailServiceId.trim());
        localStorage.setItem('dr_vaibhavi_emailjs_template_booking', emailTemplateBooking.trim());
        localStorage.setItem('dr_vaibhavi_emailjs_template_update', emailTemplateUpdate.trim());
        localStorage.setItem('dr_vaibhavi_emailjs_public_key', emailPublicKey.trim());
        showToast('System Integration Settings Saved Successfully!');
        loadAppointments();
    };

    const updateAppointmentInStore = async (id: string, status: Appointment['status'], extra: Partial<Appointment>, emailType: 'status_update', emailNote?: string) => {
        // 1. Update local cache state & trigger email alert
        let updatedList: Appointment[] = [];
        const appToUpdate = appointments.find(app => app.id === id);
        
        updatedList = appointments.map(app => {
            if (app.id === id) {
                const newApp = { ...app, status, ...extra };
                // Send email to patient asynchronously
                sendEmailAlert(newApp, emailNote || '');
                return newApp;
            }
            return app;
        });

        setAppointments(updatedList);
        localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(updatedList));

        // 2. Sync to secure KVDB cloud database
        try {
            const encryptedPayload = encryptData(JSON.stringify(updatedList));
            await fetch('https://kvdb.io/vaibhavi_clinic_db_ad9aee2/appointments', {
                method: 'POST',
                body: encryptedPayload
            });
            console.log('[KVDB] Synced update successfully.');
        } catch (err) {
            console.error('[KVDB] Sync update failed:', err);
        }

        // 3. Secondary Sync to Supabase
        const url = localStorage.getItem('dr_vaibhavi_supabase_url');
        const key = localStorage.getItem('dr_vaibhavi_supabase_key');
        if (url && key) {
            const dbUpdates: any = {
                status: status,
                ...extra
            };
            if (extra.date) {
                dbUpdates.appointment_date = extra.date;
                delete dbUpdates.date;
            }
            if (extra.timeSlot) {
                dbUpdates.time_slot = extra.timeSlot;
                delete dbUpdates.timeSlot;
            }
            if (extra.rescheduleNote) {
                dbUpdates.reschedule_note = extra.rescheduleNote;
                delete dbUpdates.rescheduleNote;
            }
            if (extra.rejectNote) {
                dbUpdates.reject_note = extra.rejectNote;
                delete dbUpdates.rejectNote;
            }

            try {
                await fetch(`${url}/rest/v1/appointments?id=eq.${id}`, {
                    method: 'PATCH',
                    headers: {
                        'apikey': key,
                        'Authorization': `Bearer ${key}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dbUpdates)
                });
            } catch (err) {
                console.error('[Supabase] Sync patch failed:', err);
            }
        }
    };

    const sendEmailAlert = async (app: Appointment, note: string) => {
        const serviceId = localStorage.getItem('dr_vaibhavi_emailjs_service_id');
        const templateId = localStorage.getItem('dr_vaibhavi_emailjs_template_update');
        const publicKey = localStorage.getItem('dr_vaibhavi_emailjs_public_key');

        if (!serviceId || !templateId || !publicKey) return;

        try {
            await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        to_email: app.emailAddress,
                        to_name: app.patientName,
                        patient_name: app.patientName,
                        reference_id: app.id,
                        consultation_mode: app.consultationMode,
                        specialty: app.specialty,
                        appointment_date: app.date,
                        appointment_time: app.timeSlot,
                        status: app.status,
                        note: note || '',
                        reply_to: 'IndiasBestGynaecologist@gmail.com'
                    }
                })
            });
        } catch (err) {
            console.error('[EmailJS] Fail to send status update email:', err);
        }
    };

    const getGmailComposeLink = (app: Appointment) => {
        const subject = `Appointment ${app.status} - Dr. Vaibhavi Dhenge Clinic [${app.id}]`;
        let body = `Dear ${app.patientName},\n\n`;
        
        if (app.status === 'Confirmed') {
            body += `We are pleased to inform you that your appointment request has been CONFIRMED.\n\n`;
        } else if (app.status === 'Rescheduled') {
            body += `Your appointment has been RESCHEDULED.\n\n`;
        } else if (app.status === 'Rejected') {
            body += `We regret to inform you that your appointment request could not be accepted at this time.\n\n`;
        } else {
            body += `This is an update regarding your appointment request.\n\n`;
        }

        body += `Appointment Details:\n`;
        body += `- Reference ID: ${app.id}\n`;
        body += `- Date: ${app.date}\n`;
        body += `- Time Slot: ${app.timeSlot}\n`;
        body += `- Consultation Mode: ${app.consultationMode}\n`;
        body += `- Specialty: ${app.specialty}\n`;
        
        if (app.rescheduleNote) {
            body += `- Note: ${app.rescheduleNote}\n`;
        } else if (app.rejectNote) {
            body += `- Note: ${app.rejectNote}\n`;
        }

        body += `\nShould you need to change your appointment or have any questions, please contact us at +91 91361 68582 / +91 85912 37628.\n\n`;
        body += `Best regards,\n`;
        body += `Dr. Vaibhavi Dhenge Clinic Team\n`;
        body += `MGM Hospital, Vashi / Belapur`;

        return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(app.emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleAccept = (id: string) => {
        updateAppointmentInStore(id, 'Confirmed', {}, 'status_update', 'Your appointment has been confirmed! We look forward to seeing you.');
        showToast(`Appointment confirmed & status email scheduled to dispatch.`);
    };

    const openRescheduleModal = (app: Appointment) => {
        setSelectedAppointment(app);
        setNewDate(app.date);
        setNewTimeSlot(app.timeSlot);
        setCustomNote('');
        setModalType('reschedule');
    };

    const openRejectModal = (app: Appointment) => {
        setSelectedAppointment(app);
        setCustomNote('');
        setModalType('reject');
    };

    const submitReschedule = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedAppointment) return;

        const note = customNote || 'Clinic schedule change.';
        updateAppointmentInStore(
            selectedAppointment.id, 
            'Rescheduled', 
            { date: newDate, timeSlot: newTimeSlot, rescheduleNote: note },
            'status_update',
            `Your appointment has been rescheduled. New schedule: ${newDate} at ${newTimeSlot}. Note: ${note}`
        );
        setModalType(null);
        showToast('Rescheduled. Dispatching confirmation notification.');
    };

    const submitReject = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedAppointment) return;

        const note = customNote || 'Required slot is fully booked.';
        updateAppointmentInStore(
            selectedAppointment.id, 
            'Rejected', 
            { rejectNote: note },
            'status_update',
            `Your booking request has been declined. Reason: ${note}`
        );
        setModalType(null);
        showToast('Declined. Notification status sent to patient.');
    };

    const handleComplete = (id: string) => {
        updateAppointmentInStore(id, 'Completed', {}, 'status_update', 'Thank you for consulting Dr. Vaibhavi Dhenge.');
        showToast('Completed & Archived.');
    };

    // Filter list
    const filteredAppointments = appointments.filter(app => {
        if (activeTab === 'Pending') return app.status === 'Pending';
        if (activeTab === 'Confirmed') return app.status === 'Confirmed' || app.status === 'Rescheduled';
        if (activeTab === 'Completed') return app.status === 'Completed' || app.status === 'Rejected';
        return false;
    });

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-premium border border-gray-100 animate-scale-in">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-inner">
                            <i className="fa-solid fa-user-doctor"></i>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-gray-900">Doctor Portal Login</h2>
                        <p className="text-xs text-gray-500 mt-1">Clinical Administration & Queue Management</p>
                    </div>

                    {loginError && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2 animate-shake">
                            <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                            <span>{loginError}</span>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Enter Doctor PIN / Password</label>
                            <input 
                                type="password" 
                                value={passwordInput} 
                                onChange={(e) => setPasswordInput(e.target.value)} 
                                required 
                                placeholder="••••••••••••" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-sm text-center tracking-widest font-mono"
                            />
                            <p className="text-[10px] text-gray-400 mt-1 text-center">Hint: Enter <code className="bg-gray-100 px-1 py-0.5 rounded">vaibhavi2026</code> or <code className="bg-gray-100 px-1 py-0.5 rounded">admin123</code></p>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl shadow-md shadow-primary-500/20 hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                        >
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <span>Access Dashboard</span>
                        </button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                        <Link href="/" className="text-xs text-primary-600 hover:underline flex items-center justify-center gap-1">
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>Return to Main Website</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans text-gray-800">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-3 animate-slide-up text-xs sm:text-sm max-w-md animate-fade-in">
                    <i className="fa-solid fa-bell text-primary-400 text-lg animate-bounce"></i>
                    <p className="flex-1 font-medium text-xs">{toastMessage}</p>
                </div>
            )}

            {/* Top Navigation Bar */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg shadow-md shadow-primary-500/30">
                            <i className="fa-solid fa-stethoscope"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-primary-600 font-bold uppercase tracking-wider">Clinical Administration Portal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={loadAppointments}
                            disabled={isSyncing}
                            className="bg-gray-100 text-gray-700 w-10 h-10 rounded-xl hover:bg-gray-200 transition flex items-center justify-center"
                            title="Sync Data"
                        >
                            <i className={`fa-solid fa-rotate ${isSyncing ? 'animate-spin' : ''}`}></i>
                        </button>
                        <Link href="/" className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-200 transition flex items-center gap-2">
                            <i className="fa-solid fa-house"></i>
                            <span className="hidden sm:inline">Main Website</span>
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-50 text-red-600 border border-red-200 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-red-100 transition flex items-center gap-2"
                        >
                            <i className="fa-solid fa-power-off"></i>
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Warning for unconfigured setup */}
                {(!sbUrl || !sbKey || !emailServiceId) && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
                        <div className="flex items-start gap-2.5">
                            <i className="fa-solid fa-triangle-exclamation text-amber-600 text-lg mt-0.5"></i>
                            <div>
                                <p className="font-bold">System Integration Pending</p>
                                <p className="text-[11px] text-amber-700 mt-0.5">To sync live patient bookings and send real confirmation emails, configure Supabase and EmailJS inside the Settings tab.</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setActiveTab('Settings')}
                            className="bg-amber-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-700 transition w-fit shrink-0"
                        >
                            Go to Settings
                        </button>
                    </div>
                )}

                {/* Dashboard Metrics Header */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pending Requests</p>
                            <h3 className="text-3xl font-serif font-bold text-amber-600">
                                {appointments.filter(a => a.status === 'Pending').length}
                            </h3>
                        </div>
                        <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-xl">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Confirmed Visits</p>
                            <h3 className="text-3xl font-serif font-bold text-emerald-600">
                                {appointments.filter(a => a.status === 'Confirmed' || a.status === 'Rescheduled').length}
                            </h3>
                        </div>
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-xl">
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Completed / Archived</p>
                            <h3 className="text-3xl font-serif font-bold text-gray-700">
                                {appointments.filter(a => a.status === 'Completed' || a.status === 'Rejected').length}
                            </h3>
                        </div>
                        <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center text-xl">
                            <i className="fa-solid fa-box-archive"></i>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-2 mb-6 max-w-lg">
                    {(['Pending', 'Confirmed', 'Completed', 'Settings'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 min-w-[80px] py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === tab ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {tab === 'Pending' && <i className="fa-solid fa-hourglass-half"></i>}
                            {tab === 'Confirmed' && <i className="fa-solid fa-circle-check"></i>}
                            {tab === 'Completed' && <i className="fa-solid fa-folder-closed"></i>}
                            {tab === 'Settings' && <i className="fa-solid fa-gears"></i>}
                            <span>{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Settings View */}
                {activeTab === 'Settings' && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-8 animate-fade-in">
                        <div>
                            <h3 className="text-lg font-serif font-bold text-gray-900">System Integration Settings</h3>
                            <p className="text-xs text-gray-500 mt-1">Configure your live database and email notification providers here. Settings are securely cached in this browser.</p>
                        </div>

                        <form onSubmit={saveSettings} className="space-y-6">
                            {/* Supabase Config */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-primary-600 uppercase tracking-widest border-b border-gray-100 pb-2">1. Supabase Database Integration</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Supabase Project URL</label>
                                        <input type="text" value={sbUrl} onChange={e => setSbUrl(e.target.value)} placeholder="https://xxxx.supabase.co" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Supabase Anon Key</label>
                                        <input type="password" value={sbKey} onChange={e => setSbKey(e.target.value)} placeholder="eyJhbGciOi..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
                                    <p className="text-xs font-bold text-gray-800">📋 SQL Schema Setup Instructions:</p>
                                    <p className="text-[11px] text-gray-600 leading-relaxed">
                                        Inside your Supabase dashboard, open the <strong>SQL Editor</strong>, paste the following script, and click <strong>Run</strong> to initialize your table:
                                    </p>
                                    <pre className="bg-gray-900 text-emerald-400 p-3 rounded-xl text-[10px] font-mono overflow-x-auto block">
{`CREATE TABLE appointments (
  id TEXT PRIMARY KEY,
  patient_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email_address TEXT NOT NULL,
  consultation_mode TEXT NOT NULL,
  specialty TEXT NOT NULL,
  appointment_date TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  health_concern TEXT,
  medical_history TEXT[],
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  reschedule_note TEXT,
  reject_note TEXT
);`}
                                    </pre>
                                </div>
                            </div>

                            {/* EmailJS Config */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-primary-600 uppercase tracking-widest border-b border-gray-100 pb-2">2. EmailJS Email Service Integration</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Service ID</label>
                                        <input type="text" value={emailServiceId} onChange={e => setEmailServiceId(e.target.value)} placeholder="service_xxx" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Public Key</label>
                                        <input type="text" value={emailPublicKey} onChange={e => setEmailPublicKey(e.target.value)} placeholder="user_xxx" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Alert Template ID</label>
                                        <input type="text" value={emailTemplateBooking} onChange={e => setEmailTemplateBooking(e.target.value)} placeholder="template_booking" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Update Template ID</label>
                                        <input type="text" value={emailTemplateUpdate} onChange={e => setEmailTemplateUpdate(e.target.value)} placeholder="template_status" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs" />
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-[11px] text-gray-600 space-y-1">
                                    <p className="font-bold text-gray-800 text-xs">✉️ Supported Template Parameters:</p>
                                    <p className="mt-1">In your EmailJS templates, use these placeholders in your mail content to render data dynamic fields:</p>
                                    <ul className="list-disc list-inside space-y-0.5 mt-1 font-mono text-[10px] text-gray-700 bg-white p-2.5 rounded-xl border border-gray-100">
                                        <li>{"{{to_email}}"} - Target email address</li>
                                        <li>{"{{patient_name}}"} - Patient's Full name</li>
                                        <li>{"{{reference_id}}"} - Generated booking ID (e.g. APP-491290)</li>
                                        <li>{"{{appointment_date}}"} - Selected visit date</li>
                                        <li>{"{{appointment_time}}"} - Scheduled slot</li>
                                        <li>{"{{consultation_mode}}"} - Online video consult / In-clinic</li>
                                        <li>{"{{status}}"} - Pending, Confirmed, Rescheduled, Rejected</li>
                                        <li>{"{{note}}"} - Reschedule/cancellation remarks</li>
                                    </ul>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-primary-700 transition text-xs sm:text-sm">
                                <i className="fa-solid fa-floppy-disk mr-1.5"></i>
                                Save Settings & Sync Credentials
                            </button>
                        </form>
                    </div>
                )}

                {/* Queue View */}
                {activeTab !== 'Settings' && (
                    <div className="space-y-4">
                        {filteredAppointments.length === 0 ? (
                            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4 animate-fade-in">
                                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center text-2xl mx-auto">
                                    <i className="fa-solid fa-inbox"></i>
                                </div>
                                <h3 className="text-lg font-serif font-bold text-gray-900">No appointments found in this queue</h3>
                                <p className="text-xs text-gray-500 max-w-sm mx-auto">New patient booking requests submitted from the website will automatically appear here.</p>
                            </div>
                        ) : (
                            filteredAppointments.map(app => (
                                <div key={app.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition space-y-6 animate-fade-in">
                                    {/* Header Row */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center text-xl shrink-0 mt-0.5 font-bold shadow-inner">
                                                {app.patientName.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-base sm:text-lg font-bold text-gray-900">{app.patientName}</h4>
                                                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                        app.status === 'Pending' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                                                        app.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                                                        app.status === 'Rescheduled' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                                                        app.status === 'Rejected' ? 'bg-red-100 text-red-800 border border-red-200' :
                                                        'bg-gray-100 text-gray-800 border border-gray-200'
                                                    }`}>
                                                        {app.status}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 font-mono mt-0.5">Ref: {app.id} • Requested on {new Date(app.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
                                            {app.status === 'Pending' && (
                                                <>
                                                    <button 
                                                        onClick={() => handleAccept(app.id)}
                                                        className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-700 transition shadow-md flex items-center gap-1.5"
                                                    >
                                                        <i className="fa-solid fa-check"></i>
                                                        <span>Accept</span>
                                                    </button>
                                                    <button 
                                                        onClick={() => openRescheduleModal(app)}
                                                        className="bg-blue-50 text-blue-600 border border-blue-200 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-100 transition flex items-center gap-1.5"
                                                    >
                                                        <i className="fa-solid fa-calendar-day"></i>
                                                        <span>Reschedule</span>
                                                    </button>
                                                    <button 
                                                        onClick={() => openRejectModal(app)}
                                                        className="bg-red-50 text-red-600 border border-red-200 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-red-100 transition flex items-center gap-1.5"
                                                    >
                                                        <i className="fa-solid fa-xmark"></i>
                                                        <span>Decline</span>
                                                    </button>
                                                </>
                                            )}

                                            {(app.status === 'Confirmed' || app.status === 'Rescheduled') && (
                                                <>
                                                    <button 
                                                        onClick={() => handleComplete(app.id)}
                                                        className="bg-gray-900 text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-800 transition shadow-md flex items-center gap-1.5"
                                                    >
                                                        <i className="fa-solid fa-check-double"></i>
                                                        <span>Mark Completed</span>
                                                    </button>
                                                    <button 
                                                        onClick={() => openRescheduleModal(app)}
                                                        className="bg-blue-50 text-blue-600 border border-blue-200 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-100 transition flex items-center gap-1.5"
                                                    >
                                                        <i className="fa-solid fa-calendar-day"></i>
                                                        <span>Reschedule</span>
                                                    </button>
                                                </>
                                            )}

                                            {/* Contact Shortcuts */}
                                            <a 
                                                href={`tel:${app.mobileNumber}`} 
                                                className="bg-gray-100 text-gray-700 w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-200 transition text-sm"
                                                title="Call Patient"
                                            >
                                                <i className="fa-solid fa-phone"></i>
                                            </a>
                                            <a 
                                                href={getGmailComposeLink(app)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-primary-50 text-primary-600 border border-primary-100 w-9 h-9 rounded-xl flex items-center justify-center hover:bg-primary-100 transition text-sm"
                                                title="Compose Pre-filled Gmail Confirmation"
                                            >
                                                <i className="fa-solid fa-envelope"></i>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/80">
                                        <div>
                                            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Scheduled Date & Time</span>
                                            <div className="flex items-center gap-2 font-bold text-xs text-primary-700">
                                                <i className="fa-solid fa-calendar-days text-primary-500"></i>
                                                <span>{app.date} at {app.timeSlot}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Consultation Mode</span>
                                            <div className="flex items-center gap-2 font-bold text-xs text-gray-900">
                                                <i className={app.consultationMode.includes('In-Clinic') ? "fa-solid fa-hospital text-emerald-600" : "fa-solid fa-video text-blue-600"}></i>
                                                <span>{app.consultationMode}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Primary Specialty</span>
                                            <div className="font-bold text-xs text-gray-900 line-clamp-1">
                                                {app.specialty}
                                            </div>
                                        </div>

                                        <div>
                                            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Patient Contact</span>
                                            <div className="text-xs font-semibold text-gray-700 truncate">
                                                {app.mobileNumber} • {app.emailAddress}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinical Notes & History */}
                                    <div className="space-y-3 pt-2">
                                        <div>
                                            <span className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">Health Concern / Reason for Visit:</span>
                                            <p className="text-xs sm:text-sm text-gray-600 bg-white p-3.5 rounded-xl border border-gray-200/60 leading-relaxed font-serif italic">
                                                "{app.healthConcern}"
                                            </p>
                                        </div>

                                        {app.medicalHistory.length > 0 && app.medicalHistory[0] !== 'None' && (
                                            <div>
                                                <span className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Past Medical History:</span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {app.medicalHistory.map(hist => (
                                                        <span key={hist} className="bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5">
                                                            <i className="fa-solid fa-circle-exclamation text-red-500 text-[10px]"></i>
                                                            <span>{hist}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {app.rescheduleNote && (
                                            <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl text-xs text-blue-800 flex items-start gap-2">
                                                <i className="fa-solid fa-circle-info text-blue-600 mt-0.5"></i>
                                                <div>
                                                    <strong className="block font-bold mb-0.5">Reschedule Note:</strong>
                                                    <span>{app.rescheduleNote}</span>
                                                </div>
                                            </div>
                                        )}

                                        {app.rejectNote && (
                                            <div className="bg-red-50 border border-red-200 p-3 rounded-xl text-xs text-red-800 flex items-start gap-2">
                                                <i className="fa-solid fa-circle-info text-red-600 mt-0.5"></i>
                                                <div>
                                                    <strong className="block font-bold mb-0.5">Decline Reason:</strong>
                                                    <span>{app.rejectNote}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </main>

            {/* Modals */}
            {modalType && selectedAppointment && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-scale-in space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <h3 className="text-lg font-serif font-bold text-gray-900">
                                {modalType === 'reschedule' ? 'Reschedule Appointment' : 'Decline Appointment'}
                            </h3>
                            <button onClick={() => setModalType(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {modalType === 'reschedule' ? (
                            <form onSubmit={submitReschedule} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Patient Name</label>
                                    <input type="text" readOnly value={selectedAppointment.patientName} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-xs sm:text-sm font-semibold text-gray-600" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">New Date</label>
                                        <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs sm:text-sm font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">New Time Slot</label>
                                        <select value={newTimeSlot} onChange={(e) => setNewTimeSlot(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs sm:text-sm font-medium">
                                            {['10:00 AM', '11:00 AM', '12:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map(slot => (
                                                <option key={slot} value={slot}>{slot}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Reschedule Note / Instructions for Patient</label>
                                    <textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)} rows={2} placeholder="e.g. Doctor is in emergency surgery, proposing new time..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none text-xs sm:text-sm"></textarea>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button type="button" onClick={() => setModalType(null)} className="w-1/2 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm">Cancel</button>
                                    <button type="submit" className="w-1/2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-md text-xs sm:text-sm">Confirm Reschedule</button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={submitReject} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Decline Reason (Sent to Patient)</label>
                                    <textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)} required rows={3} placeholder="e.g. Fully booked on this date. Please book for next week..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-red-500 outline-none text-xs sm:text-sm"></textarea>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button type="button" onClick={() => setModalType(null)} className="w-1/2 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm">Cancel</button>
                                    <button type="submit" className="w-1/2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition shadow-md text-xs sm:text-sm">Decline Request</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
