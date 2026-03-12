import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / London",
      type: "Full-time",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the future of AI with us. We're looking for talented, passionate individuals to help shape the next generation of intelligent business solutions.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work at Uniai?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-bold text-gray-900 mb-2">Remote First</h3>
              <p className="text-gray-600 text-sm">Work from anywhere in the world with flexible hours</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600 text-sm">Top-tier salaries with equity options</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 mb-2">Health & Wellness</h3>
              <p className="text-gray-600 text-sm">Comprehensive health, dental, and vision coverage</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🌴</div>
              <h3 className="font-bold text-gray-900 mb-2">Unlimited PTO</h3>
              <p className="text-gray-600 text-sm">Take time off when you need it</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Learning Budget</h3>
              <p className="text-gray-600 text-sm">Annual budget for courses and conferences</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Growth</h3>
              <p className="text-gray-600 text-sm">Rapid career advancement opportunities</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-bold text-gray-900 mb-2">Team Events</h3>
              <p className="text-gray-600 text-sm">Regular virtual and in-person gatherings</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Latest Tech</h3>
              <p className="text-gray-600 text-sm">Top-of-the-line equipment and tools</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📁 {job.department}</span>
                    <span>📍 {job.location}</span>
                    <span>⏰ {job.type}</span>
                  </div>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always interested in meeting talented people. Send us your resume!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
