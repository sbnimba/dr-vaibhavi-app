"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
    const [authStep, setAuthStep] = useState<'email' | 'otp' | 'authenticated'>('email');
    const [emailInput, setEmailInput] = useState('');
    const [otpInput, setOtpInput] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    
    const [userRole, setUserRole] = useState<'SUPER_ADMIN' | 'COMPOUNDER' | null>(null);
    const [isApproved, setIsApproved] = useState(false);
    const [staffList, setStaffList] = useState<any[]>([]);

    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [activeTab, setActiveTab] = useState<'Pending' | 'Confirmed' | 'Completed' | 'Calendar' | 'Analytics' | 'Staff' | 'Settings'>('Pending');
    const [isSyncing, setIsSyncing] = useState(false);

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
            checkUser();
        }
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            await fetchRoleAndApprove(session.user.id);
        }
    }

    const fetchRoleAndApprove = async (userId: string) => {
        const { data } = await supabase.from('staff_roles').select('*').eq('id', userId).single();
        if (data) {
            setUserRole(data.role);
            setIsApproved(data.is_approved);
            if (data.is_approved) {
                setAuthStep('authenticated');
                loadAppointments();
                if (data.role === 'SUPER_ADMIN') {
                    loadStaff();
                }
            } else {
                setAuthStep('authenticated');
            }
        }
    }

    const loadStaff = async () => {
        const { data } = await supabase.from('staff_roles').select('*').order('created_at', { ascending: false });
        if (data) setStaffList(data);
    }

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
        try {
            const { data, error } = await supabase
                .from('appointments')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            
            if (data && data.length > 0) {
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
            } else {
                setAppointments([]);
            }
        } catch (err) {
            console.error('[Supabase] Fetch failed:', err);
        }
        setIsSyncing(false);
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setLoginMessage('Sending 6-digit code to your email...');
        const { error } = await supabase.auth.signInWithOtp({ email: emailInput });
        if (error) {
            setLoginError(error.message);
            setLoginMessage('');
        } else {
            setLoginMessage('');
            setAuthStep('otp');
            showToast('Secure code sent to your email.');
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setLoginMessage('Verifying code...');
        const { data, error } = await supabase.auth.verifyOtp({ email: emailInput, token: otpInput, type: 'email' });
        if (error) {
            setLoginError(error.message);
            setLoginMessage('');
        } else if (data.user) {
            setLoginMessage('');
            await fetchRoleAndApprove(data.user.id);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setAuthStep('email');
        setUserRole(null);
        setIsApproved(false);
        showToast('Logged out securely');
    };

    const toggleStaffApproval = async (staffId: string, currentStatus: boolean) => {
        const { error } = await supabase.from('staff_roles').update({ is_approved: !currentStatus }).eq('id', staffId);
        if (!error) {
            showToast(currentStatus ? 'Access Revoked' : 'Access Approved');
            loadStaff();
        }
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

        // 2. Sync to Supabase
        const dbUpdates: any = {
            status: status,
        };
        if (extra.date) dbUpdates.appointment_date = extra.date;
        if (extra.timeSlot) dbUpdates.time_slot = extra.timeSlot;
        if (extra.rescheduleNote) dbUpdates.reschedule_note = extra.rescheduleNote;
        if (extra.rejectNote) dbUpdates.reject_note = extra.rejectNote;

        try {
            const { error } = await supabase
                .from('appointments')
                .update(dbUpdates)
                .eq('id', id);
                
            if (error) {
                console.error('[Supabase] Sync patch failed:', error);
            }
        } catch (err) {
            console.error('[Supabase] Sync patch failed:', err);
        }
    };

    const sendEmailAlert = async (app: Appointment, note: string) => {
        try {
            const res = await fetch('/api/admin/send-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: app.id,
                    patientName: app.patientName,
                    emailAddress: app.emailAddress,
                    date: app.date,
                    timeSlot: app.timeSlot,
                    consultationMode: app.consultationMode,
                    specialty: app.specialty,
                    status: app.status,
                    note: note
                })
            });
            const data = await res.json();
            if (!data.success) {
                console.error('[Backend API] Fail to send status update email:', data.message);
            }
        } catch (err) {
            console.error('[Backend API] Fail to send status update email:', err);
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

    if (authStep !== 'authenticated' || !isApproved) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-premium border border-gray-100 animate-scale-in">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-inner">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-gray-900">
                            {authStep === 'authenticated' && !isApproved ? 'Account Pending' : 'Secure Staff Login'}
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            {authStep === 'authenticated' && !isApproved 
                                ? 'Your account is waiting for Super Admin approval.' 
                                : 'Passwordless 2-Factor Authentication'}
                        </p>
                    </div>

                    {loginError && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2 animate-shake">
                            <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                            <span>{loginError}</span>
                        </div>
                    )}
                    
                    {loginMessage && (
                        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-xs flex items-center gap-2">
                            <i className="fa-solid fa-spinner fa-spin text-blue-500"></i>
                            <span>{loginMessage}</span>
                        </div>
                    )}

                    {authStep === 'email' && (
                        <form onSubmit={handleSendOtp} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    value={emailInput} 
                                    onChange={(e) => setEmailInput(e.target.value)} 
                                    required 
                                    placeholder="doctor@example.com" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-sm"
                                />
                            </div>
                            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                                <i className="fa-solid fa-paper-plane"></i> Send Login Code
                            </button>
                        </form>
                    )}

                    {authStep === 'otp' && (
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Enter 6-Digit Code</label>
                                <input 
                                    type="text" 
                                    value={otpInput} 
                                    onChange={(e) => setOtpInput(e.target.value)} 
                                    required 
                                    placeholder="123456" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-2xl text-center tracking-[1em] font-mono"
                                    maxLength={6}
                                />
                            </div>
                            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                                <i className="fa-solid fa-check-circle"></i> Verify & Login
                            </button>
                            <button type="button" onClick={() => setAuthStep('email')} className="w-full text-xs text-gray-500 hover:text-gray-700 py-2">
                                Change Email Address
                            </button>
                        </form>
                    )}
                    
                    {authStep === 'authenticated' && !isApproved && (
                        <div className="space-y-4">
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-sm text-amber-800 text-center">
                                Please ask Dr. Vaibhavi to approve your account from her Super Admin dashboard before you can access patient data.
                            </div>
                            <button onClick={handleLogout} className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm">
                                Logout
                            </button>
                        </div>
                    )}

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
                {/* Simplified setup: using KVDB as primary and manual Gmail draft as fallback. */}

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
                <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-2 mb-6 max-w-4xl">
                    {(['Pending', 'Confirmed', 'Completed', 'Calendar', 'Analytics', ...(userRole === 'SUPER_ADMIN' ? ['Staff'] as const : [])] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 min-w-[100px] py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === tab ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {tab === 'Pending' && <i className="fa-solid fa-hourglass-half"></i>}
                            {tab === 'Confirmed' && <i className="fa-solid fa-circle-check"></i>}
                            {tab === 'Completed' && <i className="fa-solid fa-folder-closed"></i>}
                            {tab === 'Calendar' && <i className="fa-solid fa-calendar-days"></i>}
                            {tab === 'Analytics' && <i className="fa-solid fa-chart-pie"></i>}
                            {tab === 'Staff' && <i className="fa-solid fa-users-gear"></i>}
                            <span>{tab}</span>
                        </button>
                    ))}
                </div>
                
                {/* Staff Management View */}
                {activeTab === 'Staff' && userRole === 'SUPER_ADMIN' && (
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm animate-fade-in">
                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-6">Staff Access Management</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 rounded-tl-xl">Email</th>
                                        <th className="px-6 py-3">Role</th>
                                        <th className="px-6 py-3">Joined</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 rounded-tr-xl text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffList.map(staff => (
                                        <tr key={staff.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{staff.email}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${staff.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                                    {staff.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">{new Date(staff.created_at).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${staff.is_approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                                    {staff.is_approved ? 'Approved' : 'Pending'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {staff.role !== 'SUPER_ADMIN' && (
                                                    <button 
                                                        onClick={() => toggleStaffApproval(staff.id, staff.is_approved)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${staff.is_approved ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}
                                                    >
                                                        {staff.is_approved ? 'Revoke' : 'Approve'}
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {staffList.length === 0 && <p className="text-center py-6 text-gray-500">No staff accounts found.</p>}
                        </div>
                    </div>
                )}

                {/* Calendar View */}
                {activeTab === 'Calendar' && (
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm animate-fade-in overflow-x-auto">
                        <div className="min-w-[800px]">
                            <h3 className="text-lg font-serif font-bold text-gray-900 mb-6">Upcoming Confirmed Schedule</h3>
                            <div className="grid grid-cols-7 gap-4">
                                {['Today', '+1 Day', '+2 Days', '+3 Days', '+4 Days', '+5 Days', '+6 Days'].map(day => (
                                    <div key={day} className="text-center font-bold text-xs text-gray-500 uppercase pb-2 border-b border-gray-100">{day}</div>
                                ))}
                                {/* Generate next 14 days for a quick view */}
                                {Array.from({length: 14}).map((_, i) => {
                                    const d = new Date();
                                    d.setDate(d.getDate() + i);
                                    const dateStr = d.toISOString().split('T')[0];
                                    const dayApps = appointments.filter(a => a.date === dateStr && (a.status === 'Confirmed' || a.status === 'Rescheduled'));
                                    
                                    return (
                                        <div key={dateStr} className="min-h-[120px] border border-gray-100 rounded-xl p-2 bg-gray-50/50">
                                            <div className="text-[10px] font-bold text-gray-400 mb-2">{d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}</div>
                                            <div className="space-y-1.5">
                                                {dayApps.map(app => (
                                                    <div key={app.id} className="bg-emerald-100 text-emerald-800 p-1.5 rounded-lg text-[9px] font-bold leading-tight border border-emerald-200">
                                                        <div className="mb-0.5">{app.timeSlot}</div>
                                                        <div className="truncate">{app.patientName}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Analytics View */}
                {activeTab === 'Analytics' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-serif font-bold text-gray-900 mb-6">Appointment Status Distribution</h3>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie 
                                                data={[
                                                    { name: 'Pending', value: appointments.filter(a => a.status === 'Pending').length, color: '#f59e0b' },
                                                    { name: 'Confirmed', value: appointments.filter(a => a.status === 'Confirmed' || a.status === 'Rescheduled').length, color: '#10b981' },
                                                    { name: 'Completed', value: appointments.filter(a => a.status === 'Completed').length, color: '#6b7280' },
                                                    { name: 'Declined', value: appointments.filter(a => a.status === 'Rejected').length, color: '#ef4444' }
                                                ]} 
                                                dataKey="value" 
                                                nameKey="name" 
                                                cx="50%" 
                                                cy="50%" 
                                                outerRadius={80} 
                                                label
                                            >
                                                {
                                                    [
                                                        { color: '#f59e0b' },
                                                        { color: '#10b981' },
                                                        { color: '#6b7280' },
                                                        { color: '#ef4444' }
                                                    ].map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
                                                }
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-serif font-bold text-gray-900 mb-6">Consultation Modes</h3>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={[
                                            { mode: 'In-Clinic', count: appointments.filter(a => a.consultationMode.includes('In-Clinic')).length },
                                            { mode: 'Online', count: appointments.filter(a => a.consultationMode.includes('Online')).length }
                                        ]}>
                                            <XAxis dataKey="mode" />
                                            <YAxis allowDecimals={false} />
                                            <Tooltip />
                                            <Bar dataKey="count" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Queue View */}
                {['Pending', 'Confirmed', 'Completed'].includes(activeTab) && (
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
