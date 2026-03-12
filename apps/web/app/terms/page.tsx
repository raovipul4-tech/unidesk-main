import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Uniai's services, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing our services. The materials contained in this website are protected by 
              applicable copyright and trademark law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access Uniai's services for personal, non-commercial use only. 
              This is the grant of a license, not a transfer of title. Under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and 
              current at all times. Failure to do so constitutes a breach of the Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for safeguarding the password that you use to access the service and for any 
              activities or actions under your password. You agree not to disclose your password to any third party. 
              You must notify us immediately upon becoming aware of any breach of security or unauthorized use of 
              your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscriptions and Billing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some parts of the service are billed on a subscription basis. You will be billed in advance on a 
              recurring and periodic basis (monthly or annually). Billing cycles are set based on the type of 
              subscription plan you select when purchasing a subscription.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At the end of each billing cycle, your subscription will automatically renew unless you cancel it 
              or Uniai cancels it. You may cancel your subscription renewal through your account settings or by 
              contacting our customer support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a 14-day money-back guarantee for new subscriptions. If you are not satisfied with our 
              services, you may request a full refund within 14 days of your initial purchase. Refund requests 
              beyond 14 days will be evaluated on a case-by-case basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use Uniai services to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use automated scripts to collect information from the service</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The service and its original content, features, and functionality are and will remain the exclusive 
              property of Uniai and its licensors. The service is protected by copyright, trademark, and other 
              laws. Our trademarks and trade dress may not be used in connection with any product or service 
              without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Ownership</h2>
            <p className="text-gray-700 leading-relaxed">
              You retain all rights to the data you upload to our services. We do not claim ownership of your 
              content. By using our services, you grant us a limited license to store, process, and display your 
              data solely for the purpose of providing the services to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to provide a reliable service but do not guarantee that the service will be available at 
              all times. We may experience hardware, software, or other issues that require maintenance or result 
              in service interruptions. We reserve the right to modify, suspend, or discontinue the service at any 
              time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Uniai, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
              access to or use of or inability to access or use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" 
              basis. The service is provided without warranties of any kind, whether express or implied, including, 
              but not limited to, implied warranties of merchantability, fitness for a particular purpose, 
              non-infringement or course of performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the United States, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
              will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
              revision is material, we will try to provide at least 30 days' notice prior to any new terms taking 
              effect. What constitutes a material change will be determined at our sole discretion. By continuing 
              to access or use our service after those revisions become effective, you agree to be bound by the 
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@uniai.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 7428251864</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 AI Street, Tech City, CA 94000</p>
            </div>
          </section>
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
            href="/cookie-policy"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cookie Policy</h3>
              <p className="text-gray-600 text-sm">Understand our cookie usage</p>
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
