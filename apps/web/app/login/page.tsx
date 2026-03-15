'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
          {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Main Login Section */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
              
              {/* Header Text */}
              <div className="text-center mb-20">
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">Welcome Back</h1>
                  <p className="text-xl text-blue-100">Choose your product to access your account</p>
              </div>

              {/* Quick Access Buttons - All Portals */}
              <div className="mb-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h2 className="text-center text-white font-bold mb-8 text-xl">Quick Access to All Portals</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    <a href="https://unicrm.online" target="_blank" className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center transition hover:shadow-lg transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span>UniCRM</span>
                    </a>
                    <a href="https://unichat.online" target="_blank" className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center transition hover:shadow-lg transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>UniChat</span>
                    </a>
                    <button disabled className="bg-gradient-to-br from-purple-400 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center opacity-60 cursor-not-allowed flex flex-col items-center justify-center space-y-1 relative group" title="Coming Soon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>UniCOM</span>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Coming Soon</span>
                    </button>
                    <button disabled className="bg-gradient-to-br from-red-400 to-red-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center opacity-60 cursor-not-allowed flex flex-col items-center justify-center space-y-1 relative group" title="Coming Soon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span>UniAds</span>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Coming Soon</span>
                    </button>
                    <button disabled className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center opacity-60 cursor-not-allowed flex flex-col items-center justify-center space-y-1 relative group" title="Coming Soon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.59-4.59a1 1 0 011.415 0L16 16m-2-2l1.594-1.594a1 1 0 111.416 1.416"></path>
                        </svg>
                        <span>UniWeb</span>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Coming Soon</span>
                    </button>
                    <button disabled className="bg-gradient-to-br from-emerald-400 to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center opacity-60 cursor-not-allowed flex flex-col items-center justify-center space-y-1 relative group" title="Coming Soon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span>UniPOS</span>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Coming Soon</span>
                    </button>
                </div>
            </div>

              {/* Login Options Grid */}
              <div className="grid md:grid-cols-2 gap-10 mb-16">
                  
                  {/* UniCRM Login */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden group">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                      
                      <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                          {/* Logo */}
                          <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ring-2 ring-blue-400/20">
                              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                          </div>
                          
                          {/* Title */}
                          <div>
                              <h3 className="text-3xl font-bold text-white mb-2">UniCRM</h3>
                              <p className="text-lg text-blue-100">Smart CRM & Lead Management</p>
                          </div>
                          
                          {/* Features */}
                          <div className="text-left w-full space-y-3 bg-white/5 rounded-2xl p-6 border border-white/10">
                              <div className="flex items-center text-blue-100">
                                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Lead Management</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Sales Pipeline</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Team Collaboration</span>
                              </div>
                          </div>
                          
                          {/* Login Button */}
                          <a href="https://unicrm.online" target="_blank" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-5 rounded-2xl font-bold text-lg transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 flex items-center justify-center space-x-3">
                              <span>Login to CRM</span>
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                              </svg>
                          </a>
                      </div>
                  </div>

                  {/* UniChat Login */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden group">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                      
                      <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                          {/* Logo */}
                          <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ring-2 ring-green-400/20">
                              <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                          </div>
                          
                          {/* Title */}
                          <div>
                              <h3 className="text-3xl font-bold text-white mb-2">UniChat</h3>
                              <p className="text-lg text-green-100">WhatsApp Business API</p>
                          </div>
                          
                          {/* Features */}
                          <div className="text-left w-full space-y-3 bg-white/5 rounded-2xl p-6 border border-white/10">
                              <div className="flex items-center text-green-100">
                                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Broadcast Campaigns</span>
                              </div>
                              <div className="flex items-center text-green-100">
                                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Team Inbox</span>
                              </div>
                              <div className="flex items-center text-green-100">
                                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Chat Automation</span>
                              </div>
                          </div>
                          
                          {/* Login Button */}
                          <a href="https://unichat.online" target="_blank" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-5 rounded-2xl font-bold text-lg transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 flex items-center justify-center space-x-3">
                              <span>Login to WhatsApp</span>
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                              </svg>
                          </a>
                      </div>
                  </div>

              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl mb-16">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                      <div className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 hover:border-blue-400/50">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                              </svg>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">Don't have an account?</h4>
                          <p className="text-blue-100 text-sm mb-4">Start your free trial today</p>
                          <button onClick={() => router.push('/pricing')} className="text-blue-300 hover:text-blue-200 font-bold hover:underline">View Pricing →</button>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 hover:border-purple-400/50">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">Need Help?</h4>
                          <p className="text-blue-100 text-sm mb-4">Our support team is here for you</p>
                          <a href="mailto:support@unidesk.in" className="text-blue-300 hover:text-blue-200 font-bold hover:underline">Contact Support →</a>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 hover:border-green-400/50">
                          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                              </svg>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">Book a Demo</h4>
                          <p className="text-blue-100 text-sm mb-4">See Unidesk in action</p>
                          <button onClick={() => router.push('/contact')} className="text-blue-300 hover:text-blue-200 font-bold hover:underline">Schedule Demo →</button>
                      </div>
                  </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                  <p className="text-blue-100 text-lg font-medium mb-4">Questions? Reach out to us</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                      <a href="mailto:support@unidesk.in" className="bg-white/10 hover:bg-blue-500/20 text-blue-100 hover:text-white px-6 py-3 rounded-xl font-semibold transition flex items-center shadow-lg hover:shadow-xl border border-white/20 hover:border-blue-400/50">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          support@unidesk.in
                      </a>
                      <a href="https://wa.me/919625878600" className="bg-white/10 hover:bg-green-500/20 text-green-100 hover:text-white px-6 py-3 rounded-xl font-semibold transition flex items-center shadow-lg hover:shadow-xl border border-white/20 hover:border-green-400/50">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          +91 9625878600
                      </a>
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="mt-8 flex items-center justify-center space-x-2 text-blue-200">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span className="text-sm font-medium">Secure & Trusted by 2,500+ businesses</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
