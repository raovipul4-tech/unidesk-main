'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniAdsPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  AI-Powered Ad Management
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  UniAds <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">AI Advertising Platform</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Manage all your ads in one place - Facebook, Instagram, Google, TikTok, Snapchat and more. AI-powered optimization for maximum ROI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 active:scale-[0.98] transition-all shadow-xl shadow-red-600/25 flex items-center justify-center gap-2">
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Unified Multi-Platform Ad Management</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ph-facebook-logo', title: 'Facebook & Instagram', desc: 'Manage Meta ads from one dashboard with unified budgeting' },
                  { icon: 'ph-magnifying-glass', title: 'Google Ads', desc: 'Search, Display & Shopping campaigns perfectly synced' },
                  { icon: 'ph-tiktok-logo', title: 'TikTok Ads', desc: 'Create viral campaigns with TikTok insights' },
                  { icon: 'ph-snapchat-logo', title: 'Snapchat Ads', desc: 'Reach younger audiences with Snap Network campaigns' },
                  { icon: 'ph-sparkle', title: 'AI Optimization', desc: 'ML-powered bidding and audience targeting' },
                  { icon: 'ph-chart-line-up', title: 'Performance Analytics', desc: 'Real-time ROI tracking across all platforms' },
                  { icon: 'ph-brain', title: 'Smart Budget Allocation', desc: 'AI automatically distributes budget to best performers' },
                  { icon: 'ph-target', title: 'Audience Insights', desc: 'Deep audience analysis and segmentation' },
                  { icon: 'ph-lightning', title: 'A/B Testing', desc: 'Automated testing across creative variations' },
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                      <i className={`ph-fill ${feature.icon}`}></i>
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Trusted by Top Advertisers</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-red-200 flex items-center justify-center text-red-600 text-3xl mb-6">
                    <i className="ph-fill ph-shopping-bag"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">E-commerce Brands</h3>
                  <p className="text-slate-600 mb-4">Maximize product sales across all major ad platforms with intelligent budget optimization.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> Shopping feed optimization</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> Retargeting campaigns</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> Conversion tracking</li>
                  </ul>
                </div>

                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-orange-600 text-3xl mb-6">
                    <i className="ph-fill ph-users-four"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketing Agencies</h3>
                  <p className="text-slate-600 mb-4">Manage campaigns for multiple clients efficiently with centralized reporting and insights.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Multi-account management</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Client reporting dashboards</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-orange-500"></i> Team collaboration tools</li>
                  </ul>
                </div>

                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-red-200 flex items-center justify-center text-red-600 text-3xl mb-6">
                    <i className="ph-fill ph-megaphone"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">SaaS Companies</h3>
                  <p className="text-slate-600 mb-4">Grow your user base with optimized acquisition campaigns across all advertising channels.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> Lead generation optimization</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> CAC tracking</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-red-500"></i> LTV analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Benefits */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">AI-Powered Advertising</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-6">
                  {[
                    { title: 'Predictive Analytics', desc: 'AI predicts which audiences will convert best' },
                    { title: 'Dynamic Budget Allocation', desc: 'Automatically shifts budget to top performers' },
                    { title: 'Audience Lookalikes', desc: 'Find new customers similar to your best ones' },
                    { title: 'Real-time Optimization', desc: 'Bid adjustments happen instantly based on performance' },
                  ].map((benefit, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-1">
                        <i className="ph-fill ph-sparkle"></i>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">{benefit.title}</p>
                        <p className="text-sm text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-slate-50 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-red-600">340%</div>
                        <div className="text-sm"><p className="font-bold text-slate-900">Average ROI Increase</p><p className="text-slate-500">vs manual management</p></div>
                      </div>
                      <div className="h-px bg-slate-200"></div>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-red-600">45%</div>
                        <div className="text-sm"><p className="font-bold text-slate-900">Cost Reduction</p><p className="text-slate-500">through AI optimization</p></div>
                      </div>
                      <div className="h-px bg-slate-200"></div>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-red-600">12h</div>
                        <div className="text-sm"><p className="font-bold text-slate-900">Setup Time</p><p className="text-slate-500">to manage all platforms</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Simplify your advertising strategy</h2>
              <p className="text-xl text-slate-300 mb-10">Manage all ads, all platforms, all in one place. Get AI-powered recommendations.</p>
              <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-500 transition-all shadow-lg shadow-red-600/20">
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
