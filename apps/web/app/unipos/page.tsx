'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniPOSPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  AI POS System
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  UniPOS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">AI-Powered POS System</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Modern retail & restaurant POS with AI inventory, billing, and sales analytics. Works offline. Accepts all payments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-2">
                    Start Free Trial
                    <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Complete Retail & Restaurant Solution</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ph-shopping-cart', title: 'Fast Billing', desc: 'Quick checkout with barcode scanning & touch screen' },
                  { icon: 'ph-package', title: 'Smart Inventory', desc: 'AI-powered stock management with reorder alerts' },
                  { icon: 'ph-credit-card', title: 'All Payments', desc: 'Cash, cards, UPI, digital wallets accepted' },
                  { icon: 'ph-chart-bar', title: 'Real-time Analytics', desc: 'Sales, revenue, and customer behavior insights' },
                  { icon: 'ph-users', title: 'Staff Management', desc: 'Employee tracking, shifts, and performance' },
                  { icon: 'ph-database', title: 'Offline Mode', desc: 'Keep selling even without internet connection' },
                  { icon: 'ph-customer', title: 'Customer Loyalty', desc: 'Build customer profiles and loyalty programs' },
                  { icon: 'ph-report', title: 'Tax & Reports', desc: 'GST compliance and automated reporting' },
                  { icon: 'ph-sync', title: 'Cloud Backup', desc: 'Auto-backup and multi-branch sync' },
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                      <i className={`ph ${feature.icon}`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Works for Any Retail Business</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl mb-6">
                    <i className="ph-fill ph-storefront"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Retail Stores</h3>
                  <p className="text-slate-600 mb-4">Apparel, electronics, grocery stores, pharmacies, and more with complete inventory control.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> SKU management</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> Stock levels by location</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> Discount & promo management</li>
                  </ul>
                </div>

                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-orange-600 text-3xl mb-6">
                    <i className="ph-fill ph-utensils"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Restaurants & Cafes</h3>
                  <p className="text-slate-600 mb-4">QSR, fine dining, cafes with order management and kitchen integration for fast service.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Table management</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Kitchen display system</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Order management</li>
                  </ul>
                </div>

                <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl mb-6">
                    <i className="ph-fill ph-gift"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Specialty Stores</h3>
                  <p className="text-slate-600 mb-4">Salons, spas, service centers with appointment booking and customer management.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> Appointment scheduling</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> Services & packages</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-emerald-500"></i> Staff commission tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Real Results from Our Customers</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: '3x', desc: 'Faster checkout', color: 'emerald' },
                  { metric: '50%', desc: 'Stock waste reduced', color: 'emerald' },
                  { metric: '₹5L+', desc: 'Revenue increase/year', color: 'emerald' },
                  { metric: '100%', desc: 'Tax compliance', color: 'emerald' },
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                    <p className={`text-4xl lg:text-5xl font-black text-${stat.color}-600 mb-2`}>{stat.metric}</p>
                    <p className="text-slate-600">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Modernize your retail store today</h2>
              <p className="text-xl text-slate-300 mb-10">Smart POS system trusted by thousands of retail stores and restaurants.</p>
              <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20">
                Start Free Trial
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
