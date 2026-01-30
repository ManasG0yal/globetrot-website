import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';

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
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary-600 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
              </div>
              <span className="text-2xl font-bold">GLOBETROT</span>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Comprehensive immigration services for any destination worldwide. From tourist and business visas 
              to Golden Visa programs and family reunification - we handle all your global mobility needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Countries</h3>
            <ul className="space-y-3">
              {countries.slice(0, 5).map((country) => (
                <li key={country.code}>
                  <Link
                    to={`/country/${country.code}`}
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              to="/services" 
              className="inline-block mt-3 text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              View All Countries →
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-secondary-300">
                  <p>Dubai, United Arab Emirates</p>
                  <p className="text-sm">Premium Business District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+971-xxx-xxxx" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  +971-XXX-XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@globetrotmigration.com" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  info@globetrotmigration.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Globetrot Migration. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
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