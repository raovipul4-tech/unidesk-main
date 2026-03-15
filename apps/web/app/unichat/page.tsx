'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UnichatPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-6">
                            <i className="ph-fill ph-whatsapp-logo"></i>
                            WhatsApp & Instagram Business API
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Connect With Customers on<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">WhatsApp & Instagram</span>
                        </h1>
                        
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                            Manage conversations, automate messages, broadcast campaigns, and provide 24/7 support on WhatsApp and Instagram—all from one powerful dashboard.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="https://whatsapp.unidesk.in" target="_blank" className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-600/25 flex items-center justify-center gap-2">
                                Start Free Trial
                                <i className="ph ph-arrow-right"></i>
                            </a>
                            <button onClick={() => router.push('/contact')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                                Book Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 text-lg"></i>
                                Official WhatsApp API
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 text-lg"></i>
                                Instagram DM integration
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-3xl transform rotate-3"></div>
                        <div className="absolute inset-0 bg-white/80 backdrop-blur rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80" alt="WhatsApp Business" className="w-full h-full object-cover opacity-90" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Two Platforms */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Two Platforms, One Dashboard</h2>
                    <p className="text-lg text-slate-600">Manage both WhatsApp and Instagram conversations in a unified inbox</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* WhatsApp */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                                <i className="ph-fill ph-whatsapp-logo"></i>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">WhatsApp Business API</h3>
                                <p className="text-green-700 text-sm font-medium">Official Meta Partner</p>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Connect your official WhatsApp Business number and reach 2+ billion users worldwide. Send notifications, run campaigns, and provide instant support.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                <span><strong>Broadcast Messages:</strong> Send bulk messages with personalization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                <span><strong>Quick Replies:</strong> Save time with templates and shortcuts</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                <span><strong>Chatbots:</strong> Automate FAQs and 24/7 support</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-green-500 mt-0.5"></i>
                                <span><strong>Rich Media:</strong> Send images, videos, documents & catalogs</span>
                            </li>
                        </ul>
                    </div>

                    {/* Instagram */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                                <i className="ph-fill ph-instagram-logo"></i>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Instagram DM API</h3>
                                <p className="text-pink-700 text-sm font-medium">Available via UniChat</p>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Manage Instagram Direct Messages from your dashboard. Handle customer inquiries, respond to comments, and turn followers into customers.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                <span><strong>Unified Inbox:</strong> All Instagram DMs in one place</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                <span><strong>Story Replies:</strong> Respond to story mentions & questions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                <span><strong>Auto-Replies:</strong> Never miss a customer message</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                                <span><strong>Team Collaboration:</strong> Assign chats to team members</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Powerful Features for Business Messaging</h2>
                    <p className="text-lg text-slate-600">Everything you need to manage customer conversations at scale</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-tray text-green-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Unified Inbox</h4>
                        <p className="text-slate-600">Manage WhatsApp and Instagram messages in one dashboard. Switch between conversations seamlessly.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-robot text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Chatbot Automation</h4>
                        <p className="text-slate-600">Build intelligent chatbots with no-code tools. Handle FAQs and provide 24/7 instant support.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-megaphone text-purple-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Broadcast Campaigns</h4>
                        <p className="text-slate-600">Send personalized bulk messages to thousands of customers. Segment audiences and track performance.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-users-three text-orange-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Team Collaboration</h4>
                        <p className="text-slate-600">Assign conversations to agents, add internal notes, and monitor team performance with analytics.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-chat-text text-teal-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Templates & Shortcuts</h4>
                        <p className="text-slate-600">Save time with message templates, quick replies, and canned responses. Personalize automatically.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-6">
                            <i className="ph ph-chart-line-up text-yellow-600"></i>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Analytics & Reports</h4>
                        <p className="text-slate-600">Track message delivery, response times, conversion rates, and ROI. Export detailed reports.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Meta Pricing Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6\">\n                <div className=\"text-center mb-16\">\n                    <h2 className=\"text-3xl md:text-4xl font-black text-slate-900 mb-4\">Meta API Pricing</h2>\n                    <p className=\"text-lg text-slate-600 mb-8\">Additional costs may apply for WhatsApp and Instagram API usage through Meta</p>\n                    \n                    <div className=\"inline-block bg-white rounded-2xl border-2 border-amber-200 p-8 max-w-2xl\">\n                        <div className=\"flex items-start gap-4 mb-6\">\n                            <div className=\"w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1\">\n                                <i className=\"ph ph-warning text-amber-600 text-sm\"></i>\n                            </div>\n                            <div className=\"text-left\">\n                                <h3 className=\"text-xl font-bold text-slate-900 mb-2\">Pricing Subject to Change</h3>\n                                <p className=\"text-slate-600 leading-relaxed\">\n                                    Meta's API pricing is set by Meta Platforms, Inc. and is subject to change at any time. Pricing varies based on message type (session messages, template messages, utility messages), conversation initiation fees, and message status callback costs. We recommend checking <a href=\"https://www.meta.com/en/business/tools/whatsapp/pricing/\" target=\"_blank\" className=\"text-green-600 font-semibold hover:underline\">Meta's official pricing page</a> for the most current rates.\n                                </p>\n                            </div>\n                        </div>\n                        \n                        <div className=\"bg-amber-50 rounded-xl p-4 text-sm text-slate-700 border border-amber-100\">\n                            <p className=\"font-semibold mb-2\">What You Need to Know:</p>\n                            <ul className=\"space-y-2 text-left ml-4\">\n                                <li>• <strong>WhatsApp API charges:</strong> Per-message pricing based on conversation type</li>\n                                <li>• <strong>Instagram API charges:</strong> May vary or be included in WhatsApp pricing</li>\n                                <li>• <strong>Phone Number Verification:</strong> May require a one-time fee through Meta</li>\n                                <li>• <strong>Billing:</strong> Meta bills you directly for API usage; we handle the integration</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        {/* Use Cases */}\n        <section className=\"py-24 bg-white\">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Perfect for Every Business</h2>
                    <p className="text-lg text-slate-600">From e-commerce to healthcare, UniChat helps businesses connect with customers</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🛍️</div>
                        <h3 className="font-bold text-slate-900 mb-2">E-commerce</h3>
                        <p className="text-sm text-slate-600">Order updates, abandoned cart reminders, product catalogs</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏥</div>
                        <h3 className="font-bold text-slate-900 mb-2">Healthcare</h3>
                        <p className="text-sm text-slate-600">Appointment reminders, prescription alerts, patient support</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏦</div>
                        <h3 className="font-bold text-slate-900 mb-2">Banking</h3>
                        <p className="text-sm text-slate-600">Transaction alerts, account notifications, customer support</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏨</div>
                        <h3 className="font-bold text-slate-900 mb-2">Hospitality</h3>
                        <p className="text-sm text-slate-600">Booking confirmations, guest services, feedback collection</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🎓</div>
                        <h3 className="font-bold text-slate-900 mb-2">Education</h3>
                        <p className="text-sm text-slate-600">Class schedules, assignment reminders, parent communication</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🏢</div>
                        <h3 className="font-bold text-slate-900 mb-2">Real Estate</h3>
                        <p className="text-sm text-slate-600">Property tours, listing updates, buyer communication</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">🚗</div>
                        <h3 className="font-bold text-slate-900 mb-2">Automotive</h3>
                        <p className="text-sm text-slate-600">Service reminders, test drive bookings, sales inquiries</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
                        <div className="text-3xl mb-3">💄</div>
                        <h3 className="font-bold text-slate-900 mb-2">Beauty & Wellness</h3>
                        <p className="text-sm text-slate-600">Appointment booking, promotions, loyalty programs</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6">Start Connecting with Customers Today</h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                    Join thousands of businesses using UniChat to provide instant, personalized customer experiences on WhatsApp and Instagram.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://whatsapp.unidesk.in" target="_blank" className="px-10 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition font-bold text-lg shadow-xl">
                        Get Started Free →
                    </a>
                    <button onClick={() => router.push('/contact')} className="px-10 py-4 bg-white/10 backdrop-blur text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition font-bold text-lg">
                        Schedule Demo
                    </button>
                </div>
                <p className="text-slate-400 mt-6 text-sm">14-day free trial • No credit card required • Setup in 5 minutes</p>
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
