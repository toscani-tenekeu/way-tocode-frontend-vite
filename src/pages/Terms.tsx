const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Way to Code ("the Website"), you agree to be bound by these 
            Terms of Use, all applicable laws and regulations, and agree that you are responsible 
            for compliance with any applicable local laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property Rights</h2>
          <p>
            All content on this Website, including but not limited to text, graphics, logos, 
            images, audio clips, digital downloads, and software, is the property of Way to Code 
            and ToscaniSoft and is protected by international copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. User Account</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You must be at least 13 years old to use this Website</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You are responsible for all activities that occur under your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibind mb-3">4. Prohibited Uses</h2>
          <p>You agree not to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Use the Website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the Website</li>
            <li>Copy, modify, or distribute our content without written permission</li>
            <li>Transmit any viruses or harmful code</li>
            <li>Interfere with the proper working of the Website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Premium Content</h2>
          <p>
            Some features of the Website require a paid subscription. By purchasing a subscription, 
            you agree to pay all fees in accordance with the billing terms in effect at the time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Disclaimer</h2>
          <p>
            The materials on the Website are provided on an 'as is' basis. Way to Code makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other warranties 
            including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p>
            In no event shall Way to Code or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on the Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms</h2>
          <p>
            Way to Code reserves the right to modify these terms of use at any time. We do so by 
            posting and drawing attention to the updated terms on the Website. Your decision to 
            continue to visit and make use of the Website after such changes have been made 
            constitutes your formal acceptance of the new Terms of Use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:{' '}
            <a href="mailto:toscanisoft@gmail.com" className="text-blue-600 hover:underline">
              toscanisoft@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Phone: +237 694 19 34 93 / +237 674 69 05 95
          </p>
          <p>
            Address: Yaoundé, Cameroon
          </p>
        </section>

        <footer className="mt-8 text-sm">
          <p>Last updated: March 24, 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default Terms