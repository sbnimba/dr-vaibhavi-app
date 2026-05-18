"use client";
import React from 'react';
import Link from 'next/link';

export default function PcosMythsFacts() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-dna"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-purple-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-purple-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-xs sm:text-sm hover:bg-purple-100 transition shadow-sm border border-purple-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Back to Home
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-primary-50 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-purple-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-purple-700 tracking-wider uppercase">Women's Health & Hormones</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Understanding PCOS <span className="text-purple-600 font-sans text-2xl sm:text-3xl lg:text-4xl font-normal">(now PMOS)</span>: <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Myths vs Facts</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Breaking down common misconceptions about Polycystic Ovary Syndrome—now officially transitioning to Polycystic Metabolic Ovary Syndrome (PMOS)—and empowering women with medical truth.
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
                                src="images/pcos_myths_facts.png" 
                                alt="Understanding PCOS PMOS Myths vs Facts Holistic Health" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    💜 <strong>A holistic approach to PCOS / PMOS:</strong> Balancing hormones through lifestyle, nutrition, stress management, and expert medical care.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-12 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        
                        {/* 📢 Medical Naming Update Callout Box */}
                        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-purple-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                            <div className="relative z-10 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                    <i className="fa-solid fa-bullhorn text-pink-300"></i> Important Medical Update
                                </div>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                                    Why PCOS is Now Called PMOS
                                </h2>
                                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                                    In modern medical science and international consensus, the condition historically known as <strong>Polycystic Ovary Syndrome (PCOS)</strong> is officially transitioning to <strong>Polycystic Metabolic Ovary Syndrome (PMOS)</strong> (or Polycystic Morphology Ovary Syndrome).
                                </p>
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/15 space-y-2 text-xs sm:text-sm text-purple-50">
                                    <p className="m-0"><strong>Why the name change?</strong></p>
                                    <ul className="space-y-1.5 list-disc list-inside text-purple-100">
                                        <li>The old name (PCOS) focused heavily on "cysts"—which are actually harmless, normal egg follicles, not true ovarian cysts. This misleading name caused immense anxiety and led many women to believe surgery was needed.</li>
                                        <li>The new name (<strong>PMOS</strong>) accurately highlights that this is a <strong>metabolic and hormonal condition</strong> affecting the entire body (insulin, metabolism, hormones), not just an isolated issue with the ovaries.</li>
                                    </ul>
                                </div>
                                <p className="text-xs sm:text-sm text-pink-200 italic m-0 font-medium">
                                    Throughout this guide and our clinic practice, we use both terms <strong>(PCOS / PMOS)</strong> to help you navigate this transition with absolute clarity and confidence.
                                </p>
                            </div>
                        </div>

                        {/* Intro */}
                        <div className="prose max-w-none space-y-6">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Polycystic Metabolic Ovary Syndrome (PMOS)—widely known as PCOS—is one of the most common hormonal and metabolic conditions affecting women of reproductive age. Despite being so common, there are still many myths and misunderstandings surrounding the condition.
                            </p>

                            <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-serif font-bold text-gray-900 text-base sm:text-lg mb-3 flex items-center gap-2">
                                    <i className="fa-solid fa-circle-info text-purple-600"></i> PCOS / PMOS can affect multiple aspects of a woman's life:
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-medium text-xs sm:text-sm text-gray-800">
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">📅</span> Menstrual Cycles
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">⚖️</span> Weight & Metabolism
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">✨</span> Skin & Hair Health
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">👶</span> Fertility
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">⚡</span> Energy Levels
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="text-purple-500">🧘‍♀️</span> Emotional Wellbeing
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 font-medium">
                                Early diagnosis and proper lifestyle management can help women live a healthy and balanced life with PCOS (PMOS).
                            </p>
                        </div>

                        {/* What is PCOS / PMOS? */}
                        <div className="border-t border-gray-100 pt-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-notes-medical text-purple-600 text-xl sm:text-2xl"></i>
                                What is PCOS / PMOS?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                PCOS (now PMOS) is a hormonal and metabolic condition in which the ovaries may produce higher-than-normal levels of androgens (male hormones), leading to hormonal imbalance and irregular ovulation.
                            </p>

                            <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-4 uppercase tracking-wider text-purple-700">Common Symptoms Include:</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">📅</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Irregular Periods</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">⚖️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Weight Gain</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">✨</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Acne & Oily Skin</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">🪞</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Excess Facial Hair (Hirsutism)</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">💇‍♀️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Hair Fall / Thinning</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">👶</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Difficulty Conceiving</span>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm sm:col-span-2 lg:col-span-3">
                                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">☀️</span>
                                    <span className="font-semibold text-xs sm:text-sm text-purple-950">Darkening of Skin (Acanthosis Nigricans around neck or underarms)</span>
                                </div>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-900 font-medium">
                                ⭐ <strong>Important Note:</strong> Not every woman experiences the same symptoms. PCOS (PMOS) presents uniquely in each individual.
                            </div>
                        </div>

                        {/* Myth vs Fact Section */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-scale-balanced text-purple-600 text-xl sm:text-2xl"></i>
                                Myth vs Fact About PCOS / PMOS
                            </h2>

                            <div className="space-y-6">
                                {/* Myth 1 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 1</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">PCOS / PMOS Only Affects Overweight Women</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Even women with normal body weight can have PCOS (PMOS).</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                While weight gain is common, many women with PMOS are lean (known as Lean PCOS / PMOS) and still experience irregular periods, acne, hormonal imbalance, or fertility issues.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 2 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 2</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">PCOS / PMOS Means You Can Never Get Pregnant</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Many women with PCOS (PMOS) successfully conceive with proper treatment and lifestyle changes.</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                Early diagnosis, weight management, healthy eating, exercise, and customized medical guidance can improve fertility significantly.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 3 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 3</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Irregular Periods are “Normal” in PCOS / PMOS</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Irregular periods should never be ignored.</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                Delayed or absent periods may indicate hormonal imbalance and can increase the risk of infertility, endometrial problems, and metabolic complications if left untreated.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 4 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 4</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">PCOS / PMOS is Only a Gynecological Problem</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">PCOS (PMOS) is also closely linked with metabolic and hormonal health.</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                Women with PMOS may have a higher risk of insulin resistance, diabetes, high cholesterol, high blood pressure, as well as anxiety and stress. PMOS requires a holistic metabolic approach, not just period management.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 5 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 5</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Weight Loss Alone Can Cure PCOS / PMOS</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">Weight management helps control symptoms, but PMOS is a long-term hormonal condition.</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                Effective treatment includes lifestyle modification, regular exercise, healthy nutrition, stress management, and customized medicines if required.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Myth 6 */}
                                <div className="bg-[#FAF9F6] border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="bg-rose-50 border-b border-rose-100 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">Myth 6</span>
                                            <h3 className="font-serif font-bold text-rose-950 text-base sm:text-lg m-0">Every Woman with PCOS / PMOS Has Ovarian Cysts</h3>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50/40 p-5 sm:p-6 flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                        <div className="space-y-3 w-full">
                                            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Fact</span>
                                            <p className="text-gray-900 font-bold text-sm sm:text-base m-0">This exact misunderstanding is why the medical community is changing the name from PCOS to PMOS!</p>
                                            <p className="text-xs sm:text-sm text-gray-600 m-0 leading-relaxed">
                                                Not all women with PMOS have visible cysts on ultrasound. The "cysts" are actually normal developing egg follicles that stalled due to hormonal imbalance. A PMOS diagnosis depends on a combination of symptoms, metabolic evaluation, menstrual history, and ultrasound findings.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Healthy Lifestyle Tips */}
                        <div className="border-t border-gray-100 pt-8 space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-heart-pulse text-purple-600 text-xl sm:text-2xl"></i>
                                Healthy Lifestyle Tips for PCOS / PMOS
                            </h2>

                            {/* Diet Split */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl shadow-sm">
                                    <h3 className="font-bold text-base sm:text-lg text-emerald-950 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-circle-check text-emerald-600"></i> Foods to Include
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900 font-medium">
                                        <li className="flex items-center gap-2"><span>✓</span> Protein-rich foods (Dal, Paneer, Eggs, Fish)</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Fresh green vegetables & leafy greens</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Whole grains (Oats, Ragi, Quinoa, Brown rice)</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Antioxidant-rich fruits (Berries, Apples)</li>
                                        <li className="flex items-center gap-2"><span>✓</span> Healthy fats (Avocado, Almonds, Walnuts, Seeds)</li>
                                    </ul>
                                </div>

                                <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl shadow-sm">
                                    <h3 className="font-bold text-base sm:text-lg text-rose-950 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-circle-xmark text-rose-600"></i> Foods to Avoid
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-rose-900 font-medium">
                                        <li className="flex items-center gap-2"><span>✕</span> Excess refined sugar & sweets</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Processed foods & bakery items</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Sugary soft drinks & packaged juices</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Frequent deep-fried junk food</li>
                                        <li className="flex items-center gap-2"><span>✕</span> Excess refined flour (Maida)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Exercise & Stress */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#FAF9F6] border border-gray-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3 flex items-center gap-2">
                                            <i className="fa-solid fa-person-running text-purple-600"></i> Exercise Regularly
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            Regular physical activity is one of the most powerful ways to improve insulin sensitivity, support weight management, regulate hormones, and reduce stress.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 text-purple-900 p-4 rounded-xl text-xs sm:text-sm font-semibold border border-purple-100">
                                        🏃‍♀️ Even 30–45 minutes of daily brisk walking, strength training, or swimming can make a massive difference.
                                    </div>
                                </div>

                                <div className="bg-[#FAF9F6] border border-gray-200/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3 flex items-center gap-2">
                                            <i className="fa-solid fa-spa text-purple-600"></i> Manage Stress
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            High stress increases cortisol levels, which can worsen hormonal imbalances and PMOS symptoms. Prioritizing mental peace is essential.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200/50">
                                        <p className="text-[11px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">Helpful Practices:</p>
                                        <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Meditation</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Yoga & Pranayama</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">7-8 Hours Sleep</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Screen-time Reduction</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Calming Hobbies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When to consult a doctor */}
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-950 mb-3 flex items-center gap-3">
                                <i className="fa-solid fa-user-doctor text-amber-600 text-xl sm:text-2xl"></i>
                                When Should You Consult a Doctor?
                            </h2>
                            <p className="text-xs sm:text-sm text-amber-900 mb-6 leading-relaxed font-medium">
                                Early treatment can help prevent long-term metabolic and fertility complications. Seek professional medical advice if you experience any of the following:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-amber-950 font-medium">
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">!</span>
                                    <span>Irregular, delayed, or missed periods</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">!</span>
                                    <span>Excessive acne or abnormal facial/body hair growth</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">!</span>
                                    <span>Sudden, unexplained weight gain</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">!</span>
                                    <span>Difficulty conceiving after months of trying</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3 shadow-sm sm:col-span-2">
                                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">!</span>
                                    <span>Severe hair fall or noticeable scalp thinning</span>
                                </div>
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                PCOS (PMOS) is common, manageable, and treatable. The biggest challenge is often misinformation and delayed diagnosis. Understanding the difference between myths and facts can help women take better care of their reproductive and overall metabolic health.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                With the right lifestyle changes, medical guidance, and regular follow-up, women with PMOS can lead healthy and fulfilling lives.
                            </p>

                            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-2xl mt-6 text-xs sm:text-sm text-purple-900 font-medium">
                                🩺 <strong>Medical Guidance:</strong> Please consult your gynecologist for proper evaluation, diagnosis, and personalized treatment advice tailored to your unique health profile.
                            </div>
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
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Struggling with PCOS / PMOS or Irregular Periods?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for an advanced hormonal evaluation, accurate ultrasound diagnosis, and a customized, holistic PMOS management plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-purple-400/30 outline-none">
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
