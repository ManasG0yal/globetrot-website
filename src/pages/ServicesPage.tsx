import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Globe } from 'lucide-react';

const ServicesPage = () => {
  const countries = [
    {
      code: 'portugal',
      name: 'Portugal',
      flag: '🇵🇹',
      title: 'Portugal Golden Visa',
      minInvestment: '€280,000',
      timeframe: '2-3 months',
      citizenship: '5 years',
      benefits: ['EU Residency', 'Schengen Access', 'Low Requirements', 'Tax Benefits'],
      popular: true,
      description: 'Portugal\'s Golden Visa program offers residency to investors making qualifying investments, with a path to citizenship after 5 years.'
    },
    {
      code: 'spain',
      name: 'Spain',
      flag: '🇪🇸',
      title: 'Spain Golden Visa',
      minInvestment: '€500,000',
      timeframe: '2-4 months',
      citizenship: '10 years',
      benefits: ['EU Residency', 'Schengen Zone', 'Quality Healthcare', 'Education'],
      popular: true,
      description: 'Spain\'s Golden Visa program grants residency to investors who make significant investments in real estate or capital.'
    },
    {
      code: 'greece',
      name: 'Greece',
      flag: '🇬🇷',
      title: 'Greece Golden Visa',
      minInvestment: '€250,000',
      timeframe: '2-3 months',
      citizenship: '7 years',
      benefits: ['EU Access', 'Affordable Investment', 'Beautiful Lifestyle', 'Strategic Location'],
      popular: false,
      description: 'Greece\'s Golden Visa program provides residency to investors through real estate investments with great affordability.'
    },
    {
      code: 'cyprus',
      name: 'Cyprus',
      flag: '🇨🇾',
      title: 'Cyprus Investment Program',
      minInvestment: '€300,000',
      timeframe: '3-6 months',
      citizenship: '8 years',
      benefits: ['EU Passport', 'Business Hub', 'Tax Advantages', 'English Speaking'],
      popular: false,
      description: 'Cyprus offers permanent residency to investors making a qualifying real estate investment with EU citizenship pathway.'
    },
    {
      code: 'malta',
      name: 'Malta',
      flag: '🇲🇹',
      title: 'Malta Permanent Residency',
      minInvestment: '€150,000',
      timeframe: '4-6 months',
      citizenship: '5 years',
      benefits: ['EU Member', 'English Speaking', 'Strategic Location', 'Business Friendly'],
      popular: true,
      description: 'Malta\'s Permanent Residency Program offers residency to individuals who meet specific investment criteria.'
    },
    {
      code: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      title: 'UK Investor Visa',
      minInvestment: '£2,000,000',
      timeframe: '3-6 months',
      citizenship: '6 years',
      benefits: ['Tier 1 Visa', 'World-Class Education', 'Financial Hub', 'Global Gateway'],
      popular: false,
      description: 'The UK\'s Investor Visa allows high-net-worth individuals to obtain residency through substantial investment.'
    },
    {
      code: 'newzealand',
      name: 'New Zealand',
      flag: '🇳🇿',
      title: 'New Zealand Investor Visa',
      minInvestment: 'NZ$3,000,000',
      timeframe: '6-12 months',
      citizenship: '5 years',
      benefits: ['Quality of Life', 'Clean Environment', 'Stable Economy', 'Education'],
      popular: false,
      description: 'New Zealand offers Investor visas for individuals interested in investing and contributing to the economy.'
    },
    {
      code: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      title: 'Australia Significant Investor Visa',
      minInvestment: 'AU$5,000,000',
      timeframe: '6-12 months',
      citizenship: '4 years',
      benefits: ['Premium Lifestyle', 'Strong Economy', 'Excellent Healthcare', 'Education'],
      popular: false,
      description: 'Australia\'s Significant Investor Visa grants residency to individuals making substantial investments.'
    },
    {
      code: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      title: 'Quebec Investor Program',
      minInvestment: 'CA$1,200,000',
      timeframe: '12-24 months',
      citizenship: '3 years',
      benefits: ['Quality Healthcare', 'Excellent Education', 'Multicultural', 'Stable Economy'],
      popular: false,
      description: 'The Quebec Immigrant Investor Program allows investors to obtain Canadian permanent residency.'
    },
    {
      code: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      title: 'Singapore Global Investor Program',
      minInvestment: 'S$10,000,000',
      timeframe: '6-8 months',
      citizenship: '2 years',
      benefits: ['Business Hub', 'Tax Efficiency', 'Strategic Location', 'World-Class Infrastructure'],
      popular: false,
      description: 'Singapore\'s Global Investor Program offers residency to investors making substantial economic contributions.'
    }
  ];

  const services = [
    {
      title: 'Initial Consultation & Assessment',
      description: 'Comprehensive evaluation of your eligibility and recommendation of the best Golden Visa program based on your goals.',
      features: ['Free 1-hour consultation', 'Eligibility assessment', 'Program comparison', 'Investment analysis']
    },
    {
      title: 'Document Preparation & Legal Support',
      description: 'Complete handling of all required documentation with legal review and government submission support.',
      features: ['Document collection & review', 'Legal translations', 'Apostille services', 'Government submissions']
    },
    {
      title: 'Investment Advisory & Management',
      description: 'Expert guidance on investment options including real estate, funds, and business investments for Golden Visa programs.',
      features: ['Investment sourcing', 'Due diligence', 'Portfolio management', 'ROI optimization']
    },
    {
      title: 'Ongoing Support & Citizenship Path',
      description: 'Continuous support throughout your residency journey and guidance toward citizenship eligibility.',
      features: ['Residency maintenance', 'Renewal assistance', 'Citizenship preparation', '24/7 support']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Golden Visa <span className="text-primary-600">Programs</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Explore premium investment-based residency programs across 10 countries. 
              Secure your global mobility with expert guidance and proven success rates.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Find Your Perfect Program</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Available Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Choose from our carefully selected Golden Visa programs offering the best combination 
              of investment returns, lifestyle benefits, and citizenship pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {countries.map((country) => (
              <div key={country.code} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden group">
                {country.popular && (
                  <div className="bg-gold-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{country.flag}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-secondary-600">{country.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">
                        {country.minInvestment}
                      </div>
                      <div className="text-sm text-secondary-500">minimum</div>
                    </div>
                  </div>

                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 text-primary-600" />
                      </div>
                      <div className="text-sm font-semibold text-secondary-900">{country.timeframe}</div>
                      <div className="text-xs text-secondary-500">Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-primary-600" />
                      </div>
                      <div className="text-sm font-semibold text-secondary-900">{country.citizenship}</div>
                      <div className="text-xs text-secondary-500">to Citizenship</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Globe className="w-4 h-4 text-primary-600" />
                      </div>
                      <div className="text-sm font-semibold text-secondary-900">170+</div>
                      <div className="text-xs text-secondary-500">Countries</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {country.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link 
                      to={`/country/${country.code}`}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Service Package
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              End-to-end support from initial consultation to citizenship. 
              We handle every aspect of your Golden Visa journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary-600 font-bold text-xl">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Program Comparison
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Compare key features across our most popular Golden Visa programs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Country</th>
                  <th className="px-6 py-4 text-left">Min. Investment</th>
                  <th className="px-6 py-4 text-left">Processing Time</th>
                  <th className="px-6 py-4 text-left">Citizenship Path</th>
                  <th className="px-6 py-4 text-left">EU Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-100">
                {countries.slice(0, 6).map((country, index) => (
                  <tr key={country.code} className={index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-semibold text-secondary-900">{country.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary-600">{country.minInvestment}</td>
                    <td className="px-6 py-4 text-secondary-600">{country.timeframe}</td>
                    <td className="px-6 py-4 text-secondary-600">{country.citizenship}</td>
                    <td className="px-6 py-4">
                      {['portugal', 'spain', 'greece', 'cyprus', 'malta'].includes(country.code) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-secondary-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Request Detailed Comparison</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Global Future?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Book a free consultation to discover which Golden Visa program 
              is the perfect fit for your investment goals and lifestyle preferences.
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
                to="/process" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;