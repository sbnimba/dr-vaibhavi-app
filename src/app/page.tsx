"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Home() {
    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            AOS.init({ once: true });
            
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
        
        // Sticky Navbar
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
        <main>
            

    {/*  Google Translate Hidden Div  */}
    <div id="google_translate_element"></div>

    {/*  Header / Navbar  */}
    <header className="fixed w-full top-0 z-50 glass-header transition-all duration-300 py-3" id="navbar">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
            {/*  Logo  */}
            <a href="#" className="flex items-center gap-2 xl:gap-3 shrink-0">
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
                <a href="#" className="text-[11px] xl:text-xs font-bold text-primary-700 hover:text-primary-600 transition tracking-wider whitespace-nowrap shrink-0">HOME</a>

                {/* 2. ABOUT */}
                <div className="relative group py-2 shrink-0">
                    <button className="text-[11px] xl:text-xs font-bold text-gray-700 group-hover:text-primary-600 transition tracking-wider flex items-center gap-1 outline-none cursor-pointer whitespace-nowrap">
                        ABOUT <i className="fa-solid fa-chevron-down text-[9px] text-primary-500 transition-transform group-hover:rotate-180"></i>
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full -left-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[500px] grid grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Doctor Profile</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-user-md text-primary-400 mr-2 w-4"></i> About Doctor</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-graduation-cap text-primary-400 mr-2 w-4"></i> Qualification (MS OBGY)</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-award text-primary-400 mr-2 w-4"></i> Experience & Awards</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-certificate text-primary-400 mr-2 w-4"></i> Memberships</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mt-6 mb-3 border-b pb-1">Philosophy</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-hand-holding-heart text-primary-400 mr-2 w-4"></i> Patient Care Approach</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-venus text-primary-400 mr-2 w-4"></i> Women-Centric Care</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Media & Recognition</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="hover:text-primary-600 transition block"><i className="fa-solid fa-video text-primary-400 mr-2 w-4"></i> Interviews & Talks</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-newspaper text-primary-400 mr-2 w-4"></i> Publications</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mt-6 mb-3 border-b pb-1">Support</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#faq" className="hover:text-primary-600 transition block"><i className="fa-solid fa-circle-question text-primary-400 mr-2 w-4"></i> FAQs & Queries</a></li>
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
                    <div className="absolute top-full -left-32 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[750px] grid grid-cols-3 gap-8 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-person-pregnant text-sm"></i> Pregnancy Care
                            </h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600 mb-6">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Normal Pregnancy Care</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">High-Risk Pregnancy</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">ANC Checkups</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Nutrition Guidance</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Pregnancy Scans</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-baby-carriage text-sm"></i> Fertility
                            </h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
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
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600 mb-6">
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
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600 mb-6">
                                <li><a href="#services" className="hover:text-primary-600 transition block">Normal Delivery</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Painless Delivery</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">C-Section</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Laparoscopy</a></li>
                                <li><a href="#services" className="hover:text-primary-600 transition block">Hysterectomy</a></li>
                            </ul>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1 flex items-center gap-2">
                                <i className="fa-solid fa-shield-halved text-sm"></i> Women Wellness
                            </h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
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
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[420px] grid grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Physical Trust</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-hospital text-primary-400 mr-2 w-4"></i> Clinic Overview & Photos</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-sparkles text-primary-400 mr-2 w-4"></i> Hygiene & Facilities</a></li>
                                <li><a href="#about" className="hover:text-primary-600 transition block"><i className="fa-solid fa-location-dot text-primary-400 mr-2 w-4"></i> MGM Belapur Location</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Patient Info</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
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
                    <div className="absolute top-full -left-10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-gray-100 hidden group-hover:block transition-all duration-300 z-50 min-w-[420px] grid grid-cols-2 gap-6 animate-fade-in">
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Knowledge</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#" className="hover:text-primary-600 transition block"><i className="fa-solid fa-book-open text-primary-400 mr-2 w-4"></i> Blog & Articles</a></li>
                                <li><a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="hover:text-primary-600 transition block"><i className="fa-brands fa-youtube text-primary-400 mr-2 w-4"></i> Educational Videos</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition block"><i className="fa-solid fa-calculator text-primary-400 mr-2 w-4"></i> Pregnancy Calculator</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-3 border-b pb-1">Patient Portal</h4>
                            <ul className="space-y-2.5 text-xs font-medium text-gray-600">
                                <li><a href="#" className="hover:text-primary-600 transition block"><i className="fa-solid fa-file-arrow-down text-primary-400 mr-2 w-4"></i> Download Reports</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition block"><i className="fa-solid fa-file-pdf text-primary-400 mr-2 w-4"></i> Diet Charts & PDFs</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition block"><i className="fa-solid fa-heart-circle-check text-primary-400 mr-2 w-4"></i> Care Instructions</a></li>
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

    {/*  Hero Section  */}
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        {/*  Background Elements  */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-peach/30 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-lavender/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/*  Hero Content  */}
                <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-primary-700 tracking-wider uppercase">Senior Resident, MGM Belapur</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                        Where Every Woman Feels <br />
                        <span className="gradient-text">Safe, Heard & Cared</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg text-gray-700 font-sans font-medium italic mb-8 max-w-xl leading-relaxed tracking-wide">
                        Warm, private, and judgment-free women's care — at every stage of life
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#appointment" className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-700 transition shadow-xl shadow-primary-500/20 flex items-center gap-2">
                            <i className="fa-regular fa-calendar-check"></i> Book Appointment
                        </a>
                        <a href="https://wa.me/919284880359" target="_blank" className="bg-white text-green-600 border border-green-100 px-6 py-3 rounded-full font-semibold text-center hover:bg-green-50 transition shadow-premium flex items-center gap-2">
                            <i className="fa-brands fa-whatsapp text-xl"></i> WhatsApp
                        </a>
                        <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="bg-white text-red-600 border border-red-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-premium">
                            <i className="fa-brands fa-youtube text-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="bg-white text-pink-600 border border-pink-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-50 transition shadow-premium">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dr-vaibhavi-dhenge-712642359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="bg-white text-blue-600 border border-blue-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-50 transition shadow-premium">
                            <i className="fa-brands fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                    
                    <div className="mt-10 flex items-center gap-8">
                        <div>
                            <p className="text-3xl font-serif font-bold text-gray-900">4+</p>
                            <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-gray-900">5k+</p>
                            <p className="text-sm text-gray-500 font-medium">Happy Patients</p>
                        </div>
                    </div>
                </div>

                {/*  Hero Image  */}
                <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-brand-peach blob-shape transform rotate-12 scale-105 opacity-50"></div>
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                        <img src="images/doctor-hero.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-[600px] object-cover object-top" />
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  About Section  */}
    <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div data-aos="fade-up" className="lg:col-span-5 relative order-2 lg:order-1">
                    <img src="images/doctor-about-new.jpg" alt="Dr. Vaibhavi Dhenge OBGY" className="rounded-[2rem] shadow-premium object-cover h-[550px] w-full" />
                    <div className="absolute -bottom-10 -right-6 bg-primary-900 text-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-primary-800/50 z-20">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-2 flex items-center gap-2">
                            <i className="fa-solid fa-bullseye text-primary-400"></i> Our Mission
                        </h4>
                        <p className="font-serif italic text-base leading-relaxed">"To be the doctor every woman deserves — one who listens without judgment, understands without rushing, and delivers care that is both medically excellent and deeply human."</p>
                    </div>
                </div>
                
                <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">About The Doctor</h2>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Dr. Vaibhavi Dhenge</h3>
                    <p className="text-lg font-medium text-gray-700 mb-6">MBBS, MS (Obstetrics & Gynaecology) <br /> <span className="text-primary-600">Senior Resident, MGM Belapur Hospital</span></p>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 font-sans text-base sm:text-lg">
                        Dr. Vaibhavi Dhenge is an Obstetrician and Gynecologist with experience across 1,000+ obstetric and gynecological cases — from high-risk pregnancies and complex surgeries to everyday women's health concerns.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6 font-sans text-base sm:text-lg">
                        Having worked across premier institutions including MGM Hospital Belapur, Kashibai Navale Medical College Pune, Motherhood Hospital and Shri Vasantrao Naik Government Medical College Yavatmal, she brings a uniquely well-rounded perspective — one built on both advanced urban clinical practice and the grit of frontline rural care.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 font-sans text-base sm:text-lg">
                        She combines surgical precision with a warm, unhurried approach — because she believes every woman deserves not just expert care, but care that truly listens.
                    </p>
                    
                    {/* Vision Box */}
                    <div className="bg-primary-50/60 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-8 shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary-700 mb-2 flex items-center gap-2">
                            <i className="fa-solid fa-eye text-primary-500"></i> Our Vision
                        </h4>
                        <p className="font-serif italic text-gray-800 text-base sm:text-lg leading-relaxed">
                            "A world where every woman — regardless of where she comes from — has access to compassionate, expert, and dignified healthcare at every stage of her life."
                        </p>
                    </div>

                    {/* Values 3-icon strip */}
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Core Values</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-lg mb-3">
                                <i className="fa-solid fa-handshake-angle text-xl"></i>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-1">Trust</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">A safe space where no concern is too small and no question goes unheard.</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg mb-3">
                                <i className="fa-solid fa-award text-xl"></i>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-1">Excellence</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">Evidence-based, modern care backed by 1,000+ real clinical experiences.</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg mb-3">
                                <i className="fa-solid fa-spa text-xl"></i>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-1">Dignity</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">Every woman treated with the privacy, respect, and warmth she deserves.</p>
                        </div>
                    </div>
                    
                    <a href="#services" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition">
                        Explore Specialties <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  Services Section  */}
    <section id="services" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Specialties</h2>
                <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Comprehensive Women's Care</h3>
                <p className="text-gray-600 text-lg">From your first period to menopause and everything in between, we provide holistic care for every phase of your life.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/*  Service Cards  */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blush/30 text-primary-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-person-pregnant"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">Pregnancy Care</h4>
                    <p className="text-sm text-gray-600">Complete antenatal and postnatal care focusing on healthy, normal deliveries.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-14 h-14 rounded-2xl bg-brand-lavender/50 text-purple-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">High Risk Pregnancy</h4>
                    <p className="text-sm text-gray-600">Expert management of gestational diabetes, BP, and multiple pregnancies.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-14 h-14 rounded-2xl bg-brand-teal/30 text-teal-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-dna"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">PCOS Treatment</h4>
                    <p className="text-sm text-gray-600">Holistic medical and lifestyle management for PCOS and hormonal imbalances.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-14 h-14 rounded-2xl bg-brand-peach/50 text-orange-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-baby-carriage"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">Infertility Consult</h4>
                    <p className="text-sm text-gray-600">Compassionate guidance, evaluation, and treatments for couples trying to conceive.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-droplet"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">Menstrual Disorders</h4>
                    <p className="text-sm text-gray-600">Diagnosis and treatment for heavy bleeding, pain, and irregular cycles.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-14 h-14 rounded-2xl bg-gray-200 text-gray-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">Menopause Care</h4>
                    <p className="text-sm text-gray-600">Supportive therapies and management for a smooth menopausal transition.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-user-nurse"></i>
                    </div>
                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">C-Section & Delivery</h4>
                    <p className="text-sm text-gray-600">Safe, painless normal deliveries and expert caesarean sections.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 group flex items-center justify-center text-center" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">View All Services</h4>
                        <a href="#" className="w-12 h-12 mx-auto rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Why Choose Us  */}
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <h2 className="text-sm font-bold tracking-widest text-primary-300 uppercase mb-3">The Clinic Experience</h2>
                <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">Why Patients Trust Us</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary-800/50 backdrop-blur-md border border-primary-700/50 p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="100">
                    <i className="fa-solid fa-hand-holding-heart text-4xl text-brand-peach mb-6"></i>
                    <h4 className="text-2xl font-serif font-bold mb-3">Compassionate Care</h4>
                    <p className="text-primary-100 leading-relaxed">We listen without judgment. Every patient receives ample time to discuss their concerns in a completely safe, private environment.</p>
                </div>
                <div className="bg-primary-800/50 backdrop-blur-md border border-primary-700/50 p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="200">
                    <i className="fa-solid fa-microscope text-4xl text-brand-teal mb-6"></i>
                    <h4 className="text-2xl font-serif font-bold mb-3">Modern Treatment</h4>
                    <p className="text-primary-100 leading-relaxed">Utilizing the latest global medical protocols and advanced technology to ensure the best possible outcomes for mother and baby.</p>
                </div>
                <div className="bg-primary-800/50 backdrop-blur-md border border-primary-700/50 p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="300">
                    <i className="fa-solid fa-shield-halved text-4xl text-brand-lavender mb-6"></i>
                    <h4 className="text-2xl font-serif font-bold mb-3">Privacy & Comfort</h4>
                    <p className="text-primary-100 leading-relaxed">A premium clinic atmosphere designed to reduce anxiety, ensuring a comfortable, women-centric healthcare experience.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Testimonials Section  */}
    <section id="testimonials" className="py-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Patient Stories</h2>
                <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Words of Trust & Healing</h3>
            </div>
            
            <div className="swiper testimonial-swiper pb-16" data-aos="fade-up" data-aos-delay="200">
                <div className="swiper-wrapper">
                    <div className="swiper-slide bg-white p-10 rounded-3xl shadow-premium border border-gray-50">
                        <div className="flex text-yellow-400 mb-6"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-6">"Dr. Vaibhavi handled my high-risk pregnancy with such calm and expertise. The delivery at MGM Belapur was extremely smooth. Truly the best gynecologist in Navi Mumbai!"</p>
                        <h4 className="font-bold text-gray-900">- Priya Sharma</h4>
                        <p className="text-sm text-gray-500">Pregnancy Care</p>
                    </div>
                    <div className="swiper-slide bg-white p-10 rounded-3xl shadow-premium border border-gray-50">
                        <div className="flex text-yellow-400 mb-6"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-6">"I was struggling with PCOS and irregular periods for years. Her structured treatment and lifestyle guidance changed everything for me. Highly recommended."</p>
                        <h4 className="font-bold text-gray-900">- Anjali Deshmukh</h4>
                        <p className="text-sm text-gray-500">PCOS Patient</p>
                    </div>
                    <div className="swiper-slide bg-white p-10 rounded-3xl shadow-premium border border-gray-50">
                        <div className="flex text-yellow-400 mb-6"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                        <p className="text-gray-700 italic leading-relaxed mb-6">"Very compassionate and non-judgmental. She listens to all queries patiently. The clinic atmosphere is very premium and soothing."</p>
                        <h4 className="font-bold text-gray-900">- Sneha R.</h4>
                        <p className="text-sm text-gray-500">Routine Checkup</p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>

    {/*  FAQ Section  */}
    <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Learn More</h2>
                <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        When should I have my first pregnancy checkup?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">You should schedule your first antenatal visit as soon as you get a positive home pregnancy test, typically around 6 to 8 weeks after your last menstrual period.</p>
                </details>
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        Can PCOS be completely cured?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">While PCOS cannot be completely cured, it can be effectively managed with lifestyle modifications, diet, and customized medical treatments to regulate hormones and cycles.</p>
                </details>
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        Do you offer online video consultations?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">Yes, we offer secure online video consultations for initial discussions, follow-ups, reports analysis, and second opinions.</p>
                </details>
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        Is it normal to have irregular periods?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">Occasional irregularity can happen due to stress or diet changes. However, if your periods are consistently irregular, it could indicate hormonal imbalances like PCOS or thyroid issues, which require a consultation.</p>
                </details>
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        When should couples consult for infertility?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">If you are under 35 and have been trying to conceive for a year without success, or over 35 and trying for six months, it is highly recommended to consult an expert for a fertility evaluation.</p>
                </details>
                <details className="group bg-[#FAF9F6] rounded-2xl p-6 cursor-pointer border border-gray-100">
                    <summary className="flex justify-between items-center font-bold text-lg text-gray-900">
                        What should I eat during pregnancy?
                        <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-primary-500"></i></span>
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">A balanced diet rich in iron, calcium, folic acid, and protein is essential. Dr. Vaibhavi provides a personalized nutrition chart tailored to your trimester and health profile during your visit.</p>
                </details>
            </div>
        </div>
    </section>

    {/*  Social & Blog Section  */}
    <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Join Our Community</h3>
            <div className="flex justify-center gap-6 mb-12">
                <a href="#" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-3">
                    <i className="fa-brands fa-instagram text-xl"></i> Follow on Instagram
                </a>
                <a href="#" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-3">
                    <i className="fa-brands fa-youtube text-xl"></i> Watch on YouTube
                </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-primary-600 uppercase">Pregnancy Tips</span>
                        <h4 className="font-bold text-lg mt-2 mb-3">Nutrition guide for your first trimester</h4>
                        <a href="#" className="text-primary-600 text-sm font-bold">Read More &rarr;</a>
                    </div>
                </div>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-primary-600 uppercase">Women's Health</span>
                        <h4 className="font-bold text-lg mt-2 mb-3">Understanding PCOS: Myths vs Facts</h4>
                        <a href="#" className="text-primary-600 text-sm font-bold">Read More &rarr;</a>
                    </div>
                </div>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-primary-600 uppercase">Fertility</span>
                        <h4 className="font-bold text-lg mt-2 mb-3">When to consult an infertility specialist?</h4>
                        <a href="#" className="text-primary-600 text-sm font-bold">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Appointment Booking Section  */}
    <section id="appointment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF9F6] rounded-[3rem] shadow-premium overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    <div className="p-12 lg:p-16 flex flex-col justify-center bg-brand-peach/10 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Book Your Visit</h2>
                            <p className="text-gray-600 mb-10">Schedule an in-clinic appointment or an online video consultation from the comfort of your home.</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xl shrink-0"><i className="fa-brands fa-whatsapp"></i></div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Instant Booking</p>
                                        <p className="font-bold text-gray-900">+91 9284880359</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xl shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Clinic Location</p>
                                        <p className="font-bold text-gray-900">MGM Hospital, Belapur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 lg:p-16 bg-white">
                        <form className="space-y-6" onSubmit={submitForm}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name</label>
                                    <input type="text" name="Patient_Name" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50" placeholder="Full Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                                    <input type="tel" name="Mobile_Number" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50" placeholder="+91" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                                    <input type="date" name="Appointment_Date" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Consultation Mode</label>
                                    <select name="Consultation_Mode" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50">
                                        <option>In-Clinic Visit (MGM Belapur)</option>
                                        <option>Online Video Consult</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Health Concern (Optional)</label>
                                <textarea name="Health_Concern" rows={3} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-gray-50" placeholder="e.g. Pregnancy checkup, PCOS query..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-1 transition transform duration-300">
                                Request Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/*  Branding  */}
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center"><i className="fa-solid fa-spa text-sm"></i></div>
                        Dr. Vaibhavi
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Premium women's healthcare focusing on empathy, clinical excellence, and empowerment for every stage of life.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/drvaibhavicare?igsh=MTg4MTh3b2kya2VsMw%3D%3D&utm_source=qr" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@DrVaibhavicare" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/in/dr-vaibhavi-dhenge-712642359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                {/*  Quick Links  */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><a href="#about" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-primary-500"></i> About Doctor</a></li>
                        <li><a href="#services" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-primary-500"></i> Specialties</a></li>
                        <li><a href="#" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-primary-500"></i> Patient Portal</a></li>
                        <li><a href="#" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-primary-500"></i> Blog & Resources</a></li>
                    </ul>
                </div>
                
                {/*  Services  */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Core Services</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white transition">Normal Delivery</a></li>
                        <li><a href="#" className="hover:text-white transition">High-Risk Pregnancy</a></li>
                        <li><a href="#" className="hover:text-white transition">PCOS & Hormones</a></li>
                        <li><a href="#" className="hover:text-white transition">Infertility Guide</a></li>
                    </ul>
                </div>

                {/*  Contact  */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-location-dot mt-1 text-primary-500"></i>
                            <span>MGM Hospital, Sector 1, Belapur, Navi Mumbai, Maharashtra</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-phone text-primary-500"></i>
                            <span>+91 9284880359</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-envelope text-primary-500"></i>
                            <span>consult@drvaibhavi.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2026 Dr. Vaibhavi Dhenge. All rights reserved.</p>
                <div className="space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition">Medical Disclaimer</a>
                </div>
            </div>
        </div>
    </footer>

    {/*  Floating WhatsApp  */}
    <a href="https://wa.me/919284880359" target="_blank" className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform hover:bg-green-600 animate-bounce" style={{ animationDuration: '3s' }}>
        <i className="fa-brands fa-whatsapp"></i>
    </a>

    {/*  Scripts  */}
    
    
    
    
    {/*  Google Translate Script  */}
    
    
    
    

        </main>
    );
}

