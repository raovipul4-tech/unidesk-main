import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is transforming the way businesses operate and what it means for the future of work.",
      category: "AI Insights",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "🤖",
    },
    {
      title: "Building Scalable CRM Systems with AI",
      excerpt: "Learn best practices for implementing AI-powered CRM solutions that grow with your business needs.",
      category: "Product",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      image: "📊",
    },
    {
      title: "How UniChat is Revolutionizing Customer Support",
      excerpt: "A deep dive into our AI-powered chat solution and how it's helping businesses provide better customer experiences.",
      category: "Case Study",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      image: "💬",
    },
    {
      title: "Data Privacy in the Age of AI",
      excerpt: "Understanding the importance of data security and privacy when implementing AI solutions in your organization.",
      category: "Security",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "🔒",
    },
    {
      title: "10 Ways to Optimize Your Sales Funnel",
      excerpt: "Practical strategies for improving conversion rates and maximizing revenue using AI-driven insights.",
      category: "Marketing",
      date: "Dec 1, 2024",
      readTime: "10 min read",
      image: "📈",
    },
    {
      title: "The Rise of No-Code AI Solutions",
      excerpt: "How no-code platforms are democratizing AI and enabling non-technical users to build powerful applications.",
      category: "Technology",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      image: "🚀",
    },
  ];

  const categories = ["All", "AI Insights", "Product", "Case Study", "Security", "Marketing", "Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Uniai Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, updates, and stories about AI, business automation, and the future of work.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition ${
                category === "All"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-16">
              <div className="text-9xl">🤖</div>
            </div>
            <div className="md:w-1/2 p-12">
              <div className="text-sm font-semibold text-indigo-600 mb-3">FEATURED POST</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Future of AI in Business Automation
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover how artificial intelligence is transforming the way businesses operate and what it means for the future of work. We explore the latest trends and predictions.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>Dec 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Read Article
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-48 flex items-center justify-center">
                <div className="text-6xl">{post.image}</div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest insights, updates, and stories delivered to your inbox every week.
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
