"use client";
import React from 'react';
import Link from 'next/link';

export default function BabyGrowthPregnancy() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-teal-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-teal-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-teal-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-teal-50 text-teal-700 font-bold text-xs sm:text-sm hover:bg-teal-100 transition shadow-sm border border-teal-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Back to Home
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-teal-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-teal-700 tracking-wider uppercase">Fetal Development & Milestones</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Baby Growth Month-by-Month <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">During Pregnancy</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Follow your baby's incredible journey from a tiny cluster of cells to a fully developed newborn, exploring major developmental milestones every single month.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-teal-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-teal-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-teal-500"></i>
                                <span>8 min read</span>
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
                                src="images/baby_growth_pregnancy.png" 
                                alt="Baby Growth Month by Month Pregnancy Milestones Fetal Development" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🌱 <strong>A miraculous transformation:</strong> From a tiny group of cells to a beautiful newborn, each stage of pregnancy brings incredible milestones for mother and baby.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy is an incredible journey where your baby grows and develops rapidly every month. From a tiny group of cells to a fully developed newborn, each stage of pregnancy brings important milestones for both mother and baby.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Understanding baby growth month-by-month helps parents feel much more connected, informed, and prepared throughout pregnancy.
                            </p>
                        </div>

                        {/* Month by Month Sections */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-calendar-days text-teal-600 text-xl sm:text-2xl"></i>
                                Month-by-Month Fetal Development
                            </h2>

                            <div className="space-y-6">
                                {/* Month 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M1</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">First Month (1–4 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍚 Size: Grain of Rice</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            During the first month, fertilization takes place, and the rapidly dividing embryo attaches securely to the lining of the uterus. The placenta, which will nourish your baby, begins to form along with early hormonal surges.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                                            <span className="bg-teal-50/50 p-2 rounded-lg border border-teal-100/50">✨ Fertilization & Implantation</span>
                                            <span className="bg-teal-50/50 p-2 rounded-lg border border-teal-100/50">🧬 Placenta & Amniotic Sac Form</span>
                                        </div>
                                        <p className="text-xs text-teal-700 font-bold m-0 italic">
                                            ⭐ At this early stage, many mothers may not even realize they are pregnant yet.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M2</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Second Month (5–8 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🫐 Size: Raspberry</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            This is a highly critical stage because major organs begin developing rapidly. The baby's heart starts beating, the neural tube (forming the brain and spinal cord) develops, tiny arm and leg buds appear, and early facial features begin forming.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-gray-800">
                                            <span className="bg-teal-50/50 p-2 rounded-lg text-center border border-teal-100/50">❤️ Heart Beating</span>
                                            <span className="bg-teal-50/50 p-2 rounded-lg text-center border border-teal-100/50">🧠 Brain Forming</span>
                                            <span className="bg-teal-50/50 p-2 rounded-lg text-center border border-teal-100/50">🦵 Limb Buds</span>
                                            <span className="bg-teal-50/50 p-2 rounded-lg text-center border border-teal-100/50">😊 Facial Features</span>
                                        </div>
                                        <p className="text-xs text-teal-700 font-bold m-0 italic">
                                            ⭐ Morning sickness and fatigue commonly increase during this period.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M3</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Third Month (9–12 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍋 Size: Lemon</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            By the end of the first trimester, distinct fingers and toes develop, and the baby starts making small reflex movements. The heartbeat can clearly be seen and heard on ultrasound, and all major organ systems are fully formed.
                                        </p>
                                        <p className="text-xs text-emerald-700 font-bold m-0 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                            🎉 The statistical risk of miscarriage reduces significantly after passing this milestone!
                                        </p>
                                    </div>
                                </div>

                                {/* Month 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M4</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Fourth Month (13–16 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🥑 Size: Avocado</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            The second trimester begins, and many mothers start feeling much better physically as morning sickness fades. The baby's bones become stronger, facial expressions develop, fine hair (lanugo) begins growing, and the baby becomes highly active inside the womb.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M5</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Fifth Month (17–20 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍌 Size: Banana</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            This is an incredibly exciting month because mothers begin feeling gentle fluttery baby movements. These magical first movements are clinically called <strong>Quickening</strong>. The baby's hearing develops, muscles grow stronger, and distinct sleep-wake patterns begin forming.
                                        </p>
                                        <div className="bg-white p-3 rounded-xl border border-gray-100 text-xs text-teal-900 font-bold">
                                            🩺 The comprehensive Anomaly Scan is commonly performed during this stage.
                                        </div>
                                    </div>
                                </div>

                                {/* Month 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M6</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Sixth Month (21–24 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🌽 Size: Ear of Corn</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Baby's growth becomes much more noticeable. Skin develops further (covered by a protective waxy coating called vernix), eyelids begin opening, the baby actively responds to external sounds and voices, and kicking movements become significantly stronger. Lungs are developing but remain immature.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 7 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M7</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Seventh Month (25–28 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍆 Size: Large Eggplant</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            The third trimester officially begins. The baby's brain develops rapidly, body fat increases to help regulate temperature, eyes open and close, and kicking becomes vigorous. Many babies begin changing their position inside the uterus during this time.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 8 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M8</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Eighth Month (29–32 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍈 Size: Cantaloupe Melon</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            The baby gains significant weight, lungs continue maturing, bones become fully developed but soft, and the baby actively practices breathing movements. Because the baby is growing rapidly, mothers may experience increased back pain, breathlessness, or sleep discomfort.
                                        </p>
                                    </div>
                                </div>

                                {/* Month 9 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif font-bold text-lg shrink-0">M9</span>
                                    <div className="space-y-3 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Ninth Month (33–36 Weeks)</h3>
                                            <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold border border-teal-100">🍍 Size: Pineapple</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            The baby continues preparing for birth. Most babies move into a vertex (head-down) position during this stage. The brain and lungs mature further, weight increases steadily, and movements may feel stronger but less spacious due to tight quarters.
                                        </p>
                                    </div>
                                </div>

                                {/* Full Term */}
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-serif font-bold text-lg shrink-0 shadow-md">🎉</span>
                                    <div className="space-y-2 w-full">
                                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 pb-2">
                                            <h3 className="font-serif font-bold text-emerald-950 text-base sm:text-lg m-0">Full-Term Pregnancy (37–40 Weeks)</h3>
                                            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">🍉 Size: Watermelon</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-emerald-900 m-0 leading-relaxed font-medium">
                                            A pregnancy is considered full-term after reaching 37 weeks. By now, the baby's organs are fully developed, lungs are mature, and the baby is completely ready for life outside the womb. Labor can begin naturally at absolutely anytime during this period.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Questions Box */}
                        <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-teal-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-circle-question text-teal-300"></i> Parent FAQ
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide m-0">
                                    Common Questions About Baby Growth
                                </h2>

                                <div className="space-y-4 text-xs sm:text-sm">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-1">
                                        <h4 className="font-bold text-teal-200 text-sm sm:text-base m-0">“Is my baby growing normally?”</h4>
                                        <p className="text-teal-50 m-0 leading-relaxed">
                                            Doctors monitor growth accurately through serial ultrasounds, fundal height measurements during clinic visits, tracking daily baby movements, and maternal weight monitoring.
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-1">
                                        <h4 className="font-bold text-teal-200 text-sm sm:text-base m-0">“When will I feel baby movements?”</h4>
                                        <p className="text-teal-50 m-0 leading-relaxed">
                                            Most first-time mothers feel distinct fluttery movements between <strong>18–22 weeks</strong> of pregnancy.
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2">
                                        <h4 className="font-bold text-teal-200 text-sm sm:text-base m-0">“What affects baby growth?”</h4>
                                        <p className="text-teal-50 m-0 leading-relaxed">
                                            Proper fetal growth depends on several vital maternal and placental factors:
                                        </p>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-teal-950 font-bold text-xs pt-1">
                                            <span className="bg-white p-2 rounded-xl text-center shadow-sm">🥗 Maternal Nutrition</span>
                                            <span className="bg-white p-2 rounded-xl text-center shadow-sm">🩸 Placental Blood Flow</span>
                                            <span className="bg-white p-2 rounded-xl text-center shadow-sm">❤️ Maternal Health</span>
                                            <span className="bg-white p-2 rounded-xl text-center shadow-sm">⚠️ Blood Sugar / BP</span>
                                            <span className="bg-white p-2 rounded-xl text-center shadow-sm">🚫 Lifestyle Habits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips for Healthy Baby Growth Grid */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-seedling text-teal-600 text-xl sm:text-2xl"></i>
                                Tips for Healthy Baby Growth
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Support your baby's rapid monthly development by maintaining these excellent daily habits:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Eat Balanced Nutritious Meals</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">💊</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Take Prescribed Supplements</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">💧</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Stay Well Hydrated Daily</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">🩺</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Attend Regular Prenatal Checkups</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">😴</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Get Enough Rest & Sleep</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">🚫</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Avoid Smoking & Alcohol</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Every baby grows at their own pace, and small variations in growth are often completely normal. Regular prenatal care and healthy lifestyle habits help support proper fetal development throughout pregnancy.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Understanding month-by-month baby growth can help parents feel more prepared and emotionally connected during this beautiful journey. Please consult your gynecologist for regular pregnancy monitoring, ultrasounds, and personalized prenatal care.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-teal-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Track Your Baby's Growth Milestones</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for high-resolution growth ultrasounds, accurate fundal height tracking, and expert maternal-fetal care.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-teal-400/30 outline-none">
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
