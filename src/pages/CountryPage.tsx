import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Globe, DollarSign, Home, Briefcase, TrendingUp } from 'lucide-react';

const CountryPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const countryData: { [key: string]: any } = {
    portugal: {
      name: 'Portugal',
      flag: '🇵🇹',
      title: 'Portugal Golden Visa Program',
      hero: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop',
      funFact: '300 days of sunshine per year',
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
      ]
    },
    spain: {
      name: 'Spain',
      flag: '🇪🇸',
      title: 'Spain Golden Visa Program',
      hero: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=600&fit=crop',
      funFact: 'World\'s healthiest country for expats',
      overview: 'Spain\'s Golden Visa offers residency through real estate investment with access to the entire Schengen Area and a path to Spanish citizenship.',
      minInvestment: '€500,000',
      timeframe: '2-4 months',
      citizenship: '10 years',
      benefits: [
        'Schengen Area access',
        'High quality of life',
        'World-class healthcare system',
        'Excellent education opportunities',
        'No minimum stay requirement',
        'Family inclusion'
      ],
      investmentOptions: [
        {
          type: 'Real Estate',
          amount: '€500,000',
          description: 'Purchase of residential or commercial property',
          icon: Home
        },
        {
          type: 'Government Bonds',
          amount: '€2,000,000',
          description: 'Investment in Spanish government bonds',
          icon: TrendingUp
        },
        {
          type: 'Business Investment',
          amount: '€1,000,000',
          description: 'Investment in Spanish companies',
          icon: Briefcase
        }
      ],
      requirements: [
        'Clean criminal record',
        'Proof of financial means',
        'Health insurance',
        'Investment documentation',
        'No minimum stay requirement',
        'Maintain investment for 5 years'
      ]
    },
    // Add more countries as needed...
  };

  const country = countryData[countryCode || ''] || countryData.portugal;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={country.hero}
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-px bg-[#FFFEF9] w-full" style={{ top: `${i * 14}%` }} />
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8">
              <span className="text-4xl">{country.flag}</span>
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
                {country.name}
              </span>
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl text-white leading-tight mb-6 max-w-3xl">
              <span className="shimmer-text">{country.name}</span> Golden Visa
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-2xl leading-relaxed">
              {country.funFact}
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-[#C9A84C]" />
                  <div>
                    <div className="text-white/60 text-xs font-medium mb-1">From</div>
                    <div className="text-white font-bold text-xl">{country.minInvestment}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#C9A84C]" />
                  <div>
                    <div className="text-white/60 text-xs font-medium mb-1">Timeframe</div>
                    <div className="text-white font-bold text-xl">{country.timeframe}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#C9A84C]" />
                  <div>
                    <div className="text-white/60 text-xs font-medium mb-1">Citizenship</div>
                    <div className="text-white font-bold text-xl">{country.citizenship}</div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:scale-[1.03] transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl text-[#0A1628] mb-6">Program Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{country.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F8F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-[#0A1628] mb-4">Key Benefits</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFEF9] border border-gray-100/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="w-8 h-8 text-[#C9A84C] mb-4" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-[#0A1628] mb-4">Investment Options</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {country.investmentOptions.map((option: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#F8F7F4] rounded-2xl p-8 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-2">{option.type}</h3>
                <div className="text-[#C9A84C] font-bold text-xl mb-4">{option.amount}</div>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-white mb-4">Requirements</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {country.requirements.map((req: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{req}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] mb-6">
              Ready to Start Your {country.name} Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Book a consultation to discuss your eligibility and investment options
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:scale-[1.03] transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CountryPage;
