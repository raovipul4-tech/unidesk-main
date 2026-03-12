import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApiReferencePage() {
  const endpoints = [
    {
      category: "Contacts",
      items: [
        { method: "GET", path: "/contacts", description: "List all contacts" },
        { method: "POST", path: "/contacts", description: "Create a contact" },
        { method: "GET", path: "/contacts/:id", description: "Get contact details" },
        { method: "PUT", path: "/contacts/:id", description: "Update a contact" },
        { method: "DELETE", path: "/contacts/:id", description: "Delete a contact" },
      ],
    },
    {
      category: "Companies",
      items: [
        { method: "GET", path: "/companies", description: "List all companies" },
        { method: "POST", path: "/companies", description: "Create a company" },
        { method: "GET", path: "/companies/:id", description: "Get company details" },
        { method: "PUT", path: "/companies/:id", description: "Update a company" },
        { method: "DELETE", path: "/companies/:id", description: "Delete a company" },
      ],
    },
    {
      category: "Deals",
      items: [
        { method: "GET", path: "/deals", description: "List all deals" },
        { method: "POST", path: "/deals", description: "Create a deal" },
        { method: "GET", path: "/deals/:id", description: "Get deal details" },
        { method: "PUT", path: "/deals/:id", description: "Update a deal" },
        { method: "DELETE", path: "/deals/:id", description: "Delete a deal" },
      ],
    },
    {
      category: "Conversations",
      items: [
        { method: "GET", path: "/conversations", description: "List all conversations" },
        { method: "POST", path: "/conversations", description: "Start a conversation" },
        { method: "GET", path: "/conversations/:id", description: "Get conversation details" },
        { method: "POST", path: "/conversations/:id/messages", description: "Send a message" },
      ],
    },
    {
      category: "Webhooks",
      items: [
        { method: "GET", path: "/webhooks", description: "List all webhooks" },
        { method: "POST", path: "/webhooks", description: "Create a webhook" },
        { method: "GET", path: "/webhooks/:id", description: "Get webhook details" },
        { method: "DELETE", path: "/webhooks/:id", description: "Delete a webhook" },
      ],
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-blue-100 text-blue-800";
      case "POST": return "bg-green-100 text-green-800";
      case "PUT": return "bg-yellow-100 text-yellow-800";
      case "DELETE": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">API Reference</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete reference documentation for all Uniai API endpoints.
          </p>
        </div>

        {/* Quick Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Base URL</h3>
              <code className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded">
                https://api.uniai.com/v1
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentication</h3>
              <code className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded">
                Bearer Token
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Content Type</h3>
              <code className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded">
                application/json
              </code>
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="space-y-8">
          {endpoints.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((endpoint, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className={`px-3 py-1 rounded font-mono text-xs font-semibold ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-gray-700 font-mono">{endpoint.path}</code>
                      <span className="text-gray-600 text-sm">{endpoint.description}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Error Codes */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Error Codes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Code</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">200</td>
                  <td className="px-6 py-4 text-sm text-gray-700">OK</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Request successful</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">201</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Created</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Resource created successfully</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">400</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Bad Request</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Invalid request parameters</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">401</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Unauthorized</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Invalid or missing API key</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">404</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Not Found</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Resource not found</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">429</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Too Many Requests</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rate limit exceeded</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">500</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Internal Server Error</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Server error occurred</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg mb-8 opacity-90">
            Check out our documentation or contact our support team for assistance.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/documentation"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View Documentation
            </a>
            <a
              href="/email-support"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
