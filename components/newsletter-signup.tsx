"use client";

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Subscribing...');

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Success! You are subscribed.');
      setEmail('');
    } else {
      setMessage(data.error || 'An error occurred.');
    }
  };

  return (
    <section className="bg-duke-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Join the NC AI Brief</h2>
        <p className="mt-2 max-w-xl mx-auto text-gray-300">Get a weekly, no-fluff email with the most important AI news and analysis from across North Carolina.</p>
        <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-slate-800 border-slate-700 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-carolina-blue"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-carolina-blue text-duke-blue hover:bg-carolina-blue/90 h-12 px-6"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
      </div>
    </section>
  );
}
