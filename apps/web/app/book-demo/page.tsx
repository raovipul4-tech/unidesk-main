'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function BookDemoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: 'both', // unicrm, unichat, or both
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'demo',
        }),
      });

      if (response.ok) {
        setStatusMessage('Demo request submitted! Our team will contact you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          product: 'both',
        });
        setTimeout(() => setStatusMessage(''), 5000);
      } else {
        setStatusMessage('Failed to submit demo request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />

        <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 -z-10"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-200 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-green-200 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="max-w-5xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Book a Live Demo
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See Unidesk in action. Get a personalized walkthrough of Unidesk and UniChat with our experts.
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone & Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Which product are you interested in? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.product === 'unicrm' 
                        ? 'border-brand-500 bg-brand-50' 
                        : 'border-slate-200 bg-white hover:border-brand-200'
                    }`}>
                      <input
                        type="radio"
                        name="product"
                        value="unicrm"
                        checked={formData.product === 'unicrm'}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="mt-1"
                      />
                      <div>
                        <p className="font-bold text-slate-900 flex items-center gap-2">
                          <i className="ph ph-kanban text-brand-600"></i> Unidesk
                        </p>
                        <p className="text-xs text-slate-500">CRM Platform</p>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.product === 'unichat' 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-slate-200 bg-white hover:border-green-200'
                    }`}>
                      <input
                        type="radio"
                        name="product"
                        value="unichat"
                        checked={formData.product === 'unichat'}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="mt-1"
                      />
                      <div>
                        <p className="font-bold text-slate-900 flex items-center gap-2">
                          <i className="ph ph-whatsapp-logo text-green-600"></i> UniChat
                        </p>
                        <p className="text-xs text-slate-500">WhatsApp API</p>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.product === 'both' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-slate-200 bg-white hover:border-blue-200'
                    }`}>
                      <input
                        type="radio"
                        name="product"
                        value="both"
                        checked={formData.product === 'both'}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="mt-1"
                      />
                      <div>
                        <p className="font-bold text-slate-900 flex items-center gap-2">
                          <i className="ph ph-infinity text-blue-600"></i> Both
                        </p>
                        <p className="text-xs text-slate-500">Complete Platform</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tell us about your requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="What challenges are you trying to solve? How many team members will use the platform?"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${
                    statusMessage.includes('submitted') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {statusMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Book My Demo'}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  Our team will contact you within 24 hours to schedule your personalized demo.
                </p>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <i className="ph-fill ph-video-camera text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">30-Minute Live Demo</p>
                  <p className="text-sm text-slate-600">Personalized walkthrough tailored to your business needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <i className="ph-fill ph-calendar-check text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Flexible Scheduling</p>
                  <p className="text-sm text-slate-600">Choose a time that works best for your team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <i className="ph-fill ph-handshake text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Expert Consultation</p>
                  <p className="text-sm text-slate-600">Get answers to all your questions from our specialists</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
            <p>© 2024 Unidesk. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
