import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StatusPage() {
  const services = [
    { name: "API", status: "operational", uptime: "99.99%" },
    { name: "UniCRM", status: "operational", uptime: "99.98%" },
    { name: "UniChat", status: "operational", uptime: "99.97%" },
    { name: "Dashboard", status: "operational", uptime: "100%" },
    { name: "Authentication", status: "operational", uptime: "100%" },
    { name: "Database", status: "operational", uptime: "99.99%" },
  ];

  const incidents = [
    {
      date: "Dec 10, 2024",
      title: "Brief API Latency",
      status: "Resolved",
      description: "Some users experienced increased API response times for approximately 15 minutes.",
    },
    {
      date: "Nov 28, 2024",
      title: "Scheduled Maintenance",
      status: "Completed",
      description: "Routine database optimization and security updates completed successfully.",
    },
    {
      date: "Nov 15, 2024",
      title: "Dashboard Slow Loading",
      status: "Resolved",
      description: "Dashboard pages were loading slower than usual. Issue was resolved within 30 minutes.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational": return "bg-green-500";
      case "degraded": return "bg-yellow-500";
      case "down": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
      case "completed":
        return "bg-green-100 text-green-800";
      case "investigating":
        return "bg-yellow-100 text-yellow-800";
      case "ongoing":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">System Status</h1>
          <p className="text-xl text-gray-600">
            Real-time status and uptime information for all Uniai services.
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-12 text-white text-center mb-12">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold mb-2">All Systems Operational</h2>
          <p className="text-lg opacity-90">All services are running smoothly</p>
        </div>

        {/* Services Status */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                  <span className="font-semibold text-gray-900">{service.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-gray-600">Uptime: {service.uptime}</span>
                  <span className="text-sm text-green-600 font-medium capitalize">{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime Chart Placeholder */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">90-Day Uptime</h2>
          <div className="h-64 bg-gradient-to-t from-green-50 to-green-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl text-green-600 mb-4">99.98%</div>
              <p className="text-gray-600">Average uptime over the last 90 days</p>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-12 bg-green-500 rounded hover:bg-green-600 transition cursor-pointer"
                title="100% uptime"
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Incident History */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="border-l-4 border-gray-200 pl-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-500">{incident.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(incident.status)}`}>
                    {incident.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{incident.title}</h3>
                <p className="text-gray-600 leading-relaxed">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Status Updates</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to receive notifications about incidents and maintenance windows.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
