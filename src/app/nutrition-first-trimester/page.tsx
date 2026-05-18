"use client";
import React from 'react';
import Link from 'next/link';

export default function NutritionFirstTrimester() {
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
                            <p className="text-[10px] sm:text-xs text-primary-600 font-bold tracking-widest uppercase">MS OBGY | MBBS</p>
                        </div>
                    </Link>

                    <Link href="/#community" className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-primary-50 text-primary-700 font-bold text-xs sm:text-sm hover:bg-primary-100 transition shadow-sm border border-primary-100/50 outline-none">
                        <i className="fa-solid fa-arrow-left text-xs"></i> Go back to Community & Health Tips
                    </Link>
                </div>
            </header>

            {/* Article Container */}
            <main className="pb-20">
                {/* Hero Banner */}
                <section className="relative bg-gradient-to-br from-primary-50 via-brand-peach/20 to-brand-lavender/30 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-peach/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-primary-100 mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold text-primary-700 tracking-wider uppercase">Pregnancy Nutrition Guide</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.2] mb-6 tracking-normal">
                            Nutrition Guide for Your <br className="hidden sm:inline" />
                            <span className="gradient-text">First Trimester</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 font-sans font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            What to eat, what to avoid, and how to manage morning sickness during your first 3 months of pregnancy.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full w-max mx-auto shadow-sm border border-white">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-user-md text-primary-500"></i>
                                <span>By <strong>Dr. Vaibhavi Dhenge</strong></span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-primary-500"></i>
                                <span>MS OBGY, MBBS</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clock text-primary-500"></i>
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
                                src="images/healthy_pregnancy_plate.png" 
                                alt="Healthy Pregnancy Diet Plate First Trimester" 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                                <p className="text-white text-xs sm:text-sm font-medium backdrop-blur-md bg-black/30 py-2.5 px-5 rounded-2xl border border-white/20 shadow-lg">
                                    🥗 <strong>A balanced first-trimester plate:</strong> Rich in folic acid, high-quality proteins, iron, and vibrant fresh vegetables.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 space-y-10 text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
                        {/* Intro */}
                        <div className="prose max-w-none space-y-4">
                            <p className="text-lg sm:text-xl font-serif font-medium text-gray-800 leading-relaxed">
                                Pregnancy is a beautiful journey, and the first trimester is one of the most important stages for both mother and baby. During the first three months, the baby’s brain, spinal cord, heart, and other organs begin to develop. A healthy and balanced diet during this phase plays a major role in supporting proper growth and keeping the mother healthy.
                            </p>
                            
                            <div className="bg-gradient-to-r from-primary-50 to-brand-peach/20 border-l-4 border-primary-500 p-6 rounded-r-2xl my-6 shadow-sm">
                                <p className="text-primary-800 font-serif italic text-base sm:text-lg font-medium m-0">
                                    “Doctors say that early pregnancy nutrition is not about ‘eating for two,’ but about eating the right foods in the right quantity.”
                                </p>
                            </div>
                        </div>

                        {/* Section 1: What Should You Eat */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-3">
                                <i className="fa-solid fa-utensils text-primary-500 text-xl sm:text-2xl"></i>
                                What Should You Eat During the First Trimester?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {/* Folic Acid */}
                                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-lg font-bold shrink-0">🌿</span>
                                            <h3 className="font-bold text-base sm:text-lg text-gray-900">1. Folic Acid Rich Foods</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            Folic acid is extremely important during early pregnancy as it helps prevent birth defects related to the baby’s brain and spine.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3.5 rounded-xl border border-gray-200/50">
                                        <p className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Key Sources to Include:</p>
                                        <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Spinach</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Methi</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Broccoli</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Lentils</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Beans</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Oranges</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Fortified Cereals</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Protein */}
                                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg font-bold shrink-0">🥚</span>
                                            <h3 className="font-bold text-base sm:text-lg text-gray-900">2. Protein-Rich Foods</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            Protein helps in the baby’s tissue and organ development, providing the essential building blocks for cellular growth.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3.5 rounded-xl border border-gray-200/50">
                                        <p className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Key Sources to Include:</p>
                                        <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Dal</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Paneer</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Milk & Curd</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Soy Products</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Eggs</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Chicken</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Fish (Low Mercury)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Iron */}
                                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between md:col-span-2">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                        <div className="lg:col-span-7">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-lg font-bold shrink-0">🩸</span>
                                                <h3 className="font-bold text-base sm:text-lg text-gray-900">3. Iron-Rich Foods</h3>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                                Iron supports increased blood production and helps prevent anemia, ensuring oxygen is effectively transported to your growing baby.
                                            </p>
                                            <div className="bg-white p-3.5 rounded-xl border border-gray-200/50 mb-4 lg:mb-0">
                                                <p className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Key Sources to Include:</p>
                                                <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Dates</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Beetroot</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Rajma</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Green Leafy Veggies</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Jaggery</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Pomegranate</span>
                                                    <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Lean Meat</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-5 bg-amber-50 border border-amber-200 p-5 rounded-2xl shadow-sm">
                                            <h4 className="font-bold text-xs sm:text-sm text-amber-900 mb-1 flex items-center gap-2">
                                                <i className="fa-solid fa-lightbulb text-amber-600 text-base"></i> Pro-Tip for Absorption:
                                            </h4>
                                            <p className="text-xs text-amber-800 leading-relaxed m-0 font-medium">
                                                Take iron-rich foods with lemon, oranges, or other Vitamin C sources. Vitamin C significantly boosts iron absorption in the body!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Calcium */}
                                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-bold shrink-0">🥛</span>
                                            <h3 className="font-bold text-base sm:text-lg text-gray-900">4. Calcium & Vitamin D</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            These nutrients help in building strong bones and teeth for the baby while protecting the mother's bone density. Daily sunlight exposure also helps maintain Vitamin D levels.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3.5 rounded-xl border border-gray-200/50">
                                        <p className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Key Sources to Include:</p>
                                        <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Milk & Curd</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Paneer</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Ragi</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Almonds</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Sesame Seeds</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Morning Sunlight</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Fluids */}
                                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg font-bold shrink-0">🥥</span>
                                            <h3 className="font-bold text-base sm:text-lg text-gray-900">5. Fluids & Hydration</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                                            Morning sickness and vomiting can cause dehydration during early pregnancy. Maintaining electrolyte balance is crucial.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3.5 rounded-xl border border-gray-200/50">
                                        <p className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Hydration Options:</p>
                                        <div className="flex flex-wrap gap-1.5 text-xs text-gray-700 font-medium">
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Plenty of Water</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Coconut Water</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Lemon Water</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Buttermilk (Chaas)</span>
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-lg">Fresh Homemade Soups</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Foods to Avoid */}
                        <div className="bg-rose-50 border border-rose-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-rose-950 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-triangle-exclamation text-rose-600 text-xl sm:text-2xl"></i>
                                Foods to Avoid During First Trimester
                            </h2>
                            <p className="text-xs sm:text-sm text-rose-900 mb-6 leading-relaxed font-medium">
                                Certain foods can increase the risk of infections, acidity, or complications during pregnancy. To ensure a safe environment for your developing baby, strictly avoid or limit the following:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-sans text-xs sm:text-sm text-rose-950">
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Alcohol, Smoking & Tobacco</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Raw or Undercooked Meat & Eggs</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Unpasteurized Milk Products</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Excess Caffeine (Coffee/Tea)</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Junk Food & Packaged Snacks</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">✕</span>
                                    <span className="font-semibold">Sugary Soft Drinks & Sodas</span>
                                </div>
                            </div>

                            {/* Limit Spicy & Oily */}
                            <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-sm">
                                <h4 className="font-bold text-sm sm:text-base text-rose-950 mb-2 flex items-center gap-2">
                                    <i className="fa-solid fa-pepper-hot text-rose-600"></i> Limit Spicy & Oily Food
                                </h4>
                                <p className="text-xs sm:text-sm text-rose-900 mb-3 leading-relaxed">
                                    Too much oily or spicy food may irritate your stomach lining and worsen common first-trimester symptoms:
                                </p>
                                <div className="flex flex-wrap gap-3 text-xs font-bold text-rose-800">
                                    <span className="bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1.5"><i className="fa-solid fa-fire text-rose-600"></i> Acidity & Heartburn</span>
                                    <span className="bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1.5"><i className="fa-solid fa-face-nauseated text-rose-600"></i> Nausea</span>
                                    <span className="bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-1.5"><i className="fa-solid fa-head-side-vomit text-rose-600"></i> Vomiting</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Morning Sickness Tips */}
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-teal-950 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-hand-holding-medical text-teal-600 text-xl sm:text-2xl"></i>
                                Tips for Managing Morning Sickness
                            </h2>
                            <p className="text-xs sm:text-sm text-teal-900 mb-6 leading-relaxed font-medium">
                                Morning sickness is incredibly common during the first trimester due to rising pregnancy hormones. Here are doctor-recommended tips to keep nausea at bay:
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-teal-950 font-medium">
                                <li className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-teal-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                                    <span>Eat small meals frequently throughout the day</span>
                                </li>
                                <li className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-teal-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                                    <span>Avoid staying hungry for long periods</span>
                                </li>
                                <li className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-teal-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                                    <span>Keep dry biscuits or crackers beside your bed</span>
                                </li>
                                <li className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-teal-100 flex items-center gap-3 shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                                    <span>Eat light, warm, homemade food</span>
                                </li>
                                <li className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-teal-100 flex items-center gap-3 shadow-sm sm:col-span-2">
                                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                                    <span>Drink fluids slowly in sips between meals, rather than gulping large amounts at once</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4: A Simple Healthy Pregnancy Plate */}
                        <div className="border border-gray-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="fa-solid fa-plate-wheat text-primary-500 text-xl sm:text-2xl"></i>
                                A Simple Healthy Pregnancy Plate
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                                A perfectly balanced first-trimester meal doesn't need to be complicated. Every major meal should aim to include a colorful balance of:
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-center font-bold text-xs sm:text-sm text-gray-800">
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">🌾</span>Whole Grains
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">🥚</span>Protein
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">🥦</span>Fresh Vegetables
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">🍎</span>Fruits
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">🥑</span>Healthy Fats
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="block text-2xl mb-1">💧</span>Adequate Fluids
                                </div>
                            </div>

                            <div className="bg-primary-50 text-primary-800 p-4 rounded-2xl text-center font-medium text-xs sm:text-sm border border-primary-100">
                                ⭐ <strong>Golden Rule:</strong> Homemade fresh food is always a better, safer, and more nutritious choice than processed or packaged food.
                            </div>
                        </div>

                        {/* Final Words */}
                        <div className="border-t border-gray-100 pt-8 space-y-4">
                            <h3 className="text-xl font-serif font-bold text-gray-900">Final Words</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                The first trimester is the foundation of a healthy pregnancy. Eating nutritious food, staying hydrated, and avoiding harmful substances can help support the healthy development of the baby and improve the mother’s wellbeing.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Every pregnancy is unique, and nutritional needs may vary from person to person depending on your medical history, weight, and specific blood reports.
                            </p>

                            <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded-r-2xl mt-6 text-xs sm:text-sm text-gray-600 italic">
                                ⚠️ <strong>Medical Disclaimer:</strong> Please consult your gynecologist or healthcare provider before making major dietary changes or starting any supplements during pregnancy.
                            </div>
                        </div>
                    </div>

                    {/* Author CTA Footer */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#FAF9F6] rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
                        
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mx-auto bg-primary-50">
                                <img src="images/doctor-hero-hd.jpg" alt="Dr. Vaibhavi Dhenge" className="w-full h-full object-cover object-center" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-1">Need a Customized Pregnancy Diet Chart?</h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                                    Consult Dr. Vaibhavi Dhenge for a personalized first-trimester evaluation, advanced ANC checkups, and a tailored nutrition plan designed for your baby's optimal growth.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link href="/#appointment" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 border border-pink-400/30 outline-none">
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
