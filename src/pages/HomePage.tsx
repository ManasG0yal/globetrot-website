import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, TrendingUp, Shield, Clock } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  const countries = [
    { 
      code: 'portugal', 
      name: 'Portugal', 
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop',
      feature: 'EU Access'
    },
    { 
      code: 'spain', 
      name: 'Spain', 
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop',
      feature: 'Schengen Zone'
    },
    { 
      code: 'greece', 
      name: 'Greece', 
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
      feature: 'EU Residency'
    },
    { 
      code: 'cyprus', 
      name: 'Cyprus', 
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop',
      feature: 'EU Passport'
    },
    { 
      code: 'malta', 
      name: 'Malta', 
      image: 'https://images.unsplash.com/photo-1565530817193-8680d86d7d3a?w=800&h=600&fit=crop',
      feature: 'EU Member'
    },
    { 
      code: 'uk', 
      name: 'United Kingdom', 
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
      feature: 'Tier 1 Visa'
    },
    { 
      code: 'newzealand', 
      name: 'New Zealand', 
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop',
      feature: 'Residency'
    },
    { 
      code: 'australia', 
      name: 'Australia', 
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop',
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
    { number: '1,200+', label: 'Successful Applications', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Worldwide', icon: Globe },
    { number: '6-12', label: 'Months Avg. Processing', icon: Clock },
  ];

  return (
    <>
      {/* Hero Section - Improved gradient and spacing */}
      <section className="relative gradient-primary text-white section-spacing">
        <div className="gradient-overlay"></div>
        <div className="relative container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4 text-accent-400" />
              <span className="text-white/90">Licensed Immigration Consultants • Est. 2008</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to{' '}
              <span className="text-accent-400 block mt-2">Global Mobility</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Comprehensive immigration services including Golden Visa programs, business visas, family reunification, 
              and citizenship pathways. Expert guidance for destinations worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="btn-cta-large inline-flex items-center justify-center gap-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <span>Explore Countries</span>
              </Link>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries - With Images */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Popular Immigration Destinations
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              We help you secure visas and residency in countries worldwide. Here are our most popular destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {countries.map((country) => (
              <Link
                key={country.code}
                to={`/country/${country.code}`}
                className="card-interactive overflow-hidden group"
              >
                {/* Country Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge on Image */}
                  <div className="absolute top-3 right-3">
                    <div className="badge bg-white/90 backdrop-blur-sm text-neutral-900 font-semibold shadow-lg">
                      {country.feature}
                    </div>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Explore visa options and residency programs
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>View All Countries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section - Better icon styling */}
      <section className="section-spacing bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Globetrot Migration
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              We combine expertise, transparency, and personalized service to make your global mobility dreams a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview - Improved visual hierarchy */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              From initial consultation to citizenship, we guide you through every step with complete transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                title: 'Consultation & Assessment',
                description: 'Free initial consultation to assess your eligibility and recommend the best program. Typical timeline: 1-2 weeks.',
                duration: '1-2 weeks'
              },
              {
                step: '2',
                title: 'Documentation & Investment',
                description: 'We handle all paperwork and guide you through the investment process with full transparency.',
                duration: '2-4 months'
              },
              {
                step: '3',
                title: 'Approval & Residency',
                description: 'Receive your residency and begin your journey. Average processing: 6-12 months depending on country.',
                duration: '6-12 months'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200 z-0"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-4 text-center">
                    {item.description}
                  </p>
                  <div className="badge badge-primary mx-auto">
                    {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/process" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Learn More About Our Process</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section - Enhanced design */}
      <section className="section-spacing gradient-primary text-white relative overflow-hidden">
        <div className="gradient-overlay"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Secure Your Global Future?
            </h2>
            <p className="text-xl mb-10 text-primary-100 leading-relaxed">
              Join over 1,200 successful clients who have secured their residency and citizenship 
              through our expert guidance and transparent process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-cta-large inline-flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+971-xxx-xxxx" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <span>Call Now: +971-XXX-XXXX</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
