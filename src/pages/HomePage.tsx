import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, TrendingUp } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  const countries = [
    { 
      code: 'portugal', 
      name: 'Portugal', 
      flag: '🇵🇹', 
      minInvestment: '€280,000',
      feature: 'EU Access'
    },
    { 
      code: 'spain', 
      name: 'Spain', 
      flag: '🇪🇸', 
      minInvestment: '€500,000',
      feature: 'Schengen Zone'
    },
    { 
      code: 'greece', 
      name: 'Greece', 
      flag: '🇬🇷', 
      minInvestment: '€250,000',
      feature: 'EU Residency'
    },
    { 
      code: 'cyprus', 
      name: 'Cyprus', 
      flag: '🇨🇾', 
      minInvestment: '€300,000',
      feature: 'EU Passport'
    },
    { 
      code: 'malta', 
      name: 'Malta', 
      flag: '🇲🇹', 
      minInvestment: '€150,000',
      feature: 'EU Member'
    },
    { 
      code: 'uk', 
      name: 'UK', 
      flag: '🇬🇧', 
      minInvestment: '£2,000,000',
      feature: 'Tier 1 Visa'
    },
    { 
      code: 'newzealand', 
      name: 'New Zealand', 
      flag: '🇳🇿', 
      minInvestment: 'NZ$3,000,000',
      feature: 'Residency'
    },
    { 
      code: 'australia', 
      name: 'Australia', 
      flag: '🇦🇺', 
      minInvestment: 'AU$5,000,000',
      feature: 'Permanent Visa'
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Immigration Services',
      description: 'Complete visa solutions for any country - tourist, business, investment, and family visas'
    },
    {
      icon: Award,
      title: 'Expert Consultation',
      description: 'Licensed immigration consultants with 15+ years experience across all visa types'
    },
    {
      icon: Users,
      title: 'Personalized Support',
      description: 'Dedicated case manager for your entire immigration journey, any destination'
    },
    {
      icon: TrendingUp,
      title: 'Investment Programs',
      description: 'Golden Visa and investment immigration programs with strong ROI potential'
    },
  ];

  const stats = [
    { number: '1,200+', label: 'Successful Applications' },
    { number: '15+', label: 'Years Experience' },
    { number: '10', label: 'Countries Available' },
    { number: '98%', label: 'Success Rate' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to 
              <span className="text-gold-400 block">Global Mobility</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed">
              Comprehensive immigration services including Golden Visa programs, business visas, family reunification, 
              and citizenship pathways. Expert guidance for any destination worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Explore Countries
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gold-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-primary-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Popular Immigration Destinations
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We serve ALL countries worldwide. Here are our most popular Golden Visa and investment programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {countries.map((country) => (
              <Link
                key={country.code}
                to={`/country/${country.code}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {country.name}
                  </h3>
                  <div className="text-primary-600 font-semibold mb-2">
                    From {country.minInvestment}
                  </div>
                  <div className="text-sm text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full inline-block">
                    {country.feature}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Countries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Globetrot Migration
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We combine expertise, transparency, and personalized service to make your global mobility dreams a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-200">
                  <benefit.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From initial consultation to citizenship, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Consultation & Assessment
              </h3>
              <p className="text-secondary-600">
                Free initial consultation to assess your eligibility and recommend the best program
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Documentation & Investment
              </h3>
              <p className="text-secondary-600">
                We handle all paperwork and guide you through the investment process
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Approval & Residency
              </h3>
              <p className="text-secondary-600">
                Receive your residency and begin your journey to citizenship
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/process" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Learn More About Our Process</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Global Future?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Join over 1,200 successful clients who have secured their residency and citizenship 
              through our expert guidance and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+971-xxx-xxxx" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Call Now: +971-XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;