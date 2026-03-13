'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniWebPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  AI Website Builder
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  UniWeb <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">AI-Powered Website Builder</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Build stunning, responsive websites in minutes with AI. No coding required. Launch your online presence today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold text-lg hover:bg-cyan-700 active:scale-[0.98] transition-all shadow-xl shadow-cyan-600/25 flex items-center justify-center gap-2">
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Everything to Build Your Online Presence</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ph-sparkle', title: 'AI Content Generator', desc: 'Generate website copy, headlines, and meta descriptions with AI' },
                  { icon: 'ph-palette', title: 'Drag & Drop Builder', desc: 'Visual builder with 1000+ pre-made sections and blocks' },
                  { icon: 'ph-device-tablet', title: 'Mobile Responsive', desc: 'Perfect layouts on phones, tablets, and desktops' },
                  { icon: 'ph-image', title: 'Stock Images', desc: 'Access to 10M+ royalty-free images and videos' },
                  { icon: 'ph-rocket', title: 'SEO Optimized', desc: 'Built-in SEO, performance optimization, and mobile-first indexing' },
                  { icon: 'ph-chart-bar', title: 'Analytics', desc: 'Track visitors, pageviews, bounce rate, and conversions' },
                  { icon: 'ph-lightning', title: 'Lightning Fast', desc: '99.9% uptime with global CDN for fastest load times' },
                  { icon: 'ph-lock', title: 'HTTPS & Security', desc: 'SSL certificates and automatic security updates included' },
                  { icon: 'ph-code', title: 'E-commerce Ready', desc: 'Sell products, manage inventory, and accept payments' },
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                      <i className={`ph ${feature.icon}`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Templates Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Pre-built Templates for Every Industry</h2>
              <p className="text-lg text-slate-600 mb-16">Choose from 100+ professionally designed templates and customize in minutes</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Portfolio', icon: 'ph-briefcase' },
                  { name: 'E-commerce', icon: 'ph-shopping-bag' },
                  { name: 'Services', icon: 'ph-wrench' },
                  { name: 'Blog', icon: 'ph-books' },
                  { name: 'Restaurant', icon: 'ph-utensils' },
                  { name: 'Photography', icon: 'ph-camera' },
                  { name: 'Agency', icon: 'ph-users-three' },
                  { name: 'SaaS', icon: 'ph-cloud' },
                ].map((template, i) => (
                  <div key={i} className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all text-center group cursor-pointer">
                    <div className="text-4xl text-cyan-600 mb-3 group-hover:scale-125 transition-transform">
                      <i className={`ph-fill ${template.icon}`}></i>
                    </div>
                    <p className="font-bold text-slate-900">{template.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose UniWeb */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Why Choose UniWeb</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {[
                    { title: 'No Coding Required', desc: 'Visual editor makes it easy for anyone to create websites' },
                    { title: 'Lightning Fast Setup', desc: 'Go from idea to live website in under 30 minutes' },
                    { title: 'AI Writing Assistant', desc: 'Get help writing copy that sells and converts visitors' },
                    { title: 'One-Click Deployment', desc: 'Publish your website instantly with a single click' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-1">
                        <i className="ph-fill ph-check"></i>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                    <div className="mb-6">
                      <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-2">Perfect For</p>
                      <h3 className="text-2xl font-bold text-slate-900">Growing Businesses</h3>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <i className="ph-fill ph-check text-cyan-600 mt-0.5"></i>
                        <span className="text-slate-600 font-medium">Small businesses and startups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ph-fill ph-check text-cyan-600 mt-0.5"></i>
                        <span className="text-slate-600 font-medium">Freelancers and consultants</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ph-fill ph-check text-cyan-600 mt-0.5"></i>
                        <span className="text-slate-600 font-medium">E-commerce shops</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ph-fill ph-check text-cyan-600 mt-0.5"></i>
                        <span className="text-slate-600 font-medium">Service providers</span>
                      </li>
                    </ul>
                    <div className="p-4 bg-cyan-50 rounded-xl text-center border border-cyan-100">
                      <p className="text-sm text-slate-600"><span className="font-bold text-cyan-600">50,000+</span> websites live</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Launch your website in minutes</h2>
              <p className="text-xl text-slate-300 mb-10">AI-powered, fully customizable, ready for your business.</p>
              <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold text-lg hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/20">
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
