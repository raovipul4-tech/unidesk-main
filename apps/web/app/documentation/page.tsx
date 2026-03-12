import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        "Introduction",
        "Authentication",
        "Quick Start",
        "Rate Limits",
      ],
    },
    {
      title: "UniCRM API",
      items: [
        "Contacts",
        "Companies",
        "Deals",
        "Activities",
        "Custom Fields",
      ],
    },
    {
      title: "UniChat API",
      items: [
        "Conversations",
        "Messages",
        "Chat Widget",
        "Webhooks",
      ],
    },
    {
      title: "Webhooks",
      items: [
        "Setup",
        "Events",
        "Security",
        "Testing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Documentation</h3>
              <nav className="space-y-6">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-600 hover:text-indigo-600 transition"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Documentation</h1>
              <p className="text-lg text-gray-600">
                Complete API reference and integration guides for Uniai platform.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to the Uniai API documentation. Our RESTful API allows you to integrate Uniai's powerful features into your applications. All API requests must be authenticated using API keys.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-mono text-gray-700">
                  Base URL: <span className="text-indigo-600">https://api.uniai.com/v1</span>
                </p>
              </div>
            </div>

            {/* Authentication */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Authenticate your API requests using your API key in the Authorization header:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`curl https://api.uniai.com/v1/contacts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-yellow-800">
                  ⚠️ Keep your API keys secure. Never expose them in client-side code.
                </p>
              </div>
            </div>

            {/* Endpoints Example */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Create a Contact</h2>
              <p className="text-gray-700 mb-4">Create a new contact in your CRM.</p>
              
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded font-mono text-sm font-semibold">
                  POST
                </span>
                <span className="ml-3 font-mono text-gray-700">/contacts</span>
              </div>

              <h3 className="font-bold text-gray-900 mb-2">Request Body</h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-sm text-gray-100">
{`{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Inc"
}`}
                </pre>
              </div>

              <h3 className="font-bold text-gray-900 mb-2">Response</h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`{
  "id": "cont_1234567890",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Inc",
  "createdAt": "2024-12-15T10:30:00Z",
  "updatedAt": "2024-12-15T10:30:00Z"
}`}
                </pre>
              </div>
            </div>

            {/* Rate Limits */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Limits</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                API rate limits are based on your plan:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Plan</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Requests/Hour</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Burst Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Starter</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Professional</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">500</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Enterprise</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Unlimited</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Links to Other Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/api-reference"
                className="bg-indigo-600 text-white rounded-xl shadow-lg p-8 hover:bg-indigo-700 transition"
              >
                <h3 className="text-xl font-bold mb-2">API Reference</h3>
                <p className="opacity-90">Complete endpoint documentation</p>
              </a>
              <a
                href="/help-center"
                className="bg-purple-600 text-white rounded-xl shadow-lg p-8 hover:bg-purple-700 transition"
              >
                <h3 className="text-xl font-bold mb-2">Help Center</h3>
                <p className="opacity-90">Guides and tutorials</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
