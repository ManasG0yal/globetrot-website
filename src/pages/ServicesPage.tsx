import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plane, Briefcase, Users, Heart, Building, GraduationCap } from 'lucide-react';

const ServicesPage = () => {
  const countries = [
    { name: "Portugal", flag: "🇵🇹", funFact: "300 days of sunshine per year", tag: "EU Access", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80", slug: "portugal" },
    { name: "Spain", flag: "🇪🇸", funFact: "World's healthiest country", tag: "Schengen Zone", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80", slug: "spain" },
    { name: "Greece", flag: "🇬🇷", funFact: "6,000 islands to explore", tag: "EU Residency", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80", slug: "greece" },
    { name: "Cyprus", flag: "🇨🇾", funFact: "Fastest EU citizenship", tag: "EU Passport", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80", slug: "cyprus" },
    { name: "Malta", flag: "🇲🇹", funFact: "English-speaking EU paradise", tag: "EU Member", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", slug: "malta" },
    { name: "United Kingdom", flag: "🇬🇧", funFact: "Global financial hub", tag: "Tier 1 Visa", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", slug: "uk" },
    { name: "New Zealand", flag: "🇳🇿", funFact: "Stunning landscapes", tag: "Residency", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80", slug: "newzealand" },
    { name: "Australia", flag: "🇦🇺", funFact: "Highest minimum wage", tag: "Permanent Visa", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80", slug: "australia" },
    { name: "Canada", flag: "🇨🇦", funFact: "Best quality of life", tag: "PR", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80", slug: "canada" },
    { name: "Singapore", flag: "🇸🇬", funFact: "Asia's smartest city", tag: "Investor", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", slug: "singapore" },
  ];

  const services = [
    {
      icon: Building,
      title: "Golden Visa Programs",
      description: "Investment-based residency in Portugal, Spain, Greece, Malta, and more. Fast-track to EU citizenship.",
      features: ["Real estate investment", "Fast EU access", "Family inclusion", "Residency in 6-12 months"]
    },
    {
      icon: Briefcase,
      title: "Business & Investor Visas",
      description: "Start or expand your business internationally. Entrepreneur and startup visas for global markets.",
      features: ["Startup visas", "Business expansion", "Investment opportunities", "Expert guidance"]
    },
    {
      icon: Heart,
      title: "Family Reunification",
      description: "Bring your family together. Spouse, children, and dependent relative visa applications.",
      features: ["Spouse visas", "Dependent children", "Parent visas", "Complete documentation"]
    },
    {
      icon: Plane,
      title: "Tourist & Visit Visas",
      description: "Short-term visas for tourism, business meetings, medical treatment, and family visits.",
      features: ["Tourism visas", "Business visits", "Medical visas", "Fast processing"]
    },
    {
      icon: GraduationCap,
      title: "Study & Work Permits",
      description: "Education visas and post-study work permits. Study abroad opportunities worldwide.",
      features: ["Student visas", "Work permits", "Post-study options", "University placement"]
    },
    {
      icon: Users,
      title: "Citizenship Programs",
      description: "Second citizenship and passport programs. Fast-track citizenship by investment.",
      features: ["Dual citizenship", "Passport programs", "Citizenship by investment", "Legal support"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute h-px bg-[#FFFEF9] w-full" style={{ top: `${i * 16}%` }} />
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8"
          >
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl lg:text-6xl text-white leading-tight mb-6"
          >
            Immigration Solutions for{" "}
            <span className="shimmer-text">Every Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
          >
            From tourist visas to Golden Visa programs, we handle immigration to any country worldwide. 
            Expert guidance for individuals, families, and businesses.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-[#F8F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              What We Offer
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight mb-4">
              Comprehensive Immigration Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group bg-[#FFFEF9] border border-gray-100/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Popular Destinations
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight mb-4">
              Immigration Programs Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve all countries globally. Browse our most popular Golden Visa and residency programs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {countries.map((country, i) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.07 }}
              >
                <Link
                  to={`/country/${country.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-[#FFFEF9] border border-gray-100/50 shadow-sm hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500 h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9A84C] rounded-full text-[#0A1628] text-[10px] font-bold tracking-wider uppercase">
                      {country.tag}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{country.flag}</span>
                      <h3 className="font-bold text-[#0A1628] text-base leading-tight">{country.name}</h3>
                    </div>
                    <p className="text-gray-600 text-xs mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                      {country.funFact}
                      <ArrowUpRight className="w-4 h-4 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/30 transition-colors duration-500 pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFFEF9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Book a consultation and we'll recommend the best immigration pathway for your goals
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:scale-[1.03] transition-all duration-300"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
