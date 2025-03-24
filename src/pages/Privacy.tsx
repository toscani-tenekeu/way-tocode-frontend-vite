const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <p className="mb-4">
            Way to Code ("we", "our", or "us"), operated by Toscanisoft, values your privacy and is committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-2">We collect the following types of information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number when you register</li>
            <li><strong>Usage Data:</strong> Browser type, IP address, time spent on pages</li>
            <li><strong>Payment Information:</strong> For premium subscriptions (processed securely by third-party providers)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, 
            provide service-related services, or assist us in analyzing how our service is used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Children's Privacy</h2>
          <p>
            Our service is not intended for use by children under the age of 18. We do not knowingly 
            collect personal information from children under 18.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-2 space-y-1">
            <p>Toscanisoft</p>
            <p>Yaoundé, Cameroon</p>
            <p>Email: <a href="mailto:toscanisoft@gmail.com" className="text-blue-600 hover:underline">toscanisoft@gmail.com</a></p>
            <p>Phone: +237 694 19 34 93 / +237 674 69 05 95</p>
          </div>
        </section>

        <footer className="mt-8 text-sm">
          <p>Last updated: March 24, 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default Privacy