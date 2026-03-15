'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

type AppType = 'unicrm' | 'unichat' | 'unicom' | 'uniads' | 'uniweb' | 'unipos';

export default function PricingPage() {
  const router = useRouter();
  const [selectedApp, setSelectedApp] = useState<AppType>('unicrm');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // App configurations
  const apps = {
    unicrm: { name: 'UniCRM', color: 'from-brand-500 to-blue-600', bgColor: 'bg-brand-50', borderColor: 'border-brand-200', textColor: 'text-brand-700', icon: 'ph-users-three', description: 'CRM & Lead Management' },
    unichat: { name: 'UniChat', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-200', textColor: 'text-green-700', icon: 'ph-whatsapp-logo', description: 'WhatsApp Business API' },
    unicom: { name: 'UniCOM', color: 'from-purple-500 to-pink-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200', textColor: 'text-purple-700', icon: 'ph-chat-dots', description: 'Business Intercom & Calling' },
    uniads: { name: 'UniAds', color: 'from-red-500 to-orange-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', textColor: 'text-red-700', icon: 'ph-megaphone', description: 'Unified Ad Management' },
    uniweb: { name: 'UniWeb', color: 'from-cyan-500 to-blue-600', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200', textColor: 'text-cyan-700', icon: 'ph-globe', description: 'AI Website Builder' },
    unipos: { name: 'UniPOS', color: 'from-emerald-500 to-teal-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', textColor: 'text-emerald-700', icon: 'ph-credit-card', description: 'AI-Powered POS System' }
  };

  const currentApp = apps[selectedApp];

    return (
      <>
        <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
          <Header />

    <main>
        {/* Page Header & Pricing Cards */}
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 mesh-bg border-b border-slate-200 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-10 right-20 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Simple pricing for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">growing businesses.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
                        Choose your product and find the perfect plan. Upgrade only when your team needs more power.
                    </p>
                </div>

                {/* App Selector Carousel */}
                <div className="mb-16 flex justify-center overflow-x-auto pb-4">
                  <div className="flex gap-3 min-w-max">
                    {(Object.keys(apps) as AppType[]).map((appKey) => (
                      <button
                        key={appKey}
                        onClick={() => setSelectedApp(appKey)}
                        className={`px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap ${ 
                          selectedApp === appKey
                            ? `bg-gradient-to-r ${apps[appKey].color} text-white shadow-lg`
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <i className={`ph-fill ${apps[appKey].icon}`}></i>
                        {apps[appKey].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Pricing Section Based on Selected App */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentApp.bgColor} border ${currentApp.borderColor} ${currentApp.textColor} text-sm font-bold mb-4`}>
                            <i className={`ph-fill ${currentApp.icon}`}></i> {currentApp.name}
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">{currentApp.description}</h2>
                        
                        {/* Monthly/Annual Toggle */}
                        <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <button 
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg shadow-sm transition-all ${
                                    billingCycle === 'monthly' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Monthly
                            </button>
                            <button 
                                onClick={() => setBillingCycle('annual')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                                    billingCycle === 'annual' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Annually <span className="text-brand-600 text-xs ml-1">(Save 20%)</span>
                            </button>
                        </div>
                    </div>

                    {/* Conditional Pricing Cards Based on Selected App */}
                    {selectedApp === 'unicrm' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            {/* Starter */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Essential CRM tools for small teams.</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹499</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,790</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,198/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 active:scale-[0.98] transition-all mb-8">Start Free Trial</button>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Plan includes:</p>
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> Full CRM access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> 3 team members</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> 1,000 contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> Lead management</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> Basic reporting</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> API access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-500 text-lg shrink-0"></i> Email support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Growth */}
                            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-brand-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-brand-500/50 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Growth</h3>
                                    <p className="text-slate-400 text-sm mb-6 h-10">Advanced CRM for scaling businesses.</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹1,499</span>
                                                <span className="text-slate-400 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹14,390</span>
                                                <span className="text-slate-400 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-emerald-400 font-semibold">Save ₹3,598/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-500 active:scale-[0.98] transition-all mb-8 shadow-lg">Start Free Trial</button>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Everything in Starter, plus:</p>
                                    <ul className="space-y-4 text-sm font-medium text-slate-200">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> <span className="font-bold text-white">10 team members</span></li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> 10,000 contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> Advanced workflows</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> Analytics & insights</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> API access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-brand-400 text-lg shrink-0"></i> Priority support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Enterprise */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Unlimited CRM for large organizations.</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Everything in Growth, plus:</p>
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited team members</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Custom integrations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> API access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Dedicated account manager</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> 24/7 phone support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedApp === 'unichat' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            {/* Starter */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-green-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Perfect for small businesses</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹9,590</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹2,398/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 active:scale-[0.98] transition-all mb-8">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 5 Users</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 20,000 Contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Basic Automation</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Basic Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> API Access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Email Support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Growth */}
                            <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400 shadow-2xl shadow-green-500/20 flex flex-col relative transform md:-translate-y-4 hover:border-emerald-500 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Perfect for growing businesses</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight text-slate-900">₹2,499</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight text-slate-900">₹23,990</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-emerald-600 font-semibold">Save ₹5,998/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 active:scale-[0.98] transition-all mb-8 shadow-lg">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 10 Users</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 50,000 Contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Full Automation</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Advanced Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> API Access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Pro */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-green-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For scaling teams</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 15 Users</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 100,000 Contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Advanced Automation</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Advanced Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> API Access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedApp === 'unicom' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-purple-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For startups and small teams</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹799</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹7,690</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,910/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 active:scale-[0.98] transition-all mb-8">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> Intercom & Voice Calls</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> 5 Team Members</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> 1,000 Conversations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> Call Recording</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> Basic Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-500 text-lg shrink-0"></i> Email Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 border border-purple-500 shadow-2xl shadow-purple-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-pink-400 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                    <p className="text-purple-100 text-sm mb-6 h-10">For growing communication needs</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹1,999</span>
                                                <span className="text-purple-200 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹19,190</span>
                                                <span className="text-purple-200 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-purple-100 font-semibold">Save ₹4,790/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 active:scale-[0.98] transition-all mb-8 shadow-lg">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-purple-100">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> Everything in Basic, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> 15 Team Members</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> 10,000 Conversations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> Video Calling</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> Advanced Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-purple-200 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-purple-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For large organizations</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹5,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹57,590</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹14,398/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Everything in Professional, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited Team Members</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited Conversations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> AI Call Assistant</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Custom Integrations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> 24/7 Phone Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedApp === 'uniads' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-red-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For new ad managers</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹599</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹5,790</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,398/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 active:scale-[0.98] transition-all mb-8">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-500 text-lg shrink-0"></i> Facebook & Instagram Ads</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-500 text-lg shrink-0"></i> 2 Ad Accounts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-500 text-lg shrink-0"></i> Basic Scheduling</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-500 text-lg shrink-0"></i> Basic Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-500 text-lg shrink-0"></i> Email Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 border border-red-500 shadow-2xl shadow-red-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-orange-400 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                    <p className="text-red-100 text-sm mb-6 h-10">For active ad campaigns</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹1,499</span>
                                                <span className="text-red-200 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹14,390</span>
                                                <span className="text-red-200 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-red-100 font-semibold">Save ₹3,598/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white text-red-600 rounded-xl font-bold hover:bg-red-50 active:scale-[0.98] transition-all mb-8 shadow-lg">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-red-100">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-200 text-lg shrink-0"></i> All Platforms + Google Ads</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-200 text-lg shrink-0"></i> 10 Ad Accounts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-200 text-lg shrink-0"></i> Advanced Scheduling</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-200 text-lg shrink-0"></i> AI Optimization</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-red-200 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-red-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Multi-platform management</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹3,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹38,390</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹9,598/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Everything in Professional, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> TikTok, Snapchat Ads</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited Accounts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> AI Campaign Builder</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Custom Integrations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Dedicated Account Manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedApp === 'uniweb' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-cyan-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For first-time builders</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹499</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,790</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,198/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 active:scale-[0.98] transition-all mb-8">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> AI Website Builder</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> 1 Website</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> Basic Templates</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> Mobile Responsive</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> Free Domain (.unidesk.in)</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-500 text-lg shrink-0"></i> Email Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 border border-cyan-500 shadow-2xl shadow-cyan-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-blue-400 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-cyan-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                    <p className="text-cyan-100 text-sm mb-6 h-10">For growing businesses</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹1,299</span>
                                                <span className="text-cyan-200 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹12,490</span>
                                                <span className="text-cyan-200 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-cyan-100 font-semibold">Save ₹3,118/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-cyan-50 active:scale-[0.98] transition-all mb-8 shadow-lg">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-cyan-100">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> Everything in Starter, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> 5 Websites</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> Premium Templates</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> E-commerce Ready</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> Custom Domain</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-cyan-200 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-cyan-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Unlimited web presence</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Everything in Professional, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited Websites</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Advanced AI Features</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Custom Code Access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> API Integration</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Dedicated Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedApp === 'unipos' && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-emerald-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">For small retailers</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹699</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹6,690</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,670/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 active:scale-[0.98] transition-all mb-8">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> AI POS System</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> 1 Terminal</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> Basic Inventory</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> Sales Reports</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> Offline Mode</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-500 text-lg shrink-0"></i> Email Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 border border-emerald-500 shadow-2xl shadow-emerald-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-teal-400 transition-colors">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                    <p className="text-emerald-100 text-sm mb-6 h-10">For growing stores</p>
                                    <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹1,699</span>
                                                <span className="text-emerald-200 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-6xl font-black tracking-tight">₹16,290</span>
                                                <span className="text-emerald-200 font-medium">/year</span>
                                                <div className="w-full mt-2 text-sm text-emerald-100 font-semibold">Save ₹4,078/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 active:scale-[0.98] transition-all mb-8 shadow-lg">Get Started</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-emerald-100">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> Everything in Starter, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> 5 Terminals</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> Advanced Inventory</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> Customer Loyalty</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> AI Recommendations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-200 text-lg shrink-0"></i> Priority Support</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-emerald-300 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                    <p className="text-slate-500 text-sm mb-6 h-10">Multi-store network</p>
                                    <div className="mb-8">
                                        {billingCycle === 'monthly' ? (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                                <span className="text-slate-500 font-medium">/mo</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                                <span className="text-slate-500 font-medium">/year</span>
                                                <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year</div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full py-4 px-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all mb-8 shadow-sm">Contact Sales</button>
                                </div>
                                <div className="flex-1">
                                    <ul className="space-y-4 text-sm font-medium text-slate-700">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Everything in Professional, plus:</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Unlimited Terminals</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Multi-Store Management</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Advanced AI Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Custom Integrations</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-slate-400 text-lg shrink-0"></i> Dedicated Account Manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>



        {/* FAQs */}
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                    {/* FAQ Item 1 */}
                    <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg outline-none">
                            What happens after my 14-day free trial?
                            <span className="relative h-5 w-5 shrink-0 text-brand-600">
                                <i className="ph ph-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity"></i>
                                <i className="ph ph-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity"></i>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            Once your trial expires, you'll be prompted to choose a paid plan (Starter, Growth, or Enterprise). Your data will remain safe, but automation and messaging capabilities will be paused until a plan is selected. We do not require a credit card to start the trial.
                        </div>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg outline-none">
                            Are there any setup fees?
                            <span className="relative h-5 w-5 shrink-0 text-brand-600">
                                <i className="ph ph-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity"></i>
                                <i className="ph ph-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity"></i>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            No, there are zero setup or hidden fees for the Starter and Growth plans. Enterprise plans may include a one-time setup fee if custom development or complex data migration is required, which will be discussed upfront.
                        </div>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg outline-none">
                            Do I need my own WhatsApp number?
                            <span className="relative h-5 w-5 shrink-0 text-brand-600">
                                <i className="ph ph-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity"></i>
                                <i className="ph ph-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity"></i>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            Yes, you will need a clean, active phone number that is not currently registered on the standard WhatsApp consumer or WhatsApp Business mobile app. We help you connect this number directly to the Official Meta API during onboarding.
                        </div>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg outline-none">
                            Can I change my plan later?
                            <span className="relative h-5 w-5 shrink-0 text-brand-600">
                                <i className="ph ph-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity"></i>
                                <i className="ph ph-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity"></i>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            Absolutely. You can upgrade or downgrade your plan at any time from your billing dashboard. If you upgrade mid-month, the cost will be prorated.
                        </div>
                    </details>
                </div>
                
                <p className="text-center mt-10 text-slate-600">
                    Still have questions? <a href="/contact" className="text-brand-600 font-bold hover:underline">Contact our support team</a>.
                </p>
            </div>
        </section>

        {/* Final CTA (Copied from previous pages) */}
        <section className="py-24 relative overflow-hidden bg-slate-900 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to streamline your sales?</h2>
                <p className="text-xl text-slate-300 mb-10">Join hundreds of growing businesses unifying their sales and communication on Unidesk.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold text-lg hover:bg-brand-400 active:scale-[0.98] transition-all shadow-lg shadow-brand-500/20">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700 active:scale-[0.98] transition-all">
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
                    <a href="/" className="flex items-center gap-2 mb-6">
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
                        <li><a href="/products" className="text-slate-500 hover:text-brand-600 transition-colors">Unidesk</a></li>
                        <li><a href="/products" className="text-slate-500 hover:text-brand-600 transition-colors">UniChat</a></li>
                        <li><a href="/pricing" className="text-brand-600 hover:text-brand-700 transition-colors">Pricing</a></li>
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
                        <li><a href="/contact" className="text-slate-500 hover:text-brand-600 transition-colors">Contact Us</a></li>
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
