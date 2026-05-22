"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadCaptureForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Fire-and-forget background fetch to MailerLite
            await fetch('https://assets.mailerlite.com/jsonp/2371546/forms/188182160208823762/subscribe', {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Bypasses CORS blocking since we don't need to read the response
            });
        } catch (error) {
            console.error('Error submitting form', error);
        }

        // Regardless of the network response, instantly redirect the patient to the beautiful guide
        router.push('/pregnancy-diet-guide');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
            
            <input 
                type="email" 
                name="fields[email]" 
                placeholder="Email address" 
                required 
                className="flex-1 w-full sm:w-48 bg-white border border-gray-200 text-gray-800 text-xs rounded-lg px-3 py-1.5 outline-none focus:border-primary-500 shadow-sm" 
            />
            
            <button 
                type="submit" 
                disabled={loading}
                className="bg-primary-600 text-white font-bold py-1.5 px-4 rounded-lg shadow-sm hover:bg-primary-700 transition-colors text-xs outline-none whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? 'Sending...' : <>Send <i className="fa-solid fa-download ml-1"></i></>}
            </button>
        </form>
    );
}
