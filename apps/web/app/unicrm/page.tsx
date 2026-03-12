'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UnicrmPage() {
  const router = useRouter();

    return (
      <>
        <div className="font-sans text-slate-900 antialiased bg-white">
          <Header />

    <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 mesh-bg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
                            <i className="ph-fill ph-kanban"></i>
                            Unidesk Platform
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Smart CRM for<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">High-Velocity Sales</span>
                        </h1>
                        
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                            Track leads, manage your sales pipeline, automate follow-ups, and close deals faster. Built for modern sales teams who need speed and simplicity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="https://crm.unidesk.in" target="_blank" className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/25 flex items-center justify-center gap-2">
                                Start Free Trial
                                <i className="ph ph-arrow-right"></i>
                            </a>
                            <button onClick={() => router.push('/contact')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                                Book Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-brand-500 text-lg"></i>
                                14-day free trial
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-brand-500 text-lg"></i>
                                No credit card required
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-blue-500/10 rounded-3xl transform rotate-3"></div>
                        <div className="absolute inset-0 bg-white/80 backdrop-blur rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="CRM Dashboard" className="w-full h-full object-cover opacity-90" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Everything You Need to Manage Customers</h2>
                    <p className="text-lg text-slate-600">Powerful tools to track, engage, and convert leads into loyal customers</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-users-three text-brand-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Lead Management</h4>
                        <p className="text-slate-600 mb-4">Capture leads from multiple sources, assign to team members, and track through custom sales stages.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Auto-capture from website & forms
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Lead scoring & qualification
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-brand-500 mt-0.5"></i>
                                Duplicate detection
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-kanban text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Sales Pipeline</h4>
                        <p className="text-slate-600 mb-4">Visualize your entire sales process. Drag-and-drop deals between stages and track conversion rates.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Kanban board view
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Win/loss probability tracking
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-blue-500 mt-0.5"></i>
                                Revenue forecasting
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-lightning text-purple-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Automation</h4>
                        <p className="text-slate-600 mb-4">Save time with workflow automation. Trigger emails, assign tasks, and update records automatically.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Email drip campaigns
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Task auto-assignment
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                                Follow-up reminders
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-envelope text-orange-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Email Integration</h4>
                        <p className="text-slate-600 mb-4">Connect Gmail or Outlook. Track opens, clicks, and responses directly in your CRM.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Two-way email sync
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Email templates
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-orange-500 mt-0.5"></i>
                                Open & click tracking
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-phone text-green-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Call Tracking</h4>
                        <p className="text-slate-600 mb-4">Make and receive calls directly from CRM. Automatic call logging and recording.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                Click-to-call from CRM
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                Call recording & notes
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                VoIP integration
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-chart-line-up text-indigo-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Analytics & Reports</h4>
                        <p className="text-slate-600 mb-4">Real-time dashboards and detailed reports. Track KPIs, team performance, and revenue metrics.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                Custom dashboards
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                Sales forecasting
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                                Export to Excel/PDF
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Built for Every Industry</h2>
                    <p className="text-lg text-slate-600">From startups to enterprises, Unidesk adapts to your business needs</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏢</div>
                        <h3 className="font-bold text-slate-900 mb-2">Real Estate</h3>
                        <p className="text-sm text-slate-600">Manage property listings, track buyers, close deals faster</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏥</div>
                        <h3 className="font-bold text-slate-900 mb-2">Healthcare</h3>
                        <p className="text-sm text-slate-600">Patient management, appointment scheduling, follow-ups</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🛒</div>
                        <h3 className="font-bold text-slate-900 mb-2">E-commerce</h3>
                        <p className="text-sm text-slate-600">Customer tracking, order history, retention campaigns</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">💼</div>
                        <h3 className="font-bold text-slate-900 mb-2">B2B Sales</h3>
                        <p className="text-sm text-slate-600">Enterprise deals, contracts, multi-stakeholder tracking</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🎓</div>
                        <h3 className="font-bold text-slate-900 mb-2">Education</h3>
                        <p className="text-sm text-slate-600">Student admissions, course enrollment, alumni relations</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏦</div>
                        <h3 className="font-bold text-slate-900 mb-2">Finance</h3>
                        <p className="text-sm text-slate-600">Client portfolio management, financial advisory</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🚗</div>
                        <h3 className="font-bold text-slate-900 mb-2">Automotive</h3>
                        <p className="text-sm text-slate-600">Vehicle sales, test drives, service tracking</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">💻</div>
                        <h3 className="font-bold text-slate-900 mb-2">SaaS</h3>
                        <p className="text-sm text-slate-600">Subscription management, churn reduction, upselling</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Sales Process?</h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                    Join thousands of businesses using Unidesk to close more deals and build better customer relationships.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://crm.unidesk.in" target="_blank" className="px-10 py-4 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition font-bold text-lg shadow-xl">
                        Start Free Trial →
                    </a>
                    <button onClick={() => router.push('/contact')} className="px-10 py-4 bg-white/10 backdrop-blur text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition font-bold text-lg">
                        Schedule Demo
                    </button>
                </div>
                <p className="text-slate-400 mt-6 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    </main>

    <Footer>
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white">
                            <i className="ph ph-infinity text-xl"></i>
                        </div>
                        <span className="font-bold text-xl">UniFlow</span>
                    </div>
                    <p className="text-slate-500 text-sm">All-in-One CRM & WhatsApp Platform for modern businesses.</p>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Products</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" onClick={() => router.push('/unicrm')} className="text-slate-500 hover:text-brand-600 transition">Unidesk</a></li>
                        <li><a href="#" onClick={() => router.push('/unichat')} className="text-slate-500 hover:text-brand-600 transition">UniChat</a></li>
                        <li><a href="#" onClick={() => router.push('/pricing')} className="text-slate-500 hover:text-brand-600 transition">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" onClick={() => router.push('/features')} className="text-slate-500 hover:text-brand-600 transition">Features</a></li>
                        <li><a href="#" onClick={() => router.push('/contact')} className="text-slate-500 hover:text-brand-600 transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition">Privacy Policy</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                <p>© 2024 UniFlow. All rights reserved.</p>
            </div>
        </div>
    </Footer>
        </div>
      </>
    );
}
