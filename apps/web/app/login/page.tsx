'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../components/Header';

export default function LoginPage() {
  const router = useRouter();
  const [comingSoonModal, setComingSoonModal] = useState<string | null>(null);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col pt-40 sm:pt-44 md:pt-48" style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 25%, #f0fdfa 50%, #e0f7fa 75%, #f5f3ff 100%)'
      }}>
        {/* Main Login Section - Fixed in content box */}
        <div className="flex-1 w-full px-3 sm:px-4 md:px-6 py-6 sm:py-8 relative z-10 flex items-center justify-center">
          <div className="w-full max-w-5xl">
              
              {/* Header Text */}
              <div className="text-center mb-8 sm:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight">Welcome Back</h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">Choose your product to access your account</p>
              </div>

              {/* Quick Access Buttons - All Portals */}
              <div className="mb-8 sm:mb-12 bg-white/80 backdrop-blur rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-center text-slate-900 font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Access to All Portals</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
                    <a href="https://unicrm.online" target="_blank" className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="hidden sm:inline">UniCRM</span>
                        <span className="sm:hidden text-xs">CRM</span>
                    </a>
                    <a href="https://unichat.online" target="_blank" className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="hidden sm:inline">UniChat</span>
                        <span className="sm:hidden text-xs">Chat</span>
                    </a>
                    <button onClick={() => setComingSoonModal('uniCOM')} className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 cursor-pointer">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="hidden sm:inline">UniCOM</span>
                        <span className="sm:hidden text-xs">COM</span>
                    </button>
                    <button onClick={() => setComingSoonModal('uniADS')} className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 cursor-pointer">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span className="hidden sm:inline">UniADS</span>
                        <span className="sm:hidden text-xs">ADS</span>
                    </button>
                    <button onClick={() => setComingSoonModal('uniWEB')} className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 cursor-pointer">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.59-4.59a1 1 0 011.415 0L16 16m-2-2l1.594-1.594a1 1 0 111.416 1.416"></path>
                        </svg>
                        <span className="hidden sm:inline">UniWEB</span>
                        <span className="sm:hidden text-xs">WEB</span>
                    </button>
                    <button onClick={() => setComingSoonModal('uniPOS')} className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm text-center transition hover:shadow-md transform hover:scale-105 duration-300 flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 cursor-pointer">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="hidden sm:inline">UniPOS</span>
                        <span className="sm:hidden text-xs">POS</span>
                    </button>
                </div>
            </div>

              {/* Login Options Grid */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  
                  {/* UniCRM Login */}
                  <div className="bg-white backdrop-blur rounded-lg sm:rounded-xl p-5 sm:p-6 border border-blue-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 relative overflow-hidden group">
                      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 relative z-10">
                          {/* Logo */}
                          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-10 sm:w-14 h-10 sm:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                          </div>
                          
                          {/* Title */}
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">UniCRM</h3>
                              <p className="text-xs sm:text-sm text-slate-600">Smart CRM & Lead Management</p>
                          </div>
                          
                          {/* Features */}
                          <div className="text-left w-full space-y-1.5 sm:space-y-2 bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
                              <div className="flex items-center text-slate-700 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-blue-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Lead Management</span>
                              </div>
                              <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-blue-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Sales Pipeline</span>
                              </div>
                              <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-blue-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Team Collaboration</span>
                              </div>
                          </div>
                          
                          {/* Login Button */}
                          <a href="https://unicrm.online" target="_blank" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm transition shadow-md hover:shadow-lg transform duration-300 flex items-center justify-center space-x-2">
                              <span>Login to CRM</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                              </svg>
                          </a>
                      </div>
                  </div>

                  {/* UniChat Login */}
                  <div className="bg-white backdrop-blur rounded-lg sm:rounded-xl p-5 sm:p-6 border border-green-200 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/20 transition-all duration-300 relative overflow-hidden group">
                      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 relative z-10">
                          {/* Logo */}
                          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-10 sm:w-14 h-10 sm:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                          </div>
                          
                          {/* Title */}
                          <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">UniChat</h3>
                              <p className="text-xs sm:text-sm text-slate-600">WhatsApp Business API</p>
                          </div>
                          
                          {/* Features */}
                          <div className="text-left w-full space-y-1.5 sm:space-y-2 bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                              <div className="flex items-center text-slate-700 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Broadcast Campaigns</span>
                              </div>
                              <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Team Inbox</span>
                              </div>
                              <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                  </div>
                                  <span className="font-medium">Chat Automation</span>
                              </div>
                          </div>
                          
                          {/* Login Button */}
                          <a href="https://unichat.online" target="_blank" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm transition shadow-md hover:shadow-lg transform duration-300 flex items-center justify-center space-x-2">
                              <span>Login to WhatsApp</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                              </svg>
                          </a>
                      </div>
                  </div>

              </div>

              {/* Additional Info */}
              <div className="bg-white/80 backdrop-blur rounded-lg sm:rounded-xl p-5 sm:p-6 border border-blue-200 shadow-md mb-8 sm:mb-12">
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                      <div className="bg-blue-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 border border-blue-200">
                          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                              </svg>
                          </div>
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1">Don't have an account?</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mb-2">Start your free trial today</p>
                          <button onClick={() => router.push('/pricing')} className="text-blue-600 hover:text-blue-700 font-bold hover:underline text-xs sm:text-sm">View Pricing →</button>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 border border-purple-200">
                          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                          </div>
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1">Need Help?</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mb-2">Our support team is here for you</p>
                          <a href="mailto:support@unidesk.in" className="text-purple-600 hover:text-purple-700 font-bold hover:underline text-xs sm:text-sm">Contact Support →</a>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 border border-green-200">
                          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                              </svg>
                          </div>
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1">Book a Demo</h4>
                          <p className="text-slate-600 text-xs sm:text-sm mb-2">See Unidesk in action</p>
                          <button onClick={() => router.push('/contact')} className="text-green-600 hover:text-green-700 font-bold hover:underline text-xs sm:text-sm">Schedule Demo →</button>
                      </div>
                  </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                  <p className="text-slate-700 text-sm sm:text-base font-medium mb-4">Questions? Reach out to us</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                      <a href="mailto:support@unidesk.in" className="bg-blue-100 hover:bg-blue-200 text-blue-700 hover:text-blue-900 px-3 sm:px-4 py-2 rounded-lg font-semibold transition flex items-center shadow-sm hover:shadow-md border border-blue-300 hover:border-blue-400 text-xs sm:text-sm">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span className="hidden sm:inline">support@unidesk.in</span>
                          <span className="sm:hidden">Email</span>
                      </a>
                      <a href="https://wa.me/919625878600" className="bg-green-100 hover:bg-green-200 text-green-700 hover:text-green-900 px-3 sm:px-4 py-2 rounded-lg font-semibold transition flex items-center shadow-sm hover:shadow-md border border-green-300 hover:border-green-400 text-xs sm:text-sm">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          <span className="hidden sm:inline">+91 9625878600</span>
                          <span className="sm:hidden">WhatsApp</span>
                      </a>
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="mt-4 sm:mt-6 flex items-center justify-center space-x-2 text-slate-700 text-xs sm:text-sm">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span className="font-medium">Secure & Trusted by 2,500+ businesses</span>
                  </div>
              </div>
          </div>
        </div>

        {/* Coming Soon Modal */}
        {comingSoonModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 pt-40 sm:pt-0">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10 transform transition-all animate-in fade-in zoom-in duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {comingSoonModal === 'uniCOM' && 'UniCOM'}
                    {comingSoonModal === 'uniADS' && 'UniADS'}
                    {comingSoonModal === 'uniWEB' && 'UniWEB'}
                    {comingSoonModal === 'uniPOS' && 'UniPOS'}
                  </h3>
                </div>
                <button 
                  onClick={() => setComingSoonModal(null)}
                  className="text-slate-500 hover:text-slate-700 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 text-base mb-4">
                  {comingSoonModal === 'uniCOM' && 'Our email marketing platform is coming soon. Get ready to launch powerful email campaigns!'}
                  {comingSoonModal === 'uniADS' && 'Our advertising platform is coming soon. Manage all your digital ads in one place!'}
                  {comingSoonModal === 'uniWEB' && 'Our website builder is coming soon. Create stunning websites without coding!'}
                  {comingSoonModal === 'uniPOS' && 'Our point of sale system is coming soon. Perfect for retail and restaurants!'}
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-700 font-medium">
                    💡 Be among the first to know when we launch!
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://wa.me/919625878600?text=I'm%20interested%20in%20getting%20early%20access%20to%20" 
                  target="_blank"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-center transition shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Notify Me on WhatsApp
                </a>
                <button 
                  onClick={() => setComingSoonModal(null)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
