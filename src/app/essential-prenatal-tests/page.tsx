"use client";
import React from 'react';
import Link from 'next/link';

export default function EssentialPrenatalTests() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-blue-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-vials"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-blue-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-blue-600 font-bold tracking-widest">Consultant Obstetrician & Gynecologist</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-100 transition shadow-sm border border-blue-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-blue-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">Prenatal Care & Diagnostics</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Essential Prenatal Tests <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Every Mother Should Know About</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            A comprehensive guide to routine blood tests, ultrasound scans, and genetic screenings that ensure a safe, healthy pregnancy for you and your baby.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-blue-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-blue-500"></i>
                                <span>MBBS, MS (OBGY)</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-blue-500"></i>
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
                                src="images/prenatal_tests.png" 
                                alt="Essential Prenatal Tests Ultrasound Blood Tests Maternal Care" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🔬 <strong>Advanced medical care for your baby:</strong> Regular prenatal tests help doctors monitor both maternal health and fetal development throughout pregnancy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy is a beautiful journey, but it also comes with many responsibilities. Regular prenatal tests help doctors monitor both the mother’s health and the baby’s development throughout pregnancy.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                These tests are incredibly important because they help detect problems early, prevent complications, and ensure safer pregnancy care for both mother and baby.
                            </p>

                            {/* Why Are Prenatal Tests Important Callout Box */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                                <h3 className="font-serif font-bold text-blue-950 text-xl sm:text-2xl mb-4 flex items-center gap-3">
                                    <i className="fa-solid fa-shield-halved text-blue-600"></i> Why Are Prenatal Tests Important?
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                                    Regular checkups and diagnostic investigations are one of the most vital parts of healthy pregnancy care. They help obstetricians:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-blue-950">
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">👶</span>
                                        <span>Monitor baby’s overall growth</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">⚠️</span>
                                        <span>Detect pregnancy complications early</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">❤️</span>
                                        <span>Check mother’s overall health</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">🩸</span>
                                        <span>Identify infections or anemia</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">🧠</span>
                                        <span>Monitor baby’s organ development</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">🏥</span>
                                        <span>Ensure safer delivery planning</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 12 Important Tests Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-file-medical text-blue-600 text-xl sm:text-2xl"></i>
                                Important Prenatal Tests During Pregnancy
                            </h2>

                            <div className="space-y-6">
                                {/* Test 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Pregnancy Confirmation Test</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            The very first step is confirming pregnancy through a home urine pregnancy test, followed by a quantitative blood beta-hCG test if needed. Doctors also advise an early ultrasound to confirm the pregnancy location (ruling out ectopic pregnancy) and verify the fetal heartbeat.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">First Pregnancy Ultrasound (Dating Scan)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            This initial ultrasound confirms the pregnancy is developing safely inside the uterus, checks the baby's heartbeat, accurately estimates the due date (EDD), and detects multiple pregnancies (twins/triplets).
                                        </p>
                                        <div className="bg-blue-50 text-blue-900 p-3 rounded-xl text-xs font-bold inline-block border border-blue-100">
                                            📅 Usually performed around 6–8 weeks of pregnancy.
                                        </div>
                                    </div>
                                </div>

                                {/* Test 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Blood Group & Rh Typing</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Checks your ABO blood group and Rh factor. Rh-negative mothers carrying an Rh-positive baby require specialized monitoring and Anti-D immunoglobulins at specific intervals to prevent Rh incompatibility complications.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Hemoglobin Test (CBC)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Hemoglobin testing detects anemia, which is highly common during pregnancy due to increased blood volume. Low hemoglobin can cause weakness, fatigue, dizziness, and reduced oxygen supply to the baby.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Blood Sugar Test (OGTT)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Pregnancy hormones can sometimes lead to gestational diabetes. Blood sugar testing (Oral Glucose Tolerance Test) helps detect pre-existing diabetes or high sugar levels developing during pregnancy. Early diagnosis prevents excessive fetal weight gain and delivery complications.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Thyroid Function Test (TSH)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Thyroid hormones are absolutely vital for your baby's early brain development, maternal metabolism, and healthy pregnancy progression. Thyroid imbalances require prompt medication adjustment and regular follow-up.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 7 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">7</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Routine Urine Examination</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Detects asymptomatic urinary tract infections (UTIs), sugar in urine, protein leakage (a screening sign for preeclampsia), and kidney function issues. Treating UTIs early prevents preterm labor.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 8 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">8</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">NT Scan (Nuchal Translucency Scan)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            A specialized high-resolution ultrasound that measures the fluid at the back of the baby's neck to screen for chromosomal abnormalities (like Down syndrome) and major congenital heart defects.
                                        </p>
                                        <div className="bg-blue-50 text-blue-900 p-3 rounded-xl text-xs font-bold inline-block border border-blue-100">
                                            📅 Usually performed between 11–14 weeks of pregnancy.
                                        </div>
                                    </div>
                                </div>

                                {/* Test 9 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">9</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Double Marker Test</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            A maternal blood screening test combined directly with the NT scan to calculate the statistical risk of chromosomal conditions. It helps identify pregnancies that may benefit from advanced non-invasive prenatal testing (NIPT) or diagnostic sampling.
                                        </p>
                                    </div>
                                </div>

                                {/* Test 10 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">10</span>
                                    <div className="space-y-3 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Anomaly Scan (Targeted Imaging for Fetal Anomalies)</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            One of the most crucial pregnancy scans. The anomaly scan performs a head-to-toe anatomical evaluation of the baby's developing organs, including the brain, heart chambers, spine, kidneys, limbs, facial structures, and placenta location.
                                        </p>
                                        <div className="bg-blue-50 text-blue-900 p-3 rounded-xl text-xs font-bold inline-block border border-blue-100">
                                            📅 Usually performed around 18–22 weeks of pregnancy.
                                        </div>
                                    </div>
                                </div>

                                {/* Test 11 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">11</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Growth Scans During Late Pregnancy</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Conducted during the third trimester to monitor the baby's estimated fetal weight, presentation (head-down vs breech), placenta maturity, Doppler blood flow, and amniotic fluid levels (AFI).
                                        </p>
                                    </div>
                                </div>

                                {/* Test 12 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">12</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Infection Screening Tests</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Routine blood screenings for viral and bacterial infections such as HIV, Hepatitis B (HBsAg), Syphilis (VDRL), and Rubella antibodies. Early detection allows doctors to take preventive measures during delivery to protect the newborn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Are All Tests Necessary Box */}
                        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-indigo-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-user-doctor text-blue-300"></i> Expert Advice
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                                    Are All Prenatal Tests Necessary?
                                </h2>
                                <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed font-medium">
                                    Most prenatal tests listed above are international routine standards and essential for healthy pregnancy care. However, additional specialized tests may be advised depending on:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold text-indigo-950">
                                    <span className="bg-white p-3 rounded-xl shadow-sm">🤰 Maternal Age</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm">🏥 Medical History</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm">🔄 Past Pregnancies</span>
                                    <span className="bg-white p-3 rounded-xl shadow-sm">⚠️ High-Risk Factors</span>
                                </div>
                                <p className="text-xs sm:text-sm text-blue-200 italic m-0 font-medium">
                                    💡 Dr. Vaibhavi will customize your diagnostic schedule to match your precise individual pregnancy needs, avoiding unnecessary testing while ensuring absolute safety.
                                </p>
                            </div>
                        </div>

                        {/* Myths vs Facts Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-balanced text-blue-600 text-xl sm:text-2xl"></i>
                                Common Myths About Pregnancy Tests
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“Too many ultrasounds are harmful to the baby.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Routine obstetric ultrasounds use non-ionizing sound waves (not radiation). They are considered completely safe and are crucial for monitoring baby’s health.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“If I feel perfectly healthy, I don’t need any tests.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Many pregnancy complications (like gestational diabetes, anemia, or mild preeclampsia) develop silently without any obvious symptoms. Regular testing detects them early.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips for Mothers Grid */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-list-check text-blue-600 text-xl sm:text-2xl"></i>
                                Tips for Mothers During Pregnancy Checkups
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Keep your antenatal care smooth, stress-free, and highly effective with these helpful habits:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">📅</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Never Skip Antenatal Visits</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">📁</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Keep All Reports Organized</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">💊</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Follow Supplement Advice</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Maintain a Nutritious Diet</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">💧</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Stay Well Hydrated</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">💬</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Discuss Concerns Openly</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Prenatal tests are an important part of pregnancy care and help ensure the safety and wellbeing of both mother and baby. Regular monitoring allows early detection of problems and helps doctors provide better pregnancy management.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Every pregnancy is unique, and tests may vary depending on individual health conditions. Please consult your gynecologist for proper prenatal care, pregnancy monitoring, and personalized medical advice.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-blue-50">
                                <img src="/dr-vaibhavi-clinic/images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Need Expert Prenatal Care & Diagnostics?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for advanced obstetric ultrasounds, routine antenatal screenings, and a highly personalized pregnancy care plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-blue-400/30 outline-none">
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
