"use client";
import React from 'react';
import Link from 'next/link';

export default function NormalDeliveryVsCSection() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-person-pregnant"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-purple-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-purple-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-purple-50 text-purple-800 font-bold text-xs sm:text-sm hover:bg-purple-100 transition shadow-sm border border-purple-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-purple-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-purple-800 tracking-wider uppercase">Labor & Childbirth Guide</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Normal Delivery vs C-Section: <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">What Every Mother Should Know</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            An expert medical overview comparing vaginal childbirth and cesarean delivery, focusing on safety, recovery timelines, and making informed choices.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-purple-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-purple-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-purple-500"></i>
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
                                src="images/labor_delivery_csection.png" 
                                alt="Normal Delivery vs C Section Childbirth Labor Motherhood" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🌸 <strong>Safety is the ultimate goal:</strong> Both normal delivery and cesarean delivery (C-section) are safe methods of childbirth when medically appropriate. A healthy mother and healthy baby are the true priorities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                One of the most common concerns during pregnancy is whether delivery will happen normally or through a C-section. Many mothers feel anxious, confused, or overwhelmed when thinking about labor and childbirth.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Both normal delivery and cesarean delivery (C-section) are safe methods of childbirth when medically appropriate. The most important goal is always the safety of both mother and baby. Understanding the differences between the two can help mothers feel much more informed and confident during pregnancy.
                            </p>
                        </div>

                        {/* Normal Delivery Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-person-pregnant text-purple-600 text-xl sm:text-2xl"></i>
                                What is a Normal Delivery?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Normal delivery, also called vaginal delivery, is the natural physiological process where the baby is delivered through the birth canal. Labor usually begins with:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">⚡</span>
                                    <h4 className="font-serif font-bold text-purple-950 text-base m-0">Regular Contractions</h4>
                                    <p className="text-xs text-purple-900 m-0">Uterine muscles contract rhythmically to help progress labor.</p>
                                </div>
                                <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">⭕</span>
                                    <h4 className="font-serif font-bold text-purple-950 text-base m-0">Cervical Dilation</h4>
                                    <p className="text-xs text-purple-900 m-0">The cervix gently softens, thins out, and opens fully to 10 centimeters.</p>
                                </div>
                                <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">👶</span>
                                    <h4 className="font-serif font-bold text-purple-950 text-base m-0">Fetal Descent</h4>
                                    <p className="text-xs text-purple-900 m-0">The baby moves smoothly downward through the pelvis for birth.</p>
                                </div>
                            </div>

                            {/* Benefits Box */}
                            <div className="bg-white border border-purple-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-purple-950 text-lg sm:text-xl m-0 flex items-center gap-2">
                                    <i className="fa-solid fa-ranking-star text-purple-600"></i> Benefits of Normal Delivery
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 m-0">
                                    Vaginal childbirth offers excellent physiological advantages for both mother and newborn:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-purple-950 pt-2">
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">⏱️</span>
                                        <span>Faster physical recovery</span>
                                    </div>
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">🏥</span>
                                        <span>Shorter hospital stay</span>
                                    </div>
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">🛡️</span>
                                        <span>Lower risk of surgical complications</span>
                                    </div>
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">🚶</span>
                                        <span>Earlier mobility after delivery</span>
                                    </div>
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">🍼</span>
                                        <span>Easier initiation of breastfeeding</span>
                                    </div>
                                    <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">✨</span>
                                        <span>Lower infection risk in many cases</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* C Section Overview */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-user-nurse text-purple-600 text-xl sm:text-2xl"></i>
                                What is a C-Section?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                A cesarean section (C-section) is a major surgical procedure in which the baby is delivered safely through a precise incision made in the mother’s abdomen and uterus. A C-section may be planned in advance (elective) or performed as an emergency during labor if complications arise.
                            </p>

                            {/* When Needed Box */}
                            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-indigo-700 space-y-6">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                        <i className="fa-solid fa-hospital text-purple-300"></i> Clinical Indications
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide m-0">
                                        When is a C-Section Needed?
                                    </h3>
                                    <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed font-medium m-0">
                                        In many situations, a C-section is absolutely life-saving for both mother and baby. Doctors advise cesarean delivery for:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-indigo-950 pt-2">
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">⚠️</span>
                                            <span>Fetal Distress (abnormal heartbeat)</span>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">⭕</span>
                                            <span>Placenta Previa (covering cervix)</span>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">⏳</span>
                                            <span>Failure of Labor Progress (non-dilation)</span>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">👶</span>
                                            <span>Abnormal Baby Position (breech/transverse)</span>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🧬</span>
                                            <span>Twin / Multiple Pregnancy Complications</span>
                                        </div>
                                        <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold">🏥</span>
                                            <span>Previous Complicated C-Section / Illness</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Split Comparison Grid */}
                        <div className="border-t border-gray-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#FAF9F6] border border-gray-200/60 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-gray-900 text-lg sm:text-xl m-0 flex items-center gap-2">
                                    <i className="fa-solid fa-bed text-purple-600"></i> Recovery After C-Section
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0 font-medium">
                                    Because a C-section is a major surgery, recovery naturally takes longer than normal delivery. Mothers may experience:
                                </p>
                                <ul className="space-y-2 text-xs sm:text-sm text-gray-800 font-semibold">
                                    <li>• Mild pain around incision stitches</li>
                                    <li>• Difficulty moving or sitting initially</li>
                                    <li>• Longer hospital stay (3–4 days)</li>
                                    <li>• Increased need for dedicated rest</li>
                                </ul>
                                <p className="text-xs text-purple-700 font-bold m-0 italic pt-2">
                                    ⭐ However, with Dr. Vaibhavi's advanced post-operative care protocols, recovery is highly smooth and comfortable.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                                <h3 className="font-serif font-bold text-purple-950 text-lg sm:text-xl m-0 flex items-center gap-2">
                                    <i className="fa-solid fa-scale-balanced text-purple-600"></i> Is Normal Delivery Always Better?
                                </h3>
                                <p className="text-xs sm:text-sm text-purple-900 leading-relaxed m-0 font-bold">
                                    Not always.
                                </p>
                                <p className="text-xs sm:text-sm text-purple-900 leading-relaxed m-0 font-medium">
                                    While vaginal delivery has excellent benefits, forcing a difficult or unsafe labor increases severe risks for the mother, baby, and future pelvic floor recovery. In such cases, a timely C-section is by far the safer, superior option.
                                </p>
                                <p className="text-xs sm:text-sm text-purple-950 font-bold m-0 bg-white p-4 rounded-2xl border border-purple-100 shadow-sm text-center">
                                    🛡️ The “best” delivery method is the one that ensures maximum safety.
                                </p>
                            </div>
                        </div>

                        {/* Myths vs Facts Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-comments text-purple-600 text-xl sm:text-2xl"></i>
                                Common Myths About Delivery
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“Once a C-section, always a C-section.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Many women are excellent candidates for <strong>VBAC (Vaginal Birth After Cesarean)</strong> in subsequent pregnancies, depending entirely on expert medical evaluation and uterine scar healing.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">“C-section mothers are less strong or took the easy way out.”</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-2 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">A C-section is a major abdominal surgery that requires immense physical and emotional strength for recovery while simultaneously caring for a newborn baby.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips to Improve Chances Grid */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-child-reaching text-purple-600 text-xl sm:text-2xl"></i>
                                How to Improve Chances of Normal Delivery
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Prepare your body beautifully for labor and childbirth with these excellent daily habits:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">⚖️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Maintain a Healthy Weight</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">🏃</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Stay Physically Active</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">🥗</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Follow Healthy Nutrition</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">🩺</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Attend Regular Checkups</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">❤️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Control BP & Diabetes</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">🧘</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Learn Breathing Techniques</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Both normal delivery and C-section are safe and important methods of childbirth. The right delivery method depends entirely on mother’s health, baby’s condition, pregnancy progress, and the labor situation.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Instead of focusing only on the mode of delivery, mothers should focus on safe pregnancy care, regular checkups, and healthy preparation for childbirth. Please consult your gynecologist for personalized guidance regarding labor, delivery planning, and pregnancy care.
                            </p>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-purple-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Planning Your Delivery Journey?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for expert childbirth preparation, VBAC assessment, and a highly supportive, safe delivery experience.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-purple-400/30 outline-none">
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
