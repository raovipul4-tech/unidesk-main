'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  const router = useRouter();

    return (
      <>
        <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
          <Header />

    <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 mesh-bg border-b border-slate-200 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-10 -right-20 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                    Everything you need to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">close more deals.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Deep dive into the tools that power Unidesk. From capturing your first lead to managing relationships and driving sales via WhatsApp.
                </p>
            </div>
        </section>

        {/* Features Deep Dive */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                
                {/* 1. Lead Management */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-magnet"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Lead Management</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop losing track of potential customers in scattered spreadsheets. Unidesk acts as your central source of truth, capturing and organizing leads from your website, WhatsApp widget, and native integrations automatically.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-brand-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Omnichannel Capture</h4>
                                    <p className="text-slate-500 text-sm">Automatically sync leads from Facebook Lead Ads, web forms, and direct WhatsApp messages.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-brand-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Smart Deduplication</h4>
                                    <p className="text-slate-500 text-sm">Ensure clean data with automatic merging of duplicate contacts based on phone numbers or emails.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-brand-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Custom Fields</h4>
                                    <p className="text-slate-500 text-sm">Store unlimited custom data attributes specific to your business needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-slate-50 rounded-3xl transform rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Lead Management Dashboard" className="w-full h-auto rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100" />
                        </div>
                    </div>
                </div>

                {/* 2. Sales Pipeline */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50 rounded-3xl transform -rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Sales Pipeline Interface" className="w-full h-[400px] rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100 object-left" />
                        </div>
                    </div>
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-kanban"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Sales Pipeline</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Track deals visually and push them to closure. Customize your sales stages to match your exact workflow, dragging and dropping deals as they progress from initial inquiry to signed contract.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-blue-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Visual Drag-and-Drop</h4>
                                    <p className="text-slate-500 text-sm">Easily move opportunities across customizable stages to keep your pipeline accurate.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-blue-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Revenue Forecasting</h4>
                                    <p className="text-slate-500 text-sm">Assign deal values and probabilities to get clear visibility into expected revenue.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-blue-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Task & Follow-up Triggers</h4>
                                    <p className="text-slate-500 text-sm">Automatically create tasks for your team when a deal enters a specific stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. WhatsApp Automation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-chat-teardrop-text"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">WhatsApp Automation</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop replying manually to the same inquiries. Build smart automation flows that welcome new prospects, answer common questions, and send scheduled reminders automatically via the Official WhatsApp Business API.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-emerald-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Keyword Triggers</h4>
                                    <p className="text-slate-500 text-sm">Set up auto-responses based on specific words or phrases sent by customers.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-emerald-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Out of Office & Welcome Flows</h4>
                                    <p className="text-slate-500 text-sm">Ensure every lead gets an instant response, 24/7, routing them to the right team.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-emerald-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Automated Follow-ups</h4>
                                    <p className="text-slate-500 text-sm">Send predefined message sequences over days or weeks to nurture cold leads.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-slate-50 rounded-3xl transform rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1000" alt="Automation Interface" className="w-full h-[400px] rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100" />
                        </div>
                    </div>
                </div>

                {/* 4. Team Inbox */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-slate-50 rounded-3xl transform -rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team Collaboration" className="w-full h-[400px] rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100" />
                        </div>
                    </div>
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-users-three"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Shared Team Inbox</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop passing around a single smartphone. Give your entire team access to WhatsApp communication from one unified interface. Collaborate, leave internal notes, and transfer chats seamlessly.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-purple-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Multi-Agent Access</h4>
                                    <p className="text-slate-500 text-sm">Multiple agents handling one WhatsApp number simultaneously on separate screens.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-purple-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Collision Detection</h4>
                                    <p className="text-slate-500 text-sm">See when another agent is already typing a reply to prevent duplicate responses.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-purple-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Internal Mentions</h4>
                                    <p className="text-slate-500 text-sm">Tag colleagues hidden from the customer to discuss inquiries before replying.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Broadcast Campaigns */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-megaphone"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Broadcast Campaigns</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Achieve 98% open rates by reaching your customers directly on WhatsApp. Send promotional updates, newsletters, and personalized offers to thousands of segmented contacts without getting banned.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-orange-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Bulk Messaging API</h4>
                                    <p className="text-slate-500 text-sm">Send to unlimited contacts securely via the Official Meta API.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-orange-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Rich Media & Buttons</h4>
                                    <p className="text-slate-500 text-sm">Include images, PDFs, videos, and interactive quick-reply buttons in your campaigns.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-orange-600 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Advanced Segmentation</h4>
                                    <p className="text-slate-500 text-sm">Filter your audience by CRM attributes to send highly targeted, relevant messages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-slate-50 rounded-3xl transform rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000" alt="Broadcast Campaigns" className="w-full h-[400px] rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100" />
                        </div>
                    </div>
                </div>

                {/* 6. Analytics & Reports */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 rounded-3xl transform -rotate-2"></div>
                        <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Analytics Dashboard" className="w-full h-[400px] rounded-2xl object-cover mix-blend-multiply opacity-90 border border-slate-100 object-right" />
                        </div>
                    </div>
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center text-3xl mb-8">
                            <i className="ph ph-chart-line-up"></i>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Analytics & Reports</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Make data-driven decisions. Monitor your entire sales operation from high-level pipeline health down to individual agent response times and campaign performance.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-slate-700 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Campaign Performance</h4>
                                    <p className="text-slate-500 text-sm">Track read receipts, reply rates, and link clicks for every broadcast.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-slate-700 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Agent Productivity</h4>
                                    <p className="text-slate-500 text-sm">Measure average response times, chats handled, and deals closed per team member.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5"><i className="ph-fill ph-check text-slate-700 text-xs"></i></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Win/Loss Analysis</h4>
                                    <p className="text-slate-500 text-sm">Identify bottlenecks in your pipeline and understand why deals are won or lost.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* Final CTA (Copied from Home) */}
        <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to streamline your sales?</h2>
                <p className="text-xl text-slate-300 mb-10">Get full access to all features on our Growth plan with a 14-day free trial.</p>
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

    <Footer>
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
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors" onClick={() => router.push('/products')}>Unidesk</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors" onClick={() => router.push('/products')}>UniChat</a></li>
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
                    <span className="flex items-center gap-2"><i className="ph-fill ph-whatsapp-logo text-green-500"></i> +91 9625878600</span>
                </div>
            </div>
        </div>
      </Footer>
        </div>
      </>
    );
}
