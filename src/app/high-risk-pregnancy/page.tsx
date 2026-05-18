"use client";
import React from 'react';
import Link from 'next/link';

export default function HighRiskPregnancy() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-amber-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-amber-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-amber-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-amber-50 text-amber-800 font-bold text-xs sm:text-sm hover:bg-amber-100 transition shadow-sm border border-amber-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Back to Home
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-amber-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-amber-800 tracking-wider uppercase">Specialized Maternal Care</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Understanding High-Risk Pregnancy: <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Warning Signs & Care</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            A comprehensive guide to identifying risk factors, understanding clinical monitoring protocols, and managing specialized maternal-fetal healthcare.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-amber-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-amber-500"></i>
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
                                src="images/high_risk_pregnancy.png" 
                                alt="High Risk Pregnancy Blood Pressure Monitoring Maternal Care" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🩺 <strong>Expert medical monitoring:</strong> With early diagnosis, proper medical care, regular monitoring, and healthy lifestyle habits, many women with high-risk pregnancies go on to deliver healthy babies safely.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Every pregnancy is special, but some pregnancies require extra monitoring and medical attention due to increased health risks for the mother, baby, or both. These are clinically known as high-risk pregnancies.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                A high-risk pregnancy does not always mean something will go wrong. With early diagnosis, proper medical care, regular monitoring, and healthy lifestyle habits, many women with high-risk pregnancies go on to deliver healthy babies safely.
                            </p>

                            {/* What is High Risk Box */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-amber-950 text-xl sm:text-2xl m-0 flex items-center gap-3">
                                    <i className="fa-solid fa-circle-exclamation text-amber-600"></i> What is a High-Risk Pregnancy?
                                </h3>
                                <p className="text-gray-700 m-0 leading-relaxed font-medium">
                                    A pregnancy is considered high-risk when there is an increased chance of complications during pregnancy, labor, or delivery. These risks may directly affect:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-amber-950 pt-2">
                                    <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">👩‍🦰</span>
                                        <span>Mother’s health</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">👶</span>
                                        <span>Baby’s growth & development</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">🏥</span>
                                        <span>Pregnancy outcome</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Causes Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-list-check text-amber-600 text-xl sm:text-2xl"></i>
                                Common Causes of High-Risk Pregnancy
                            </h2>

                            <div className="space-y-6">
                                {/* Cause 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Maternal Age</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Pregnancy risks increase in women below 18 years and women above 35 years. Advanced maternal age significantly increases the chances of high blood pressure, gestational diabetes, chromosomal abnormalities, and delivery complications.
                                        </p>
                                    </div>
                                </div>

                                {/* Cause 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">High Blood Pressure During Pregnancy</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            High blood pressure affects placental blood flow, baby's growth, and maternal health. In severe cases, it can lead to preeclampsia, premature delivery, and maternal organ complications.
                                        </p>
                                    </div>
                                </div>

                                {/* Cause 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Gestational Diabetes</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Some women develop high blood sugar levels during pregnancy. Uncontrolled diabetes increases risks such as large baby size (macrosomia), premature birth, and delivery complications. Proper diet, exercise, and medical management are extremely important.
                                        </p>
                                    </div>
                                </div>

                                {/* Cause 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Twin or Multiple Pregnancy</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Pregnancies involving twins or triplets need much closer monitoring because they have higher chances of premature birth, low birth weight, and maternal complications.
                                        </p>
                                    </div>
                                </div>

                                {/* Cause 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Previous Pregnancy Complications</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            A history of recurrent miscarriage, previous C-section, preterm birth, stillbirth, or high blood pressure in a previous pregnancy increases pregnancy risk in future pregnancies.
                                        </p>
                                    </div>
                                </div>

                                {/* Cause 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Medical Conditions Before Pregnancy</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Certain pre-existing health problems make pregnancy high-risk, including thyroid disorders, pre-existing diabetes, heart disease, kidney disease, autoimmune disorders, and severe anemia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Warning Signs Box */}
                        <div className="bg-gradient-to-br from-rose-900 via-red-900 to-rose-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-rose-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-triangle-exclamation text-red-300"></i> Urgent Warning
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide m-0">
                                    Warning Signs That Should Never Be Ignored
                                </h2>
                                <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium m-0">
                                    Immediate medical attention is crucial if any of the following symptoms occur:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold text-rose-950 pt-2">
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🩸 Heavy bleeding</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">⚡ Severe abdominal pain</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🤕 Severe headache</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">👁️ Blurred vision</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🎈 Sudden swelling</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">📉 Reduced baby movements</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🌡️ High fever</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🤮 Persistent vomiting</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">💧 Leaking fluid</span>
                                </div>
                            </div>
                        </div>

                        {/* Monitoring Protocols & Baby Movement Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-stethoscope text-amber-600 text-xl sm:text-2xl"></i>
                                Clinical Monitoring Protocols
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                    <h3 className="font-serif font-bold text-amber-950 text-lg sm:text-xl m-0">How Doctors Monitor High-Risk Pregnancy</h3>
                                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed m-0 font-medium">
                                        High-risk pregnancies usually require specialized clinical surveillance:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-amber-950 font-semibold">
                                        <li>✓ More frequent antenatal checkups</li>
                                        <li>✓ Close blood pressure monitoring</li>
                                        <li>✓ Serial blood sugar testing</li>
                                        <li>✓ High-resolution growth ultrasounds</li>
                                        <li>✓ Fetal heartbeat monitoring (NST)</li>
                                        <li>✓ Advanced blood & genetic investigations</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                    <h3 className="font-serif font-bold text-blue-950 text-lg sm:text-xl m-0">Importance of Baby Movement Monitoring</h3>
                                    <p className="text-xs sm:text-sm text-blue-900 leading-relaxed m-0 font-medium">
                                        Baby movements are a direct sign of fetal wellbeing. Most mothers begin feeling movements around <strong>18–22 weeks</strong> of pregnancy.
                                    </p>
                                    <p className="text-xs sm:text-sm text-blue-950 font-bold m-0 bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                                        ⚠️ Reduced movements should always be discussed with Dr. Vaibhavi immediately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Lifestyle Tips Grid */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-heart-pulse text-amber-600 text-xl sm:text-2xl"></i>
                                Lifestyle Tips for High-Risk Pregnancy
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Support your body and your baby by maintaining these excellent daily habits:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">📅</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Attend All Appointments</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">💊</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Take Medicines as Prescribed</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Eat Healthy Balanced Meals</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">🩺</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Monitor BP & Sugar if Advised</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">💧</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Stay Well Hydrated Daily</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">😴</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Get Proper Rest & Reduce Stress</span>
                                </div>
                            </div>
                        </div>

                        {/* Myths vs Facts Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-balanced text-amber-600 text-xl sm:text-2xl"></i>
                                Common Myths About High-Risk Pregnancy
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“High-risk pregnancy means something bad will definitely happen.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Many high-risk pregnancies result in completely healthy deliveries with proper monitoring and timely medical care.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“Women with high-risk pregnancy must stay in bed all the time.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Activity recommendations depend entirely on the specific medical condition. Not all high-risk pregnancies require complete bed rest.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                A high-risk pregnancy requires extra attention, but with proper medical care, healthy lifestyle choices, and regular monitoring, many mothers experience successful pregnancies and healthy deliveries.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Never ignore warning signs or delay prenatal checkups during pregnancy. Please consult your gynecologist for proper evaluation, pregnancy monitoring, and personalized high-risk pregnancy care.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-amber-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Need Specialized High-Risk Pregnancy Care?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for expert maternal-fetal monitoring, advanced diagnostic ultrasounds, and a safe, reassuring care plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-amber-400/30 outline-none">
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
