"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AOS from 'aos';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';

const HeroAnimation = dynamic(() => import('@/components/HeroAnimation'), { ssr: false });

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');

    // Restore selected language from cookie on mount
    useEffect(() => {
        const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
        if (match && match[1] && match[1] !== 'en') {
            setCurrentLang(match[1]);
        }
    }, []);

    useEffect(() => {
        // Initialize AOS with mirror and once: false for soft entering/leaving animations
        if (typeof window !== 'undefined') {
            AOS.init({ 
                once: false, 
                mirror: true, 
                duration: 800, 
                easing: 'ease-in-out',
                offset: 50
            });
            
            // Initialize Swiper
            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: { el: '.swiper-pagination', clickable: true },
                autoplay: { delay: 5000 },
                breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
            });
        }
        
        // Sticky Navbar for Window Scroll
        const handleScroll = () => {
            const nav = document.getElementById('navbar');
            if (nav) {
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-md');
                } else {
                    nav.classList.remove('shadow-md');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Handle hash navigation on mount and hash change
        const handleHash = () => {
            if (typeof window !== 'undefined' && window.location.hash) {
                const id = window.location.hash.substring(1);
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHash);
        };
    }, []);

    // Appointment Booking State
    const [bookingStep, setBookingStep] = useState(1);
    const [selectedMode, setSelectedMode] = useState('In-Clinic Visit (MGM Belapur)');
    const [selectedSpecialty, setSelectedSpecialty] = useState('Pregnancy Care');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [patientName, setPatientName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [healthConcern, setHealthConcern] = useState('');
    const [medicalConditions, setMedicalConditions] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookedAppointment, setBookedAppointment] = useState<any>(null);

    const toggleCondition = (condition: string) => {
        if (medicalConditions.includes(condition)) {
            setMedicalConditions(medicalConditions.filter(c => c !== condition));
        } else {
            setMedicalConditions([...medicalConditions, condition]);
        }
    };

    const handleNextStep = (e: React.MouseEvent) => {
        e.preventDefault();
        if (bookingStep === 2 && (!selectedDate || !selectedTimeSlot)) {
            alert('Please select both a preferred date and time slot.');
            return;
        }
        setBookingStep(prev => prev + 1);
    };

    const handlePrevStep = (e: React.MouseEvent) => {
        e.preventDefault();
        setBookingStep(prev => prev - 1);
    };

    // Security XOR helper functions for encrypting private patient data
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

    // Helper for sending real emails using FormSubmit (zero-config) & EmailJS
    const sendEmailAlert = async (type: 'new_booking' | 'status_update', data: any) => {
        if (typeof window === 'undefined') return false;

        // 1. Send new booking alert to Doctor via Web3Forms using the user's Access Key
        if (type === 'new_booking') {
            let gcalLink = '';
            let gcalUrl = '';
            try {
                const [time, modifier] = data.timeSlot.split(' ');
                let [hours, minutes] = time.split(':');
                if (hours === '12') hours = '00';
                if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();
                const start = new Date(`${data.date}T${hours.padStart(2, '0')}:${minutes}:00`);
                const end = new Date(start.getTime() + 15 * 60000); // 15 mins
                const formatGCalDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
                gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Meeting: Dr. Vaibhavi & ${data.patientName}`)}&dates=${formatGCalDate(start)}/${formatGCalDate(end)}&details=${encodeURIComponent(`Patient Phone: ${data.mobileNumber}\nMode: ${data.consultationMode}\nSpecialty: ${data.specialty}\nRef: ${data.id}`)}&add=${encodeURIComponent(data.emailAddress)}`;
                gcalLink = `<div style="margin-top:24px;text-align:center;"><a href="${gcalUrl}" target="_blank" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:15px;font-weight:700;font-family:sans-serif;box-shadow:0 6px 20px rgba(124,58,237,0.35);letter-spacing:0.3px;">✅ Confirm Booking &amp; Schedule 15-Min Meeting</a><p style="margin-top:10px;font-size:11px;color:#888;font-family:sans-serif;">Clicking this will open Google Calendar. Save the event to send a meeting invite to the patient.</p></div>`;
            } catch (e) {
                console.error("GCal Link error", e);
            }

            try {
                await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: "f6628986-b070-413e-9f0d-8191fd9b2bf5",
                        subject: `🩺 New Booking: ${data.patientName} — ${data.date} at ${data.timeSlot}`,
                        from_name: "Dr. Vaibhavi Clinic Booking System",
                        replyto: data.emailAddress,
                        "Reference ID": data.id,
                        "Patient Name": data.patientName,
                        "Mobile Number": data.mobileNumber,
                        "Email Address": data.emailAddress,
                        "Appointment Date": data.date,
                        "Appointment Time": data.timeSlot,
                        "Consultation Mode": data.consultationMode,
                        "Specialty": data.specialty,
                        "Health Concern": data.healthConcern || 'None',
                        "Action Required": "Please confirm this booking by calling the patient.",
                        "Google Calendar Link": gcalUrl
                    })
                });
                console.log('[Web3Forms] Booking notification sent to doctor.');
            } catch (err) {
                console.error('[Web3Forms] Booking notification failed:', err);
            }
        }

        return true;
    };

    const handleAppointmentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const refId = 'APP-' + Math.floor(100000 + Math.random() * 900000);
        const newAppointment = {
            id: refId,
            patientName,
            mobileNumber,
            emailAddress,
            consultationMode: selectedMode,
            specialty: selectedSpecialty,
            date: selectedDate,
            timeSlot: selectedTimeSlot,
            healthConcern: healthConcern || 'None',
            medicalHistory: medicalConditions,
            status: 'Pending',
            createdAt: new Date().toISOString()
        };

        // Automatic Zero-Config KVDB Cloud Database Sync (Encrypted for Privacy)
        let currentList = [];
        try {
            const response = await fetch('https://kvdb.io/vaibhavi_clinic_db_ad9aee2/appointments');
            if (response.ok) {
                const encryptedText = await response.text();
                if (encryptedText) {
                    const decryptedText = decryptData(encryptedText);
                    if (decryptedText) {
                        currentList = JSON.parse(decryptedText);
                    }
                }
            }
        } catch (err) {
            console.error('[KVDB] Fetch current list failed. Falling back to local storage.', err);
            if (typeof window !== 'undefined') {
                const cached = localStorage.getItem('dr_vaibhavi_appointments');
                if (cached) currentList = JSON.parse(cached);
            }
        }

        // Add the new appointment at the top
        currentList.unshift(newAppointment);

        // Upload encrypted list back to cloud
        try {
            const encryptedPayload = encryptData(JSON.stringify(currentList));
            await fetch('https://kvdb.io/vaibhavi_clinic_db_ad9aee2/appointments', {
                method: 'POST',
                body: encryptedPayload
            });
            console.log('[KVDB] Synced successfully.');
        } catch (err) {
            console.error('[KVDB] Upload failed:', err);
        }

        // Try syncing with Supabase as secondary database if configured
        if (typeof window !== 'undefined') {
            const sbUrl = localStorage.getItem('dr_vaibhavi_supabase_url');
            const sbKey = localStorage.getItem('dr_vaibhavi_supabase_key');
            
            if (sbUrl && sbKey) {
                try {
                    await fetch(`${sbUrl}/rest/v1/appointments`, {
                        method: 'POST',
                        headers: {
                            'apikey': sbKey,
                            'Authorization': `Bearer ${sbKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: refId,
                            patient_name: patientName,
                            mobile_number: mobileNumber,
                            email_address: emailAddress,
                            consultation_mode: selectedMode,
                            specialty: selectedSpecialty,
                            appointment_date: selectedDate,
                            time_slot: selectedTimeSlot,
                            health_concern: healthConcern || 'None',
                            medical_history: medicalConditions,
                            status: 'Pending',
                            created_at: new Date().toISOString()
                        })
                    });
                } catch (err) {
                    console.error('[Supabase] Insert failed:', err);
                }
            }
        }

        // Always save to localStorage as backup/cache
        if (typeof window !== 'undefined') {
            localStorage.setItem('dr_vaibhavi_appointments', JSON.stringify(currentList));
        }

        // Trigger email notification
        await sendEmailAlert('new_booking', newAppointment);

        // Silent WhatsApp notification to Dr. Vaibhavi
        try {
            const waMsg = encodeURIComponent(
                `🩺 *New Appointment Booking!*\n\n` +
                `*Patient:* ${patientName}\n` +
                `*Mobile:* ${mobileNumber}\n` +
                `*Date:* ${selectedDate}\n` +
                `*Time:* ${selectedTimeSlot}\n` +
                `*Mode:* ${selectedMode}\n` +
                `*Ref ID:* ${refId}\n\n` +
                `Please reply to confirm the appointment.`
            );
            window.open(`https://wa.me/919284880359?text=${waMsg}`, '_blank');
        } catch (err) {
            console.error('[WhatsApp] Notification failed:', err);
        }

        setBookedAppointment(newAppointment);
        setIsSubmitting(false);
        setBookingSuccess(true);
    };

    const resetBooking = () => {
        setBookingStep(1);
        setSelectedDate('');
        setSelectedTimeSlot('');
        setPatientName('');
        setMobileNumber('');
        setEmailAddress('');
        setHealthConcern('');
        setMedicalConditions([]);
        setBookingSuccess(false);
        setBookedAppointment(null);
    };

    const changeLanguage = (langCode: string) => {
        setCurrentLang(langCode);
        
        // Cookie-based approach: the most reliable way to control Google Translate
        // Set the googtrans cookie on root domain + path, then reload
        const setCookie = (value: string) => {
            // Set on current domain
            document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`;
            // Also set without domain (fallback)
            document.cookie = `googtrans=${value}; path=/`;
        };

        if (langCode === 'en') {
            // Clear the cookie to go back to English
            setCookie('/en/en');
        } else {
            setCookie(`/en/${langCode}`);
        }
        
        // Reload the page so Google Translate picks up the new cookie
        window.location.reload();
    };

    return (
        <main className="w-full bg-white" id="main-snap-container">
            
    {/* Google Translate Hook — hidden via CSS in layout.tsx */}
    <div id="google_translate_element" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden'}}></div>

    {/*  Header / Navbar  */}
    <header className="fixed w-full top-0 z-50 glass-header transition-all duration-300 py-3" id="navbar">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            {/*  Logo  */}
            <a href="#home" className="flex items-center gap-2 xl:gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <i className="fa-solid fa-spa"></i>
                </div>
                <div className="shrink-0">
                    <h1 className="text-lg xl:text-xl font-serif font-bold text-gray-900 tracking-wide whitespace-nowrap">Dr. Vaibhavi Dhenge</h1>
                    <p className="text-[10px] xl:text-xs text-primary-600 font-bold tracking-widest whitespace-nowrap">Consultant Obstetrician & Gynecologist</p>
                </div>
            </a>

            {/*  Desktop Nav  */}
            <nav className="hidden lg:flex flex-1 items-center justify-between ml-6 xl:ml-10">
                {/* 1. HOME */}
                <a href="#home" className="text-[11px] xl:text-xs font-bold text-primary-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">HOME</a>

                {/* 2. ABOUT */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        ABOUT <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:grid transition-all duration-300 z-50 min-w-[500px] grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Doctor Profile</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-user-md text-primary-400 mr-2 w-4"></i> About Doctor</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mt-6 mb-3 border-b pb-1">Philosophy</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#mission-vision" className="hover:text-primary-600 transition block"><i className="fa-solid fa-hand-holding-heart text-primary-400 mr-2 w-4"></i> Mission, Vision & Values</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Media & Recognition</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#community" className="hover:text-primary-600 transition block"><i className="fa-solid fa-newspaper text-primary-400 mr-2 w-4"></i> Community & Health Tips</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. SERVICES (Mega Menu) */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        SERVICES <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Mega Dropdown */}
                    <div className="absolute top-full -left-32 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-100 hidden group-hover:grid transition-all duration-300 z-50 min-w-[750px] grid-cols-3 gap-8 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-person-pregnant text-sm"></i> Pregnancy Care
                            </h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600 mb-6">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Normal Pregnancy Care</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">High-Risk Pregnancy</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">ANC Checkups</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Nutrition Guidance</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Pregnancy Scans</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-baby-carriage text-sm"></i> Fertility
                            </h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Infertility Consultation</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Ovulation Guidance</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">PCOS-related Fertility</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">IUI / IVF Guidance</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-dna text-sm"></i> Gynecology
                            </h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600 mb-6">
                                <li><a href="#services" className="hover:text-primary-600 transition block">PCOS / PCOD Treatment</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Irregular Periods</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Fibroids & Ovarian Cysts</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Menopause Care</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">White Discharge & Infection</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Hormonal Issues</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-user-nurse text-sm"></i> Delivery & Surgery
                            </h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600 mb-6">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Normal Delivery</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Painless Delivery</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">C-Section</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Laparoscopy</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Hysterectomy</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-shield-halved text-sm"></i> Women Wellness
                            </h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Adolescent Health</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Vaccination (HPV)</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Preventive Checkups</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Sexual Wellness</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. CLINIC */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        CLINIC <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[220px] animate-fade-in">
                        <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Visit Us</h4>
                        <ul className="space-y-3 text-xs font-medium text-gray-600">
                            <li><a href="https://share.google/rIHIKWL49PnG4VcCd" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition flex items-center gap-2"><i className="fa-solid fa-location-dot text-primary-400 w-4"></i> MGM Belapur Location <i className="fa-solid fa-arrow-up-right-from-square text-[9px] text-gray-400 ml-auto"></i></a></li>
                            <li><a href="#appointment" className="hover:text-primary-600 transition flex items-center gap-2"><i className="fa-solid fa-laptop-medical text-primary-400 w-4"></i> Virtual Consultation</a></li>
                        </ul>
                    </div>
                </div>

                {/* 5. RESOURCES */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        RESOURCES <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[240px] animate-fade-in">
                        <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Knowledge</h4>
                        <ul className="space-y-3 text-xs font-medium text-gray-600">
                            <li><a href="#community" className="hover:text-primary-600 transition flex items-center gap-2"><i className="fa-solid fa-book-open text-primary-400 w-4"></i> Blog & Articles</a></li>
                            <li><a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="hover:text-primary-600 transition flex items-center gap-2"><i className="fa-brands fa-youtube text-primary-400 w-4"></i> Educational Videos</a></li>
                            <li><Link href="/pregnancy-calculator" className="hover:text-primary-600 transition flex items-center gap-2"><i className="fa-solid fa-calculator text-primary-400 w-4"></i> Pregnancy Due Date Calculator</Link></li>
                        </ul>
                    </div>
                </div>

                {/* 6. TESTIMONIALS */}
                <a href="#testimonials" className="text-[11px] xl:text-xs font-bold text-gray-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">TESTIMONIALS</a>

                {/* 7. CONTACT US */}
                <a href="#appointment" className="text-[11px] xl:text-xs font-bold text-gray-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">CONTACT US</a>
                
                {/*  Language Toggle — very subtle pink outline  */}
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-pink-100 hover:border-pink-300 transition-colors duration-200 cursor-pointer shrink-0 whitespace-nowrap">
                    <i className="fa-solid fa-language text-primary-500 text-xs"></i>
                    <select id="lang-select" value={currentLang} onChange={(e) => changeLanguage(e.target.value)} className="bg-transparent text-[11px] xl:text-xs font-bold text-primary-700 outline-none cursor-pointer appearance-none pr-1">
                        <option value="en">English (EN)</option>
                        <option value="hi">हिंदी (HI)</option>
                        <option value="mr">मराठी (MR)</option>
                        <option value="gu">ગુજરાતી (GU)</option>
                        <option value="ta">தமிழ் (TA)</option>
                        <option value="te">తెలుగు (TE)</option>
                        <option value="bn">বাংলা (BN)</option>
                    </select>
                    <i className="fa-solid fa-chevron-down text-[9px] text-primary-400"></i>
                </div>

            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
                {/* Mobile Language Toggle */}
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-gray-100 cursor-pointer shrink-0">
                    <i className="fa-solid fa-language text-primary-500 text-xs"></i>
                    <select value={currentLang} onChange={(e) => changeLanguage(e.target.value)} className="bg-transparent text-[11px] font-bold text-primary-700 outline-none cursor-pointer appearance-none pr-1">
                        <option value="en">EN</option>
                        <option value="hi">HI</option>
                        <option value="mr">MR</option>
                        <option value="gu">GU</option>
                        <option value="ta">TA</option>
                        <option value="te">TE</option>
                        <option value="bn">BN</option>
                    </select>
                </div>
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center hover:bg-primary-100 transition shadow-sm outline-none cursor-pointer"
                    aria-label="Toggle Mobile Menu"
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-lg' : 'fa-bars text-base'}`}></i>
                </button>
            </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-2xl p-6 animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto z-50 flex flex-col gap-4">
                <div className="flex flex-col space-y-4 text-sm font-bold text-gray-800 border-b pb-4 border-gray-100">
                    <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-house text-primary-500 w-5"></i> Home
                    </a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-user-md text-primary-500 w-5"></i> About Doctor
                    </a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-person-pregnant text-primary-500 w-5"></i> Specialties & Services
                    </a>
                    <a href="#mission-vision" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-hand-holding-heart text-primary-500 w-5"></i> Philosophy & Values
                    </a>
                    <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-star text-primary-500 w-5"></i> Patient Stories
                    </a>
                    <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-circle-question text-primary-500 w-5"></i> FAQs
                    </a>
                    <Link href="/pregnancy-calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-calculator text-primary-500 w-5"></i> Pregnancy Calculator
                    </Link>
                    <a href="#community" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 transition flex items-center gap-2 py-1">
                        <i className="fa-solid fa-newspaper text-primary-500 w-5"></i> Health Tips & Blog
                    </a>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                    <a href="#appointment" onClick={() => setMobileMenuOpen(false)} className="w-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white py-3 rounded-full font-bold text-center shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 text-xs">
                        <i className="fa-regular fa-calendar-check text-sm"></i> Book Appointment
                    </a>
                    <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="w-full bg-gray-900 text-white py-3 rounded-full font-bold text-center shadow-md flex items-center justify-center gap-2 text-xs hover:bg-gray-800 transition">
                        <i className="fa-solid fa-user-doctor text-sm"></i> Doctor Portal
                    </Link>
                </div>
            </div>
        )}
    </header>

    {/* ==================== 1ST PAGE: HERO SECTION ==================== */}
    <section id="home" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-6 flex flex-col justify-center relative bg-white">
        {/* Soothing Animated Background */}
        <HeroAnimation />
        {/* Soft static gradient accent blobs (behind canvas) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-peach/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-lavender/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                {/*  Hero Content  */}
                <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="1000">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-primary-100 mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        <span className="text-[11px] font-bold text-primary-700 tracking-wider uppercase">Senior Resident, MGM Belapur</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.15] mb-4 tracking-normal">
                        Where Every Woman Feels <br />
                        <span className="gradient-text">Safe, Heard & Cared</span>
                    </h2>
                    
                    <p className="text-sm sm:text-base text-gray-700 font-sans font-medium italic mb-6 max-w-xl leading-relaxed tracking-wide">
                        Warm, private, and judgment-free women's care — at every stage of life
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <a href="#appointment" className="bg-primary-600 text-white px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-center hover:bg-primary-700 transition shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                                <i className="fa-regular fa-calendar-check"></i> Book Appointment
                            </a>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 sm:pt-0">
                            <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="bg-white text-red-600 border border-red-100 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-premium">
                                <i className="fa-brands fa-youtube text-lg"></i>
                            </a>
                            <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="bg-white text-pink-600 border border-pink-100 w-11 h-11 rounded-full flex items-center justify-center hover:bg-pink-50 transition shadow-premium">
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dr-vaibhavi-dhenge-712642359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="bg-white text-blue-600 border border-blue-100 w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-50 transition shadow-premium">
                                <i className="fa-brands fa-linkedin-in text-lg"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-6">
                        <div>
                            <p className="text-2xl font-serif font-bold text-gray-900">4+</p>
                            <p className="text-xs text-gray-500 font-medium">Years Experience</p>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div>
                            <p className="text-2xl font-serif font-bold text-gray-900">1000+</p>
                            <p className="text-xs text-gray-500 font-medium">Patients Treated</p>
                        </div>
                    </div>

                    {/* Premier Hospitals Strip */}
                    <div className="mt-5">
                        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3 flex items-center gap-1.5">
                            <span className="inline-block w-5 h-px bg-gray-300"></span>
                            Worked at Premier Institutions
                            <span className="inline-block w-5 h-px bg-gray-300"></span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                <span className="text-sm">🏥</span>
                                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">MGM Hospital, Belapur</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                <span className="text-sm">🏥</span>
                                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Kashibai Navale Medical College, Pune</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                <span className="text-sm">🏥</span>
                                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Motherhood Hospital</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                <span className="text-sm">🏥</span>
                                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Vasantrao Deshmukh Govt. Medical College, Yavatmal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Hero Image  */}
                <div className="lg:col-span-5 relative mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-brand-peach blob-shape transform rotate-12 scale-105 opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-6 sm:border-8 border-white bg-white aspect-square max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] xl:max-h-[440px] flex items-center justify-center mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
                        <img src="/dr-vaibhavi-clinic/images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge OBGY" className="w-full h-full object-cover object-center" />
                        
                        {/* Elegant Glassmorphism Floating Nameplate Badge */}
                        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md py-2 px-4 sm:py-2.5 sm:px-6 rounded-2xl shadow-2xl border border-white flex items-center gap-2 sm:gap-3 z-20 w-max">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary-500 animate-pulse shrink-0"></div>
                            <div className="text-left">
                                <p className="text-xs sm:text-base font-bold font-serif text-gray-900 leading-none mb-1">Dr. Vaibhavi Dhenge</p>
                                <p className="text-[9px] sm:text-xs font-bold text-primary-600 tracking-widest leading-none">Consultant Obstetrician & Gynecologist</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* ==================== 2ND PAGE: ABOUT DOCTOR ==================== */}
    <section id="about" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-20 lg:pt-16 pb-8 lg:pb-4 flex flex-col justify-center relative bg-[#FAF9F6] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
            <div className="text-center mb-4" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Get To Know</h2>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">About Us</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div data-aos="fade-up" className="lg:col-span-4 relative order-2 lg:order-1 mx-auto w-full max-w-[280px] lg:max-w-none">
                    <img src="images/doctor-about-perfect.jpg" alt="Dr. Vaibhavi Dhenge OBGY" className="rounded-[2rem] shadow-premium object-cover h-[240px] sm:h-[300px] lg:h-[420px] w-full" />
                </div>
                
                <div className="lg:col-span-8 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
                    <h4 className="text-xl lg:text-2xl font-serif font-bold text-gray-900 mb-0.5">Dr. Vaibhavi Dhenge</h4>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">MBBS, MS (Obstetrics & Gynaecology) | <span className="text-primary-600">Senior Resident, MGM Belapur Hospital</span></p>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 font-sans text-xs sm:text-sm">
                        Dr. Vaibhavi Dhenge is an Obstetrician and Gynecologist with 4+ years of experience across 1,000+ cases — from high-risk pregnancies and complex surgeries to everyday women's health concerns, across premier institutions in Pune and Maharashtra.
                    </p>
                    
                    {/* Awards & Recognition — visual badge grid */}
                    <div className="mb-4">
                        <p className="text-[10px] font-bold tracking-widest text-primary-600 uppercase mb-3 flex items-center gap-1.5">
                            <i className="fa-solid fa-trophy text-yellow-500"></i> Awards & Recognition
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {/* Badge 1 */}
                            <div className="bg-gradient-to-b from-yellow-900/90 to-gray-900 border border-yellow-500/40 rounded-xl p-2.5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                                <div className="text-yellow-400 text-xl mb-1">🏆</div>
                                <div className="text-yellow-400 text-[9px] font-black uppercase tracking-wider leading-tight">National</div>
                                <div className="text-white text-[9px] font-bold leading-tight">Award Winner</div>
                                <div className="text-yellow-500/70 text-[8px] mt-0.5">ACOG · AICOG</div>
                            </div>
                            {/* Badge 2 */}
                            <div className="bg-gradient-to-b from-yellow-900/90 to-gray-900 border border-yellow-500/40 rounded-xl p-2.5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                                <div className="text-yellow-400 text-xl mb-1">🥇</div>
                                <div className="text-yellow-400 text-[9px] font-black uppercase tracking-wider leading-tight">1st Rank</div>
                                <div className="text-white text-[9px] font-bold leading-tight">Research Award</div>
                                <div className="text-yellow-500/70 text-[8px] mt-0.5">MediAce Conference</div>
                            </div>
                            {/* Badge 3 */}
                            <div className="bg-gradient-to-b from-yellow-900/90 to-gray-900 border border-yellow-500/40 rounded-xl p-2.5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                                <div className="text-yellow-400 text-xl mb-1">🎖️</div>
                                <div className="text-yellow-400 text-[9px] font-black uppercase tracking-wider leading-tight">Excellence</div>
                                <div className="text-white text-[9px] font-bold leading-tight">Case Presenter</div>
                                <div className="text-yellow-500/70 text-[8px] mt-0.5">POGS Society</div>
                            </div>
                            {/* Badge 4 */}
                            <div className="bg-gradient-to-b from-yellow-900/90 to-gray-900 border border-yellow-500/40 rounded-xl p-2.5 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                                <div className="text-yellow-400 text-xl mb-1">🌟</div>
                                <div className="text-yellow-400 text-[9px] font-black uppercase tracking-wider leading-tight">1000+ Cases</div>
                                <div className="text-white text-[9px] font-bold leading-tight">Managed</div>
                                <div className="text-yellow-500/70 text-[8px] mt-0.5">4+ Years Exp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Memberships */}
                    <div className="mb-4">
                        <p className="text-[10px] font-bold tracking-widest text-primary-600 uppercase mb-3 flex items-center gap-1.5">
                            <i className="fa-solid fa-certificate text-primary-500"></i> Professional Memberships
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-white border border-primary-100 text-primary-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                                <i className="fa-solid fa-check-circle text-primary-500 text-[10px]"></i> Member · POGS (Pune)
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-white border border-primary-100 text-primary-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                                <i className="fa-solid fa-check-circle text-primary-500 text-[10px]"></i> ACOG Conference
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-white border border-primary-100 text-primary-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                                <i className="fa-solid fa-check-circle text-primary-500 text-[10px]"></i> AICOG Conference
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-white border border-primary-100 text-primary-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                                <i className="fa-solid fa-check-circle text-primary-500 text-[10px]"></i> Mediace Conference
                            </span>
                        </div>
                    </div>
                    
                    <a href="#services" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition text-xs sm:text-sm">
                        Explore Specialties <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 3RD PAGE: MISSION, VISION & VALUES ==================== */}
    <section id="mission-vision" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-6 flex flex-col justify-start relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
            <div className="text-center max-w-3xl mx-auto mb-4" data-aos="fade-up">
                <h2 className="text-[11px] font-bold tracking-widest text-primary-600 uppercase mb-0.5">Our Philosophy</h2>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-1">Mission, Vision & Values</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">The foundational principles that guide our patient care, clinical excellence, and dedication to women's health.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Mission Card */}
                <div className="bg-primary-50/30 p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-primary-100/50 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <div className="w-8 h-8 rounded-xl bg-brand-blush/30 text-primary-600 flex items-center justify-center text-base mb-2">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-1.5">Our Mission</h4>
                        <p className="font-serif italic text-gray-700 text-xs sm:text-sm leading-relaxed">
                            "To be the doctor every woman deserves — one who listens without judgment, understands without rushing, and delivers care that is both medically excellent and deeply human."
                        </p>
                    </div>
                </div>

                {/* Vision Card */}
                <div className="bg-primary-50/30 p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-primary-100/50 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <div className="w-8 h-8 rounded-xl bg-brand-lavender/50 text-purple-600 flex items-center justify-center text-base mb-2">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-1.5">Our Vision</h4>
                        <p className="font-serif italic text-gray-700 text-xs sm:text-sm leading-relaxed">
                            "A world where every woman — regardless of where she comes from — has access to compassionate, expert, and dignified healthcare at every stage of her life."
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-white py-4 px-5 sm:px-8 rounded-3xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div className="text-center mb-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary-600 mb-0.5">Our Commitments</h4>
                    <h5 className="text-lg sm:text-xl font-serif font-bold text-gray-900">Core Values</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center px-3">
                        <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-lg mb-2 shadow-inner">
                            🤝
                        </div>
                        <h6 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-1">Trust</h6>
                        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug max-w-xs">A safe space where no concern is too small and no question goes unheard.</p>
                    </div>
                    <div className="flex flex-col items-center text-center px-3 border-t md:border-t-0 md:border-l md:border-r border-gray-100">
                        <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg mb-2 shadow-inner">
                            ⚕️
                        </div>
                        <h6 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-1">Excellence</h6>
                        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug max-w-xs">Evidence-based, modern care backed by 1,000+ real clinical experiences.</p>
                    </div>
                    <div className="flex flex-col items-center text-center px-3 border-t md:border-t-0 border-gray-100">
                        <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg mb-2 shadow-inner">
                            🌸
                        </div>
                        <h6 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-1">Dignity</h6>
                        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug max-w-xs">Every woman treated with the privacy, respect, and warmth she deserves.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 4TH PAGE: OUR SPECIALTIES ==================== */}
    <section id="services" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-6 flex flex-col justify-center relative bg-[#FAF9F6] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Expert Treatments</h2>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">Our Specialties</h3>
                <p className="text-gray-600 text-xs sm:text-sm">From your first period to menopause and everything in between, we provide holistic care for every phase of your life.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/*  Service Cards  */}
                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
                    <div className="w-10 h-10 rounded-xl bg-brand-blush/30 text-primary-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-person-pregnant"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">Pregnancy Care</h4>
                    <p className="text-[11px] text-gray-600">Complete antenatal and postnatal care focusing on healthy, normal deliveries.</p>
                </div>
                
                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-10 h-10 rounded-xl bg-brand-lavender/50 text-purple-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">High Risk Pregnancy</h4>
                    <p className="text-[11px] text-gray-600">Expert management of gestational diabetes, BP, and multiple pregnancies.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/30 text-teal-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-dna"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">PCOS (PMOS) Treatment</h4>
                    <p className="text-[11px] text-gray-600 mb-2">Holistic medical and lifestyle management for PCOS (now PMOS) and hormonal imbalances.</p>
                    <Link href="/pcos-quiz" className="inline-block mt-1 text-[10px] font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-full transition-colors border border-teal-100">Take PCOS Risk Quiz <i className="fa-solid fa-arrow-right ml-1"></i></Link>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-10 h-10 rounded-xl bg-brand-peach/50 text-orange-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-baby-carriage"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">Infertility Consult</h4>
                    <p className="text-[11px] text-gray-600">Compassionate guidance, evaluation, and treatments for couples trying to conceive.</p>
                </div>
                
                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-droplet"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">Menstrual Disorders</h4>
                    <p className="text-[11px] text-gray-600">Diagnosis and treatment for heavy bleeding, pain, and irregular cycles.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-10 h-10 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">Menopause Care</h4>
                    <p className="text-[11px] text-gray-600">Supportive therapies and management for a smooth menopausal transition.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-user-nurse"></i>
                    </div>
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">C-Section & Delivery</h4>
                    <p className="text-[11px] text-gray-600">Safe, painless normal deliveries and expert caesarean sections.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group flex items-center justify-center text-center" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">View All Services</h4>
                        <a href="#appointment" className="w-8 h-8 mx-auto rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors text-sm">
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 7TH PAGE: COMMUNITY & PREGNANCY TIPS ==================== */}
    <section id="community" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-16 lg:pt-20 pb-4 lg:pb-6 flex flex-col justify-center relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <h2 className="text-[10px] font-bold tracking-widest text-primary-600 uppercase mb-1" data-aos="fade-up">Stay Connected</h2>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2" data-aos="fade-up" data-aos-delay="100">Community & Health Tips</h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 text-xs sm:text-sm">
                    <i className="fa-brands fa-instagram text-base"></i> Follow on Instagram
                </a>
                <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 text-xs sm:text-sm">
                    <i className="fa-brands fa-youtube text-base"></i> Watch on YouTube
                </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-left" data-aos="fade-up" data-aos-delay="300">
                {/* Card 1 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-pink-100 flex items-center justify-center text-pink-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-apple-whole"></i>
                        </div>
                        <span className="text-[8px] font-bold text-pink-600 uppercase tracking-wider block mb-1">Pregnancy Tips</span>
                        <Link href="/nutrition-first-trimester" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2 leading-snug">Nutrition guide for your first trimester</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/nutrition-first-trimester" className="text-pink-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-dna"></i>
                        </div>
                        <span className="text-[8px] font-bold text-purple-600 uppercase tracking-wider block mb-1">Women's Health</span>
                        <Link href="/pcos-myths-facts" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug">Understanding PCOS (now PMOS): Myths vs Facts</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/pcos-myths-facts" className="text-purple-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center text-orange-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-baby-carriage"></i>
                        </div>
                        <span className="text-[8px] font-bold text-orange-600 uppercase tracking-wider block mb-1">Fertility</span>
                        <Link href="/infertility-consult" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">When Should You Consult an Infertility Specialist?</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/infertility-consult" className="text-orange-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-rose-100 flex items-center justify-center text-rose-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-person-pregnant"></i>
                        </div>
                        <span className="text-[8px] font-bold text-rose-600 uppercase tracking-wider block mb-1">Antenatal Guide</span>
                        <Link href="/early-signs-pregnancy" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">Early Signs of Pregnancy: What’s Normal & What’s Not</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/early-signs-pregnancy" className="text-rose-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-vials"></i>
                        </div>
                        <span className="text-[8px] font-bold text-blue-600 uppercase tracking-wider block mb-1">Prenatal Care</span>
                        <Link href="/essential-prenatal-tests" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">Essential Prenatal Tests Every Mother Should Know About</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/essential-prenatal-tests" className="text-blue-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-teal-100 flex items-center justify-center text-teal-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <span className="text-[8px] font-bold text-teal-600 uppercase tracking-wider block mb-1">Fetal Development</span>
                        <Link href="/baby-growth-pregnancy" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">Baby Growth Month-by-Month During Pregnancy</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/baby-growth-pregnancy" className="text-teal-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center text-amber-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <span className="text-[8px] font-bold text-amber-600 uppercase tracking-wider block mb-1">High-Risk Pregnancy</span>
                        <Link href="/high-risk-pregnancy" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">Understanding High-Risk Pregnancy: Warning Signs & Care</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/high-risk-pregnancy" className="text-amber-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center text-red-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <span className="text-[8px] font-bold text-red-600 uppercase tracking-wider block mb-1">Pregnancy Warning</span>
                        <Link href="/pregnancy-warning-signs" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">What are the warning signs during pregnancy that should never be ignored?</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/pregnancy-warning-signs" className="text-red-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-hospital-user"></i>
                        </div>
                        <span className="text-[8px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Labor & Delivery</span>
                        <Link href="/normal-delivery-vs-csection" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">Normal Delivery vs C-Section: What Every Mother Should Know</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/normal-delivery-vs-csection" className="text-indigo-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between p-2 group">
                    <div>
                        <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs mb-1.5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fa-solid fa-capsules"></i>
                        </div>
                        <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">Supplements</span>
                        <Link href="/pregnancy-supplements" className="block outline-none">
                            <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">How important are pregnancy supplements like folic acid and iron?</h4>
                        </Link>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-gray-100/60 flex items-center justify-between">
                        <Link href="/pregnancy-supplements" className="text-emerald-600 text-[10px] font-bold flex items-center gap-1 hover:underline outline-none">Read More &rarr;</Link>
                    </div>
                </div>
            </div>

            {/* Lead Capture Form */}
            <div className="mt-4 bg-gradient-to-br from-brand-peach/20 via-pink-50/30 to-brand-peach/10 border border-brand-peach/40 rounded-2xl p-3 sm:p-4 max-w-4xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 relative overflow-hidden" data-aos="fade-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 text-center sm:text-left flex-1">
                    <h4 className="text-[9px] font-bold tracking-widest text-primary-600 uppercase mb-0.5">Free Download</h4>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-gray-900">Week-by-Week Pregnancy Diet Guide</h3>
                </div>
                <div className="w-full sm:w-auto relative z-10 shrink-0">
                    <LeadCaptureForm />
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 5TH PAGE: PATIENT STORIES ==================== */}
    <section id="testimonials" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto lg:overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-6 flex flex-col justify-center relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Testimonials</h2>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">Patient Stories</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">Real experiences from women and families who trusted Dr. Vaibhavi with their health and pregnancy journeys.</p>
            </div>
            
            <div className="swiper testimonial-swiper pb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="swiper-wrapper">
                    <div className="swiper-slide bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex text-yellow-400 mb-3 text-sm"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-4 text-xs sm:text-sm">"Dr. Vaibhavi handled my high-risk pregnancy with such calm and expertise. The delivery at MGM Belapur was extremely smooth. Truly the best gynecologist in Navi Mumbai!"</p>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">- Priya Sharma</h4>
                        <p className="text-[11px] text-gray-500">Pregnancy Care</p>
                    </div>
                    <div className="swiper-slide bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex text-yellow-400 mb-3 text-sm"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-4 text-xs sm:text-sm">"I was struggling with PCOS (PMOS) and irregular periods for years. Her structured treatment and lifestyle guidance changed everything for me. Highly recommended."</p>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">- Anjali Deshmukh</h4>
                        <p className="text-[11px] text-gray-500">PCOS / PMOS Patient</p>
                    </div>
                    <div className="swiper-slide bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex text-yellow-400 mb-3 text-sm"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-4 text-xs sm:text-sm">"Very compassionate and non-judgmental. She listens to all queries patiently. The clinic atmosphere is very premium and soothing."</p>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">- Sneha R.</h4>
                        <p className="text-[11px] text-gray-500">Routine Checkup</p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

            <div className="text-center mt-2 pb-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-800 font-bold rounded-full shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-xs sm:text-sm outline-none group">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Read all 5-Star Reviews on Google Maps <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 ml-1"></i>
                </a>
            </div>
        </div>
    </section>

    {/* ==================== 6TH PAGE: FAQ SECTION ==================== */}
    <section id="faq" className="w-full min-h-screen lg:h-screen snap-start snap-always overflow-y-auto pt-20 lg:pt-16 pb-8 lg:pb-4 flex flex-col justify-center relative bg-[#FAF9F6] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center mb-4 lg:mb-6" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Patient Guide</h2>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-1">Frequently Asked Questions</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">Clear, transparent answers to common patient questions about pregnancy, gynecology, and consultation modes.</p>
            </div>
            
            <div className="space-y-3 lg:space-y-4" data-aos="fade-up" data-aos-delay="200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-start">
                {/* Left Column (FAQs 1-5) */}
                <div className="space-y-2">
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            1. How do I book an appointment?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">You can book either an in-clinic visit or a video consultation directly through our website. Simply choose your preferred consultation type, select a suitable time slot, and confirm your booking.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            2. What is the difference between a clinic visit and a video consultation?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">Clinic visits are ideal for physical examinations, scans, procedures, and detailed evaluations. Video consultations are convenient for follow-ups, pregnancy guidance, reports discussion, PCOS management, menstrual concerns, and general medical advice.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            3. Is video consultation safe and confidential?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">Yes. All consultations are completely private and confidential. Your medical information and discussions are securely handled with professional confidentiality.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            4. What health concerns can be discussed online?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <div className="text-gray-600 mt-1.5 text-xs leading-relaxed">
                            You can consult for:
                            <ul className="list-disc pl-4 mt-1 space-y-0.5">
                                <li>Pregnancy guidance & nutrition</li>
                                <li>PCOS/PCOD & irregular periods</li>
                                <li>Fertility & birth control advice</li>
                                <li>Reports review & follow-ups</li>
                            </ul>
                        </div>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            5. When should I choose an in-clinic appointment?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <div className="text-gray-600 mt-1.5 text-xs leading-relaxed">
                            An in-clinic visit is recommended if you need:
                            <ul className="list-disc pl-4 mt-1 space-y-0.5">
                                <li>Physical examination or procedures</li>
                                <li>Ultrasound/scans</li>
                                <li>Severe pain or emergency evaluation</li>
                            </ul>
                        </div>
                    </details>
                </div>

                {/* Right Column (FAQs 6-10) */}
                <div className="space-y-2">
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            6. What should I keep ready before a video consultation?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <div className="text-gray-600 mt-1.5 text-xs leading-relaxed">
                            Please keep the following ready:
                            <ul className="list-disc pl-4 mt-1 space-y-0.5">
                                <li>Previous prescriptions or reports</li>
                                <li>List of current symptoms & medication details</li>
                                <li>Internet connection and a quiet environment</li>
                            </ul>
                        </div>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            7. Can I consult during pregnancy through video consultation?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">Yes. Many pregnancy-related concerns and follow-up discussions can be handled online. However, certain routine checkups and scans may still require clinic visits depending on your pregnancy stage.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            8. Do I need to create an account before booking?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">No complicated signup is required. You can quickly book your appointment using basic details like your name, phone number, and preferred consultation type.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            9. What happens if I miss my appointment?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">If you miss your appointment, you may contact our support team or clinic reception to reschedule based on slot availability.</p>
                    </details>
                    
                    <details name="faq" className="group bg-white rounded-xl p-3 cursor-pointer border border-gray-100 shadow-sm">
                        <summary className="flex justify-between items-center font-bold text-xs sm:text-sm text-gray-900">
                            10. How will I receive prescriptions after an online consultation?
                            <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                        </summary>
                        <p className="text-gray-600 mt-1.5 text-xs leading-relaxed">After your consultation, the doctor can share your prescription and medical advice digitally through WhatsApp, email, or the patient portal.</p>
                    </details>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/* ==================== 8TH PAGE: BOOK YOUR VISIT & FOOTER ==================== */}
    <section id="appointment" className="w-full min-h-screen snap-start snap-always overflow-y-auto pt-24 lg:pt-20 flex flex-col justify-between relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-6">
            <div className="bg-[#FAF9F6] rounded-[2rem] shadow-premium overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    
                    <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center bg-brand-peach/10 relative overflow-hidden h-full">
                        <div className="relative z-10">
                            <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Professional Care</h2>
                            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2">Book Your Visit</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Schedule an in-clinic appointment or an online video consultation with Dr. Vaibhavi Dhenge.</p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-base shrink-0"><i className="fa-solid fa-phone"></i></div>
                                    <div>
                                        <p className="text-[11px] text-gray-500 font-medium">Clinic Reception</p>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900">022-27572293</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-base shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <p className="text-[11px] text-gray-500 font-medium">Clinic Location</p>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900">MGM Hospital, Belapur</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            {/* Google Map Embed */}
                            <div className="mt-6 rounded-2xl overflow-hidden shadow-sm border border-brand-peach/30 h-48 w-full relative">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.33611311059!2d73.0390444!3d19.025676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cf0000001%3A0x1acc89e51d266e24!2sMGM%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                    </div>

                    <div className="lg:col-span-7 p-4 sm:p-6 lg:p-10 bg-white">
                        {bookingSuccess ? (
                            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-3xl p-5 sm:p-6 text-center shadow-premium animate-fade-in space-y-4">
                                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-lg shadow-emerald-500/30 animate-bounce">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full">Booking Confirmed</span>
                                    <h3 className="text-xl font-serif font-bold text-gray-900">Your appointment request has been submitted</h3>
                                    <p className="text-[11px] sm:text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                                        Dr. Vaibhavi Dhenge and the clinic staff have received your request. A confirmation email and background alert have been dispatched to the clinic management.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm text-left space-y-2.5 max-w-md mx-auto">
                                    <div className="flex justify-between items-center text-[11px] border-b border-gray-100 pb-1.5">
                                        <span className="text-gray-500 font-medium">Reference ID</span>
                                        <span className="font-bold text-gray-900 font-mono">{bookedAppointment?.id}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] border-b border-gray-100 pb-1.5">
                                        <span className="text-gray-500 font-medium">Patient Name</span>
                                        <span className="font-bold text-gray-900">{bookedAppointment?.patientName}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] border-b border-gray-100 pb-1.5">
                                        <span className="text-gray-500 font-medium">Date & Time</span>
                                        <span className="font-bold text-emerald-600">{bookedAppointment?.date} at {bookedAppointment?.timeSlot}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] border-b border-gray-100 pb-1.5">
                                        <span className="text-gray-500 font-medium">Consultation Mode</span>
                                        <span className="font-bold text-gray-900">{bookedAppointment?.consultationMode}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] pt-0.5">
                                        <span className="text-gray-500 font-medium">Specialty</span>
                                        <span className="font-bold text-gray-900">{bookedAppointment?.specialty}</span>
                                    </div>
                                </div>

                                {/* Simulated Email Notification Badge */}
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3.5 text-left space-y-1 max-w-md mx-auto">
                                    <div className="font-bold flex items-center gap-2 text-[11px] text-emerald-800">
                                        <i className="fa-solid fa-envelope-circle-check text-emerald-600 text-sm animate-pulse"></i>
                                        <span>Automated Notifications Dispatched:</span>
                                    </div>
                                    <ul className="list-disc list-inside text-[10px] text-emerald-700 space-y-0.5 pt-0.5 font-medium">
                                        <li>Email sent to: <strong>IndiasBestGynaecologist@gmail.com</strong></li>
                                        <li>Confirmation sent to: <strong>{bookedAppointment?.emailAddress}</strong></li>
                                        <li>Background alert synced to Doctor Portal</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                                    <a 
                                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Appointment with Dr. Vaibhavi Dhenge')}&dates=20260520T100000Z/20260520T110000Z&details=${encodeURIComponent(`Patient: ${bookedAppointment?.patientName}\nMode: ${bookedAppointment?.consultationMode}\nSpecialty: ${bookedAppointment?.specialty}\nConcern: ${bookedAppointment?.healthConcern}`)}&location=${encodeURIComponent(bookedAppointment?.consultationMode.includes('In-Clinic') ? 'MGM Hospital, Belapur' : 'Online Video Consultation')}`}
                                        target="_blank" 
                                        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm outline-none"
                                    >
                                        <i className="fa-regular fa-calendar-plus text-base"></i> Add to Google Calendar
                                    </a>
                                    <button 
                                        onClick={resetBooking} 
                                        className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-gray-800 transition flex items-center justify-center gap-2 text-xs sm:text-sm outline-none"
                                    >
                                        <i className="fa-solid fa-rotate-left"></i> Book Another Visit
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form className="space-y-6 animate-fade-in" onSubmit={handleAppointmentSubmit}>
                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                                        <span className={bookingStep >= 1 ? 'text-primary-600 font-bold' : ''}>1. Service & Specialty</span>
                                        <span className={bookingStep >= 2 ? 'text-primary-600 font-bold' : ''}>2. Date & Time</span>
                                        <span className={bookingStep >= 3 ? 'text-primary-600 font-bold' : ''}>3. Patient Intake</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div 
                                            className="bg-primary-600 h-full transition-all duration-500"
                                            style={{ width: `${(bookingStep / 3) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Step 1: Mode & Specialty */}
                                {bookingStep === 1 && (
                                    <div className="space-y-6 animate-fade-in">
                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Select Consultation Mode</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div 
                                                    onClick={() => setSelectedMode('In-Clinic Visit (MGM Belapur)')}
                                                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedMode === 'In-Clinic Visit (MGM Belapur)' ? 'border-primary-500 bg-primary-50/50 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${selectedMode === 'In-Clinic Visit (MGM Belapur)' ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                                            <i className="fa-solid fa-hospital-user"></i>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-xs sm:text-sm text-gray-900">In-Clinic Visit</h4>
                                                            <p className="text-[10px] text-gray-500">MGM Hospital, Belapur</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-[11px] text-gray-600 leading-relaxed">Direct, in-person consultation and physical examination with Dr. Vaibhavi.</p>
                                                </div>

                                                <div 
                                                    onClick={() => setSelectedMode('Online Video Consult')}
                                                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedMode === 'Online Video Consult' ? 'border-primary-500 bg-primary-50/50 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${selectedMode === 'Online Video Consult' ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                                            <i className="fa-solid fa-video"></i>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-xs sm:text-sm text-gray-900">Online Video Consult</h4>
                                                            <p className="text-[10px] text-gray-500">Secure HD Video Call</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-[11px] text-gray-600 leading-relaxed">Convenient expert advice and prescription follow-up from your home.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Select Primary Specialty / Concern</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {['Pregnancy Care & Vitals', 'PCOS / PMOS & Hormones', 'Infertility Evaluation', 'High-Risk Pregnancy Care', 'Normal Delivery Planning', 'General Gynecology'].map(spec => (
                                                    <div 
                                                        key={spec}
                                                        onClick={() => setSelectedSpecialty(spec)}
                                                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs sm:text-sm font-semibold ${selectedSpecialty === spec ? 'border-primary-500 bg-primary-50 text-primary-900 shadow-sm' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
                                                    >
                                                        <span>{spec}</span>
                                                        {selectedSpecialty === spec && <i className="fa-solid fa-circle-check text-primary-600 text-base animate-scale-in"></i>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <button 
                                            type="button"
                                            onClick={handleNextStep}
                                            className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-primary-500/20 hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                                        >
                                            <span>Continue to Date & Time</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                )}

                                {/* Step 2: Date & Time */}
                                {bookingStep === 2 && (
                                    <div className="space-y-6 animate-fade-in">
                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Preferred Date</label>
                                            <input 
                                                type="date" 
                                                value={selectedDate} 
                                                onChange={(e) => setSelectedDate(e.target.value)} 
                                                required 
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 font-medium text-xs sm:text-sm" 
                                            />
                                            <p className="text-[11px] text-gray-500">📅 MGM Hospital clinic hours operate Monday through Saturday.</p>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Select Time Slot</label>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                {['10:00 AM', '11:00 AM', '12:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'].map(slot => (
                                                    <div 
                                                        key={slot}
                                                        onClick={() => setSelectedTimeSlot(slot)}
                                                        className={`p-3 rounded-xl border cursor-pointer transition-all text-center text-xs sm:text-sm font-bold ${selectedTimeSlot === slot ? 'border-primary-500 bg-primary-50 text-primary-900 shadow-sm' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
                                                    >
                                                        <span>{slot}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <button 
                                                type="button"
                                                onClick={handlePrevStep}
                                                className="w-1/3 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                                <span>Back</span>
                                            </button>
                                            <button 
                                                type="button"
                                                onClick={handleNextStep}
                                                className="w-2/3 bg-primary-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-primary-500/20 hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                                            >
                                                <span>Continue to Patient Details</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Patient Intake */}
                                {bookingStep === 3 && (
                                    <div className="space-y-6 animate-fade-in">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">Patient Full Name</label>
                                                <input 
                                                    type="text" 
                                                    value={patientName} 
                                                    onChange={(e) => setPatientName(e.target.value)} 
                                                    required 
                                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm font-medium" 
                                                    placeholder="Full Name" 
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">Mobile Number</label>
                                                <input 
                                                    type="tel" 
                                                    value={mobileNumber} 
                                                    onChange={(e) => setMobileNumber(e.target.value)} 
                                                    required 
                                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm font-medium" 
                                                    placeholder="+91" 
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address (For Confirmation & Calendar Invite)</label>
                                                <input 
                                                    type="email" 
                                                    value={emailAddress} 
                                                    onChange={(e) => setEmailAddress(e.target.value)} 
                                                    required 
                                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm font-medium" 
                                                    placeholder="patient@example.com" 
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">Health Concern / Reason for Visit</label>
                                            <textarea 
                                                value={healthConcern} 
                                                onChange={(e) => setHealthConcern(e.target.value)} 
                                                rows={2} 
                                                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm font-medium" 
                                                placeholder="Briefly describe your symptoms or consultation requirement..."
                                            ></textarea>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">Past Medical History (Optional)</label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Thyroid Disorder', 'Diabetes', 'High Blood Pressure', 'Previous C-Section', 'Anemia', 'PCOS / PMOS'].map(cond => (
                                                    <div 
                                                        key={cond}
                                                        onClick={() => toggleCondition(cond)}
                                                        className={`px-3 py-1.5 rounded-lg border text-xs cursor-pointer font-semibold transition-all ${medicalConditions.includes(cond) ? 'border-primary-500 bg-primary-50 text-primary-800 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'}`}
                                                    >
                                                        <span>{cond}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <button 
                                                type="button"
                                                onClick={handlePrevStep}
                                                className="w-1/3 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2 text-xs sm:text-sm outline-none"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                                <span>Back</span>
                                            </button>
                                            <button 
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-2/3 bg-primary-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-primary-500/20 hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-70 outline-none"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <i className="fa-solid fa-spinner animate-spin"></i>
                                                        <span>Processing Request...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa-solid fa-check-double"></i>
                                                        <span>Confirm & Book Appointment</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/*  Footer  */}
        <footer className="bg-gray-900 text-white pt-8 pb-6 border-t-4 border-primary-600 w-full mt-auto shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/*  Branding  */}
                    <div className="lg:col-span-1">
                        <h2 className="text-lg font-serif font-bold text-white mb-3 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center"><i className="fa-solid fa-spa text-[10px]"></i></div>
                            Dr. Vaibhavi
                        </h2>
                        <p className="text-gray-400 text-[11px] leading-relaxed mb-3">
                            Premium women's healthcare focusing on empathy, clinical excellence, and empowerment for every stage of life.
                        </p>
                        <div className="flex gap-2.5">
                            <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition text-xs"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition text-xs"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/dr-vaibhavi-dhenge-712642359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition text-xs"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    {/*  Quick Links  */}
                    <div>
                        <h4 className="font-bold mb-3 text-xs uppercase tracking-wider text-white">Quick Links</h4>
                        <ul className="space-y-1.5 text-gray-400 text-[11px]">
                            <li><a href="#about" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-primary-500"></i> About Doctor</a></li>
                            <li><a href="#services" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-primary-500"></i> Specialties</a></li>
                            <li><a href="#appointment" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-primary-500"></i> Patient Portal</a></li>
                            <li><a href="#community" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[9px] text-primary-500"></i> Blog & Resources</a></li>
                        </ul>
                    </div>
                    
                    {/*  Services  */}
                    <div>
                        <h4 className="font-bold mb-3 text-xs uppercase tracking-wider text-white">Core Services</h4>
                        <ul className="space-y-1.5 text-gray-400 text-[11px]">
                            <li><a href="#services" className="hover:text-white transition">Normal Delivery</a></li>
                            <li><a href="#services" className="hover:text-white transition">High-Risk Pregnancy</a></li>
                            <li><a href="#services" className="hover:text-white transition">PCOS & Hormones</a></li>
                            <li><a href="#services" className="hover:text-white transition">Infertility Guide</a></li>
                        </ul>
                    </div>

                    {/*  Contact  */}
                    <div>
                        <h4 className="font-bold mb-3 text-xs uppercase tracking-wider text-white">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400 text-[11px]">
                            <li className="flex items-start gap-2">
                                <i className="fa-solid fa-location-dot mt-0.5 text-primary-500"></i>
                                <span>MGM Hospital, Sector 1, Belapur, Navi Mumbai</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone text-primary-500"></i>
                                <span>022-27572293</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-envelope text-primary-500"></i>
                                <span>consult@drvaibhavi.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500">
                    <p>&copy; 2026 Dr. Vaibhavi Dhenge. All rights reserved.</p>
                    <div className="space-x-4 mt-2 md:mt-0">
                        <a href="#appointment" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#appointment" className="hover:text-white transition">Terms & Conditions</a>
                        <a href="#appointment" className="hover:text-white transition">Medical Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    </section>

    {/* Sticky Floating CTA for Mobile (Right) */}
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-3 items-end">
        <a href="#appointment" className="bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white px-5 py-3.5 rounded-full font-bold shadow-premium flex items-center gap-2 border border-pink-400/30 animate-pulse text-xs">
            <i className="fa-regular fa-calendar-check text-base"></i> Book Visit
        </a>
    </div>

    {/*  Scripts  */}
    
    
    
    
    {/*  Google Translate Script  */}
    
    
    
    

        </main>
    );
}

