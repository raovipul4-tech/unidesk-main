'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (password === 'Unidesk@1') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/response');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 pt-40 md:pt-44 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Branding */}
            <div className="hidden lg:block">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  <span className="text-gray-900">Access Your</span>
                  <br />
                  <span className="text-teal-600">Responses</span>
                  <br />
                  <span className="text-blue-600">Dashboard</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Track and manage all your leads, inquiries, and customer interactions in one powerful platform.
                </p>
                
                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Smart Lead Tracking</h3>
                      <p className="text-sm text-gray-600">Never miss an opportunity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Real-time Updates</h3>
                      <p className="text-sm text-gray-600">Stay informed instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Secure Access</h3>
                      <p className="text-sm text-gray-600">Your data is protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-blue-100">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Welcome Back</h2>
                  <p className="text-gray-600 text-lg">Enter your password to access dashboard</p>
                </div>

                {/* Password Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin();
                      }
                    }}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-500 font-medium"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg hover:shadow-xl mb-6 text-lg"
                >
                  Access Dashboard
                </button>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 font-medium">Our Products</span>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="space-y-3 mb-8">
                  {/* CRM Card */}
                  <Link href="/unicrm">
                    <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition">
                          📊
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-base">UniDesk</h3>
                          <p className="text-xs text-gray-600">Smart Lead & Sales CRM</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Chat Card */}
                  <Link href="/unichat">
                    <div className="p-5 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transition cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition">
                          💬
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-base">UniChat</h3>
                          <p className="text-xs text-gray-600">WhatsApp Business API</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    Don't have access?{' '}
                    <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-bold">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
