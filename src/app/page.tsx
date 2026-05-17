"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Home() {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const submitForm = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const name = form.Patient_Name.value;
        const mobile = form.Mobile_Number.value;
        const date = form.Appointment_Date.value;
        const mode = form.Consultation_Mode.value;
        const concern = form.Health_Concern.value || 'None';
        
        const message = `*New Appointment Request* %0A%0A*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Date:* ${date}%0A*Mode:* ${mode}%0A*Concern:* ${concern}`;
        
        const whatsappUrl = `https://wa.me/919284880359?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const changeLanguage = (langCode: string) => {
        const selectField = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (selectField) {
            selectField.value = langCode;
            selectField.dispatchEvent(new Event('change'));
        } else {
            setTimeout(() => {
                const retrySelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                if (retrySelect) {
                    retrySelect.value = langCode;
                    retrySelect.dispatchEvent(new Event('change'));
                }
            }, 500);
        }
    };

    return (
        <main className="w-full bg-white" id="main-snap-container">
            
    {/*  Google Translate Hidden Div  */}
    <div id="google_translate_element"></div>

    {/*  Header / Navbar  */}
    <header className="fixed w-full top-0 z-50 glass-header transition-all duration-300 py-3" id="navbar">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
            {/*  Logo  */}
            <a href="#home" className="flex items-center gap-2 xl:gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <i className="fa-solid fa-spa"></i>
                </div>
                <div className="shrink-0">
                    <h1 className="text-lg xl:text-xl font-serif font-bold text-gray-900 tracking-wide whitespace-nowrap">Dr. Vaibhavi Dhenge</h1>
                    <p className="text-[10px] xl:text-xs text-primary-600 font-bold tracking-widest uppercase whitespace-nowrap">MS OBGY | MBBS</p>
                </div>
            </a>

            {/*  Desktop Nav  */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
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
                                <li><a href="#experience" className="hover:text-primary-600 transition block"><i className="fa-solid fa-award text-primary-400 mr-2 w-4"></i> Awards & Experience</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-certificate text-primary-400 mr-2 w-4"></i> Memberships</a></li>
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
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:grid transition-all duration-300 z-50 min-w-[420px] grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Physical Trust</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-hospital text-primary-400 mr-2 w-4"></i> Clinic Overview & Photos</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-sparkles text-primary-400 mr-2 w-4"></i> Hygiene & Facilities</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-location-dot text-primary-400 mr-2 w-4"></i> MGM Belapur Location</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Patient Info</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-clock text-primary-400 mr-2 w-4"></i> Timings & OPD Schedule</a></li>
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-file-invoice-dollar text-primary-400 mr-2 w-4"></i> Insurance / TPA Support</a></li>
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-laptop-medical text-primary-400 mr-2 w-4"></i> Virtual Consultation</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 5. RESOURCES */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        RESOURCES <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:grid transition-all duration-300 z-50 min-w-[420px] grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Knowledge</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#community" className="hover:text-primary-600 transition block"><i className="fa-solid fa-book-open text-primary-400 mr-2 w-4"></i> Blog & Articles</a></li>
                                <li><a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="hover:text-primary-600 transition block"><i className="fa-brands fa-youtube text-primary-400 mr-2 w-4"></i> Educational Videos</a></li>
                                <li><a href="#community" className="hover:text-primary-600 transition block"><i className="fa-solid fa-calculator text-primary-400 mr-2 w-4"></i> Pregnancy Tips</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Patient Portal</h4>
                            <ul className="space-y-3 text-xs font-medium text-gray-600">
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-file-arrow-down text-primary-400 mr-2 w-4"></i> Download Reports</a></li>
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-file-pdf text-primary-400 mr-2 w-4"></i> Diet Charts & PDFs</a></li>
                                <li><a href="#appointment" className="hover:text-primary-600 transition block"><i className="fa-solid fa-heart-circle-check text-primary-400 mr-2 w-4"></i> Care Instructions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 6. TESTIMONIALS */}
                <a href="#testimonials" className="text-[11px] xl:text-xs font-bold text-gray-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">TESTIMONIALS</a>

                {/* 7. CONTACT US */}
                <a href="#appointment" className="text-[11px] xl:text-xs font-bold text-gray-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">CONTACT US</a>
                
                {/*  Language Toggle with Blinking Arrow  */}
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100 relative group cursor-pointer shrink-0 whitespace-nowrap">
                    <div className="absolute -left-5 top-1/2 -translate-y-1/2 text-primary-500 animate-pulse text-base" title="Change Language">
                        <i className="fa-solid fa-caret-right"></i>
                    </div>
                    <i className="fa-solid fa-language text-gray-400 group-hover:text-primary-500 transition text-xs"></i>
                    <select id="lang-select" onChange={(e) => changeLanguage(e.target.value)} className="bg-transparent text-[11px] xl:text-xs font-bold text-primary-700 outline-none cursor-pointer appearance-none pr-1">
                        <option value="en">English (EN)</option>
                        <option value="hi">हिंदी (HI)</option>
                        <option value="mr">मराठी (MR)</option>
                        <option value="gu">ગુજરાતી (GU)</option>
                        <option value="ta">தமிழ் (TA)</option>
                        <option value="te">తెలుగు (TE)</option>
                        <option value="bn">বাংলা (BN)</option>
                    </select>
                    <i className="fa-solid fa-chevron-down text-[9px] text-gray-400 absolute right-2 pointer-events-none hidden"></i>
                </div>

                {/* 8. APPOINTMENT BUTTON (Important Contrasting Rose Gold / Coral CTA) */}
                <a href="#appointment" className="bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white px-5 py-2 rounded-full text-[11px] xl:text-xs font-bold hover:from-rose-600 hover:to-purple-700 transition shadow-[0_8px_16px_rgba(225,29,72,0.25)] hover:shadow-[0_12px_20px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 transform duration-300 shrink-0 whitespace-nowrap flex items-center gap-1.5 border border-pink-400/30">
                    <i className="fa-regular fa-calendar-check text-sm animate-bounce"></i> Book Appointment
                </a>
            </nav>
        </div>
    </header>

    {/* ==================== 1ST PAGE: HERO SECTION ==================== */}
    <section id="home" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-white">
        {/*  Background Elements  */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-peach/30 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-lavender/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                        <a href="#appointment" className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-center hover:bg-primary-700 transition shadow-lg shadow-primary-500/20 flex items-center gap-2">
                            <i className="fa-regular fa-calendar-check"></i> Book Appointment
                        </a>
                        <a href="https://wa.me/919284880359" target="_blank" className="bg-white text-green-600 border border-green-100 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-center hover:bg-green-50 transition shadow-premium flex items-center gap-2">
                            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
                        </a>
                        <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="bg-white text-red-600 border border-red-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-premium">
                            <i className="fa-brands fa-youtube text-lg"></i>
                        </a>
                        <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="bg-white text-pink-600 border border-pink-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-50 transition shadow-premium">
                            <i className="fa-brands fa-instagram text-lg"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dr-vaibhavi-dhenge-712642359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="bg-white text-blue-600 border border-blue-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-50 transition shadow-premium">
                            <i className="fa-brands fa-linkedin-in text-lg"></i>
                        </a>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-6">
                        <div>
                            <p className="text-2xl font-serif font-bold text-gray-900">4+</p>
                            <p className="text-xs text-gray-500 font-medium">Years Experience</p>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div>
                            <p className="text-2xl font-serif font-bold text-gray-900">5k+</p>
                            <p className="text-xs text-gray-500 font-medium">Happy Patients</p>
                        </div>
                    </div>
                </div>

                {/*  Hero Image  */}
                <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-brand-peach blob-shape transform rotate-12 scale-105 opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white aspect-square max-h-[380px] xl:max-h-[440px] flex items-center justify-center">
                        <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge OBGY" className="w-full h-full object-cover object-center" />
                        
                        {/* Elegant Glassmorphism Floating Nameplate Badge */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md py-2.5 px-6 rounded-2xl shadow-2xl border border-white flex items-center gap-3 z-20 w-max">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-pulse shrink-0"></div>
                            <div className="text-left">
                                <p className="text-sm sm:text-base font-bold font-serif text-gray-900 leading-none mb-1">Dr. Vaibhavi Dhenge</p>
                                <p className="text-[10px] sm:text-xs font-bold text-primary-600 uppercase tracking-widest leading-none">MS OBGY | MBBS</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* ==================== 2ND PAGE: ABOUT DOCTOR ==================== */}
    <section id="about" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-[#FAF9F6] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center mb-6" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Get To Know</h2>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">About Us</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div data-aos="fade-up" className="lg:col-span-5 relative order-2 lg:order-1 max-h-[380px] xl:max-h-[420px]">
                    <img src="images/doctor-about-perfect.jpg" alt="Dr. Vaibhavi Dhenge OBGY" className="rounded-[2rem] shadow-premium object-cover h-[380px] xl:h-[420px] w-full" />
                </div>
                
                <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
                    <h4 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-1">Dr. Vaibhavi Dhenge</h4>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3">MBBS, MS (Obstetrics & Gynaecology) | <span className="text-primary-600">Senior Resident, MGM Belapur Hospital</span></p>
                    
                    <p className="text-gray-600 leading-relaxed mb-3 font-sans text-xs sm:text-sm">
                        Dr. Vaibhavi Dhenge is an Obstetrician and Gynecologist with experience across 1,000+ obstetric and gynecological cases — from high-risk pregnancies and complex surgeries to everyday women's health concerns.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 font-sans text-xs sm:text-sm">
                        Having worked across premier institutions including MGM Hospital Belapur, Kashibai Navale Medical College Pune, Motherhood Hospital and Shri Vasantrao Naik GMC Yavatmal, she brings a uniquely well-rounded perspective built on advanced urban clinical practice and frontline rural care.
                    </p>
                    
                    {/* Quick Credentials */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 mb-4 shadow-sm">
                        <h5 className="text-[11px] font-bold uppercase tracking-widest text-primary-700 mb-3 flex items-center gap-2">
                            <i className="fa-solid fa-award text-primary-500 text-sm"></i> Quick Credentials
                        </h5>
                        <ul className="space-y-2 font-sans text-xs sm:text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <li className="flex items-center gap-2">
                                <span className="text-base shrink-0">🎓</span>
                                <span className="truncate"><strong>MS OBGY | MBBS</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-base shrink-0">🏥</span>
                                <span className="truncate"><strong>1,000+ Cases</strong> Managed</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-base shrink-0">⚕️</span>
                                <span className="truncate">Laparoscopy & Gynecology Surgeries</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-base shrink-0">🏆</span>
                                <span className="truncate"><strong>Award Winner</strong> (ACOG, AICOG)</span>
                            </li>
                        </ul>
                    </div>
                    
                    <a href="#services" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition text-xs sm:text-sm">
                        Explore Specialties <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 3RD PAGE: MISSION, VISION & VALUES ==================== */}
    <section id="mission-vision" className="w-full h-screen snap-start snap-always overflow-hidden pt-24 pb-4 flex flex-col justify-start relative bg-white border-b border-gray-100">
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
    <section id="services" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-[#FAF9F6] border-b border-gray-100">
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
                    <h4 className="text-base font-bold font-serif text-gray-900 mb-1">PCOS Treatment</h4>
                    <p className="text-[11px] text-gray-600">Holistic medical and lifestyle management for PCOS and hormonal imbalances.</p>
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

    {/* ==================== 5TH PAGE: PATIENT STORIES ==================== */}
    <section id="testimonials" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-white border-b border-gray-100">
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
                        <p className="text-gray-700 italic leading-relaxed mb-4 text-xs sm:text-sm">"I was struggling with PCOS and irregular periods for years. Her structured treatment and lifestyle guidance changed everything for me. Highly recommended."</p>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">- Anjali Deshmukh</h4>
                        <p className="text-[11px] text-gray-500">PCOS Patient</p>
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
        </div>
    </section>

    {/* ==================== 6TH PAGE: FAQ SECTION ==================== */}
    <section id="faq" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-[#FAF9F6] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center mb-8" data-aos="fade-up">
                <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Patient Guide</h2>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">Clear, transparent answers to common patient questions about pregnancy, gynecology, and consultation modes.</p>
            </div>
            
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="200">
                <details className="group bg-white rounded-2xl p-4 cursor-pointer border border-gray-100 shadow-sm">
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
                        When should I have my first pregnancy checkup?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">You should schedule your first antenatal visit as soon as you get a positive home pregnancy test, typically around 6 to 8 weeks after your last menstrual period.</p>
                </details>
                <details className="group bg-white rounded-2xl p-4 cursor-pointer border border-gray-100 shadow-sm">
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
                        Can PCOS be completely cured?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">While PCOS cannot be completely cured, it can be effectively managed with lifestyle modifications, diet, and customized medical treatments to regulate hormones and cycles.</p>
                </details>
                <details className="group bg-white rounded-2xl p-4 cursor-pointer border border-gray-100 shadow-sm">
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
                        Do you offer online video consultations?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">Yes, we offer secure online video consultations for initial discussions, follow-ups, reports analysis, and second opinions.</p>
                </details>
                <details className="group bg-white rounded-2xl p-4 cursor-pointer border border-gray-100 shadow-sm">
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
                        Is it normal to have irregular periods?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">Occasional irregularity can happen due to stress or diet changes. However, if your periods are consistently irregular, it could indicate hormonal imbalances like PCOS or thyroid issues, which require a consultation.</p>
                </details>
                <details className="group bg-white rounded-2xl p-4 cursor-pointer border border-gray-100 shadow-sm">
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
                        When should couples consult for infertility?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500 text-xs"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">If you are under 35 and have been trying to conceive for a year without success, or over 35 and trying for six months, it is highly recommended to consult an expert for a fertility evaluation.</p>
                </details>
            </div>
        </div>
    </section>

    {/* ==================== 7TH PAGE: COMMUNITY & PREGNANCY TIPS ==================== */}
    <section id="community" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 pb-6 flex flex-col justify-center relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1" data-aos="fade-up">Stay Connected</h2>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">Community & Health Tips</h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
                <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 text-xs sm:text-sm">
                    <i className="fa-brands fa-instagram text-base"></i> Follow on Instagram
                </a>
                <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 text-xs sm:text-sm">
                    <i className="fa-brands fa-youtube text-base"></i> Watch on YouTube
                </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition border border-gray-100 flex flex-col justify-between">
                    <div className="h-32 bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center text-primary-600 text-3xl">
                        <i className="fa-solid fa-apple-whole"></i>
                    </div>
                    <div className="p-5">
                        <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Pregnancy Tips</span>
                        <h4 className="font-bold text-sm sm:text-base mt-1.5 mb-2 text-gray-900">Nutrition guide for your first trimester</h4>
                        <a href="#appointment" className="text-primary-600 text-xs font-bold flex items-center gap-1">Read More &rarr;</a>
                    </div>
                </div>
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition border border-gray-100 flex flex-col justify-between">
                    <div className="h-32 bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center text-purple-600 text-3xl">
                        <i className="fa-solid fa-dna"></i>
                    </div>
                    <div className="p-5">
                        <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Women's Health</span>
                        <h4 className="font-bold text-sm sm:text-base mt-1.5 mb-2 text-gray-900">Understanding PCOS: Myths vs Facts</h4>
                        <a href="#appointment" className="text-primary-600 text-xs font-bold flex items-center gap-1">Read More &rarr;</a>
                    </div>
                </div>
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition border border-gray-100 flex flex-col justify-between">
                    <div className="h-32 bg-gradient-to-r from-brand-peach/30 to-brand-peach/60 flex items-center justify-center text-orange-600 text-3xl">
                        <i className="fa-solid fa-baby-carriage"></i>
                    </div>
                    <div className="p-5">
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Fertility</span>
                        <h4 className="font-bold text-sm sm:text-base mt-1.5 mb-2 text-gray-900">When to consult an infertility specialist?</h4>
                        <a href="#appointment" className="text-primary-600 text-xs font-bold flex items-center gap-1">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==================== 8TH PAGE: BOOK YOUR VISIT & FOOTER ==================== */}
    <section id="appointment" className="w-full h-screen snap-start snap-always overflow-hidden pt-20 flex flex-col justify-between relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-6">
            <div className="bg-[#FAF9F6] rounded-[2rem] shadow-premium overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    
                    <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-center bg-brand-peach/10 relative overflow-hidden h-full">
                        <div className="relative z-10">
                            <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">Instant Booking</h2>
                            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2">Book Your Visit</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Schedule an in-clinic appointment or an online video consultation from the comfort of your home.</p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-base shrink-0"><i className="fa-brands fa-whatsapp"></i></div>
                                    <div>
                                        <p className="text-[11px] text-gray-500 font-medium">Instant Booking</p>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900">+91 9284880359</p>
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
                    </div>

                    <div className="lg:col-span-7 p-6 lg:p-10 bg-white">
                        <form className="space-y-3" onSubmit={submitForm}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">Patient Name</label>
                                    <input type="text" name="Patient_Name" required className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm" placeholder="Full Name" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">Mobile Number</label>
                                    <input type="tel" name="Mobile_Number" required className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm" placeholder="+91" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">Select Date</label>
                                    <input type="date" name="Appointment_Date" required className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">Consultation Mode</label>
                                    <select name="Consultation_Mode" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm">
                                        <option>In-Clinic Visit (MGM Belapur)</option>
                                        <option>Online Video Consult</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-semibold text-gray-700 mb-1">Health Concern (Optional)</label>
                                <textarea name="Health_Concern" rows={2} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50 text-xs sm:text-sm" placeholder="e.g. Pregnancy checkup, PCOS query..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl shadow-md shadow-primary-500/20 hover:bg-primary-700 hover:-translate-y-0.5 transition transform duration-300 text-xs sm:text-sm">
                                Request Appointment
                            </button>
                        </form>
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
                                <span>+91 9284880359</span>
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

    {/*  Floating WhatsApp (Left)  */}
    <a href="https://wa.me/919284880359" target="_blank" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform hover:bg-green-600 animate-bounce" style={{ animationDuration: '3s' }}>
        <i className="fa-brands fa-whatsapp"></i>
    </a>

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

