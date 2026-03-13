'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! Our team will contact you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

    return (
      <>
        <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
          <Header />

    <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 mesh-bg border-b border-slate-200 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-10 right-20 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                    We're here to help you <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">grow faster.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Have questions about pricing, features, or setting up the Official WhatsApp API? Our team of experts is ready to assist.
                </p>
            </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-start">
                
                {/* Left Column: Contact Information */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Get in touch</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Fill out the form, and a Unidesk specialist will reach out within 2 hours during standard business times.
                        </p>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-slate-100">
                        {/* Email Card */}
                        <div className="group bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                <i className="ph-fill ph-envelope-simple"></i>
                            </div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email Support & Sales</p>
                            <a href="mailto:support@unidesk.in" className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">support@unidesk.in</a>
                        </div>

                        {/* Phone/WhatsApp Card */}
                        <div className="group bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-500 text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                <i className="ph-fill ph-whatsapp-logo"></i>
                            </div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call or WhatsApp us</p>
                            <a href="tel:+917428251864" className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">+91 7428251864</a>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Follow our updates</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-white hover:border-brand-200 hover:text-brand-600 hover:shadow-md transition-all">
                                <i className="ph-fill ph-instagram-logo text-2xl"></i>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-white hover:border-brand-200 hover:text-brand-600 hover:shadow-md transition-all">
                                <i className="ph-fill ph-facebook-logo text-2xl"></i>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-white hover:border-brand-200 hover:text-brand-600 hover:shadow-md transition-all">
                                <i className="ph-fill ph-linkedin-logo text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 relative">
                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-100 to-blue-100 rounded-full blur-xl z-0"></div>
                        
                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="+91 90000 00000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Acme Corp" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                                <textarea rows={4} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 resize-none" placeholder="I'm interested in automating my sales process using the WhatsApp API..."></textarea>
                            </div>

                            <button type="button" className="w-full py-4 px-6 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
                                Send Message
                                <i className="ph ph-paper-plane-right"></i>
                            </button>
                            
                            <p className="text-center text-xs text-slate-500">
                                By submitting this form, you agree to our <a href="#" className="underline hover:text-brand-600 transition-colors">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to streamline your sales?</h2>
                <p className="text-xl text-slate-300 mb-10">Join hundreds of growing businesses unifying their sales and communication on Unidesk.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold text-lg hover:bg-brand-400 active:scale-[0.98] transition-all shadow-lg shadow-brand-500/20">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 active:scale-[0.98] transition-all" onClick={() => router.push('/book-demo')}>
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    </main>

    <Footer />
        </div>
      </>
    );
}
