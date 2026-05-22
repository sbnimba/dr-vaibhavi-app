"use client";

import React from 'react';
import Link from 'next/link';

export default function PregnancyDietGuidePage() {
    return (
        <main className="min-h-screen bg-[#FAF9F6] pt-24 pb-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <nav className="flex text-xs font-medium text-gray-500 mb-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="hover:text-primary-600 transition">Home</Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <i className="fa-solid fa-chevron-right text-[10px] mx-2 text-gray-400"></i>
                                <span className="text-gray-900 font-semibold">Pregnancy Diet Guide</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Article Header */}
                <header className="mb-12 text-center md:text-left">
                    <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Free Download</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        Week-by-Week Pregnancy Diet Guide
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        A complete nutritional roadmap for a healthy pregnancy, breaking down what you and your baby need at every stage.
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <button onClick={() => window.print()} className="bg-primary-600 text-white px-6 py-2 rounded-xl font-bold shadow-sm hover:bg-primary-700 transition flex items-center gap-2">
                            <i className="fa-solid fa-file-pdf"></i> Save as PDF
                        </button>
                    </div>
                </header>

                {/* Article Content */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-12 prose prose-lg prose-pink max-w-none text-gray-700">
                    
                    <h2 className="text-2xl font-serif font-bold text-gray-900 border-b pb-2 text-primary-600">First Trimester (Week 1–12)</h2>
                    
                    <div className="bg-pink-50 p-6 rounded-2xl mb-8 mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 1–4: Preparing for Healthy Pregnancy</h3>
                        <p className="mb-4">Focus on building strong nutrition foundations.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Folic acid-rich foods (spinach, broccoli, lentils)</li>
                                    <li>Iron-rich foods (dates, beetroot, jaggery, leafy greens)</li>
                                    <li>Protein (eggs, paneer, dal, chicken)</li>
                                    <li>Plenty of water</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 text-sm uppercase tracking-wide">Avoid:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Excess junk food</li>
                                    <li>Smoking/alcohol</li>
                                    <li>Excess caffeine</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-pink-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Folic Acid, Iron, Vitamin B12</p>
                        </div>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 5–8: Early Pregnancy & Morning Sickness</h3>
                        <p className="mb-4">This is when nausea and fatigue commonly begin.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Small frequent meals</li>
                                    <li>Dry snacks like khakra, toast, crackers</li>
                                    <li>Bananas, curd, coconut water</li>
                                    <li>Ginger tea or ginger candies</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 text-sm uppercase tracking-wide">Avoid:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Oily and spicy foods</li>
                                    <li>Long gaps between meals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-pink-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Vitamin B6, Electrolytes, Protein</p>
                        </div>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 9–12: Baby’s Organs Begin Developing</h3>
                        <p className="mb-4">Your baby’s brain, heart, and organs start forming rapidly.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Nuts and seeds</li>
                                    <li>Milk and dairy products</li>
                                    <li>Fresh fruits</li>
                                    <li>Protein-rich meals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-pink-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Calcium, DHA/Omega-3, Protein</p>
                            <p className="text-sm mt-2 text-primary-600 font-bold"><i className="fa-solid fa-lightbulb"></i> Tip: Do not skip prenatal supplements prescribed by your doctor.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-gray-900 border-b pb-2 text-primary-600 mt-12">Second Trimester (Week 13–27)</h2>

                    <div className="bg-purple-50 p-6 rounded-2xl mb-8 mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 13–16: Energy Levels Improve</h3>
                        <p className="mb-4">You may feel more active and hungry.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Whole grains</li>
                                    <li>Fresh homemade meals</li>
                                    <li>Seasonal fruits</li>
                                    <li>Sprouts and pulses</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-purple-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Fiber, Iron, Protein</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 17–20: Baby Growth Speeds Up</h3>
                        <p className="mb-4">Bones and muscles start strengthening.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Calcium-rich foods</li>
                                    <li>Sesame seeds</li>
                                    <li>Ragi</li>
                                    <li>Paneer and curd</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-purple-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Calcium, Vitamin D, Magnesium</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 21–24: Managing Acidity & Digestion</h3>
                        <p className="mb-4">Acidity and constipation may increase.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Fiber-rich foods</li>
                                    <li>Warm water</li>
                                    <li>Fruits like papaya (ripe), pear, apple</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 text-sm uppercase tracking-wide">Avoid:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Heavy late-night meals</li>
                                    <li>Fried foods</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-purple-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Fiber, Fluids, Probiotics</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 25–27: Baby Weight Gain Begins</h3>
                        <p className="mb-4">Healthy weight gain becomes important now.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Healthy fats (nuts, ghee in moderation)</li>
                                    <li>Protein-rich snacks</li>
                                    <li>Complex carbohydrates</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-purple-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Protein, Healthy fats, Iron</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-gray-900 border-b pb-2 text-primary-600 mt-12">Third Trimester (Week 28–40)</h2>

                    <div className="bg-blue-50 p-6 rounded-2xl mb-8 mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 28–31: Increasing Nutritional Demand</h3>
                        <p className="mb-4">Baby’s brain and lungs grow rapidly.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Walnuts</li>
                                    <li>Milk</li>
                                    <li>Eggs</li>
                                    <li>Green vegetables</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> DHA, Iron, Calcium</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 32–35: Managing Swelling & Fatigue</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Potassium-rich foods (banana, coconut water)</li>
                                    <li>Hydrating foods</li>
                                    <li>Light balanced meals</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-600 text-sm uppercase tracking-wide">Avoid:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Excess salt</li>
                                    <li>Packaged foods</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Potassium, Protein, Water intake</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mt-0">Week 36–40: Preparing for Delivery</h3>
                        <p className="mb-4">Focus on easy-to-digest nutritious meals.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-600 text-sm uppercase tracking-wide">Eat More:</h4>
                                <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                                    <li>Soups</li>
                                    <li>Khichdi</li>
                                    <li>Protein-rich light meals</li>
                                    <li>Fresh fruits</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-sm"><strong>Important Nutrients:</strong> Iron, Energy-rich foods, Hydration</p>
                            <p className="text-sm mt-2 text-primary-600 font-bold"><i className="fa-solid fa-lightbulb"></i> Tip: Eat smaller meals frequently as digestion slows near delivery.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-gray-900 border-b pb-2 text-primary-600 mt-12">General Pregnancy Diet Tips</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Healthy Habits</h3>
                            <ul className="space-y-2 text-sm">
                                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Drink 2.5–3 liters of water daily</li>
                                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Include protein in every meal</li>
                                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Prefer home-cooked fresh food</li>
                                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Maintain regular meal timings</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Foods Usually Recommended</h3>
                            <ul className="space-y-2 text-sm">
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Fruits & vegetables</li>
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Dal and legumes</li>
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Milk & dairy</li>
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Nuts & seeds</li>
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Whole grains</li>
                                <li><i className="fa-solid fa-leaf text-green-500 mr-2"></i> Eggs/chicken/fish (if non-vegetarian)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl mt-8">
                        <h3 className="text-lg font-bold text-red-700 mb-3">Foods Commonly Limited During Pregnancy</h3>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-red-900">
                            <li><i className="fa-solid fa-xmark mr-2"></i> Raw/unpasteurized foods</li>
                            <li><i className="fa-solid fa-xmark mr-2"></i> Excess caffeine</li>
                            <li><i className="fa-solid fa-xmark mr-2"></i> Processed junk food</li>
                            <li><i className="fa-solid fa-xmark mr-2"></i> High-sugar beverages</li>
                            <li><i className="fa-solid fa-xmark mr-2"></i> Undercooked meat or eggs</li>
                            <li><i className="fa-solid fa-xmark mr-2"></i> Never self-medicate supplements</li>
                        </ul>
                    </div>

                    {/* Final Note */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-brand-peach/30 to-pink-50 rounded-2xl text-center border border-brand-peach/50 shadow-sm relative overflow-hidden">
                        <i className="fa-solid fa-quote-left absolute text-8xl text-pink-500/10 -top-4 -left-4"></i>
                        <p className="text-lg md:text-xl font-serif text-gray-800 relative z-10 leading-relaxed font-medium">
                            "Always remember: every pregnancy is different. A personalized diet plan based on weight, medical history, sugar levels, thyroid status, and lifestyle is always best."
                        </p>
                        <p className="mt-6 font-bold text-primary-600 uppercase tracking-widest text-sm">— Dr. Vaibhavi Dhenge</p>
                        <p className="text-xs text-gray-500 mt-2 italic">Consult your gynecologist before making any major diet changes.</p>
                    </div>

                </div>
            </article>
        </main>
    );
}
