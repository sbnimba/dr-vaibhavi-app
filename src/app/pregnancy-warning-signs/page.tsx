"use client";
import React from 'react';
import Link from 'next/link';

export default function PregnancyWarningSigns() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-rose-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-rose-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-rose-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-rose-50 text-rose-800 font-bold text-xs sm:text-sm hover:bg-rose-100 transition shadow-sm border border-rose-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-rose-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-rose-800 tracking-wider uppercase">Maternal Health Awareness</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            What Are the Warning Signs During Pregnancy <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">That Should Never Be Ignored?</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            An essential guide to identifying urgent symptoms, understanding when to seek immediate medical care, and protecting both mother and baby.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-rose-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-rose-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-rose-500"></i>
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
                                src="images/pregnancy_warning_signs.png" 
                                alt="Pregnancy Warning Signs Urgent Medical Care Maternal Health" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🚨 <strong>Timely care saves lives:</strong> Pregnancy brings many normal physical changes, but some symptoms indicate serious complications that require immediate medical attention.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy brings many normal physical and emotional changes, but some symptoms may indicate serious complications that require immediate medical attention.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Understanding warning signs during pregnancy can help mothers seek timely care and protect both maternal and baby health. While many pregnancies progress smoothly, it is absolutely essential to know when symptoms are not normal.
                            </p>
                        </div>

                        {/* 10 Warning Signs Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-triangle-exclamation text-rose-600 text-xl sm:text-2xl"></i>
                                Warning Signs During Pregnancy
                            </h2>

                            <div className="space-y-6">
                                {/* Sign 1 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Heavy Vaginal Bleeding</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Light spotting may sometimes occur in pregnancy, especially early on, but heavy bleeding should never be ignored. Heavy bleeding may indicate miscarriage, placental problems (placenta previa or abruption), ectopic pregnancy, or preterm complications. Immediate medical evaluation is necessary.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 2 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Severe Abdominal Pain</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Mild stretching discomfort can be normal, but severe or persistent abdominal pain is not. Pain associated with bleeding, fever, vomiting, or dizziness requires urgent medical attention.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 3 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Severe Headache or Blurred Vision</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Persistent severe headache, vision problems (blurring, flashing lights), or sudden excessive swelling may indicate <strong>Preeclampsia</strong>, which is a serious pregnancy complication related to dangerous high blood pressure.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 4 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Reduced Baby Movements</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Baby movements are an important sign of fetal wellbeing. Most mothers begin feeling movements around 18–22 weeks of pregnancy. If movements suddenly decrease or stop completely, contact your doctor immediately.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 5 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">High Fever</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Fever during pregnancy may indicate a severe underlying infection. High fever associated with chills, cough, severe pain, or profound weakness should always be medically evaluated without delay.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 6 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Persistent Vomiting & Dehydration</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Morning sickness is common, but severe vomiting causing inability to keep food down, severe dehydration, dizziness, or reduced urination (hyperemesis gravidarum) requires intravenous fluids and medical management.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 7 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">7</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Sudden Swelling of Face, Hands, or Feet</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Mild swelling can occur during pregnancy, but sudden excessive swelling (edema) in the hands or face is a classic warning sign of preeclampsia or fluid imbalance.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 8 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">8</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Leaking Fluid From the Vagina</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Continuous watery discharge or sudden fluid leakage indicates rupture of membranes (“water breaking”). This requires prompt medical assessment, especially if it occurs before full-term pregnancy (PPROM).
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 9 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">9</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Difficulty Breathing or Chest Pain</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Breathing difficulty, sudden chest pain, or severe weakness should never be ignored during pregnancy. Immediate medical care is paramount.
                                        </p>
                                    </div>
                                </div>

                                {/* Sign 10 */}
                                <div className="bg-[#FAF9F6] border border-rose-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg shrink-0">10</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Pain or Burning During Urination</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Urinary tract infections (UTIs) are common during pregnancy and can lead to kidney infections or preterm labor if left untreated. Symptoms include burning urination, fever, lower abdominal pain, and extreme urgency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Normal vs Urgent Split Grid */}
                        <div className="border-t border-gray-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-emerald-950 text-lg sm:text-xl m-0 flex items-center gap-2">
                                    <i className="fa-solid fa-circle-check text-emerald-600"></i> What Symptoms Are Usually Normal?
                                </h3>
                                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed m-0 font-medium">
                                    Some common pregnancy symptoms are expected and completely normal:
                                </p>
                                <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 font-semibold">
                                    <li>✓ Mild morning nausea</li>
                                    <li>✓ General fatigue</li>
                                    <li>✓ Mild stretching backache</li>
                                    <li>✓ Breast tenderness</li>
                                    <li>✓ Mild ankle swelling after standing</li>
                                    <li>✓ Food cravings</li>
                                </ul>
                            </div>

                            <div className="bg-rose-50 border border-rose-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-rose-950 text-lg sm:text-xl m-0 flex items-center gap-2">
                                    <i className="fa-solid fa-phone-volume text-rose-600 animate-pulse"></i> When to Call Your Doctor Immediately
                                </h3>
                                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed m-0 font-medium">
                                    Seek urgent medical care if you experience any of these red flags:
                                </p>
                                <ul className="space-y-2 text-xs sm:text-sm text-rose-950 font-bold">
                                    <li>⚠️ Heavy vaginal bleeding</li>
                                    <li>⚠️ Severe abdominal pain</li>
                                    <li>⚠️ Reduced or stopped baby movements</li>
                                    <li>⚠️ Severe headache / blurred vision</li>
                                    <li>⚠️ High fever / extreme chills</li>
                                    <li>⚠️ Fluid leakage / sudden severe swelling</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Early Medical Attention Matters Box */}
                        <div className="bg-gradient-to-br from-rose-900 via-red-900 to-rose-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-rose-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide m-0">
                                    Why Early Medical Attention Matters
                                </h2>
                                <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium m-0">
                                    Early treatment is the single most powerful tool in obstetric care. Timely medical evaluation helps:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-rose-950 pt-2">
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🛡️ Prevent severe complications</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">👶 Protect baby’s health</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">📈 Improve pregnancy outcomes</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm text-center">🏥 Reduce risks during delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Tips for a Safer Pregnancy Grid */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-shield-halved text-rose-600 text-xl sm:text-2xl"></i>
                                Tips for a Safer Pregnancy
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Maintain peace of mind and protect your pregnancy journey with these vital habits:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">📅</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Attend Regular Checkups</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">👶</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Monitor Baby Movements</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Eat Nutritious Meals</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">💧</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Stay Well Hydrated Daily</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">💊</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Take Prescribed Supplements</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🚫</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Avoid Smoking & Alcohol</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Most pregnancies progress safely, but understanding warning signs is extremely important for protecting both mother and baby. Never ignore symptoms that feel severe, unusual, or sudden during pregnancy.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Timely medical care can make a significant difference in ensuring a healthy pregnancy journey. Please consult your gynecologist immediately if you notice any warning signs or concerning symptoms during pregnancy.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-rose-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Experiencing Concerning Symptoms?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Do not wait. Consult Dr. Vaibhavi Dhenge immediately for urgent obstetric evaluation, fetal heartbeat monitoring, and expert clinical management.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-rose-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-rose-400/30 outline-none">
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
