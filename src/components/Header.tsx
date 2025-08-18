
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
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-aptos italic text-[#2E4A87] tracking-wide">
              PhD GATEWAY CONSULTING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#2E4A87] border-b-2 border-[#2E4A87]'
                    : 'text-gray-700 hover:text-[#2E4A87]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/schedule"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/schedule')
                  ? 'text-[#2E4A87] border-b-2 border-[#2E4A87]'
                  : 'text-gray-700 hover:text-[#2E4A87]'
              }`}
            >
              Schedule Meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2E4A87]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-[#2E4A87] bg-gray-50'
                      : 'text-gray-700 hover:text-[#2E4A87]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/schedule"
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/schedule')
                    ? 'text-[#2E4A87] bg-gray-50'
                    : 'text-gray-700 hover:text-[#2E4A87]'
                }`}
                onClick={() => setIsMenuOpen(false)}
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
