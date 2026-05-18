"use client";
import React from 'react';
import Link from 'next/link';

export default function InfertilityConsult() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-rose-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-baby-carriage"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-rose-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-rose-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-rose-50 text-rose-700 font-bold text-xs sm:text-sm hover:bg-rose-100 transition shadow-sm border border-rose-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-rose-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-rose-700 tracking-wider uppercase">Fertility & Family Planning</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            When Should You Consult an <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Infertility Specialist?</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Understanding the right time to seek expert medical evaluation for couples trying to conceive, backed by standard reproductive medicine guidelines.
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
                                <span>5 min read</span>
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
                                src="images/infertility_consult.png" 
                                alt="Fertility Hope Reproductive Medicine Couples Wellness" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🌸 <strong>A journey of hope and medical support:</strong> Infertility is not simply a "woman's problem"—both partners require comprehensive evaluation and compassionate care.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Infertility is a common concern affecting many couples worldwide. According to standard obstetric and gynecology teaching, including principles described in <em>Williams Obstetrics</em> and reproductive medicine guidelines, infertility is not simply a “woman’s problem” — both partners require thorough evaluation.
                            </p>

                            <p className="text-gray-600 font-medium leading-relaxed">
                                Many couples conceive naturally with time, but in some situations, early consultation with an infertility specialist becomes incredibly important for timely diagnosis and effective treatment.
                            </p>

                            {/* What is Infertility Definition Box */}
                            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                                <h3 className="font-serif font-bold text-rose-950 text-xl sm:text-2xl mb-4 flex items-center gap-3">
                                    <i className="fa-solid fa-circle-question text-rose-600"></i> What is Infertility?
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                                    Infertility is generally defined in clinical practice as:
                                </p>
                                <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm mb-4">
                                    <p className="font-serif font-bold text-rose-900 text-base sm:text-lg m-0 text-center">
                                        Failure to conceive after 12 months of regular unprotected intercourse for couples where the woman is below 35 years of age.
                                    </p>
                                </div>
                                <div className="bg-rose-600 text-white p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-3 shadow-md">
                                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold shrink-0">!</span>
                                    <span><strong>For women above 35 years</strong>, medical evaluation is usually advised earlier (after 6 months) due to declining ovarian reserve.</span>
                                </div>
                            </div>
                        </div>

                        {/* When Should You Consult Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-user-doctor text-rose-600 text-xl sm:text-2xl"></i>
                                When Should You Consult an Infertility Specialist?
                            </h2>

                            <div className="space-y-6">
                                {/* Point 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">1</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">If Pregnancy Does Not Occur After 1 Year</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Couples should seek evaluation if they have been trying to conceive for 12 months, regular unprotected intercourse is occurring, and pregnancy has still not happened. This is one of the most important indications for a comprehensive infertility workup.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">2</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Women Above 35 Years Should Not Delay</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Age plays a major role in fertility. Women above 35 years are advised to consult earlier because ovarian reserve (egg quantity and quality) declines with age. Consultation is highly recommended after <strong>6 months of trying</strong> in women &gt;35 years.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">3</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Irregular or Absent Periods</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Irregular menstrual cycles may indicate underlying ovulation problems. Consult a specialist if your periods are very irregular, delayed frequently, or completely absent. Conditions like thyroid disorders, hormonal imbalance, or PCOS (PMOS) can significantly affect fertility.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">4</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">History of PCOS / PMOS</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Women with Polycystic Metabolic Ovary Syndrome (PCOS / PMOS) often face irregular ovulation, hormonal imbalance, and difficulty conceiving. Early medical management and ovulation induction therapies often dramatically improve the chances of pregnancy.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">5</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Severe Menstrual Pain or Suspected Endometriosis</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Painful periods should not always be ignored. Conditions like endometriosis may affect the ovaries, fallopian tubes, and overall fertility potential. Symptoms requiring evaluation include severe pain during periods, pain during intercourse, and chronic pelvic pain.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">6</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Previous Miscarriages</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Repeated pregnancy loss requires specialized evaluation. Consultation is highly important if there is a history of recurrent miscarriages or difficulty conceiving again after a miscarriage.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 7 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">7</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Male Fertility Problems</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            An infertility evaluation is incomplete without male assessment. Men should be evaluated if there is a known low sperm count, sexual dysfunction, previous genital surgery, or significant smoking/alcohol-related concerns. Semen analysis is often one of the very first investigations advised.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 8 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">8</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">History of Pelvic Infection or Surgery</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Previous conditions affecting the reproductive organs may impact fertility by affecting the fallopian tubes or ovarian reserve. Examples include pelvic inflammatory disease (PID), genital tuberculosis, fibroid surgery, ovarian surgery, or a past ectopic pregnancy.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 9 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                                    <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">9</span>
                                    <div className="space-y-2 w-full">
                                        <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg m-0">Known Medical Conditions</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                            Certain chronic medical problems can reduce fertility or complicate pregnancy, including diabetes, thyroid disorders, obesity, and autoimmune disorders. Proper medical management significantly improves reproductive outcomes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Tests Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-vials text-rose-600 text-xl sm:text-2xl"></i>
                                Common Tests an Infertility Specialist May Advise
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A comprehensive fertility workup aims to identify the exact underlying cause. Depending on your medical history, Dr. Vaibhavi may advise a combination of the following investigations:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🩸</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Hormonal Blood Tests</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🖥️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Pelvic Ultrasound</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">📅</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Ovulation Assessment</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🔬</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Semen Analysis</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🩻</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Fallopian Tube Testing (HSG)</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">🥚</span>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900">Ovarian Reserve Testing (AMH)</span>
                                </div>
                            </div>
                        </div>

                        {/* Important Message Callout Box */}
                        <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-orange-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-rose-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-heart-pulse text-rose-300"></i> Important Message for Couples
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                                    Infertility is Common & Treatable
                                </h2>
                                <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium">
                                    Infertility is medically common and treatable in a vast majority of cases. Delaying consultation may reduce treatment success, especially with increasing age.
                                </p>
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/15 text-xs sm:text-sm text-rose-50 font-semibold">
                                    💡 Early diagnosis often allows for much simpler, more cost-effective, and highly successful treatment options before considering advanced reproductive technologies.
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Couples should not ignore persistent difficulty in conceiving, irregular periods, severe menstrual symptoms, or advancing maternal age. Seeking timely medical guidance can help identify the cause early and improve the chances of a healthy pregnancy.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Please consult a qualified gynecologist or infertility specialist for proper evaluation and personalized treatment advice.
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
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Planning to Start or Expand Your Family?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for a compassionate, confidential fertility evaluation, advanced ovulation tracking, and a personalized conception plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-rose-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-rose-400/30 outline-none">
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
