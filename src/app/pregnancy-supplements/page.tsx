"use client";
import React from 'react';
import Link from 'next/link';

export default function PregnancySupplements() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-emerald-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-pills"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-emerald-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-emerald-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-100 transition shadow-sm border border-emerald-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Back to Home
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">Maternal Nutrition & Vitals</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            How Important Are Pregnancy Supplements <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Like Folic Acid and Iron?</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            An expert guide to essential micronutrients, daily recommended dosages, natural dietary sources, and protecting your baby's early development.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-emerald-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-emerald-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-emerald-500"></i>
                                <span>7 min read</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
                    {/* Featured Image */}
                    <div className="bg-white p-3 sm:p-4 rounded-[2rem] shadow-2xl border border-gray-100 mb-12">
                        <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/9] max-h-[450px] bg-gray-100">
                            <img 
                                src="images/pregnancy_supplements.png" 
                                alt="Pregnancy Supplements Folic Acid Iron Calcium Vitamins" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    💊 <strong>Essential nutrition for two:</strong> Along with a healthy diet, certain nutritional supplements become extremely important during pregnancy to support fetal organ development and prevent deficiencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy is a time when a woman’s body works harder than ever before to support the growth and development of the baby. Along with a healthy diet, certain nutritional supplements become extremely important during pregnancy.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Among the most essential supplements are Folic acid, Iron, Calcium, and Vitamin D. These nutrients help support the healthy development of the baby while protecting the mother from nutritional deficiencies and pregnancy-related complications.
                            </p>

                            {/* Why Important Callout Box */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-emerald-950 text-xl sm:text-2xl m-0 flex items-center gap-3">
                                    <i className="fa-solid fa-shield-halved text-emerald-600"></i> Why Are Pregnancy Supplements Important?
                                </h3>
                                <p className="text-gray-700 m-0 leading-relaxed font-medium">
                                    During pregnancy, the body’s nutritional needs increase significantly. Even women with highly healthy diets require supplements to:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-emerald-950 pt-2">
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">🧠</span>
                                        <span>Support baby’s organ development</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">🛡️</span>
                                        <span>Prevent neural tube birth defects</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">🩸</span>
                                        <span>Reduce anemia and weakness</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">❤️</span>
                                        <span>Support healthy blood production</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">👩</span>
                                        <span>Improve maternal health & immunity</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">🦴</span>
                                        <span>Support bone and brain development</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Folic Acid Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-capsules text-emerald-600 text-xl sm:text-2xl"></i>
                                Folic Acid: The Core Pregnancy Vitamin
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Folic acid is especially important during early pregnancy because it helps in the formation of the baby’s brain, spinal cord, and nervous system. It plays a major role in preventing neural tube defects (NTDs) like spina bifida. Neural tube development occurs very early in pregnancy, often before many women even realize they are pregnant.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl shadow-sm space-y-3">
                                    <h3 className="font-serif font-bold text-emerald-950 text-lg m-0">Recommended Folic Acid Intake</h3>
                                    <p className="text-xs sm:text-sm text-emerald-900 m-0 leading-relaxed">
                                        Doctors commonly advise <strong>400–600 μg folic acid daily</strong> during pregnancy planning and throughout early pregnancy. Some high-risk women may require higher doses under medical supervision.
                                    </p>
                                </div>
                                <div className="bg-teal-50 border border-teal-200 p-6 rounded-3xl shadow-sm space-y-3">
                                    <h3 className="font-serif font-bold text-teal-950 text-lg m-0">Natural Sources of Folate</h3>
                                    <p className="text-xs sm:text-sm text-teal-900 m-0 leading-relaxed">
                                        Foods rich in folate include spinach, broccoli, lentils, beans, citrus fruits, and green leafy vegetables. However, diet alone may not always provide adequate amounts during pregnancy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Iron Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-droplet text-red-600 text-xl sm:text-2xl"></i>
                                Why is Iron Important During Pregnancy?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Iron helps the body produce more blood to supply oxygen to both mother and baby. During pregnancy, maternal blood volume increases significantly (by up to 50%), dramatically increasing iron requirements. Low iron levels can lead to anemia, weakness, fatigue, dizziness, and breathlessness. Severe anemia also increases pregnancy complications.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-rose-50 border border-rose-200 p-6 rounded-3xl shadow-sm space-y-3">
                                    <h3 className="font-serif font-bold text-rose-950 text-lg m-0">Recommended Iron Intake</h3>
                                    <p className="text-xs sm:text-sm text-rose-900 m-0 leading-relaxed">
                                        Pregnant women usually require <strong>27–35 mg elemental iron per day</strong>, depending on individual health needs and hemoglobin levels.
                                    </p>
                                    <p className="text-xs text-rose-950 font-bold m-0 pt-1">
                                        💡 Taking iron with Vitamin C-rich foods (like orange juice) significantly improves absorption!
                                    </p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl shadow-sm space-y-3">
                                    <h3 className="font-serif font-bold text-amber-950 text-lg m-0">Iron-Rich Foods</h3>
                                    <p className="text-xs sm:text-sm text-amber-900 m-0 leading-relaxed">
                                        Good dietary sources include green leafy vegetables, dates, beetroot, rajma (kidney beans), jaggery, eggs, and lean meat.
                                    </p>
                                </div>
                            </div>

                            {/* Side Effects Box */}
                            <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                                <span className="w-8 h-8 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center font-bold shrink-0 mt-0.5">ℹ️</span>
                                <div className="space-y-1 w-full">
                                    <h4 className="font-serif font-bold text-gray-900 text-base m-0">Common Side Effects of Iron Supplements</h4>
                                    <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                        Some women may experience temporary side effects like constipation, acidity, nausea, or dark stools. Doctors can easily adjust the timing or type of iron supplement if side effects occur.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other Supplements Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-tablets text-emerald-600 text-xl sm:text-2xl"></i>
                                Other Important Pregnancy Supplements
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">🦴</span>
                                    <h4 className="font-serif font-bold text-gray-900 text-base m-0">Calcium</h4>
                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Supports baby’s bones and teeth as well as maternal bone health. Common requirement: <strong>1000 mg/day</strong>.</p>
                                </div>
                                <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">☀️</span>
                                    <h4 className="font-serif font-bold text-gray-900 text-base m-0">Vitamin D</h4>
                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Helps calcium absorption and supports overall maternal immunity and fetal bone health.</p>
                                </div>
                                <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg">🐟</span>
                                    <h4 className="font-serif font-bold text-gray-900 text-base m-0">DHA & Omega-3</h4>
                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Supports baby’s brain and eye development. Some mothers may be advised DHA supplements during pregnancy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Can Supplements Replace Food Box */}
                        <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-teal-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide m-0">
                                    Can Supplements Replace Healthy Food?
                                </h2>
                                <p className="text-teal-200 text-base font-bold m-0">
                                    No.
                                </p>
                                <p className="text-teal-50 text-xs sm:text-sm leading-relaxed font-medium m-0">
                                    Supplements are meant to support nutrition — not replace a balanced diet. Healthy pregnancy nutrition should still include:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-bold text-teal-950 pt-2">
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🍎 Fruits</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🥦 Vegetables</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🥚 Protein</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🌾 Whole Grains</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">💧 Fluids</span>
                                </div>
                            </div>
                        </div>

                        {/* Myths vs Facts Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-balanced text-emerald-600 text-xl sm:text-2xl"></i>
                                Common Myths About Pregnancy Supplements
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“If I eat healthy food, I don’t need any supplements.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Pregnancy nutritional demands are significantly higher than normal, and supplements are often still necessary to prevent maternal depletion.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“Taking extra vitamins will make the baby healthier.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Excessive supplementation without medical advice can sometimes be harmful. Always follow prescribed doses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Pregnancy supplements like folic acid and iron play a major role in supporting healthy pregnancy and baby development. Along with a balanced diet and regular prenatal care, these nutrients help reduce complications and improve maternal wellbeing.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Never start or stop supplements without medical advice. Please consult your gynecologist for proper pregnancy nutrition guidance and personalized supplement recommendations.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-emerald-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Need Personalized Pregnancy Nutrition Advice?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for a customized prenatal supplement schedule, comprehensive hemoglobin tracking, and expert maternal care.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/30 outline-none">
                                    <i className="fa-regular fa-calendar-check text-base animate-bounce"></i> Book Consultation
                                </Link>
                                <a href="https://wa.me/919284880359" target="_blank" className="w-full sm:w-auto bg-green-500 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-green-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 outline-none">
                                    <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Consult
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
