"use client";
import React from 'react';
import Link from 'next/link';

export default function EarlySignsPregnancy() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-pink-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-person-pregnant"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-pink-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-pink-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-pink-50 text-pink-700 font-bold text-xs sm:text-sm hover:bg-pink-100 transition shadow-sm border border-pink-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-primary-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-pink-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-pink-700 tracking-wider uppercase">Pregnancy Care & Antenatal Guide</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Early Signs of Pregnancy: <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">What’s Normal & What’s Not</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Understanding the physical and emotional changes during your first trimester to help you feel confident, prepared, and aware of warning signs.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-pink-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-pink-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-pink-500"></i>
                                <span>6 min read</span>
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
                                src="images/early_signs_pregnancy.png" 
                                alt="Early Signs of Pregnancy Normal Warning Signs Maternal Wellness" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🌸 <strong>A beautiful new chapter begins:</strong> Nurturing your body and understanding early pregnancy signals with professional medical guidance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy is an exciting journey, but the early weeks can also bring many questions and concerns. During the first trimester, the body goes through several hormonal and physical changes that can cause different symptoms.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Some symptoms are completely normal, while others may need medical attention. Understanding these early signs can help mothers feel more confident and aware during pregnancy.
                            </p>
                        </div>

                        {/* Common Early Signs Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-clipboard-list text-pink-600 text-xl sm:text-2xl"></i>
                                Common Early Signs of Pregnancy
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Every woman experiences pregnancy differently. Some notice symptoms very early, while others may have mild or almost no symptoms at all.
                            </p>

                            <div className="space-y-6">
                                {/* Point 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Missed Period</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            A missed period is often the first and most noticeable sign of pregnancy. If your menstrual cycles are usually regular and your period is delayed, taking a home pregnancy test is highly recommended.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Nausea & Morning Sickness</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Morning sickness is very common during early pregnancy. Despite the name, it can happen at any time of the day or night.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-gray-800">
                                            <span className="bg-pink-50/50 p-2 rounded-lg text-center border border-pink-100/50">🤢 Nausea</span>
                                            <span className="bg-pink-50/50 p-2 rounded-lg text-center border border-pink-100/50">🤮 Vomiting</span>
                                            <span className="bg-pink-50/50 p-2 rounded-lg text-center border border-pink-100/50">🥗 Food Aversions</span>
                                            <span className="bg-pink-50/50 p-2 rounded-lg text-center border border-pink-100/50">👃 Smell Sensitivity</span>
                                        </div>
                                        <p className="text-xs text-pink-700 font-bold m-0">
                                            ⭐ Morning sickness commonly begins around 6–8 weeks of pregnancy.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Breast Tenderness</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Hormonal changes can make breasts feel heavy, swollen, sensitive, or painful. The areola (area around the nipples) may also become darker.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Extreme Tiredness</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Feeling unusually tired or sleepy is very common during early pregnancy because the body is working much harder to support the growing baby and producing higher levels of progesterone.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Frequent Urination</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Many women feel the urge to urinate more frequently during early pregnancy due to hormonal changes, expanding uterine volume, and increased blood circulation through the kidneys.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Mood Swings</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Pregnancy hormones can significantly affect emotions. It is completely common to experience mood swings, emotional sensitivity, irritability, or anxiety.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 7 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg shrink-0">7</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Mild Cramping & Bloating</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Light cramps or bloating may occur as the uterus begins to expand. Mild discomfort without heavy bleeding is usually a normal part of early uterine growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Normal vs NOT Normal Split Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-unbalanced text-pink-600 text-xl sm:text-2xl"></i>
                                What is Normal vs. What is NOT Normal?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Normal Symptoms */}
                                <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                                        <i className="fa-solid fa-circle-check"></i> Usually Normal
                                    </div>
                                    <h3 className="font-serif font-bold text-emerald-950 text-lg sm:text-xl m-0">Common Normal Symptoms</h3>
                                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed m-0 font-medium">
                                        These symptoms are generally caused by normal hormonal surges and early fetal development:
                                    </p>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950 font-semibold">
                                        <li className="flex items-center gap-2"><span>✓</span> Mild nausea & morning sickness</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Fatigue & extra sleepiness</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Breast soreness & heaviness</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Mild pelvic cramps (without bleeding)</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Mood changes & emotional sensitivity</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Food cravings or aversions</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Increased urination frequency</li>
                                    </ul>
                                </div>

                                {/* Warning Signs (NOT Normal) */}
                                <div className="bg-rose-50 border border-rose-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                                        <i className="fa-solid fa-triangle-exclamation"></i> Warning Signs (Not Normal)
                                    </div>
                                    <h3 className="font-serif font-bold text-rose-950 text-lg sm:text-xl m-0">Require Immediate Medical Care</h3>
                                    <p className="text-xs sm:text-sm text-rose-900 leading-relaxed m-0 font-medium">
                                        Some symptoms should never be ignored and require prompt evaluation by your gynecologist:
                                    </p>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950 font-semibold">
                                        <li className="flex items-center gap-2"><span>✕</span> Heavy vaginal bleeding or spotting</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Severe abdominal or pelvic pain</li>
                                        <li className="flex items-center gap-2"><span>✕</span> High fever or severe chills</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Severe vomiting causing dehydration</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Fainting, severe dizziness, or weakness</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Difficulty breathing or chest pain</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Severe, persistent headaches</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* When Should You Take a Test Box */}
                        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-purple-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-vial text-pink-300"></i> Testing Guide
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                                    When Should You Take a Pregnancy Test?
                                </h2>
                                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                                    Home pregnancy tests detect the presence of hCG (human chorionic gonadotropin) in urine. They are usually most reliable when taken:
                                </p>
                                <div className="bg-white p-4 rounded-2xl text-center text-purple-950 font-serif font-bold text-base sm:text-lg shadow-md">
                                    1–2 weeks after a missed period
                                </div>
                                <p className="text-xs sm:text-sm text-pink-200 italic m-0 font-medium">
                                    💡 For proper clinical confirmation, accurate dating ultrasound, and early prenatal guidance, schedule an early pregnancy checkup with Dr. Vaibhavi.
                                </p>
                            </div>
                        </div>

                        {/* Tips for Healthy Early Pregnancy */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-heart-circle-check text-pink-600 text-xl sm:text-2xl"></i>
                                Tips for a Healthy Early Pregnancy
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Adopting healthy daily habits during your first trimester builds a strong foundation for your baby’s development:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Eating Nutritious Meals</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">💧</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Staying Well Hydrated</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">💊</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Taking Folic Acid Supplements</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">😴</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Getting Enough Sleep (7-8 hrs)</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">🚫</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Avoiding Smoking & Alcohol</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg shrink-0">🩺</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Regular Prenatal Checkups</span>
                                </div>
                            </div>
                        </div>

                        {/* Myths vs Facts Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-balanced text-pink-600 text-xl sm:text-2xl"></i>
                                Common Myths About Early Pregnancy
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“If you don’t have symptoms, something is wrong.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Some women experience very mild symptoms and still have perfectly healthy pregnancies.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“Morning sickness only happens in the morning.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Nausea and vomiting can occur at absolutely anytime during the day or night.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                The early weeks of pregnancy bring many changes to the body and emotions. While most symptoms are completely normal, understanding warning signs is equally important.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Every pregnancy is unique, and symptoms may vary from woman to woman. Please consult your gynecologist for proper pregnancy care, confirmation, and personalized medical advice.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-pink-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Experiencing Early Pregnancy Signs?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for an expert early pregnancy ultrasound, essential prenatal blood tests, and a comprehensive first-trimester care plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-pink-600 via-rose-600 to-primary-500 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-pink-400/30 outline-none">
                                    <i className="fa-regular fa-calendar-check text-base animate-bounce"></i> Book Consultation
                                </Link>

                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
