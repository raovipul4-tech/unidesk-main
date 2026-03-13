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

          {/* Features */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Build Websites with AI</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ph-sparkle', title: 'AI Content Generator', desc: 'Generate website copy automatically with AI' },
                  { icon: 'ph-palette', title: 'Drag & Drop Builder', desc: 'Create layouts without any coding' },
                  { icon: 'ph-device-tablet', title: 'Responsive Design', desc: 'Works perfectly on all devices' },
                  { icon: 'ph-image', title: 'Stock Images Included', desc: 'Millions of royalty-free images' },
                  { icon: 'ph-rocket', title: 'SEO Optimized', desc: 'Built-in SEO tools for better ranking' },
                  { icon: 'ph-chart-bar', title: 'Analytics Built-in', desc: 'Track visitor behavior and conversions' },
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
