'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PricingPage() {
  const router = useRouter();
  const [crmBillingCycle, setCrmBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [whatsappBillingCycle, setWhatsappBillingCycle] = useState<'monthly' | 'annual'>('monthly');

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
                        Start managing leads and automating WhatsApp conversations today. Upgrade only when your team needs more power.
                    </p>
                </div>

                {/* UniDesk CRM Pricing */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-bold mb-4">
                            <i className="ph-fill ph-users-three"></i> UniDesk CRM
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">CRM & Lead Management</h2>
                        
                        {/* CRM Monthly/Annual Toggle */}
                        <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <button 
                                onClick={() => setCrmBillingCycle('monthly')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg shadow-sm transition-all ${
                                    crmBillingCycle === 'monthly' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Monthly
                            </button>
                            <button 
                                onClick={() => setCrmBillingCycle('annual')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                                    crmBillingCycle === 'annual' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Annually <span className="text-brand-600 text-xs ml-1">(Save 20%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                        {/* CRM Starter */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">Essential CRM tools for small teams.</p>
                                <div className="mb-8">
                                    {crmBillingCycle === 'monthly' ? (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹499</span>
                                            <span className="text-slate-500 font-medium">/mo</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹4,790</span>
                                            <span className="text-slate-500 font-medium">/year</span>
                                            <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹1,198/year (20% off)</div>
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

                        {/* CRM Growth */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-brand-500/20 flex flex-col relative transform md:-translate-y-4 text-white hover:border-brand-500/50 transition-colors">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-500/30">Most Popular</div>
                            
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                                <p className="text-slate-400 text-sm mb-6 h-10">Advanced CRM for scaling businesses.</p>
                                <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                    {crmBillingCycle === 'monthly' ? (
                                        <>
                                            <span className="text-6xl font-black tracking-tight">₹1,499</span>
                                            <span className="text-slate-400 font-medium">/mo</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-6xl font-black tracking-tight">₹14,390</span>
                                            <span className="text-slate-400 font-medium">/year</span>
                                            <div className="w-full mt-2 text-sm text-emerald-400 font-semibold">Save ₹3,598/year (20% off)</div>
                                        </>
                                    )}
                                </div>
                                <button className="w-full py-4 px-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-500 active:scale-[0.98] transition-all mb-8 shadow-lg shadow-brand-600/20">Start 14-Day Free Trial</button>
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

                        {/* CRM Enterprise */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">Unlimited CRM for large organizations.</p>
                                <div className="mb-8">
                                    {crmBillingCycle === 'monthly' ? (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                            <span className="text-slate-500 font-medium">/mo</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                            <span className="text-slate-500 font-medium">/year</span>
                                            <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year (20% off)</div>
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
                </div>

                {/* UniChat WhatsApp Pricing */}
                <div>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-bold mb-4">
                            <i className="ph-fill ph-whatsapp-logo"></i> UniChat
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">WhatsApp Business API</h2>
                        
                        {/* WhatsApp Monthly/Annual Toggle */}
                        <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <button 
                                onClick={() => setWhatsappBillingCycle('monthly')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg shadow-sm transition-all ${
                                    whatsappBillingCycle === 'monthly' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Monthly
                            </button>
                            <button 
                                onClick={() => setWhatsappBillingCycle('annual')}
                                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                                    whatsappBillingCycle === 'annual' 
                                        ? 'bg-slate-900 text-white' 
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Annually <span className="text-brand-600 text-xs ml-1">(Save 20%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                        {/* WhatsApp Starter */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">Perfect for small businesses</p>
                                <div className="mb-8">
                                    {whatsappBillingCycle === 'monthly' ? (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹999</span>
                                            <span className="text-slate-500 font-medium"> per month</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-5xl font-black text-slate-900">₹9,590</span>
                                            <span className="text-slate-500 font-medium">/year</span>
                                            <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹2,398/year (20% off)</div>
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
                                
                                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <p className="text-xs font-semibold text-amber-800 mb-1">AI Add-on Available</p>
                                    <p className="text-xs text-amber-700">+₹1,500/month for AI features</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Growth */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400 shadow-2xl shadow-green-500/20 flex flex-col relative transform md:-translate-y-4 hover:border-emerald-500 transition-colors">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-500/30">Most Popular</div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">Perfect for growing businesses</p>
                                <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                    {whatsappBillingCycle === 'monthly' ? (
                                        <>
                                            <span className="text-6xl font-black tracking-tight text-slate-900">₹2,499</span>
                                            <span className="text-slate-500 font-medium"> per month</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-6xl font-black tracking-tight text-slate-900">₹23,990</span>
                                            <span className="text-slate-500 font-medium">/year</span>
                                            <div className="w-full mt-2 text-sm text-emerald-600 font-semibold">Save ₹5,998/year (20% off)</div>
                                        </>
                                    )}
                                </div>
                                <button className="w-full py-4 px-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 active:scale-[0.98] transition-all mb-8 shadow-lg shadow-emerald-500/30">Get Started</button>
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
                                
                                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <p className="text-xs font-semibold text-amber-800 mb-1">AI Add-on Available</p>
                                    <p className="text-xs text-amber-700">+₹1,500/month for AI features</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Pro */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col hover:border-brand-300 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-slate-900">Pro</h3>
                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Current Plan</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 h-10">For scaling teams</p>
                            <div className="mb-8">
                                {whatsappBillingCycle === 'monthly' ? (
                                    <>
                                        <span className="text-5xl font-black text-slate-900">₹4,999</span>
                                        <span className="text-slate-500 font-medium"> per month</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-5xl font-black text-slate-900">₹47,990</span>
                                        <span className="text-slate-500 font-medium">/year</span>
                                        <div className="mt-2 text-sm text-emerald-600 font-semibold">Save ₹11,998/year (20% off)</div>
                                    </>
                                )}
                            </div>
                            <button className="w-full py-4 px-4 bg-slate-800 text-white rounded-xl font-bold active:scale-[0.98] transition-all mb-8 cursor-default">Current Plan</button>

                            <div className="flex-1">
                                <ul className="space-y-4 text-sm font-medium text-slate-700">
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 15 Users</li>
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> 100,000 Contacts</li>
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Advanced Automation</li>
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Advanced Analytics</li>
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> API Access</li>
                                    <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-green-500 text-lg shrink-0"></i> Priority Support</li>
                                </ul>
                                
                                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <i className="ph-fill ph-sparkle text-emerald-600"></i>
                                        <p className="text-xs font-semibold text-emerald-800">AI Features Included</p>
                                    </div>
                                    <p className="text-xs text-emerald-700">Full AI capabilities at no extra cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Enterprise Plan Section */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-white mb-3">Enterprise</h3>
                                <p className="text-slate-300 text-lg">For large organizations</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Everything in Pro, plus:</p>
                                    <ul className="space-y-3 text-sm font-medium text-slate-200">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Unlimited Users</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Unlimited Contacts</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Advanced Automation</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-0">Spacer</p>
                                    <ul className="space-y-3 text-sm font-medium text-slate-200">
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Full CRM Suite</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Custom Analytics</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Full API Access</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Dedicated Support Manager</li>
                                        <li className="flex items-start gap-3"><i className="ph-fill ph-check-circle text-emerald-400 text-lg shrink-0"></i> Custom Integration</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">Custom</span>
                                </div>
                                <button className="px-10 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 active:scale-[0.98] transition-all shadow-lg">Talk to Sales</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional User Pricing Note */}
                    <div className="mt-12 text-center">
                        <div className="inline-block px-6 py-4 bg-blue-50 border border-blue-200 rounded-2xl">
                            <p className="text-slate-700 text-sm font-medium">
                                <i className="ph-fill ph-users text-blue-600 mr-2"></i>
                                Need more users? <span className="font-bold text-slate-900">₹150/month</span> per additional user
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* WhatsApp Conversation Pricing */}
        <section className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                        Meta API Costs
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Understanding WhatsApp Charges</h2>
                    <p className="text-lg text-slate-600">
                        In addition to your Unidesk subscription, WhatsApp charges per 24-hour conversation session. We pass these costs directly to you without markups.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Marketing */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-orange-500 text-2xl mb-6 shadow-sm"><i className="ph ph-megaphone"></i></div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Marketing</h4>
                            <p className="text-slate-600 text-sm mb-6">Promotions, offers, informative updates, or invitations sent to customers.</p>
                            <div className="flex items-baseline gap-1 pt-6 border-t border-slate-200">
                                <span className="text-3xl font-black text-slate-900">₹0.80</span>
                                <span className="text-slate-500 text-sm">- ₹1.20 / chat</span>
                            </div>
                        </div>
                    </div>

                    {/* Utility */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-500 text-2xl mb-6 shadow-sm"><i className="ph ph-receipt"></i></div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Utility</h4>
                            <p className="text-slate-600 text-sm mb-6">Specific, agreed-upon requests like transaction receipts or shipping updates.</p>
                            <div className="flex items-baseline gap-1 pt-6 border-t border-slate-200">
                                <span className="text-3xl font-black text-slate-900">₹0.30</span>
                                <span className="text-slate-500 text-sm">- ₹0.50 / chat</span>
                            </div>
                        </div>
                    </div>

                    {/* Authentication */}
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-200 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-500 text-2xl mb-6 shadow-sm"><i className="ph ph-shield-check"></i></div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Authentication</h4>
                            <p className="text-slate-600 text-sm mb-6">One-time passcodes (OTPs) used to authenticate users during login or signup.</p>
                            <div className="flex items-baseline gap-1 pt-6 border-t border-slate-200">
                                <span className="text-3xl font-black text-slate-900">₹0.20</span>
                                <span className="text-slate-500 text-sm">- ₹0.40 / chat</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
                    Note: Prices vary slightly based on the destination country of your user. User-initiated conversations (Service conversations) are typically cheaper or have a free tier depending on Meta's current policies.
                </p>
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
