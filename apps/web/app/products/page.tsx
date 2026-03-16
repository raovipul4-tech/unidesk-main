'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function ProductsPage() {
  const router = useRouter();

    return (
      <>
        <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
          <Header />

    <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 mesh-bg border-b border-slate-200 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-10 -left-20 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
                    Platform Overview
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                    Two powerful products.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">One unified growth engine.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Discover how Unidesk and UniChat work hand-in-hand to transform how you manage leads and automate customer conversations.
                </p>
            </div>
        </section>

        {/* Product 1: UniCRM */}
        <section className="py-24 bg-white relative overflow-hidden" id="unicrm">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 text-3xl mb-6 shadow-inner border border-brand-100">
                            <i className="ph ph-kanban"></i>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">UniCRM</h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            A smart, lightweight CRM designed specifically for modern, fast-moving businesses. Manage your entire sales pipeline without the clutter of traditional enterprise software.
                        </p>
                        <button className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm">
                            Explore CRM Features <i className="ph ph-arrow-right"></i>
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-2xl shadow-slate-200/50">
                            {/* High quality unsplash dashboard representation */}
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt="Unidesk Dashboard" className="w-full h-auto rounded-2xl object-cover border border-slate-100 mix-blend-multiply" />
                        </div>
                    </div>
                </div>

                {/* CRM Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-users"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Contact Database</h4>
                        <p className="text-slate-600 text-sm">Centralize all customer information, communication history, and custom data attributes in one secure place.</p>
                    </div>
                    
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-funnel"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Sales Pipeline</h4>
                        <p className="text-slate-600 text-sm">Visual, drag-and-drop kanban boards to track deals, forecast revenue, and ensure nothing slips through the cracks.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-calendar-check"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Task & Follow-ups</h4>
                        <p className="text-slate-600 text-sm">Automated reminders and task assignments to keep your sales team productive and on schedule.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-magnet"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Lead Management</h4>
                        <p className="text-slate-600 text-sm">Automatically capture leads from web forms, Facebook Lead Ads, and inbound WhatsApp messages.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-handshake"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Team Collaboration</h4>
                        <p className="text-slate-600 text-sm">Leave internal notes, mention colleagues, and reassign deals easily within customer profiles.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-4 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors"><i className="ph ph-trend-up"></i></div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Smart Analytics</h4>
                        <p className="text-slate-600 text-sm">Comprehensive dashboards tracking team performance, win rates, and pipeline health over time.</p>
                    </div>
                </div>

            </div>
        </section>

        {/* Product 2: UniChat (Dark Theme to represent API/Automation power) */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="unichat">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-3xl transform -rotate-3 border border-white/10"></div>
                        <div className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl shadow-blue-900/50">
                            {/* High quality unsplash representation of chat/automation */}
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200" alt="UniChat Interface" className="w-full h-auto rounded-2xl object-cover opacity-90 border border-slate-600" />
                            
                            {/* Floating UI element */}
                            <div className="absolute -right-6 top-12 glass-panel p-4 rounded-xl shadow-2xl border border-white/20 z-20 flex items-center gap-3 animate-float bg-slate-800/80">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="ph-fill ph-paper-plane-right text-xl"></i></div>
                                <div>
                                    <p className="text-sm font-bold text-white">Broadcast Sent</p>
                                    <p className="text-xs text-slate-300">Delivered to 5,432 contacts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-6 shadow-inner border border-blue-500/20">
                            <i className="ph ph-whatsapp-logo"></i>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">UniChat</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Unlock the power of the Official WhatsApp Business API. Send bulk broadcasts, automate replies, and let your entire team manage conversations from a single shared inbox.
                        </p>
                        <button className="px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 active:scale-[0.98] transition-all flex items-center gap-2">
                            Explore Chat Features <i className="ph ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* Chat Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-check-square-offset"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Official API Integration</h4>
                        <p className="text-slate-400 text-sm">Secure, verified connection via Meta. Say goodbye to scan-and-sync web hacks and frequent number bans.</p>
                    </div>
                    
                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-megaphone-simple"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Bulk Broadcasts</h4>
                        <p className="text-slate-400 text-sm">Send rich media promotional messages to segmented lists with advanced scheduling and analytics.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-users-three"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Shared Team Inbox</h4>
                        <p className="text-slate-400 text-sm">Route chats to specific departments. Multiple agents can handle support and sales on a single number.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-robot"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Chat Automation</h4>
                        <p className="text-slate-400 text-sm">Build dynamic chat flows, setup out-of-office auto-replies, and use interactive buttons for instant support.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-chart-bar"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Campaign Tracking</h4>
                        <p className="text-slate-400 text-sm">Real-time metrics on sent, delivered, read rates, and button clicks for your marketing broadcasts.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-xl mb-4 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"><i className="ph ph-shield-check"></i></div>
                        <h4 className="text-lg font-bold text-white mb-2">Green Tick Verification</h4>
                        <p className="text-slate-400 text-sm">Assistance with applying for the Official WhatsApp Green Tick to build trust with your customers.</p>
                    </div>
                </div>

            </div>
        </section>

        {/* Better Together (Integration visual) */}
        <section className="py-24 bg-slate-50 mesh-bg border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Seamlessly Integrated.<br />Infinitely Powerful.</h2>
                <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
                    Unidesk and UniChat share the same core database. A conversation on WhatsApp instantly updates the CRM, and a pipeline change triggers automated messages.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative max-w-5xl mx-auto">
                    {/* connecting line */}
                    <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-brand-300 via-blue-300 to-brand-300 transform -translate-y-1/2 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-sm text-left">
                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 text-2xl mb-6"><i className="ph ph-funnel"></i></div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">1. Capture in CRM</h4>
                        <p className="text-slate-600 text-sm">A lead enters your pipeline from Facebook Ads. Unidesk automatically creates the contact profile.</p>
                    </div>

                    {/* Arrows */}
                    <div className="relative z-10 bg-slate-100 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 transform rotate-90 md:rotate-0">
                        <i className="ph ph-arrows-left-right text-xl"></i>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-sm text-left">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6"><i className="ph ph-whatsapp-logo"></i></div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">2. Engage via Chat</h4>
                        <p className="text-slate-600 text-sm">UniChat triggers an automated welcome message on WhatsApp instantly. The agent replies via Shared Inbox.</p>
                    </div>

                    {/* Arrows */}
                    <div className="relative z-10 bg-slate-100 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 transform rotate-90 md:rotate-0">
                        <i className="ph ph-arrows-left-right text-xl"></i>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-sm text-left">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-2xl mb-6"><i className="ph ph-handshake"></i></div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">3. Close & Analyze</h4>
                        <p className="text-slate-600 text-sm">Deal is marked won in Unidesk. Analytics update. A transactional receipt is fired off via UniChat.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA (Copied from previous pages) */}
        <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Experience the complete platform.</h2>
                <p className="text-xl text-slate-300 mb-10">Get full access to Unidesk and UniChat on our Growth plan with a 14-day free trial.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold text-lg hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all">
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    </main>

    {/* Footer (Copied from previous pages) */}
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                <div className="col-span-2 lg:col-span-2">
                    <a href="#" className="flex items-center gap-2 mb-6" onClick={() => router.push('/')}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white">
                            <i className="ph ph-infinity text-xl"></i>
                        </div>
                        <span className="font-bold text-xl text-slate-900">Unidesk</span>
                    </a>
                    <p className="text-slate-500 mb-6 max-w-sm">All-in-One CRM & WhatsApp Automation Platform designed to help Indian businesses grow faster.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                            <i className="ph-fill ph-instagram-logo text-xl"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                            <i className="ph-fill ph-facebook-logo text-xl"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                            <i className="ph-fill ph-linkedin-logo text-xl"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Products</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-brand-600 hover:text-brand-700 transition-colors" onClick={() => router.push('/products')}>Unidesk</a></li>
                        <li><a href="#" className="text-brand-600 hover:text-brand-700 transition-colors" onClick={() => router.push('/products')}>UniChat</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors" onClick={() => router.push('/pricing')}>Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Integrations</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">WooCommerce</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Shopify</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Google Sheets</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Razorpay</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Legal & Support</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Terms of Use</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Refund Policy</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors" onClick={() => router.push('/contact')}>Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">© 2024 Unidesk. All rights reserved.</p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2"><i className="ph-fill ph-envelope-simple text-slate-400"></i> support@unidesk.in</span>
                    <span className="flex items-center gap-2"><i className="ph-fill ph-whatsapp-logo text-green-500"></i> +91 7428251864</span>
                </div>
            </div>
        </div>
    </footer>
        </div>
      </>
    );
}
