'use client';

import { useRouter } from 'next/navigation';

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  const router = useRouter();

  return (
    <footer className="bg-slate-900 text-white">
      {children}
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://app-cdn.appgen.com/0e496fc5-3050-498f-ade1-610fc9ef6d40/assets/uploaded_1773130812759_gt5bks.png" 
                alt="Unidesk Logo" 
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl">UniDesk</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              UniDesk: The all-in-one CRM & WhatsApp Business platform for Indian enterprises. Manage leads, automate conversations, and grow your business.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/unidesk.crm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-all duration-300">
                <i className="ph ph-facebook-logo text-xl"></i>
              </a>
              <a href="https://twitter.com/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-all duration-300">
                <i className="ph ph-twitter-logo text-xl"></i>
              </a>
              <a href="https://linkedin.com/company/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-all duration-300">
                <i className="ph ph-linkedin-logo text-xl"></i>
              </a>
              <a href="https://instagram.com/unidesk_crm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-all duration-300">
                <i className="ph ph-instagram-logo text-xl"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => router.push('/unicrm')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <i className="ph ph-kanban group-hover:text-brand-500"></i>
                  UniCRM
                </button>
              </li>
              <li>
                <button onClick={() => router.push('/unichat')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <i className="ph ph-whatsapp-logo group-hover:text-green-500"></i>
                  UniChat
                </button>
              </li>
              <li>
                <button onClick={() => router.push('/features')} className="text-slate-400 hover:text-white transition-colors">Features</button>
              </li>
              <li>
                <button onClick={() => router.push('/pricing')} className="text-slate-400 hover:text-white transition-colors">Pricing</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => router.push('/')} className="text-slate-400 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => router.push('/contact')} className="text-slate-400 hover:text-white transition-colors">Contact</button>
              </li>
              <li>
                <button onClick={() => router.push('/book-demo')} className="text-slate-400 hover:text-white transition-colors">Book Demo</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">Careers</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">Blog</button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">Help Center</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">Documentation</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">API Reference</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors">Status</button>
              </li>
              <li>
                <a href="mailto:support@unidesk.in" className="text-slate-400 hover:text-white transition-colors">Email Support</a>
              </li>
              <li>
                <button onClick={() => router.push('/response')} className="text-slate-400 hover:text-white transition-colors">View Responses</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 UniDesk. All rights reserved. | Made for Indian Businesses | CRM Solutions | WhatsApp Business API
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-slate-400 hover:text-white transition-colors">Terms of Service</button>
              <button className="text-slate-400 hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner Above Footer */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join 2,500+ businesses already using UniDesk to streamline sales, automate WhatsApp conversations, and grow faster.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => router.push('/book-demo')}
              className="px-8 py-3 bg-white text-brand-600 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => router.push('/pricing')}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all active:scale-95"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
