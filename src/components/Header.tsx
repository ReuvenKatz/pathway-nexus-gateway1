
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm border-b" role="banner">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1 -mx-2 -my-1"
            aria-label="PhD Gateway Consulting - Home"
          >
            <span className="text-2xl font-aptos italic text-[#2E4A87] tracking-wide">
              PhD GATEWAY CONSULTING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                role="menuitem"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  isActive(item.href)
                    ? 'text-[#2E4A87] border-b-2 border-[#2E4A87]'
                    : 'text-gray-700 hover:text-[#2E4A87]'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/schedule"
              role="menuitem"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                isActive('/schedule')
                  ? 'text-[#2E4A87] border-b-2 border-[#2E4A87]'
                  : 'text-gray-700 hover:text-[#2E4A87]'
              }`}
              aria-current={isActive('/schedule') ? 'page' : undefined}
            >
              Schedule Meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2E4A87] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" role="menu">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  role="menuitem"
                  className={`block px-3 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                    isActive(item.href)
                      ? 'text-[#2E4A87] bg-gray-50'
                      : 'text-gray-700 hover:text-[#2E4A87] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/schedule"
                role="menuitem"
                className={`block px-3 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  isActive('/schedule')
                    ? 'text-[#2E4A87] bg-gray-50'
                    : 'text-gray-700 hover:text-[#2E4A87] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive('/schedule') ? 'page' : undefined}
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
