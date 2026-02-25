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
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[14px] border-l-transparent border-r-transparent border-b-white"></div>
            </div>
            <span className="text-2xl font-bold text-neutral-900 tracking-tight">GLOBETROT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-700 font-semibold' : 'text-neutral-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-700 font-semibold' : 'text-neutral-700 hover:text-primary-600'
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
              <button className="flex items-center gap-1 font-medium text-neutral-700 hover:text-primary-600 transition-colors">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-xl py-2 border border-neutral-200">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-neutral-900 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-neutral-200 my-2"></div>
                  <div className="max-h-64 overflow-y-auto">
                    {countries.map((country) => (
                      <Link
                        key={country.code}
                        to={`/country/${country.code}`}
                        className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
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
                isActive('/process') ? 'text-primary-700 font-semibold' : 'text-neutral-700 hover:text-primary-600'
              }`}
            >
              Process
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-700 font-semibold' : 'text-neutral-700 hover:text-primary-600'
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
              className="text-neutral-700 hover:text-primary-600 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <Link
                to="/"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive('/') ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive('/about') ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive('/services') ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/process"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive('/process') ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive('/contact') ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block mx-2 mt-4 btn-primary text-center"
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
