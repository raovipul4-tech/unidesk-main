'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UniComPage() {
  const router = useRouter();

  return (
    <>
      <div className="font-sans text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-[90vh] flex items-center">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                  Team Communication & Calling Platform
                </div>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Business Intercom<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">& Calling Platform</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Keep your distributed teams connected. HD video calls, screen sharing, team chat, and unified calling — all in one secure platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-600/25 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2">
                    Start Free Trial
                    <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center">
                    Schedule Demo
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-purple-500 text-lg"></i>
                    HD Video & Calling
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-pink-500 text-lg"></i>
                    Screen Sharing
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-check-circle text-indigo-500 text-lg"></i>
                    Team Chat
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative lg:h-[600px] w-full hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-3 scale-105 border border-white/40"></div>
                <div className="absolute inset-0 glass-panel rounded-3xl shadow-2xl shadow-slate-900/10 border border-white p-2 animate-float">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden relative flex flex-col">
                    {/* Video Call UI Mockup */}
                    <div className="flex-1 relative bg-gradient-to-br from-purple-900 to-slate-900 overflow-hidden">
                      {/* Main Video */}
                      <div className="absolute inset-4 bg-slate-800 rounded-xl border-4 border-white/20 flex items-center justify-center">
                        <i className="ph ph-video-camera text-6xl text-white/30"></i>
                      </div>
                      {/* Small Avatars (Other Participants) */}
                      <div className="absolute bottom-4 right-4 space-y-2">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold">JD</div>
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-sm font-bold">SK</div>
                      </div>
                    </div>
                    {/* Controls */}
                    <div className="h-16 bg-white/80 backdrop-blur border-t border-white/40 flex items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white cursor-pointer"><i className="ph-fill ph-phone-x"></i></div>
                      <div className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white cursor-pointer"><i className="ph-fill ph-microphone"></i></div>
                      <div className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white cursor-pointer"><i className="ph-fill ph-video-camera"></i></div>
                      <div className="w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-400 flex items-center justify-center text-slate-900 cursor-pointer"><i className="ph ph-monitor"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="py-16 border-b border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">99.9%</p>
                  <p className="text-slate-500 font-medium">Uptime</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">500+</p>
                  <p className="text-slate-500 font-medium">Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">100ms</p>
                  <p className="text-slate-500 font-medium">Latency</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">256-bit</p>
                  <p className="text-slate-500 font-medium">Encryption</p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features Grid */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Powerful Communication Features</h2>
                <p className="text-lg text-slate-600">Everything your team needs to stay connected and productive</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-video-camera"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">HD Video Calls</h4>
                  <p className="text-slate-600 mb-4">Crystal clear 1080p video with advanced compression for stable connections.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      Up to 500 participants
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      Adaptive bitrate streaming
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      Virtual backgrounds
                    </li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-pink-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-monitor"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Screen Sharing</h4>
                  <p className="text-slate-600 mb-4">Share your entire screen or specific applications for better collaboration.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Full screen or app window
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Annotation tools
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Remote control option
                    </li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-indigo-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-chat-teardrop-text"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Team Chat</h4>
                  <p className="text-slate-600 mb-4">Organized channels, direct messages, and threaded conversations.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                      Public & private channels
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                      Message search & history
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-indigo-500 mt-0.5"></i>
                      Emoji reactions & replies
                    </li>
                  </ul>
                </div>

                {/* Feature 4 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-phone"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Voice & Phone</h4>
                  <p className="text-slate-600 mb-4">Crystal clear audio calls and full-featured phone system integration.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      Audio conferencing
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      Call recording
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      PSTN integration
                    </li>
                  </ul>
                </div>

                {/* Feature 5 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-pink-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-file"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">File Sharing</h4>
                  <p className="text-slate-600 mb-4">Secure file transfer with version control and access management.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Up to 2GB files
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Version history
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-pink-500 mt-0.5"></i>
                      Granular permissions
                    </li>
                  </ul>
                </div>

                {/* Feature 6 */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-lock"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Security & Privacy</h4>
                  <p className="text-slate-600 mb-4">Enterprise-grade encryption and compliance with international standards.</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      End-to-end encryption
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      GDPR & ISO 27001
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ph-fill ph-check text-purple-500 mt-0.5"></i>
                      On-premises option
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Built for Your Use Case</h2>
                <p className="text-lg text-slate-600">UniCOM adapts to your team's unique communication needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Corporate Teams */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white border border-purple-200 hover:shadow-xl hover:border-purple-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-users"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Teams</h3>
                  <p className="text-slate-600 mb-6">Unify communication across departments and locations.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-purple-600 mt-1 shrink-0"></i>
                      <span>Daily standups & syncs</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-purple-600 mt-1 shrink-0"></i>
                      <span>Cross-functional meetings</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-purple-600 mt-1 shrink-0"></i>
                      <span>Leadership alignment</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-purple-600 mt-1 shrink-0"></i>
                      <span>All-hands meetings</span>
                    </li>
                  </ul>
                </div>

                {/* Remote & Distributed */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:shadow-xl hover:border-pink-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-globe"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote & Distributed</h3>
                  <p className="text-slate-600 mb-6">Keep geographically dispersed teams connected.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-pink-600 mt-1 shrink-0"></i>
                      <span>Timezone-friendly scheduling</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-pink-600 mt-1 shrink-0"></i>
                      <span>Always-on collaboration</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-pink-600 mt-1 shrink-0"></i>
                      <span>Meeting recordings & playback</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-pink-600 mt-1 shrink-0"></i>
                      <span>Async communication support</span>
                    </li>
                  </ul>
                </div>

                {/* Support & Services */}
                <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 hover:shadow-xl hover:border-indigo-400 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ph ph-headset"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Support Centers</h3>
                  <p className="text-slate-600 mb-6">Deliver exceptional customer support with integrated communication.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-indigo-600 mt-1 shrink-0"></i>
                      <span>Screen sharing for support</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-indigo-600 mt-1 shrink-0"></i>
                      <span>Call recording & compliance</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-indigo-600 mt-1 shrink-0"></i>
                      <span>Team queue management</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <i className="ph-fill ph-check text-indigo-600 mt-1 shrink-0"></i>
                      <span>Call transfer & routing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-16 tracking-tight">Why Choose UniCOM?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                      <i className="ph ph-lightning text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Lightning Fast</h4>
                      <p className="text-slate-300">Ultra-low latency (less than 100ms) for real-time conversations.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                      <i className="ph ph-shield-check text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Military-Grade Security</h4>
                      <p className="text-slate-300">256-bit end-to-end encryption and GDPR compliance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                      <i className="ph ph-chart-line-up text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">99.9% Uptime SLA</h4>
                      <p className="text-slate-300">Enterprise-grade reliability with redundant infrastructure.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                      <i className="ph ph-plug text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Easy Integration</h4>
                      <p className="text-slate-300">Connect with your favorite tools via APIs and webhooks.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                      <i className="ph ph-users-three text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Scales with Your Team</h4>
                      <p className="text-slate-300">From 5 to 5,000 employees, no performance degradation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                      <i className="ph ph-headset text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                      <p className="text-slate-300">Dedicated support team available around the clock.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-center text-white">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to Transform Team Communication?</h2>
              <p className="text-xl text-white/90 mb-10">Start your free trial today. No credit card required.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
                  Start Free Trial
                </button>
                <button onClick={() => router.push('/book-demo')} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
