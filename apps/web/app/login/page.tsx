'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function LoginPage() {
  const router = useRouter();

    return (
      <>
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
          {/* Header */}
    <Header />

    {/* Main Login Section */}
    <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
            
            {/* Header Text */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Welcome Back</h1>
                <p className="text-xl text-gray-600">Choose your product to access your account</p>
            </div>

            {/* Login Options Grid */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
                
                {/* UniCRM Login */}
                <div className="bg-white rounded-3xl p-10 border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                        {/* Logo */}
                        <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        
                        {/* Title */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">UniCRM</h3>
                            <p className="text-lg text-gray-600">Smart CRM & Lead Management</p>
                        </div>
                        
                        {/* Features */}
                        <div className="text-left w-full space-y-3 bg-blue-50/50 rounded-2xl p-6">
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Lead Management</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Sales Pipeline</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Team Collaboration</span>
                            </div>
                        </div>
                        
                        {/* Login Button */}
                        <a href="https://crm.unidesk.in" target="_blank" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 flex items-center justify-center space-x-3">
                            <span>Login to CRM</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* UniChat Login */}
                <div className="bg-white rounded-3xl p-10 border-2 border-green-100 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-200/50 relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-transparent rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                        {/* Logo */}
                        <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                        
                        {/* Title */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">UniChat</h3>
                            <p className="text-lg text-gray-600">WhatsApp Business API</p>
                        </div>
                        
                        {/* Features */}
                        <div className="text-left w-full space-y-3 bg-green-50/50 rounded-2xl p-6">
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Broadcast Campaigns</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Team Inbox</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-medium">Chat Automation</span>
                            </div>
                        </div>
                        
                        {/* Login Button */}
                        <a href="https://whatsapp.unidesk.in" target="_blank" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 flex items-center justify-center space-x-3">
                            <span>Login to WhatsApp</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-200 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                            </svg>
                        </div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Don't have an account?</h4>
                        <p className="text-gray-600 text-sm mb-4">Start your free trial today</p>
                        <button onClick={() => router.push('/pricing')} className="text-blue-600 hover:text-blue-700 font-bold hover:underline">View Pricing →</button>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Need Help?</h4>
                        <p className="text-gray-600 text-sm mb-4">Our support team is here for you</p>
                        <a href="mailto:support@unidesk.in" className="text-blue-600 hover:text-blue-700 font-bold hover:underline">Contact Support →</a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Book a Demo</h4>
                        <p className="text-gray-600 text-sm mb-4">See Unidesk in action</p>
                        <button onClick={() => router.push('/contact')} className="text-blue-600 hover:text-blue-700 font-bold hover:underline">Schedule Demo →</button>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mt-12">
                <p className="text-gray-600 text-lg font-medium mb-4">Questions? Reach out to us</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <a href="mailto:support@unidesk.in" className="bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition flex items-center shadow-md hover:shadow-lg">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        support@unidesk.in
                    </a>
                    <a href="https://wa.me/919625878600" className="bg-white hover:bg-green-50 text-gray-700 hover:text-green-600 px-6 py-3 rounded-xl font-semibold transition flex items-center shadow-md hover:shadow-lg">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        +91 9625878600
                    </a>
                </div>
                
                {/* Trust Badge */}
                <div className="mt-8 flex items-center justify-center space-x-2 text-gray-500">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
