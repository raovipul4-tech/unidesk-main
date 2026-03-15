'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniPOSPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-[90vh] flex items-center">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  AI-Powered POS System
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Modern Retail<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">& POS System</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Smart retail & restaurant POS with AI inventory, smart billing, and real-time analytics. Works offline. Accepts all payments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-600/25 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2">
                    Start Free Trial
                    <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center">
                    Schedule Demo
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-emerald-500 text-lg"></i>
                    Fast Billing
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-teal-500 text-lg"></i>
                    Smart Inventory
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-green-500 text-lg"></i>
                    All Payments
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative lg:h-[600px] w-full hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-3xl transform rotate-3 scale-105 border border-white/40"></div>
                <div className="absolute inset-0 glass-panel rounded-3xl shadow-2xl shadow-slate-900/10 border border-white p-2 animate-float">
                  <div className="w-full h-full rounded-2xl bg-white overflow-hidden relative flex flex-col">
                    {/* POS Screen Header */}
                    <div className="h-8 bg-gradient-to-r from-emerald-700 to-teal-700 text-white flex items-center px-3 font-bold text-xs">UNIIPOS - Store 01</div>
                    
                    {/* POS Content */}
                    <div className="flex flex-1">
                      {/* Left: Bill Items */}
                      <div className="flex-1 border-r border-slate-200 p-3 space-y-1 bg-slate-50">
                        <div className="text-xs font-bold text-slate-600 mb-2">Bill Items</div>
                        <div className="flex justify-between text-xs pb-1 border-b border-slate-200">
                          <span>T-Shirt (M)</span>
                          <span className="font-bold">₹599</span>
                        </div>
                        <div className="flex justify-between text-xs pb-1 border-b border-slate-200">
                          <span>Jeans (32)</span>
                          <span className="font-bold">₹1,299</span>
                        </div>
                        <div className="flex justify-between text-xs pb-1 border-b border-slate-200">
                          <span>Belt</span>
                          <span className="font-bold">₹399</span>
                        </div>
                        <div className="mt-2 pt-2 border-t-2 border-slate-300">
                          <div className="flex justify-between text-xs font-bold">
                            <span>Total</span>
                            <span>₹2,297</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Keypad & Status */}
                      <div className="w-20 border-l border-slate-200 flex flex-col items-center justify-between p-2 bg-white">
                        <div className="space-y-0.5">
                          <div className="w-14 h-6 bg-emerald-100 rounded flex items-center justify-center text-emerald-600 text-xs font-bold">Online</div>
                          <div className="w-14 h-5 bg-slate-200 rounded text-xs text-slate-600 flex items-center justify-center">₹2,297</div>
                        </div>
                        <button className="w-14 h-6 bg-emerald-500 text-white rounded text-xs font-bold">Pay</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="py-16 border-b border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">3x</p>
                  <p className="text-slate-500 font-medium">Faster Billing</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">50%</p>
                  <p className="text-slate-500 font-medium">Waste Reduced</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">10K+</p>
                  <p className="text-slate-500 font-medium">Active Stores</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">100%</p>
                  <p className="text-slate-500 font-medium">GST Compliant</p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features Grid */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Complete Retail Solution</h2>
                <p className="text-lg text-slate-600">Everything you need to run a modern retail or restaurant business</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-lightning"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast Billing</h4>
                  <p className="text-slate-600 mb-4">Quick checkout with barcode scanning & touch screen interface.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      Barcode/QR scanning
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      Touch screen optimized
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      1-click billing
                    </li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-package"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Smart Inventory</h4>
                  <p className="text-slate-600 mb-4">AI-powered stock management with automatic reorder alerts.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Real-time stock tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Auto reorder alerts
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Multi-location management
                    </li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-credit-card"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">All Payment Methods</h4>
                  <p className="text-slate-600 mb-4">Accept cash, cards, UPI, and digital wallets seamlessly.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      UPI & wallets
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      Card payments
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      EMI options
                    </li>
                  </ul>
                </div>

                {/* Feature 4 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-chart-line-up"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Real-time Analytics</h4>
                  <p className="text-slate-600 mb-4">Sales, revenue, and customer behavior insights at a glance.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      Sales dashboards
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      Daily reports
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                      Customer insights
                    </li>
                  </ul>
                </div>

                {/* Feature 5 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-users"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Staff Management</h4>
                  <p className="text-slate-600 mb-4">Employee tracking, shifts, and performance analytics.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Shift scheduling
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Commission tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-teal-500 mt-0.5"></i>
                      Performance reports
                    </li>
                  </ul>
                </div>

                {/* Feature 6 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-wifi-none"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Offline Mode</h4>
                  <p className="text-slate-600 mb-4">Keep selling even without internet connection.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      Auto-sync when online
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      No downtime
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                      Data backup
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Built for Every Retail Business</h2>
                <p className="text-lg text-slate-600">UniPOS works for retail stores, restaurants, and service businesses</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Retail */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 hover:shadow-xl hover:border-emerald-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-storefront"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Retail Stores</h3>
                  <p className="text-slate-600 mb-6">Apparel, electronics, grocery with complete inventory control.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>SKU management</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Stock by location</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Discount management</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Loyalty rewards</span>
                    </li>
                  </ul>
                </div>

                {/* Restaurants */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-orange-50 to-white border border-orange-200 hover:shadow-xl hover:border-orange-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-utensils"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Restaurants & Cafes</h3>
                  <p className="text-slate-600 mb-6">QSR, fine dining with order management and kitchen integration.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-orange-600 mt-1 shrink-0"></i>
                      <span>Table management</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-orange-600 mt-1 shrink-0"></i>
                      <span>Kitchen display system</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-orange-600 mt-1 shrink-0"></i>
                      <span>Order management</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-orange-600 mt-1 shrink-0"></i>
                      <span>Delivery integration</span>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 hover:shadow-xl hover:border-emerald-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-scissors"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Salons & Services</h3>
                  <p className="text-slate-600 mb-6">Salons, spas, service centers with appointment booking.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Appointment scheduling</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Services & packages</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>Staff commission</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-emerald-600 mt-1 shrink-0"></i>
                      <span>SMS reminders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-16 tracking-tight">Why Choose UniPOS?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <i className="ph ph-lightning text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">3x Faster Billing</h4>
                      <p className="text-slate-300">Reduce checkout time and increase customer throughput.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <i className="ph ph-brain text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">AI Inventory Optimization</h4>
                      <p className="text-slate-300">Predict demand and reduce stock waste automatically.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <i className="ph ph-check-circle text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">GST Compliant</h4>
                      <p className="text-slate-300">100% tax compliant with automated e-invoicing.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <i className="ph ph-cloud text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cloud Backup</h4>
                      <p className="text-slate-300">Auto-backup and multi-branch sync for peace of mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <i className="ph ph-graduation-cap text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Free Training</h4>
                      <p className="text-slate-300">Expert team trains your staff to maximize efficiency.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <i className="ph ph-check text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Easy Migration</h4>
                      <p className="text-slate-300">Migrate from any POS system without data loss.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-center text-white">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Modernize Your Retail Business</h2>
              <p className="text-xl text-white/90 mb-10">Smart POS trusted by thousands of retail stores and restaurants across India.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
                  Start Free Trial
                </button>
                <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
                  Schedule Demo
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
