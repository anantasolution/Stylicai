import React, { useState } from 'react';

const Policy = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'privacy'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'terms'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Terms & Conditions
              </button>
            </nav>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Privacy Policy Content */}
            {activeTab === 'privacy' && (
              <div>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                  <p className="mt-2 text-gray-600">Effective Date: 1st Jan 2025</p>
                </div>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600">
                    Welcome to Stylic.ai, a product by Ananta Solution. We are committed to
                    protecting your privacy and ensuring that your data is handled securely
                    and transparently. This Privacy Policy outlines how we collect, use, and
                    safeguard your information when you use our AI-based photoshoot service.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    To provide you with the best possible experience, we collect various
                    types of information when you interact with our services. This includes
                    personal details you provide, data about your interactions with our
                    platform, and technical information that helps us enhance our services.
                    The types of data we collect include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      <span className="font-medium">Personal Information:</span> Name, email address, and payment details.
                    </li>
                    <li>
                      <span className="font-medium">Uploaded Images:</span> The photos you upload for AI processing.
                    </li>
                    <li>
                      <span className="font-medium">Usage Data:</span> Information related to how you interact with our platform.
                    </li>
                    <li>
                      <span className="font-medium">Device Information:</span> We may collect data such as your device type,
                      operating system, browser type, and IP address for analytical and
                      security purposes.
                    </li>
                    <li>
                      <span className="font-medium">Transactional Data:</span> Records of purchases, completed orders, refunds,
                      and usage of our services.
                    </li>
                    <li>
                      <span className="font-medium">Communication Data:</span> Any messages, emails, or support requests you
                      send to us.
                    </li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    Your information is used to improve and customize your experience,
                    enhance the functionality of our services, and ensure compliance with
                    legal obligations. Specifically, we use the collected data to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide AI-generated photoshoots as per your request.</li>
                    <li>Process payments and refunds where applicable.</li>
                    <li>Improve our services based on usage patterns.</li>
                    <li>Comply with legal and regulatory requirements.</li>
                    <li>Provide customer support and respond to inquiries.</li>
                    <li>Enhance our AI models and improve the accuracy of our services (without compromising user privacy).</li>
                    <li>Prevent fraud, security breaches, and unauthorized access.</li>
                    <li>Offer promotional offers or discounts based on user preferences and history (only if consented).</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Privacy and Security</h2>
                  <p className="text-gray-600 mb-4">
                    We take the privacy and security of your data seriously. We implement
                    industry-standard measures to protect your information from unauthorized
                    access, loss, or misuse. Our security practices include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>We do not share or use your data for marketing purposes unless you give us explicit permission.</li>
                    <li>Your data remains private, and we ensure the highest security measures to protect it.</li>
                    <li>Upon request, we will permanently delete all your data from our servers.</li>
                    <li>We use encryption protocols to protect your information from unauthorized access.</li>
                    <li>Our servers and databases are regularly updated with security patches to prevent breaches.</li>
                    <li>We restrict internal access to your data to only authorized personnel who require it for operational purposes.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                  <p className="text-gray-600 mb-4">
                    To ensure compliance with legal requirements and service optimization,
                    we retain user data only for the necessary period. After this period,
                    all information is securely deleted. Specifically:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Data is retained only as long as necessary to fulfill your requests or comply with legal obligations.</li>
                    <li>Data associated with inactive accounts may be deleted after a certain period of time.</li>
                    <li>Backup copies may exist for operational recovery but are deleted periodically.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    We respect your rights over your personal data and provide several
                    options to control and manage your information. As a user, you have the
                    right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Request access, correction, or deletion of your data at any time.</li>
                    <li>Opt out of marketing communications if you have previously given permission.</li>
                    <li>Request a copy of your data stored in our system.</li>
                    <li>Withdraw your consent for data processing, where applicable.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">
                    To improve user experience and enhance service efficiency, we use
                    cookies and similar tracking technologies. These technologies help us
                    gather valuable insights into user behavior. You should be aware of the
                    following:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>We use cookies and similar tracking technologies to enhance your user experience.</li>
                    <li>You can control cookie preferences via your browser settings.</li>
                    <li>Some essential cookies are necessary for the platform to function correctly.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                  <p className="text-gray-600">
                    To keep up with evolving technology and regulatory standards, we may
                    update this Privacy Policy from time to time. We encourage you to review
                    it periodically. Continued use of our services after modifications
                    constitutes acceptance of the updated policy.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-600">
                    For any questions or concerns regarding this policy, contact us at:{' '}
                    <a href="mailto:info@anantasolution.com" className="text-indigo-600 hover:text-indigo-800">
                      info@anantasolution.com
                    </a>
                  </p>
                </section>
              </div>
            )}
            
            {/* Terms & Conditions Content */}
            {activeTab === 'terms' && (
              <div>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
                  <p className="mt-2 text-gray-600">Effective Date: 1st Jan 2025</p>
                </div>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600">
                    These Terms and Conditions govern the use of Stylic.ai, a product of
                    Ananta Solution. By creating an account and using our services, you
                    agree to abide by these terms.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-600 mb-4">
                    Stylic.ai provides AI-generated photoshoots using AI models. The models
                    used in our services are not real humans, eliminating copyright
                    concerns. We use advanced artificial intelligence to generate realistic
                    images based on user-provided input. By using our platform, you
                    acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>The AI-generated images are based on computational models and are not actual photographs.</li>
                    <li>The final output may vary depending on the input quality and AI interpretation.</li>
                    <li>Stylic.ai is not responsible for the subjective satisfaction of the user.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Pricing & Payment</h2>
                  <p className="text-gray-600 mb-4">
                    Our services operate on a coin-based payment system, allowing users
                    flexibility in purchasing and using our features. Please note:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Pricing differs for single-photo output and multiple-photo output.</li>
                    <li>Payment must be made before using our services.</li>
                    <li>Additional features may be subject to separate charges.</li>
                    <li>Users are responsible for maintaining sufficient balance in their accounts.</li>
                    <li>Subscription-based services, if available, will be billed periodically per the selected plan.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Refund Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We strive to offer a seamless experience, but we acknowledge that issues
                    may arise. Our refund policy ensures fairness for both users and the
                    company. Refund requests are handled as follows:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Refunds are provided only if we fail to deliver the requested AI-generated photos.</li>
                    <li>If we successfully deliver the output but the client is unsatisfied with the results, no refund will be issued.</li>
                    <li>Refund requests must be submitted within a specified timeframe after order completion.</li>
                    <li>We do not refund unused credits or balances in a user's account.</li>
                    <li>In case of service interruptions, partial refunds may be issued at our discretion.</li>
                  </ul>
                </section>
                
                <p className="text-gray-600 italic mt-8">
                  The Terms & Conditions continue with additional sections governing
                  account security, prohibited activities, service availability, liability
                  limitations, and governing law.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;