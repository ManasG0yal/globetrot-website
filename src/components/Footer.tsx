import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
import PenroseLogo from './PenroseLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative bg-[#0A1628] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
      
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      
      <div className="relative container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <PenroseLogo className="w-8 h-8" size={32} />
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "0.08em" }} className="text-white">GLOBETROT</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Comprehensive immigration services for any destination worldwide. From tourist and business visas 
              to Golden Visa programs and family reunification - we handle all your global mobility needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/globetrot-management-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/globetrotmigration33/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Countries</h3>
            <ul className="space-y-3">
              {countries.slice(0, 5).map((country) => (
                <li key={country.code}>
                  <Link
                    to={`/country/${country.code}`}
                    className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              to="/services" 
              className="inline-block mt-3 text-[#C9A84C] hover:text-[#E8D48B] font-medium transition-colors duration-300"
            >
              View All Countries →
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                <div className="text-white/60">
                  <p>PO5 Bays Water Building Number 7</p>
                  <p className="text-sm">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <a 
                  href="tel:+971048323705"
                  className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300"
                >
                  +971 048323705
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <a 
                  href="mailto:info@globetrotmigration.com" 
                  className="text-white/60 hover:text-[#C9A84C] transition-colors duration-300 break-all"
                >
                  info@globetrotmigration.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © {currentYear} Globetrot Migration. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/40 hover:text-[#C9A84C] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-[#C9A84C] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 hover:text-[#C9A84C] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
