"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function PregnancyCalculator() {
    const [lmpDate, setLmpDate] = useState('');
    const [result, setResult] = useState<{ edd: string, weeks: number, days: number, trimester: string } | null>(null);

    const calculateDueDate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!lmpDate) return;

        const lmp = new Date(lmpDate);
        const today = new Date();
        
        // Estimated Due Date (EDD) is typically LMP + 280 days
        const eddDate = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
        
        // Gestational age in days
        const diffTime = Math.abs(today.getTime() - lmp.getTime());
        let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        // Cap at 280 days (40 weeks) if they are overdue
        if (diffDays > 280 && diffDays < 300) {
            // slightly overdue
        } else if (diffDays > 300 || today < lmp) {
            alert("Please enter a valid Last Menstrual Period (LMP) date within the last 9 months.");
            return;
        }

        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;

        let trimester = "1st Trimester (Weeks 1-13)";
        if (weeks >= 14 && weeks <= 27) {
            trimester = "2nd Trimester (Weeks 14-27)";
        } else if (weeks >= 28) {
            trimester = "3rd Trimester (Weeks 28-40+)";
        }

        setResult({
            edd: eddDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            weeks,
            days,
            trimester
        });
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 font-sans selection:bg-primary-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group outline-none">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                            <i className="fa-solid fa-spa"></i>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 tracking-wide group-hover:text-primary-600 transition-colors">Dr. Vaibhavi Dhenge</h1>
                            <p className="text-[10px] sm:text-xs text-primary-600 font-bold tracking-widest">Consultant Obstetrician & Gynecologist</p>
                        </div>
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-primary-50 text-primary-700 font-bold text-xs sm:text-sm hover:bg-primary-100 transition shadow-sm border border-primary-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Back to Home
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-primary-50 via-brand-peach/20 to-brand-lavender/30 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-peach/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-primary-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-primary-700 tracking-wider uppercase">Interactive Tool</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Pregnancy Due Date <span className="gradient-text">Calculator</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Find out your estimated due date, current trimester, and track your baby's development timeline.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
                    
                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 space-y-8 text-gray-700 font-sans">
                        
                        {/* Calculator Form */}
                        <form onSubmit={calculateDueDate} className="space-y-6">
                            <div className="bg-primary-50/50 p-6 sm:p-8 rounded-2xl border border-primary-100">
                                <label htmlFor="lmp" className="block text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <i className="fa-regular fa-calendar-days text-primary-500"></i> First day of your last period (LMP)
                                </label>
                                <p className="text-xs text-gray-500 mb-4">Select the exact date your last menstrual period started.</p>
                                <input 
                                    type="date" 
                                    id="lmp"
                                    value={lmpDate}
                                    onChange={(e) => setLmpDate(e.target.value)}
                                    max={new Date().toISOString().split("T")[0]}
                                    required
                                    className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block p-3.5 shadow-sm outline-none transition-shadow hover:shadow-md focus:shadow-md"
                                />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                Calculate My Due Date <i className="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                        </form>

                        {/* Results Section */}
                        {result && (
                            <div className="mt-10 animate-fade-in">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 text-center">Your Results</h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border border-pink-100 shadow-sm text-center">
                                        <p className="text-[11px] font-bold text-pink-600 uppercase tracking-widest mb-2">Estimated Due Date</p>
                                        <p className="text-lg sm:text-xl font-bold text-gray-900">{result.edd}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100 shadow-sm text-center">
                                        <p className="text-[11px] font-bold text-purple-600 uppercase tracking-widest mb-2">Current Gestational Age</p>
                                        <p className="text-lg sm:text-xl font-bold text-gray-900">{result.weeks} Weeks, {result.days} Days</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-100 shadow-sm text-center mb-8">
                                    <p className="text-[11px] font-bold text-teal-600 uppercase tracking-widest mb-2">Current Stage</p>
                                    <p className="text-lg sm:text-xl font-bold text-gray-900">{result.trimester}</p>
                                    {result.weeks < 14 && <p className="text-xs text-teal-800 mt-2">Focus on Folic Acid, Vitamin D, and managing morning sickness.</p>}
                                    {result.weeks >= 14 && result.weeks < 28 && <p className="text-xs text-teal-800 mt-2">The "honeymoon phase" of pregnancy! Time for your anomaly scan.</p>}
                                    {result.weeks >= 28 && <p className="text-xs text-teal-800 mt-2">Almost there! Keep track of baby kicks and prepare your hospital bag.</p>}
                                </div>

                                <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-2xl text-xs sm:text-sm text-amber-900">
                                    <p className="font-bold mb-1 flex items-center gap-2"><i className="fa-solid fa-circle-info"></i> Note:</p>
                                    This calculation is an estimate based on a standard 28-day cycle. Only 5% of babies are actually born on their exact due date. Your doctor will confirm your official due date during your first ultrasound scan.
                                </div>
                            </div>
                        )}

                    </div>

                    {/* CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-primary-50">
                                <img src="/dr-vaibhavi-clinic/images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Start Your Pregnancy Journey Right</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Book your first antenatal checkup with Dr. Vaibhavi to confirm your pregnancy, get your first ultrasound, and start your personalized care plan.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-pink-400/30 outline-none">
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
