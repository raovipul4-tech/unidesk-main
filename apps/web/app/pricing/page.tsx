'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

type AppType = 'unicrm' | 'unichat' | 'unicom' | 'uniads' | 'uniweb' | 'unipos';

export default function PricingPage() {
  const router = useRouter();
  const [selectedApp, setSelectedApp] = useState<AppType>('unicrm');
  const [carouselPosition, setCarouselPosition] = useState(0);
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

  // Function to calculate annual price with 20% discount
  const getAnnualPrice = (monthlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    return Math.round(monthlyTotal * 0.8);
  };

  // Pricing data for all apps
  const pricingData: Record<AppType, { name: string; description: string; plans: Array<{ title: string; monthlyPrice?: number; annualPrice?: number; features: string[]; isPopular?: boolean; buttonText: string; bgGradient?: string; textColor?: string; buttonColor?: string }> }> = {
    unicrm: {
      name: 'UniCRM',
      description: 'CRM & Lead Management',
      plans: [
        { title: 'Monthly', monthlyPrice: 350, features: ['1 user', '2,500 leads', 'Lead management', 'Basic reporting', 'API access', 'Email support'], buttonText: 'Start Free Trial' },
        { title: '6 Months', monthlyPrice: 7000, features: ['10 users', '50,000 leads', 'Advanced workflows', 'Analytics & insights', 'API access', 'Priority support', 'Additional users: ₹200/month'], isPopular: true, buttonText: 'Start Free Trial', bgGradient: 'bg-slate-900', textColor: 'text-white' },
        { title: 'Annual', monthlyPrice: 10000, features: ['15 users', '100,000 leads', 'Custom integrations', 'API access', 'Dedicated account manager', '24/7 phone support', 'Additional users: ₹200/month'], buttonText: 'Contact Sales' }
      ]
    },
    unichat: {
      name: 'UniChat',
      description: 'WhatsApp Business API',
      plans: [
        { title: 'Starter', monthlyPrice: 999, features: ['5 Users', '20,000 Contacts', 'Basic Automation', 'Basic Analytics', 'API Access', 'Email Support'], buttonText: 'Get Started' },
        { title: 'Growth', monthlyPrice: 2499, features: ['10 Users', '50,000 Contacts', 'Full Automation', 'Advanced Analytics', 'API Access', 'Priority Support'], isPopular: true, buttonText: 'Get Started', bgGradient: 'border-2 border-emerald-400' },
        { title: 'Pro', monthlyPrice: 4999, features: ['15 Users', '100,000 Contacts', 'Advanced Automation', 'Advanced Analytics', 'API Access', 'Priority Support'], buttonText: 'Contact Sales' }
      ]
    },
    unicom: {
      name: 'UniCOM',
      description: 'Business Intercom & Calling',
      plans: [
        { title: 'Basic', monthlyPrice: 799, features: ['Intercom & Voice Calls', '5 Team Members', '1,000 Conversations', 'Call Recording', 'Basic Analytics', 'Email Support'], buttonText: 'Get Started' },
        { title: 'Professional', monthlyPrice: 1999, features: ['15 Team Members', '10,000 Conversations', 'Video Calling', 'Advanced Analytics', 'API access', 'Priority Support'], isPopular: true, buttonText: 'Get Started', bgGradient: 'bg-gradient-to-br from-purple-600 to-pink-600', textColor: 'text-white' },
        { title: 'Enterprise', monthlyPrice: 5999, features: ['Unlimited Team Members', 'Unlimited Conversations', 'AI Call Assistant', 'Custom Integrations', 'API access', '24/7 Phone Support'], buttonText: 'Contact Sales' }
      ]
    },
    uniads: {
      name: 'UniAds',
      description: 'Unified Ad Management',
      plans: [
        { title: 'Starter', monthlyPrice: 599, features: ['Facebook & Instagram Ads', '2 Ad Accounts', 'Basic Scheduling', 'Basic Analytics', 'Email Support'], buttonText: 'Get Started' },
        { title: 'Professional', monthlyPrice: 1499, features: ['All Platforms + Google Ads', '10 Ad Accounts', 'Advanced Scheduling', 'AI Optimization', 'Priority Support'], isPopular: true, buttonText: 'Get Started', bgGradient: 'bg-gradient-to-br from-red-500 to-orange-600', textColor: 'text-white' },
        { title: 'Enterprise', monthlyPrice: 3999, features: ['TikTok, Snapchat Ads', 'Unlimited Accounts', 'AI Campaign Builder', 'Custom Integrations', 'Dedicated Account Manager'], buttonText: 'Contact Sales' }
      ]
    },
    uniweb: {
      name: 'UniWeb',
      description: 'AI Website Builder',
      plans: [
        { title: 'Starter', monthlyPrice: 499, features: ['AI Website Builder', '1 Website', 'Basic Templates', 'Mobile Responsive', 'Free Domain (.unidesk.in)', 'Email Support'], buttonText: 'Get Started' },
        { title: 'Professional', monthlyPrice: 1299, features: ['5 Websites', 'Premium Templates', 'E-commerce Ready', 'Custom Domain', 'API Integration', 'Priority Support'], isPopular: true, buttonText: 'Get Started', bgGradient: 'bg-gradient-to-br from-cyan-500 to-blue-600', textColor: 'text-white' },
        { title: 'Enterprise', monthlyPrice: 4999, features: ['Unlimited Websites', 'Advanced AI Features', 'Custom Code Access', 'API Integration', 'Custom Integrations', 'Dedicated Support'], buttonText: 'Contact Sales' }
      ]
    },
    unipos: {
      name: 'UniPOS',
      description: 'AI-Powered POS System',
      plans: [
        { title: 'Starter', monthlyPrice: 699, features: ['AI POS System', '1 Terminal', 'Basic Inventory', 'Sales Reports', 'Offline Mode', 'Email Support'], buttonText: 'Get Started' },
        { title: 'Professional', monthlyPrice: 1699, features: ['5 Terminals', 'Advanced Inventory', 'Customer Loyalty', 'AI Recommendations', 'Advanced Analytics', 'Priority Support'], isPopular: true, buttonText: 'Get Started', bgGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600', textColor: 'text-white' },
        { title: 'Enterprise', monthlyPrice: 4999, features: ['Unlimited Terminals', 'Multi-Store Management', 'Advanced AI Analytics', 'Custom Integrations', 'Advanced Analytics', 'Dedicated Account Manager'], buttonText: 'Contact Sales' }
      ]
    }
  };

  const currentApp = apps[selectedApp as AppType];

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

                {/* App Selector - Horizontal Scroll */}
                <div className="mb-16 flex justify-center">
                  <div className="flex gap-3 overflow-x-auto pb-4 px-4">
                    {(Object.keys(apps) as AppType[]).map((appKey) => (
                      <button
                        key={appKey}
                        onClick={() => {
                          setSelectedApp(appKey);
                          setCarouselPosition(0);
                        }}
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

                {/* Pricing Carousel Section */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        {currentApp && (
                            <>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentApp.bgColor} border ${currentApp.borderColor} ${currentApp.textColor} text-sm font-bold mb-4`}>
                                    <i className={`ph-fill ${currentApp.icon}`}></i> {currentApp.name}
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 mb-6">{currentApp.description}</h2>
                            </>
                        )}
                    </div>

                    {/* Billing Cycle Toggle - Only for non-UniCRM apps */}
                    {selectedApp !== 'unicrm' && (
                        <div className="mb-12 flex justify-center">
                            <div className="inline-flex gap-4 bg-white rounded-2xl p-2 border border-slate-200 shadow-lg">
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    className={`px-8 py-3 rounded-xl font-bold transition-all ${
                                        billingCycle === 'monthly'
                                            ? 'bg-gradient-to-r from-brand-500 to-blue-600 text-white shadow-lg'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBillingCycle('annual')}
                                    className={`px-8 py-3 rounded-xl font-bold transition-all relative ${
                                        billingCycle === 'annual'
                                            ? 'bg-gradient-to-r from-brand-500 to-blue-600 text-white shadow-lg'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    Annual
                                    <span className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 px-2 py-1 rounded-full text-xs font-bold ${
                                        billingCycle === 'annual'
                                            ? 'bg-green-400 text-white'
                                            : 'bg-green-100 text-green-700'
                                    }`}>
                                        Save 20%
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Single App Pricing Cards */}
                    {currentApp && (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            {pricingData[selectedApp as AppType].plans.map((plan, idx) => {
                                let displayPrice = '';
                                if (selectedApp === 'unicrm') {
                                    // UniCRM shows fixed prices based on title
                                    if (plan.title === 'Monthly') displayPrice = '₹350/user/month';
                                    else if (plan.title === '6 Months') displayPrice = '₹7,000';
                                    else if (plan.title === 'Annual') displayPrice = '₹10,000/year';
                                } else {
                                    // Other apps show monthly or annual pricing
                                    if (billingCycle === 'monthly') {
                                        displayPrice = `₹${plan.monthlyPrice}/month`;
                                    } else {
                                        const annualPrice = getAnnualPrice(plan.monthlyPrice || 0);
                                        displayPrice = `₹${annualPrice}/year`;
                                    }
                                }

                                return (
                                    <div key={idx} className={`rounded-3xl p-8 flex flex-col relative transition-colors ${
                                        plan.isPopular
                                            ? plan.bgGradient || 'bg-slate-900 border-2 border-slate-800 shadow-2xl shadow-brand-500/20 text-white'
                                            : 'bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:border-brand-300'
                                    }`}>
                                        {plan.isPopular && !plan.bgGradient && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                        )}
                                        {plan.isPopular && plan.bgGradient && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
                                        )}
                                        <div>
                                            <h3 className={`text-2xl font-bold mb-2 ${plan.textColor || 'text-slate-900'}`}>{plan.title}</h3>
                                            <p className={`text-sm mb-6 h-10 ${plan.textColor ? 'text-white/70' : 'text-slate-500'}`}></p>
                                            <div className="mb-8 flex items-baseline gap-1 flex-wrap">
                                                <span className={`text-4xl font-black ${plan.textColor || 'text-slate-900'}`}>{displayPrice}</span>
                                            </div>
                                            <button className={`w-full py-4 px-4 rounded-xl font-bold hover:opacity-90 active:scale-[0.98] transition-all mb-8 ${
                                                plan.isPopular && !plan.bgGradient
                                                    ? 'bg-brand-600 text-white hover:bg-brand-500'
                                                    : plan.isPopular && plan.bgGradient
                                                    ? 'bg-white text-slate-900 hover:bg-slate-50'
                                                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                            }`}>
                                                {plan.buttonText}
                                            </button>
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-sm font-bold mb-4 uppercase tracking-wider ${plan.textColor ? 'text-white/90' : 'text-slate-900'}`}>Plan includes:</p>
                                            <ul className={`space-y-4 text-sm font-medium ${plan.textColor ? 'text-white/70' : 'text-slate-700'}`}>
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <i className={`ph-fill ph-check-circle text-lg shrink-0 ${plan.textColor ? 'text-white/50' : 'text-brand-500'}`}></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Meta Pricing Details for UniChat */}
                    {selectedApp === 'unichat' && (
                        <div className="mt-20 col-span-full">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl font-black text-slate-900 mb-3">Meta API Pricing (INR)</h3>
                                    <p className="text-slate-600 text-lg">In addition to UniChat subscription, Meta charges separate fees per message</p>
                                </div>

                                {/* WhatsApp Pricing */}
                                <div className="max-w-2xl mx-auto mb-12">
                                    <div className="bg-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                                <i className="ph-fill ph-whatsapp-logo text-green-600 text-2xl"></i>
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900">WhatsApp Pricing</h4>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                                                <p className="text-sm text-slate-600 font-semibold mb-2">Marketing Messages</p>
                                                <p className="text-3xl font-black text-green-600">₹0.80 - ₹1.00</p>
                                                <p className="text-xs text-slate-500 mt-2">Promotional & bulk messages</p>
                                            </div>

                                            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                                                <p className="text-sm text-slate-600 font-semibold mb-2">Authentication Messages</p>
                                                <p className="text-3xl font-black text-green-600">₹0.35 - ₹0.45</p>
                                                <p className="text-xs text-slate-500 mt-2">OTP & security codes</p>
                                            </div>

                                            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                                                <p className="text-sm text-slate-600 font-semibold mb-2">Utility Messages</p>
                                                <p className="text-3xl font-black text-green-600">₹0.30 - ₹0.40</p>
                                                <p className="text-xs text-slate-500 mt-2">Confirmations & updates</p>
                                            </div>

                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm text-slate-600">
                                                <p className="font-semibold text-slate-900 mb-2">✓ No markup fees included</p>
                                                <p className="text-xs">Meta bills directly. Volume discounts apply at higher message volumes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Important Notice */}
                                <div className="bg-white rounded-2xl border-2 border-amber-200 p-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 flex-shrink-0 mt-1">
                                            <i className="ph ph-warning text-amber-600 text-lg"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-slate-900 mb-3">⚠️ Pricing Subject to Change</h4>
                                            <p className="text-slate-600 leading-relaxed mb-4">
                                                The prices shown above are current Meta rates and are <strong>subject to change at any time</strong>. These charges are separate from UniChat subscription pricing. For latest rates, check <a href="https://www.meta.com/en/business/tools/whatsapp/pricing/" target="_blank" className="text-green-600 font-semibold hover:underline">Meta's official pricing page</a>.
                                            </p>
                                            <ul className="space-y-2 text-sm text-slate-600 ml-4">
                                                <li>✓ You need a Meta Business Account & WhatsApp Business Account</li>
                                                <li>✓ Meta bills you separately from UniChat</li>
                                                <li>✓ Phone number setup may have one-time verification fees</li>
                                                <li>✓ Volume discounts available at 10,000+ messages/month</li>
                                            </ul>
                                        </div>
                                    </div>
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
                    <span className="flex items-center gap-2"><i className="ph-fill ph-whatsapp-logo text-green-500"></i> +91 7428251864</span>
                </div>
            </div>
        </div>
    </Footer>
        </div>
      </>
  );
}
