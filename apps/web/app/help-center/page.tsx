import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        "Creating Your First Account",
        "Dashboard Overview",
        "Setting Up Your Team",
        "Quick Start Guide",
      ],
    },
    {
      title: "UniCRM",
      icon: "📊",
      articles: [
        "Managing Contacts",
        "Creating Deals & Pipelines",
        "Automating Workflows",
        "Generating Reports",
      ],
    },
    {
      title: "UniChat",
      icon: "💬",
      articles: [
        "Setting Up Chat Widget",
        "Customizing Chat Experience",
        "AI Training & Responses",
        "Chat Analytics",
      ],
    },
    {
      title: "Billing & Plans",
      icon: "💳",
      articles: [
        "Understanding Pricing",
        "Upgrading Your Plan",
        "Payment Methods",
        "Invoices & Receipts",
      ],
    },
    {
      title: "Security & Privacy",
      icon: "🔒",
      articles: [
        "Data Protection",
        "Two-Factor Authentication",
        "API Security",
        "GDPR Compliance",
      ],
    },
    {
      title: "Integrations",
      icon: "🔗",
      articles: [
        "Connecting Third-Party Apps",
        "API Documentation",
        "Webhooks Setup",
        "Zapier Integration",
      ],
    },
  ];

  const popularArticles = [
    "How to reset your password",
    "Inviting team members",
    "Exporting your data",
    "Understanding usage limits",
    "Mobile app guide",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers, get support, and learn how to make the most of Uniai.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-indigo-600 transition text-sm flex items-center gap-2">
                        <span>→</span>
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition group"
              >
                <span className="text-gray-700 group-hover:text-indigo-600">{article}</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-4">Get help via email</p>
            <a href="/email-support" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Contact Us →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm mb-4">Technical guides</p>
            <a href="/documentation" className="text-indigo-600 font-semibold hover:text-indigo-700">
              View Docs →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-4">Chat with our team</p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700">
              Start Chat →
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
