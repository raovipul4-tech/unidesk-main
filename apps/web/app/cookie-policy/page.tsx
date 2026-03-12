import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🍪</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently, provide a better user experience, and 
              provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for several reasons detailed below. Unfortunately, in most cases, there are no industry 
              standard options for disabling cookies without completely disabling the functionality and features they 
              add to this site. It is recommended that you leave on all cookies if you are not sure whether you need 
              them or not in case they are used to provide a service that you use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic functions like 
                  page navigation and access to secure areas of the website. The website cannot function properly 
                  without these cookies.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Duration:</strong> Session / Persistent<br />
                  <strong>Purpose:</strong> Authentication, security, remembering preferences
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site. They help us know which pages are the most and least popular and see 
                  how visitors move around the site.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Duration:</strong> Up to 2 years<br />
                  <strong>Purpose:</strong> Understanding user behavior, improving our services
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies enable the website to provide enhanced functionality and personalization. They may 
                  be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Duration:</strong> Up to 1 year<br />
                  <strong>Purpose:</strong> Remembering choices, providing enhanced features
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are used to track visitors across websites. The intention is to display ads that 
                  are relevant and engaging for the individual user and thereby more valuable for publishers and 
                  third-party advertisers.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Duration:</strong> Up to 1 year<br />
                  <strong>Purpose:</strong> Targeted advertising, measuring ad effectiveness
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In some cases, we use cookies provided by trusted third parties. The following section details which 
              third-party cookies you might encounter through this site:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> To understand how you use our site and ways to improve your experience</li>
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>Intercom:</strong> For customer support and communication</li>
              <li><strong>Social Media:</strong> For sharing content on platforms like LinkedIn and Twitter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on 
              your computer and you can set most browsers to prevent them from being placed. However, if you do 
              this, you may have to manually adjust some preferences every time you visit a site, and some services 
              and functionalities may not work.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
              <p className="text-indigo-900 font-semibold mb-2">Browser Settings</p>
              <p className="text-indigo-800 text-sm">
                To manage cookies in your browser, check your browser's help menu or visit 
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                  aboutcookies.org
                </a> for detailed instructions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              When you first visit our website, we will ask for your consent to use cookies. You can change your 
              cookie preferences at any time by clicking the "Cookie Settings" button in the footer of our website. 
              You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie List</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-mono">_uniai_session</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Essential</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Session</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">User authentication</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-mono">_ga</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Analytics</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">2 years</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Google Analytics tracking</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-mono">_preferences</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Functional</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">1 year</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Remember user preferences</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-mono">_fbp</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Marketing</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">3 months</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Facebook advertising</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
              our operations, or for other operational, legal, or regulatory reasons. Please revisit this page 
              regularly to stay informed about our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@uniai.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 7428251864</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 AI Street, Tech City, CA 94000</p>
            </div>
          </section>
        </div>

        {/* Cookie Settings Button */}
        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg">
            Manage Cookie Preferences
          </button>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <a
            href="/privacy-policy"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">Learn how we protect your data</p>
            </div>
            <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/terms"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm">Read our terms and conditions</p>
            </div>
            <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
