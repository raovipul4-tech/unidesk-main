import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EmailSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📧</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Email Support</h1>
          <p className="text-xl text-gray-600">
            Need help? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Support Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Subject *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Category *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Question</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="account">Account Help</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                placeholder="Please describe your issue or question in detail..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Attachments (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition cursor-pointer">
                <div className="text-4xl mb-2">📎</div>
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">Max file size: 10MB</p>
                <input type="file" className="hidden" multiple />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Other Ways to Contact */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-4">Chat with our team in real-time</p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-gray-900 mb-2">Help Center</h3>
            <p className="text-gray-600 text-sm mb-4">Browse our knowledge base</p>
            <a href="/help-center" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Visit Help Center
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm mb-4">Read technical guides</p>
            <a href="/documentation" className="text-indigo-600 font-semibold hover:text-indigo-700">
              View Docs
            </a>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="font-bold text-indigo-900 mb-2">📅 Expected Response Time</h3>
          <p className="text-indigo-700">
            Our support team typically responds within 24 hours during business days (Monday-Friday, 9am-5pm EST). 
            For urgent issues, we recommend using our live chat for immediate assistance.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
