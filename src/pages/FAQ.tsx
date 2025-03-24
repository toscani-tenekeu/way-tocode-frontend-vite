const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">What is Way to Code?</h2>
          <p className="text-gray-600">
            Way to Code is an educational platform developed by Toscanisoft, offering programming tutorials, 
            projects, and resources for developers. Based in Yaoundé, Cameroon, we focus on making coding 
            education accessible to African developers and beyond.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">What types of content do you offer?</h2>
          <p className="text-gray-600">
            We offer both free and premium content including:
            <ul className="list-disc ml-6 mt-2">
              <li>Programming tutorials</li>
              <li>Downloadable project source code</li>
              <li>Premium project templates</li>
              <li>CV builder tools</li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How much do premium projects cost?</h2>
          <p className="text-gray-600">
            Premium project prices vary based on complexity and features, typically ranging from 
            15,000 FCFA to 150,000 FCFA. We also offer many free projects for learning purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Can I use the projects for commercial purposes?</h2>
          <p className="text-gray-600">
            Yes, both free and premium projects can be used for commercial purposes. Premium projects 
            include additional features and support to help you build professional applications.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How do I get support?</h2>
          <p className="text-gray-600">
            You can reach our support team at toscanisoft@gmail.com or call us at:
            <br />+237 694 19 34 93
            <br />+237 674 69 05 95
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Do you offer refunds?</h2>
          <p className="text-gray-600">
            Yes, we offer a 7-day money-back guarantee on all premium projects if you're not satisfied 
            with your purchase.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">What technologies do you cover?</h2>
          <p className="text-gray-600">
            We cover modern web development technologies including:
            <ul className="list-disc ml-6 mt-2">
              <li>React and Next.js</li>
              <li>TypeScript</li>
              <li>Node.js and Express</li>
              <li>MongoDB and other databases</li>
              <li>Docker and DevOps tools</li>
              <li>TailwindCSS and modern styling</li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Is Way to Code suitable for beginners?</h2>
          <p className="text-gray-600">
            Yes! We offer content for all skill levels, from beginner to advanced. Our tutorials 
            are clearly marked with difficulty levels to help you find appropriate content for 
            your experience level.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ