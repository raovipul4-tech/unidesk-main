'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniComPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                  Business Intercom Platform
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  UniCOM <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Business Intercom & Calling</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Professional intercom system, video calling, and business communication platform for teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 active:scale-[0.98] transition-all shadow-xl shadow-purple-600/25 flex items-center justify-center gap-2">
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Powerful Intercom Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ph-phone', title: 'HD Voice Calling', desc: 'Crystal clear voice calls with HD quality and noise cancellation' },
                  { icon: 'ph-video-camera', title: 'Multi-User Video', desc: 'Up to 100 participants in HD video meetings' },
                  { icon: 'ph-chat-teardrop-text', title: 'Team Chat', desc: 'Instant messaging with channels and direct messaging' },
                  { icon: 'ph-screen-share', title: 'Screen Sharing', desc: 'Share your screen for better collaboration and support' },
                  { icon: 'ph-record', title: 'Call Recording', desc: 'Record and transcribe important conversations' },
                  { icon: 'ph-shield-check', title: 'Enterprise Security', desc: 'End-to-end encryption for all communications' },
                  { icon: 'ph-clock', title: 'Scheduled Meetings', desc: 'Schedule meetings with calendar integration' },
                  { icon: 'ph-phone-incoming', title: 'IVR & Call Routing', desc: 'Intelligent call routing for departments' },
                  { icon: 'ph-users', title: 'Presence Status', desc: 'See who is available for calls and messages' },
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                      <i className={`ph ${feature.icon}`}></i>
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Built for Every Business</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-purple-200 flex items-center justify-center text-purple-600 text-3xl mb-6">
                    <i className="ph-fill ph-briefcase"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Teams</h3>
                  <p className="text-slate-600 mb-4">Keep your entire organization connected with seamless voice, video, and messaging across all departments.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> Department-wide calls</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> All-hands meetings</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> Team collaboration</li>
                  </ul>
                </div>

                <div className="p-8 bg-pink-50 rounded-3xl border border-pink-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-pink-600 text-3xl mb-6">
                    <i className="ph-fill ph-phone-outgoing"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Support</h3>
                  <p className="text-slate-600 mb-4">Provide exceptional customer support with video calls, screen sharing, and call recording for quality assurance.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-pink-500"></i> Video support calls</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-pink-500"></i> Screen sharing for troubleshooting</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-pink-500"></i> Call quality tracking</li>
                  </ul>
                </div>

                <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                  <div className="w-16 h-16 rounded-xl bg-white border border-purple-200 flex items-center justify-center text-purple-600 text-3xl mb-6">
                    <i className="ph-fill ph-buildings"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote Teams</h3>
                  <p className="text-slate-600 mb-4">Connect distributed teams with crystal clear communication tools that work anywhere in the world.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> Global reach</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> Low latency calls</li>
                    <li className="flex items-center gap-2"><i className="ph-fill ph-check text-purple-500"></i> Timezone friendly</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Integrations & Compatibility</h2>
              <p className="text-lg text-slate-600 mb-12">Works with your favorite business tools</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {['Outlook', 'Google Meet', 'Slack', 'Teams', 'Zapier', 'Webex', 'Calendly', 'Jira'].map((tool, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all flex items-center justify-center font-semibold text-slate-700">
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-slate-900"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to upgrade your team communication?</h2>
              <p className="text-xl text-slate-300 mb-10">Start with a 14-day free trial. No credit card required.</p>
              <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20">
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
