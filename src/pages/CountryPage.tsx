import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Globe, DollarSign, Home, Briefcase, TrendingUp } from 'lucide-react';

const CountryPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();

  // Country data - in a real app this would come from an API or database
  const countryData: { [key: string]: any } = {
    portugal: {
      name: 'Portugal',
      flag: '🇵🇹',
      title: 'Portugal Golden Visa Program',
      hero: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop',
      overview: 'Portugal\'s Golden Visa program is one of Europe\'s most successful residency-by-investment programs, offering a pathway to EU citizenship through strategic investments.',
      minInvestment: '€280,000',
      timeframe: '2-3 months',
      citizenship: '5 years',
      benefits: [
        'EU residency and eventual citizenship',
        'Visa-free travel to 170+ countries',
        'Access to Portuguese healthcare and education',
        'Low physical residence requirements (7 days/year)',
        'Favorable tax regime for non-habitual residents',
        'Family inclusion (spouse and dependent children)'
      ],
      investmentOptions: [
        {
          type: 'Real Estate',
          amount: '€280,000+',
          description: 'Investment in rehabilitation properties in low-density areas',
          icon: Home
        },
        {
          type: 'Investment Fund',
          amount: '€500,000',
          description: 'Investment in Portuguese venture capital or private equity funds',
          icon: TrendingUp
        },
        {
          type: 'Business Investment',
          amount: '€500,000',
          description: 'Capital investment in Portuguese companies creating jobs',
          icon: Briefcase
        },
        {
          type: 'Research & Development',
          amount: '€500,000',
          description: 'Investment in research activities or technology transfer',
          icon: Globe
        }
      ],
      requirements: [
        'Clean criminal background check',
        'Proof of investment funds',
        'Health insurance coverage',
        'Investment in qualifying project',
        'Spend 7 days per year in Portugal',
        'Maintain investment for minimum 5 years'
      ],
      process: [
        {
          step: 1,
          title: 'Initial Assessment',
          description: 'Free consultation to assess eligibility and investment options',
          duration: '1 week'
        },
        {
          step: 2,
          title: 'Document Preparation',
          description: 'Gather and prepare all required documentation with legal review',
          duration: '2-4 weeks'
        },
        {
          step: 3,
          title: 'Investment Selection',
          description: 'Choose and secure your qualifying investment opportunity',
          duration: '2-6 weeks'
        },
        {
          step: 4,
          title: 'Application Submission',
          description: 'Submit application to SEF (Portuguese Immigration Service)',
          duration: '2-3 months'
        },
        {
          step: 5,
          title: 'Residency Card Issuance',
          description: 'Receive your Portuguese residency card and begin your journey',
          duration: '1-2 weeks'
        }
      ],
      lifestyle: {
        cost: 'Low to Moderate',
        climate: 'Mediterranean',
        language: 'Portuguese (English widely spoken)',
        education: 'Excellent public and private schools',
        healthcare: 'Universal healthcare system, ranked 12th globally'
      }
    }
  };

  // Default data for countries not fully configured
  const defaultCountryData = {
    name: countryCode?.charAt(0).toUpperCase() + countryCode?.slice(1) || 'Country',
    flag: '🌍',
    title: `${countryCode?.charAt(0).toUpperCase() + countryCode?.slice(1)} Golden Visa Program`,
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    overview: 'Premium investment-based residency program offering pathway to citizenship through strategic investments.',
    minInvestment: 'Contact for details',
    timeframe: '3-6 months',
    citizenship: '5-10 years',
    benefits: [
      'Residency and eventual citizenship pathway',
      'Visa-free travel benefits',
      'Access to local healthcare and education',
      'Family inclusion options',
      'Investment opportunities',
      'Global mobility enhancement'
    ],
    investmentOptions: [
      {
        type: 'Real Estate Investment',
        amount: 'Varies',
        description: 'Investment in qualifying real estate properties',
        icon: Home
      },
      {
        type: 'Government Bonds',
        amount: 'Varies',
        description: 'Investment in government-approved bonds or funds',
        icon: DollarSign
      }
    ],
    requirements: [
      'Clean criminal background check',
      'Proof of investment funds',
      'Health insurance coverage',
      'Qualifying investment',
      'Meet residency requirements',
      'Maintain investment period'
    ]
  };

  const country = countryData[countryCode || ''] || defaultCountryData;

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${country.hero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container-max section-padding">
          <div className="max-w-4xl text-white">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {country.name}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200">
                  Golden Visa Program
                </p>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-gold-400" />
                  <span className="text-gold-400 font-semibold">Investment</span>
                </div>
                <div className="text-2xl font-bold">{country.minInvestment}</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span className="text-gold-400 font-semibold">Processing</span>
                </div>
                <div className="text-2xl font-bold">{country.timeframe}</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-gold-400" />
                  <span className="text-gold-400 font-semibold">Citizenship</span>
                </div>
                <div className="text-2xl font-bold">{country.citizenship}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                {country.overview}
              </p>
              
              <div className="flex space-x-4">
                <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Compare Programs
                </Link>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {country.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-600 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Investment Options
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Multiple pathways to meet the investment requirements for your {country.name} residency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.investmentOptions.map((option: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {option.type}
                </h3>
                
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {option.amount}
                </div>
                
                <p className="text-secondary-600 leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Requirements
              </h2>
              
              <div className="space-y-4">
                {country.requirements.map((requirement: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-secondary-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Application Process
              </h2>
              
              {country.process ? (
                <div className="space-y-6">
                  {country.process.map((step: any, index: number) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-secondary-600 mb-2">
                          {step.description}
                        </p>
                        <div className="text-sm text-primary-600 font-medium">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-secondary-50 rounded-lg p-6">
                  <p className="text-secondary-600 text-center">
                    Contact our experts for detailed process information and timeline specific to your situation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Info (if available) */}
      {country.lifestyle && (
        <section className="py-20 bg-secondary-50">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                Living in {country.name}
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Discover what makes {country.name} an attractive destination for global citizens
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Cost of Living</h3>
                <p className="text-secondary-600">{country.lifestyle.cost}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Climate</h3>
                <p className="text-secondary-600">{country.lifestyle.climate}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Language</h3>
                <p className="text-secondary-600">{country.lifestyle.language}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Education</h3>
                <p className="text-secondary-600">{country.lifestyle.education}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md md:col-span-2">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Healthcare</h3>
                <p className="text-secondary-600">{country.lifestyle.healthcare}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your {country.name} Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Get expert guidance on the {country.name} Golden Visa program. 
              Book your free consultation today to assess your eligibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Compare All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryPage;