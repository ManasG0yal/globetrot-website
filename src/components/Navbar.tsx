import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const countries = [
    { code: 'portugal', name: 'Portugal' },
    { code: 'spain', name: 'Spain' },
    { code: 'greece', name: 'Greece' },
    { code: 'cyprus', name: 'Cyprus' },
    { code: 'malta', name: 'Malta' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'newzealand', name: 'New Zealand' },
    { code: 'australia', name: 'Australia' },
    { code: 'canada', name: 'Canada' },
    { code: 'singapore', name: 'Singapore' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
            </div>
            <span className="text-2xl font-bold text-secondary-900">GLOBETROT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium text-secondary-700 hover:text-primary-600 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-4 z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-secondary-100 mt-2 pt-2">
                    {countries.map((country) => (
                      <Link
                        key={country.code}
                        to={`/country/${country.code}`}
                        className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/process"
              className={`font-medium transition-colors ${
                isActive('/process') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Process
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-700 hover:text-primary-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-secondary-100">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/process"
                className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block mx-3 my-2 px-4 py-2 bg-primary-600 text-white text-center rounded-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;