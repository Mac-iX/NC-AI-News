"use client";

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Subscribing...');
    setIsSuccess(false);

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Success! Check your inbox for confirmation.');
      setIsSuccess(true);
      setEmail('');
    } else {
      setMessage(data.error || 'An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-duke-blue via-slate-900 to-dark-navy border border-slate-800 p-12 md:p-16">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-carolina-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-orange/10 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-carolina-blue/10 border border-carolina-blue/30 rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-carolina-blue" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the NC AI Brief</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Get a weekly, no-fluff email with the most important AI news and analysis from across North Carolina.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-900/50 border-2 border-slate-700 rounded-xl px-6 py-4 text-base text-white placeholder-gray-500 focus:outline-none focus:border-carolina-blue transition-colors duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark-navy bg-carolina-blue rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-carolina-blue/20"
                  >
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>
                </div>
                
                {message && (
                  <div className={`mt-6 flex items-center justify-center gap-2 text-sm ${isSuccess ? 'text-green-400' : 'text-gray-400'}`}>
                    {isSuccess && <CheckCircle className="w-4 h-4" />}
                    <p>{message}</p>
                  </div>
                )}
              </form>
              
              <p className="mt-8 text-sm text-gray-500">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
