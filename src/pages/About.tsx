const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600">
            Way to Code is a premium educational platform developed by Toscanisoft, 
            a technology firm based in Yaoundé, Cameroon. Founded by TENEKEU MODJOU TOSCANI, 
            our mission is to provide high-quality programming tutorials and resources 
            to help developers across Africa and beyond grow their skills and advance their careers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            We are dedicated to making programming education accessible and practical, 
            with a focus on real-world applications and industry best practices. Our 
            platform offers comprehensive tutorials, project-based learning, and premium 
            resources for developers at all skill levels.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <div className="space-y-2 text-gray-600">
            <p><strong>Location:</strong> Yaoundé, Cameroon</p>
            <p><strong>Phone:</strong></p>
            <ul className="list-disc ml-6">
              <li>+237 694 19 34 93</li>
              <li>+237 674 69 05 95</li>
            </ul>
            <p><strong>Email:</strong></p>
            <ul className="list-disc ml-6">
              <li>Support: <a href="mailto:toscanisoft@gmail.com" className="text-blue-600 hover:text-blue-800">toscanisoft@gmail.com</a></li>

            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Leadership</h2>
          <div className="text-gray-600">
            <p><strong>Founder & CEO:</strong> TENEKEU MODJOU TOSCANI</p>
            <p className="mt-2">
              Under the leadership of our founder, Way to Code has grown to become 
              a trusted resource for developers seeking to enhance their programming skills 
              and build successful careers in technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About