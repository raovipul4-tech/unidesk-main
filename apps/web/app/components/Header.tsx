'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="grid grid-cols-3 items-center gap-4">
            {/* Left: Email */}
            <div className="flex items-center gap-2 text-sm">
              <i className="ph ph-envelope text-lg"></i>
              <a href="mailto:support@unidesk.in" className="hover:text-white/90 transition-colors font-medium">
                support@unidesk.in
              </a>
            </div>
            
            {/* Center: Offer */}
            <div className="flex items-center justify-center gap-2 text-center">
              <i className="ph ph-gift text-xl"></i>
              <span className="font-semibold text-base">Limited Offer: Get 20% OFF on Annual Plans!</span>
            </div>
            
            {/* Right: Social Buttons */}
            <div className="flex items-center justify-end gap-3">
              <a href="https://facebook.com/unidesk.crm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all hover:scale-110 shadow-sm">
                <i className="ph-bold ph-facebook-logo text-lg text-blue-600"></i>
              </a>
              <a href="https://twitter.com/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all hover:scale-110 shadow-sm">
                <i className="ph-bold ph-twitter-logo text-lg text-sky-500"></i>
              </a>
              <a href="https://linkedin.com/company/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all hover:scale-110 shadow-sm">
                <i className="ph-bold ph-linkedin-logo text-lg text-blue-700"></i>
              </a>
              <a href="https://instagram.com/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white hover:bg-white/90 flex items-center justify-center transition-all hover:scale-110 shadow-sm">
                <i className="ph-bold ph-instagram-logo text-lg text-pink-600"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => router.push('/')} className="flex items-center gap-2 group cursor-pointer">
          <img 
            src="https://app-cdn.appgen.com/0e496fc5-3050-498f-ade1-610fc9ef6d40/assets/uploaded_1773130812759_gt5bks.png" 
            alt="Unidesk Logo" 
            className="w-10 h-10 group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-2xl tracking-tight text-slate-900">UniDesk</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <button onClick={() => router.push('/')} className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Home</button>
          <button onClick={() => router.push('/features')} className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Features</button>
          <div className="relative group">
            <button className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
              Products
              <i className="ph ph-caret-down text-xs"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="grid grid-cols-2 gap-2 p-3">
                <button onClick={() => router.push('/unicrm')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 text-xl">
                    <i className="ph ph-kanban"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-brand-600">UniCRM</p>
                    <p className="text-xs text-slate-500">CRM Platform</p>
                  </div>
                </button>
                <button onClick={() => router.push('/unichat')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 text-xl">
                    <i className="ph ph-whatsapp-logo"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-green-600">UniChat</p>
                    <p className="text-xs text-slate-500">WhatsApp API</p>
                  </div>
                </button>
                <button onClick={() => router.push('/unicom')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 text-xl">
                    <i className="ph ph-phone"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-purple-600">UniCOM</p>
                    <p className="text-xs text-slate-500">Intercom & Calling</p>
                  </div>
                </button>
                <button onClick={() => router.push('/uniads')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 text-xl">
                    <i className="ph ph-megaphone"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-red-600">UniAds</p>
                    <p className="text-xs text-slate-500">Ad Management</p>
                  </div>
                </button>
                <button onClick={() => router.push('/uniweb')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 text-xl">
                    <i className="ph ph-globe"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-cyan-600">UniWeb</p>
                    <p className="text-xs text-slate-500">Website Builder</p>
                  </div>
                </button>
                <button onClick={() => router.push('/unipos')} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer text-center">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl">
                    <i className="ph ph-shopping-cart"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm group-hover/item:text-indigo-600">UniPOS</p>
                    <p className="text-xs text-slate-500">POS System</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <button onClick={() => router.push('/pricing')} className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Pricing</button>
          <button onClick={() => router.push('/contact')} className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Contact</button>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => router.push('/login')} className="text-slate-600 hover:text-slate-900 font-medium px-4 py-2 transition-colors">Login</button>
          <button onClick={() => router.push('/book-demo')} className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/20">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-600">
          <i className="ph ph-list text-3xl"></i>
        </button>
        </div>
      </div>
    </header>
  );
}
