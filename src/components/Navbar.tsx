import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import PenroseLogo from './PenroseLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const countries = [
    { code: 'portugal', name: 'Portugal', flag: '🇵🇹' },
    { code: 'spain', name: 'Spain', flag: '🇪🇸' },
    { code: 'greece', name: 'Greece', flag: '🇬🇷' },
    { code: 'cyprus', name: 'Cyprus', flag: '🇨🇾' },
    { code: 'malta', name: 'Malta', flag: '🇲🇹' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'newzealand', name: 'New Zealand', flag: '🇳🇿' },
    { code: 'australia', name: 'Australia', flag: '🇦🇺' },
    { code: 'canada', name: 'Canada', flag: '🇨🇦' },
    { code: 'singapore', name: 'Singapore', flag: '🇸🇬' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-110 transition-all duration-300">
              <PenroseLogo className="w-10 h-10 drop-shadow-lg" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">GLOBETROT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                  : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                  : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
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
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                  isActive('/services') || location.pathname.startsWith('/country')
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0F2040] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-3">
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-white/90 hover:text-[#C9A84C] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                    >
                      All Services
                    </Link>
                    <div className="my-2 h-px bg-white/10" />
                    <div className="text-white/40 text-xs font-semibold uppercase tracking-wider px-4 py-2">
                      Popular Countries
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {countries.map((country) => (
                        <Link
                          key={country.code}
                          to={`/country/${country.code}`}
                          className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-[#C9A84C] hover:bg-white/5 rounded-xl transition-all duration-300"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="font-medium">{country.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/process"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/process') 
                  ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                  : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
              }`}
            >
              Process
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                  : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
              }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-xl hover:shadow-[#C9A84C]/30 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-[#C9A84C] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/services') 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                Services
              </Link>
              <Link
                to="/process"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/process') 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                Process
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-white/80 hover:text-[#C9A84C] hover:bg-white/5'
                }`}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full text-center hover:shadow-xl transition-all duration-300"
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
