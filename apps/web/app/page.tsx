'use client';

import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  const router = useRouter();

    return (
      <>
        <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
          <Header />

    <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg min-h-[90vh] flex items-center">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-200 text-brand-700 text-sm font-semibold mb-8 backdrop-blur-sm hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300">
                        <span className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse\"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse\" style={{ animationDelay: '0.3s' }}></span>
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse\" style={{ animationDelay: '0.6s' }}></span>
                        </span>
                        Unidesk + UniChat — Two Products, One Platform
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 animate-[slideUp_0.6s_ease-out]">
                        All-in-One <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-emerald-600 animate-pulse-gradient\">CRM & WhatsApp Platform</span>
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Capture leads, automate WhatsApp conversations, manage customers, and grow your business from one powerful dashboard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <button className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 active:scale-[0.98] transition-all shadow-xl shadow-brand-600/25 flex items-center justify-center gap-2">
                            Start Free Trial
                            <i className="ph ph-arrow-right"></i>
                        </button>
                        <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center">
                            Book Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <i className="ph-fill ph-check-circle text-brand-500 text-lg"></i>
                            Smart Lead & Sales CRM
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="ph-fill ph-check-circle text-blue-500 text-lg"></i>
                            WhatsApp Business API
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="ph-fill ph-check-circle text-emerald-500 text-lg"></i>
                            Unified Platform
                        </div>
                    </div>
                </div>

                {/* Hero Visual (Abstract UI composition) */}
                <div className="relative lg:h-[600px] w-full hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-blue-500/10 rounded-3xl transform rotate-3 scale-105 border border-white/40"></div>
                    <div className="absolute inset-0 glass-panel rounded-3xl shadow-2xl shadow-slate-900/10 border border-white p-2 animate-float">
                        <div className="w-full h-full rounded-2xl bg-slate-50 overflow-hidden relative">
                            {/* Mockup Header */}
                            <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-64 h-6 ml-4 bg-slate-100 rounded text-xs text-slate-400 flex items-center px-2">unidesk.in/dashboard</div>
                            </div>
                            {/* Mockup Body */}
                            <div className="flex h-[calc(100%-3rem)]">
                                {/* Sidebar */}
                                <div className="w-48 border-r border-slate-200 bg-white p-4 space-y-3">
                                    <div className="w-full h-8 bg-brand-50 rounded-lg border border-brand-100"></div>
                                    <div className="w-full h-8 bg-slate-50 rounded-lg"></div>
                                    <div className="w-full h-8 bg-slate-50 rounded-lg"></div>
                                    <div className="w-full h-8 bg-slate-50 rounded-lg"></div>
                                </div>
                                {/* Main content area abstract */}
                                <div className="flex-1 p-6 relative bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
                                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                                    <div className="relative z-10 space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex-1 h-24 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600"><i className="ph-fill ph-users"></i></div>
                                                <div className="w-16 h-4 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="flex-1 h-24 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><i className="ph-fill ph-whatsapp-logo"></i></div>
                                                <div className="w-20 h-4 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="w-full h-64 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden relative">
                                            {/* Fake Graph */}
                                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-100 to-transparent"></div>
                                            <svg className="absolute bottom-0 w-full h-32 text-brand-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                <path d="M0,100 L0,80 Q25,90 50,60 T100,30 L100,100 Z" fill="currentColor" opacity="0.2"/>
                                                <path d="M0,80 Q25,90 50,60 T100,30" fill="none" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating notification card */}
                    <div className="absolute -right-8 top-1/3 glass-panel p-4 rounded-xl shadow-xl border border-white z-20 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><i className="ph-fill ph-whatsapp-logo text-xl"></i></div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">New message</p>
                            <p className="text-xs text-slate-500">Hey, interested in the product!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by Growing Businesses Across India</p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Fake abstract logos */}
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><i className="ph-fill ph-diamonds-four text-3xl"></i> NexaCorp</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><i className="ph-fill ph-intersect text-3xl"></i> VeloTech</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><i className="ph-fill ph-circle-dashed text-3xl"></i> SphereWorks</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><i className="ph-fill ph-hexagon text-3xl"></i> HiveLogics</div>
                </div>
                
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-slate-100 pt-8">
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">2,500+</p>
                        <p className="text-slate-500 font-medium">Active Businesses</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">5M+</p>
                        <p className="text-slate-500 font-medium">Messages Sent</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">98%</p>
                        <p className="text-slate-500 font-medium">Open Rate</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">15K+</p>
                        <p className="text-slate-500 font-medium">Leads Daily</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-slate-50" id="products">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Six Powerful Products.<br />One Unified Platform.</h2>
                    <p className="text-lg text-slate-600">Everything you need to grow your business - from CRM and messaging to ads, websites, and retail.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* UniCRM */}
                    <div className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/unicrm')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-brand-100 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-kanban"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniCRM</h3>
                            <p className="text-slate-600 mb-4 text-sm">CRM Platform for sales teams</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-brand-500"></i> Lead tracking</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-brand-500"></i> Sales pipeline</li>
                            </ul>
                        </div>
                    </div>

                    {/* UniChat */}
                    <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/unichat')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-green-100 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-green-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-whatsapp-logo"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniChat</h3>
                            <p className="text-slate-600 mb-4 text-sm">WhatsApp & Instagram automation</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-green-600"></i> Chat automation</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-green-600"></i> Broadcasts</li>
                            </ul>
                        </div>
                    </div>

                    {/* UniCOM */}
                    <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/unicom')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-purple-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-phone"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniCOM</h3>
                            <p className="text-slate-600 mb-4 text-sm">Business intercom & calling</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-purple-600"></i> Video calls</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-purple-600"></i> Team chat</li>
                            </ul>
                        </div>
                    </div>

                    {/* UniAds */}
                    <div className="group relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/uniads')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-red-100 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-red-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-megaphone"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniAds</h3>
                            <p className="text-slate-600 mb-4 text-sm">AI ad management platform</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-red-600"></i> Multi-platform ads</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-red-600"></i> AI optimization</li>
                            </ul>
                        </div>
                    </div>

                    {/* UniWeb */}
                    <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-200 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/uniweb')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-100 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-cyan-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-globe"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniWeb</h3>
                            <p className="text-slate-600 mb-4 text-sm">AI website builder</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-cyan-600"></i> No-code builder</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-cyan-600"></i> AI content</li>
                            </ul>
                        </div>
                    </div>

                    {/* UniPOS */}
                    <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => router.push('/unipos')}>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-emerald-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="ph ph-shopping-cart"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">UniPOS</h3>
                            <p className="text-slate-600 mb-4 text-sm">AI retail POS system</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-emerald-600"></i> Smart billing</li>
                                <li className="flex items-center gap-2 text-slate-600"><i className="ph-fill ph-check text-emerald-600"></i> Inventory AI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Powerful Tools to Grow Your Business</h2>
                    <p className="text-lg text-slate-600">Everything you need to capture, nurture, and close deals efficiently.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-magnet"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Lead Capture & Management</h4>
                        <p className="text-slate-600 mb-4">Capture and organize leads from your website, WhatsApp, and connected integrations seamlessly.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Auto-import from Facebook, Google Ads
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Duplicate detection & merging
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Custom fields & tags
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-brand-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-chat-teardrop-text"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Automation</h4>
                        <p className="text-slate-600 mb-4">Send automated messages, out-of-office replies, reminders, and structured follow-ups.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Welcome messages & quick replies
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Scheduled drip campaigns
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Smart chatbot flows
                            </li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-megaphone"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Broadcast Campaigns</h4>
                        <p className="text-slate-600 mb-4">Run promotional and transactional marketing campaigns directly on WhatsApp.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Send to thousands instantly
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Rich media: images, videos, PDFs
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Audience segmentation
                            </li>
                        </ul>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-users-three"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Shared Team Inbox</h4>
                        <p className="text-slate-600 mb-4">Multiple agents handle WhatsApp from one dashboard. No more missed messages.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Multi-agent access
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Conversation assignment
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Internal notes & mentions
                            </li>
                        </ul>
                    </div>

                    {/* Feature 5 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-orange-500 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-chart-line-up"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Smart Analytics</h4>
                        <p className="text-slate-600 mb-4">Track campaign performance, agent productivity, and sales metrics.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Read rates & click tracking
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Revenue forecasting
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Custom dashboards
                            </li>
                        </ul>
                    </div>

                    {/* Feature 6 */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-kanban"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Visual Sales Pipeline</h4>
                        <p className="text-slate-600 mb-4">Drag-and-drop deals through custom stages. Never lose track of opportunities.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                                Kanban board view
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                                Deal value tracking
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-emerald-500 mt-0.5"></i>
                                Win/loss probability
                            </li>
                        </ul>
                    </div>

                    {/* Feature 7 - Instagram */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-lg hover:border-pink-200 transition-all group lg:col-span-2">
                        <div className="w-12 h-12 rounded-xl bg-white border border-pink-200 shadow-sm flex items-center justify-center text-pink-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph-fill ph-instagram-logo"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Instagram DM Integration</h4>
                        <p className="text-slate-600 mb-4">Manage Instagram Direct Messages alongside WhatsApp. Respond to story mentions, handle customer inquiries, and convert followers into customers—all from one inbox.</p>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                Unified WhatsApp + Instagram inbox
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                Story reply management
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                Auto-replies & chatbots
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                Team collaboration features
                            </div>
                        </div>
                    </div>

                    {/* Feature 8 - Integrations */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="ph ph-plugs-connected"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Native Integrations</h4>
                        <p className="text-slate-600 mb-4">Connect with Shopify, WooCommerce, Razorpay, and more.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                E-commerce order sync
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                Payment gateway alerts
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                Google Sheets import
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Integrations */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Connect with Your Favorite Tools</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Shopify */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors text-left group">
                        <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="ph-fill ph-shopping-bag"></i></div>
                        <h4 className="text-xl font-bold mb-2">Shopify</h4>
                        <p className="text-slate-400 text-sm">Send automated order notifications and tracking via WhatsApp.</p>
                    </div>
                    
                    {/* WooCommerce */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors text-left group">
                        <div className="w-14 h-14 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="ph-fill ph-storefront"></i></div>
                        <h4 className="text-xl font-bold mb-2">WooCommerce</h4>
                        <p className="text-slate-400 text-sm">Sync customers and orders automatically into your CRM.</p>
                    </div>

                    {/* Razorpay */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors text-left group">
                        <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="ph-fill ph-credit-card"></i></div>
                        <h4 className="text-xl font-bold mb-2">Razorpay</h4>
                        <p className="text-slate-400 text-sm">Automate payment confirmations and reminder links.</p>
                    </div>

                    {/* Google Sheets */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors text-left group">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"><i className="ph-fill ph-file-csv"></i></div>
                        <h4 className="text-xl font-bold mb-2">Google Sheets</h4>
                        <p className="text-slate-400 text-sm">Sync leads natively directly from your spreadsheets.</p>
                    </div>
                </div>

                <div className="mt-12 text-slate-400 font-medium">
                    Coming soon: <span className="text-white mx-2">Zapier</span> • <span className="text-white mx-2">Meta Ads</span> • <span className="text-white mx-2">HubSpot</span>
                </div>
            </div>
        </section>

        {/* How It Works (Steps) */}
        <section className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600">Set up your complete sales automation in just 3 simple steps</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 z-0 w-2/3 mx-auto"></div>

                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 border-8 border-white shadow-xl shadow-brand-500/30 flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-110 transition-transform">1</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Connect Your Channels</h4>
                        <p className="text-slate-600 mb-4">Link your WhatsApp Business API, website forms, Instagram, and e-commerce platforms in minutes.</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500">
                            <span className="px-3 py-1 bg-slate-100 rounded-full">WhatsApp</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Instagram</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Web Forms</span>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-8 border-white shadow-xl shadow-blue-500/30 flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-110 transition-transform">2</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Automate & Engage</h4>
                        <p className="text-slate-600 mb-4">Set up chatbots, automated welcome messages, drip campaigns, and broadcast promotions.</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500">
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Chatbots</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Broadcasts</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Follow-ups</span>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-8 border-white shadow-xl shadow-emerald-500/30 flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:scale-110 transition-transform">3</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Track & Convert</h4>
                        <p className="text-slate-600 mb-4">Monitor your pipeline, track team performance, analyze campaign ROI, and close more deals.</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500">
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Analytics</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Pipeline</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Reports</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
                        <i className="ph-fill ph-clock text-brand-600 text-xl"></i>
                        <span className="font-bold text-slate-900">Setup Time:</span>
                        <span className="text-slate-600">Under 15 minutes</span>
                    </div>
                </div>
            </div>
        </section>



        {/* Testimonials Section */}
        <section className="py-24 bg-white" id="testimonials">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Loved by businesses across India</h2>
                    <p className="text-lg text-slate-600">See how Unidesk is helping companies close more deals and grow faster</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all">
                        <div className="flex gap-1 text-amber-400 mb-6">
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                        </div>
                        <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
                            "Unidesk transformed our sales process. WhatsApp automation alone increased our conversion rate by 45%. Best investment we made this year!"
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80" alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-slate-900">Priya Sharma</p>
                                <p className="text-slate-500 text-sm">Founder, Aura Retail</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all">
                        <div className="flex gap-1 text-amber-400 mb-6">
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                        </div>
                        <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
                            "Finally, a CRM that integrates WhatsApp perfectly. Our team can now handle 3x more customer conversations without hiring additional staff."
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80" alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-slate-900">Rahul Mehta</p>
                                <p className="text-slate-500 text-sm">Director, PropConnect</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all">
                        <div className="flex gap-1 text-amber-400 mb-6">
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                            <i className="ph-fill ph-star text-lg"></i>
                        </div>
                        <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
                            "The broadcast feature is a game-changer! We reach 10,000+ customers instantly via WhatsApp with personalized offers. ROI is incredible."
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=80" alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-slate-900">Sneha Kapoor</p>
                                <p className="text-slate-500 text-sm">CEO, StyleHub Fashion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-slate-50" id="contact">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                {/* Contact Info side */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Let's talk about growing your business</h2>
                    <p className="text-lg text-slate-600 mb-10">Schedule a personalized demo or get answers from our experts. We're here to help you succeed.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                                <i className="ph-fill ph-whatsapp-logo text-2xl"></i>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">WhatsApp / Call Us</p>
                                <a href="tel:+919625878600" className="text-lg text-brand-600 hover:text-brand-700 font-semibold">+91 9625878600</a>
                                <p className="text-sm text-slate-500 mt-1">Available Mon-Sat, 9 AM - 7 PM IST</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <i className="ph-fill ph-envelope-simple text-2xl"></i>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Email Support</p>
                                <a href="mailto:support@unidesk.in" className="text-lg text-blue-600 hover:text-blue-700 font-semibold">support@unidesk.in</a>
                                <p className="text-sm text-slate-500 mt-1">Response within 2 hours during business hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <i className="ph-fill ph-video-camera text-2xl"></i>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Book a Live Demo</p>
                                <p className="text-slate-600">See Unidesk in action with a personalized walkthrough</p>
                                <button onClick={() => router.push('/contact')} className="mt-2 text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1">
                                    Schedule Now <i className="ph ph-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h3>
                        <p className="text-slate-600">Have questions? Our team is ready to help you set up.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all mt-4">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center"><i className="ph-fill ph-envelope-simple text-xl"></i></div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Us</p>
                                <a href="mailto:support@unidesk.in" className="text-sm font-bold text-slate-900 hover:text-brand-600">support@unidesk.in</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center"><i className="ph-fill ph-phone text-xl"></i></div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Call or WhatsApp</p>
                                <a href="tel:+919625878600" className="text-sm font-bold text-slate-900 hover:text-brand-600">+91 9625878600</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Start Automating Your Sales Today</h2>
                <p className="text-xl text-slate-300 mb-10">Join hundreds of growing businesses unifying their sales and communication on Unidesk.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold text-lg hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20">
                        Start Free Trial
                    </button>
                    <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all">
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
