import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Uniai</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of AI-powered business solutions, helping companies transform their operations with intelligent automation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Uniai, we believe that artificial intelligence should be accessible, practical, and transformative for businesses of all sizes. Our mission is to democratize AI technology and empower organizations to achieve more with intelligent automation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're committed to building products that not only leverage cutting-edge AI technology but also prioritize user experience, data security, and real-world business impact.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities in AI technology to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Success</h3>
              <p className="text-gray-600">
                Our customers' success is our success. We're dedicated to providing exceptional support and value.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                We prioritize data privacy and security, ensuring your information is always protected.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always looking for talented individuals who are passionate about AI and innovation.
          </p>
          <a
            href="/careers"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Open Positions
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
