const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
            They are widely used to make websites work more efficiently and provide a better user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
          <p>Way to Code uses cookies for the following purposes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly, including navigation and access to secure areas.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to enhance your experience.</li>
            <li><strong>Analytics Cookies:</strong> Track website usage and performance to improve our services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-medium mb-2">Session Cookies</h3>
              <p>Temporary cookies that expire when you close your browser. These help us track your movements from page to page.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Persistent Cookies</h3>
              <p>Remain on your device until they expire or you delete them. These help us remember your preferences.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Third-Party Cookies</h3>
              <p>Set by third-party services we use, such as Google Analytics, to help us understand how visitors use our website.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
          <p>You can control and manage cookies in various ways:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Browser settings can be modified to block or delete cookies</li>
            <li>Most browsers allow you to refuse third-party cookies</li>
            <li>You can delete cookies already stored on your computer</li>
            <li>Visit <a href="https://www.aboutcookies.org" className="text-blue-600 hover:underline">www.aboutcookies.org</a> for more information</li>
          </ul>
          <p className="mt-3">
            Please note that blocking cookies may impact your experience on our website and limit access to certain features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:{' '}
            <a href="mailto:toscanisoft@gmail.com" className="text-blue-600 hover:underline">
              toscanisoft@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 text-sm">
          <p>Last updated: March 24, 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default CookiePolicy