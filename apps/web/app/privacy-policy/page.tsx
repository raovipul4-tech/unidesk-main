import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Uniai. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit 
              our website or use our services and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have 
              grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address</li>
              <li><strong>Financial Data:</strong> Bank account and payment card details</li>
              <li><strong>Transaction Data:</strong> Details about payments to and from you</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your 
              personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We use 
              industry-standard encryption and security protocols to protect your data. All data is encrypted 
              in transit and at rest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we 
              collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
              requirements. When we no longer need your data, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your 
              personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may employ third-party companies and individuals to facilitate our services, provide services 
              on our behalf, perform service-related services, or assist us in analyzing how our services are used. 
              These third parties have access to your personal data only to perform these tasks on our behalf and 
              are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
              being sent. For more information about how we use cookies, please see our{" "}
              <a href="/cookie-policy" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Cookie Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to — and maintained on — computers located outside of your state, 
              province, country or other governmental jurisdiction where the data protection laws may differ. We 
              will take all steps reasonably necessary to ensure that your data is treated securely and in accordance 
              with this privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for use by children under the age of 13. We do not knowingly collect 
              personally identifiable information from children under 13. If you become aware that a child has 
              provided us with personal data, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the "Last updated" date at the top of this policy. 
              You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@uniai.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 7428251864</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 AI Street, Tech City, CA 94000</p>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
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
          <a
            href="/cookie-policy"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cookie Policy</h3>
              <p className="text-gray-600 text-sm">Learn about our cookie usage</p>
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
