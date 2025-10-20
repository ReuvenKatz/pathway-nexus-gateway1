import { Link } from 'react-router-dom';

const AccessibilityStatement = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
          
          <section className="mb-8" aria-labelledby="commitment-heading">
            <h2 id="commitment-heading" className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment to Accessibility</h2>
            <p className="text-gray-700 mb-4">
              PhD Gateway Consulting is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="standards-heading">
            <h2 id="standards-heading" className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Standards</h2>
            <p className="text-gray-700 mb-4">
              This website strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. 
              These guidelines explain how to make web content more accessible to people with disabilities, 
              and user friendly for everyone.
            </p>
            <p className="text-gray-700 mb-4">
              We aim to comply with UK accessibility regulations, including the Public Sector Bodies 
              (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="measures-heading">
            <h2 id="measures-heading" className="text-2xl font-semibold text-gray-800 mb-4">Measures to Support Accessibility</h2>
            <p className="text-gray-700 mb-4">PhD Gateway Consulting takes the following measures to ensure accessibility:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Include accessibility as part of our mission statement</li>
              <li>Assign clear accessibility targets and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
            <p className="text-gray-700 mb-4">This website includes the following accessibility features:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Keyboard navigation support</li>
              <li>Skip navigation links</li>
              <li>Descriptive alt text for images</li>
              <li>High color contrast ratios</li>
              <li>Semantic HTML markup</li>
              <li>ARIA labels and landmarks</li>
              <li>Focus indicators for interactive elements</li>
              <li>Responsive design for mobile accessibility</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="compatibility-heading">
            <h2 id="compatibility-heading" className="text-2xl font-semibold text-gray-800 mb-4">Compatibility</h2>
            <p className="text-gray-700 mb-4">
              This website is designed to be compatible with assistive technologies and the last two versions of major browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Chrome, Firefox, Safari, and Edge</li>
              <li>Screen readers including NVDA, JAWS, and VoiceOver</li>
              <li>Voice recognition software</li>
              <li>Operating system accessibility features</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="limitations-heading">
            <h2 id="limitations-heading" className="text-2xl font-semibold text-gray-800 mb-4">Known Limitations</h2>
            <p className="text-gray-700 mb-4">
              Despite our best efforts, some limitations may exist. We are working to address these issues:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Some third-party content may not be fully accessible</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-2xl font-semibold text-gray-800 mb-4">Feedback and Contact</h2>
            <p className="text-gray-700 mb-4">
              We welcome your feedback on the accessibility of PhD Gateway Consulting's website. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:reuven.katz@gmail.com" className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">reuven.katz@gmail.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Contact Form:</strong> <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Contact Us page</Link>
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          <section className="mb-8" aria-labelledby="enforcement-heading">
            <h2 id="enforcement-heading" className="text-2xl font-semibold text-gray-800 mb-4">Enforcement Procedure</h2>
            <p className="text-gray-700 mb-4">
              If you're not satisfied with our response to your accessibility concerns, you may contact:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Equality and Human Rights Commission (EHRC):</strong> 
                <a href="https://www.equalityhumanrights.com/" className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded ml-1" target="_blank" rel="noopener noreferrer">
                  www.equalityhumanrights.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="technical-heading">
            <h2 id="technical-heading" className="text-2xl font-semibold text-gray-800 mb-4">Technical Specifications</h2>
            <p className="text-gray-700 mb-4">
              Accessibility of this website relies on the following technologies to work with the particular 
              combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB')}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This accessibility statement applies to the PhD Gateway Consulting website.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;