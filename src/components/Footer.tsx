
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} PhD Gateway Consulting. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a 
              href="/accessibility" 
              className="text-gray-600 hover:text-[#2E4A87] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="View accessibility statement"
            >
              Accessibility
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-[#2E4A87] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
