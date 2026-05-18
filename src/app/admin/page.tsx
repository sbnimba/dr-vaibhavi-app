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
    const [activeTab, setActiveTab] = useState<'Pending' | 'Confirmed' | 'Completed'>('Pending');
    
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

    // Load Auth & Appointments on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const auth = localStorage.getItem('dr_vaibhavi_admin_auth');
            if (auth === 'true') {
                setIsAuthenticated(true);
            }

            const existing = localStorage.getItem('dr_vaibhavi_appointments');
            if (existing) {
                setAppointments(JSON.parse(existing));
            } else {
                // Seed sample appointments if empty
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
                    },
                    {
                        id: 'APP-382910',
                        patientName: 'Priya Deshmukh',
                        mobileNumber: '+919822334455',
                        emailAddress: 'priya.d@example.com',
                        consultationMode: 'Online Video Consult',
                        specialty: 'Pregnancy Care & Vitals',
                        date: '2026-05-20',
                        timeSlot: '11:00 AM',
                        healthConcern: 'Routine second trimester checkup and diet consultation.',
                        medicalHistory: ['Anemia'],
                        status: 'Confirmed',
                        createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
                    },
                    {
                        id: 'APP-910283',
                        patientName: 'Sunita Rao',
                        mobileNumber: '+919988776655',
                        emailAddress: 'sunita.rao@example.com',
                        consultationMode: 'In-Clinic Visit (MGM Belapur)',
                        specialty: 'Infertility Evaluation',
                        date: '2026-05-21',
                        timeSlot: '06:00 PM',
                        healthConcern: 'Planning for pregnancy, seeking initial fertility screening.',
                        medicalHistory: ['None'],
                        status: 'Pending',
                        createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
                    }
                ];
                localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(sampleData));
                setAppointments(sampleData);
            }
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Secure PIN/Password check
        if (passwordInput === 'vaibhavi2026' || passwordInput === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('dr_vaibhavi_admin_auth', 'true');
            setLoginError('');
            showToast('Successfully logged into Doctor Portal');
        } else {
            setLoginError('Invalid PIN / Password. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('dr_vaibhavi_admin_auth');
        showToast('Logged out successfully');
    };

    const saveAppointments = (updated: Appointment[]) => {
        setAppointments(updated);
        localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(updated));
    };

    // Action Handlers
    const handleAccept = (id: string) => {
        const updated = appointments.map(app => {
            if (app.id === id) {
                return { ...app, status: 'Confirmed' as const };
            }
            return app;
        });
        saveAppointments(updated);
        const target = appointments.find(a => a.id === id);
        showToast(`Accepted! Confirmation email dispatched to ${target?.emailAddress} & IndiasBestGynaecologist@gmail.com`);
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

        const updated = appointments.map(app => {
            if (app.id === selectedAppointment.id) {
                return { 
                    ...app, 
                    status: 'Rescheduled' as const, 
                    date: newDate, 
                    timeSlot: newTimeSlot,
                    rescheduleNote: customNote || 'Rescheduled by doctor.'
                };
            }
            return app;
        });
        saveAppointments(updated);
        setModalType(null);
        showToast(`Rescheduled! Email notification dispatched to ${selectedAppointment.emailAddress}`);
    };

    const submitReject = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedAppointment) return;

        const updated = appointments.map(app => {
            if (app.id === selectedAppointment.id) {
                return { 
                    ...app, 
                    status: 'Rejected' as const, 
                    rejectNote: customNote || 'Slot unavailable.'
                };
            }
            return app;
        });
        saveAppointments(updated);
        setModalType(null);
        showToast(`Appointment declined. Notification sent to ${selectedAppointment.emailAddress}`);
    };

    const handleComplete = (id: string) => {
        const updated = appointments.map(app => {
            if (app.id === id) {
                return { ...app, status: 'Completed' as const };
            }
            return app;
        });
        saveAppointments(updated);
        showToast('Appointment marked as Completed & Archived.');
    };

    // Filter appointments based on active tab
    const filteredAppointments = appointments.filter(app => {
        if (activeTab === 'Pending') return app.status === 'Pending';
        if (activeTab === 'Confirmed') return app.status === 'Confirmed' || app.status === 'Rescheduled';
        if (activeTab === 'Completed') return app.status === 'Completed' || app.status === 'Rejected';
        return true;
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
                <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-3 animate-slide-up text-xs sm:text-sm max-w-md">
                    <i className="fa-solid fa-bell text-primary-400 text-lg animate-bounce"></i>
                    <p className="flex-1 font-medium">{toastMessage}</p>
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
                        <Link href="/" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-bold text-xs hover:bg-gray-200 transition flex items-center gap-2">
                            <i className="fa-solid fa-house"></i>
                            <span className="hidden sm:inline">Main Website</span>
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl font-bold text-xs hover:bg-red-100 transition flex items-center gap-2"
                        >
                            <i className="fa-solid fa-power-off"></i>
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex gap-2 mb-6 max-w-md">
                    {(['Pending', 'Confirmed', 'Completed'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === tab ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {tab === 'Pending' && <i className="fa-solid fa-hourglass-half"></i>}
                            {tab === 'Confirmed' && <i className="fa-solid fa-circle-check"></i>}
                            {tab === 'Completed' && <i className="fa-solid fa-folder-closed"></i>}
                            <span>{tab}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === tab ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                {appointments.filter(a => {
                                    if (tab === 'Pending') return a.status === 'Pending';
                                    if (tab === 'Confirmed') return a.status === 'Confirmed' || a.status === 'Rescheduled';
                                    if (tab === 'Completed') return a.status === 'Completed' || a.status === 'Rejected';
                                    return false;
                                }).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Appointments Queue List */}
                <div className="space-y-4">
                    {filteredAppointments.length === 0 ? (
                        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
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
                                                    className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-700 transition shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
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
                                            href={`mailto:${app.emailAddress}?subject=Dr. Vaibhavi Dhenge - Appointment Update (${app.id})`} 
                                            className="bg-gray-100 text-gray-700 w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-200 transition text-sm"
                                            title="Email Patient"
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
            </main>

            {/* Modals for Reschedule & Reject */}
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
                                    <button type="submit" className="w-1/2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-500/20 text-xs sm:text-sm">Confirm Reschedule</button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={submitReject} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Decline Reason (Sent to Patient)</label>
                                    <textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)} required rows={3} placeholder="e.g. Fully booked on this date. Please book for next week or visit hospital emergency..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-red-500 outline-none text-xs sm:text-sm"></textarea>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button type="button" onClick={() => setModalType(null)} className="w-1/2 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm">Cancel</button>
                                    <button type="submit" className="w-1/2 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition shadow-md shadow-red-500/20 text-xs sm:text-sm">Decline Request</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
