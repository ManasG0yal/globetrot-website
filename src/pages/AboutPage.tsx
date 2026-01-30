import { Link } from 'react-router-dom';
import { Users, Award, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Licensed immigration consultants with the highest industry certifications and continuous education.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over 98% success rate with 1,200+ successful Golden Visa applications across multiple countries.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive partnerships with legal firms, investment advisors, and government agencies worldwide.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Personalized service with dedicated case managers ensuring transparent communication throughout.'
    }
  ];

  const team = [
    {
      name: 'Sarah Al-Mansouri',
      position: 'Founding Partner & CEO',
      qualifications: ['ICCRC Licensed', 'LLM Immigration Law', '15+ Years Experience'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b098?w=300&h=300&fit=crop&crop=face',
      bio: 'Former government immigration officer turned entrepreneur, Sarah has helped over 500 families secure their global mobility goals.'
    },
    {
      name: 'David Chen',
      position: 'Senior Investment Advisor',
      qualifications: ['CFA Chartered', 'Real Estate Expert', '12+ Years Experience'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Investment specialist focusing on Golden Visa real estate and financial portfolio optimization for residency programs.'
    },
    {
      name: 'Maria Rodriguez',
      position: 'European Programs Director',
      qualifications: ['EU Law Specialist', 'Multi-lingual', '10+ Years Experience'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in European Golden Visa programs with deep knowledge of Portuguese, Spanish, and Greek immigration systems.'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Successful Applications', description: 'Families and individuals served' },
    { number: '98%', label: 'Success Rate', description: 'Applications approved on first submission' },
    { number: '15+', label: 'Years Experience', description: 'Combined team expertise' },
    { number: '10', label: 'Countries', description: 'Golden Visa programs available' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              The Firm of <span className="text-primary-600">Global Citizens</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              In an increasingly interconnected world, the ability to traverse borders with ease and security 
              is more than just a privilege—it's a strategic advantage. At Globetrot Migration Services, we 
              understand the complexities of global mobility and are dedicated to transforming these challenges 
              into opportunities for businessmen, entrepreneurs, and skilled professionals.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-secondary-600">
                Born from a vision to democratize global mobility for ambitious individuals
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-secondary-700">
              <p className="text-xl leading-relaxed mb-8">
                Founded in 2009 in Dubai, Globetrot Migration emerged from a simple yet powerful observation: 
                talented entrepreneurs and investors were facing increasingly complex barriers to global mobility, 
                while investment-based residency programs offered unprecedented opportunities for those who understood them.
              </p>

              <div className="grid md:grid-cols-2 gap-12 my-12">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    To transform the complex landscape of global immigration into clear, actionable pathways 
                    for our clients. We believe that in our interconnected world, the freedom to live, work, 
                    and invest globally should not be limited by bureaucratic complexity or information asymmetry.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    A world where talented individuals can maximize their global potential through strategic 
                    residency and citizenship planning. We envision a future where geographical boundaries 
                    enhance rather than limit personal and professional opportunities.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Today, we are proud to have helped over 1,200 families secure their global mobility goals, 
                with a 98% success rate that speaks to our commitment to excellence, transparency, and 
                personalized service. Our clients include tech entrepreneurs seeking Silicon Valley access, 
                investors diversifying their portfolios across continents, and families securing educational 
                opportunities for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide every client interaction and business decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-200">
                  <value.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Licensed professionals with decades of combined experience in immigration law and investment advisory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200">
                <div className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold text-center mb-4">
                    {member.position}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.qualifications.map((qual, qualIndex) => (
                      <span 
                        key={qualIndex}
                        className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                  <p className="text-secondary-600 text-center text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Recognized by leading industry bodies and government agencies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="text-3xl mb-3">🏛️</div>
              <p className="text-sm font-semibold text-secondary-700">ICCRC Registered</p>
            </div>
            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="text-3xl mb-3">🇪🇺</div>
              <p className="text-sm font-semibold text-secondary-700">EU Legal Partners</p>
            </div>
            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="text-3xl mb-3">🏅</div>
              <p className="text-sm font-semibold text-secondary-700">CFA Certified</p>
            </div>
            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="text-3xl mb-3">⚖️</div>
              <p className="text-sm font-semibold text-secondary-700">Legal Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Global Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Join our community of global citizens who have successfully secured their international mobility goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;