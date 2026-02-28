import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ArrowUpRight, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";

const stats = [
  { number: "1200", suffix: "+", label: "Successful Applications" },
  { number: "15", suffix: "+", label: "Years Experience" },
  { number: "10", suffix: "", label: "Countries Served" },
  { number: "98", suffix: "%", label: "Success Rate" },
];

const countries = [
  { name: "Portugal", flag: "🇵🇹", funFact: "300 days of sunshine per year", tag: "EU Access", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80", slug: "portugal" },
  { name: "Spain", flag: "🇪🇸", funFact: "World's healthiest country for expats", tag: "Schengen Zone", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80", slug: "spain" },
  { name: "Greece", flag: "🇬🇷", funFact: "6,000 islands to explore", tag: "EU Residency", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80", slug: "greece" },
  { name: "Cyprus", flag: "🇨🇾", funFact: "Fastest EU citizenship pathway", tag: "EU Passport", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80", slug: "cyprus" },
  { name: "Malta", flag: "🇲🇹", funFact: "English-speaking EU paradise", tag: "EU Member", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", slug: "malta" },
  { name: "United Kingdom", flag: "🇬🇧", funFact: "Global financial powerhouse", tag: "Tier 1 Visa", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", slug: "uk" },
  { name: "New Zealand", flag: "🇳🇿", funFact: "Stunning landscapes, low crime rate", tag: "Residency", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80", slug: "newzealand" },
  { name: "Australia", flag: "🇦🇺", funFact: "World's highest minimum wage", tag: "Permanent Visa", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80", slug: "australia" },
  { name: "Canada", flag: "🇨🇦", funFact: "Best quality of life in North America", tag: "Permanent Residency", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80", slug: "canada" },
  { name: "Singapore", flag: "🇸🇬", funFact: "Asia's safest & smartest city", tag: "Investor Program", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", slug: "singapore" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    origin: "United States",
    program: "Portugal Golden Visa",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=80&h=80&fit=crop&crop=face",
    text: "Globetrot made our Portuguese residency journey seamless. Their expertise and personal attention exceeded all expectations. We now have our residency cards and are loving life in Lisbon!",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    origin: "UAE",
    program: "Spain Golden Visa",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    text: "Professional, transparent, and efficient. The team guided us through every step of the Spanish Golden Visa process. Our family now enjoys the full benefits of EU residency.",
    rating: 5,
  },
  {
    name: "Maria Chen",
    origin: "Singapore",
    program: "Greece Golden Visa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    text: "The Greek Golden Visa program was perfect for our investment goals. Globetrot's team made what seemed like a complex process completely stress-free. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Mitchell",
    origin: "Canada",
    program: "Malta Residency",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    text: "Outstanding service from start to finish. The team's deep knowledge of Malta's residency program and their meticulous attention to detail made our application successful on the first try.",
    rating: 5,
  },
  {
    name: "Elena Volkov",
    origin: "Russia",
    program: "Cyprus Investment",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
    text: "We chose Cyprus for our EU residency and Globetrot delivered exactly what they promised. Professional, reliable, and always available to answer our questions. Truly world-class service.",
    rating: 5,
  },
  {
    name: "Robert Kim",
    origin: "South Korea",
    program: "UK Investor Visa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    text: "The UK Investor Visa process was complex, but Globetrot's expertise made it manageable. Their team is truly world-class. We are now proud UK residents.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - WITH ALL ANIMATIONS */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="Travel"
            className="w-full h-full object-cover opacity-25 scale-105"
            style={{ transform: "scale(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/30" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-px bg-white w-full" style={{ top: `${i * 14}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute w-px bg-white h-full" style={{ left: `${i * 20}%` }} />
          ))}
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#C9A84C]/8 rounded-full blur-2xl pointer-events-none" />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
                  Dubai's Premier Migration Experts
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] mb-6 tracking-tight"
              >
                Your Gateway to{" "}
                <br className="hidden sm:block" />
                <span className="shimmer-text">Global</span>{" "}
                <span className="text-white">Citizenship</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-base lg:text-lg text-white/55 max-w-lg mb-10 leading-relaxed font-light"
              >
                Comprehensive immigration services including Golden Visa programs, 
                business visas, family reunification, and citizenship pathways. 
                Expert guidance for any destination worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:scale-[1.03] transition-all duration-300 text-sm tracking-wide"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white/80 font-medium rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300 text-sm tracking-wide"
                >
                  Explore Countries
                </Link>
              </motion.div>

              {/* Stats row with ANIMATED COUNTERS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-4 gap-4 pt-8 border-t border-white/8"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={1800} />
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Floating Image Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block relative h-[500px]"
            >
              {/* Main image */}
              <div className="absolute top-0 right-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 float-anim" style={{ animationDelay: "0s" }}>
                <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80" alt="Portugal" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold">🇵🇹 Portugal</div>
                  <div className="text-[#C9A84C] text-xs">300 days of sunshine per year</div>
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 w-56 h-64 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 float-anim" style={{ animationDelay: "2s" }}>
                <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80" alt="Spain" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold">🇪🇸 Spain</div>
                  <div className="text-[#C9A84C] text-xs">Healthiest country for expats</div>
                </div>
              </div>

              {/* Badge card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl float-anim"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-[#C9A84C] text-3xl font-bold">10</div>
                <div className="text-white text-xs font-medium mt-1 uppercase tracking-wider">Countries</div>
                <div className="text-white/40 text-xs">Available</div>
              </motion.div>

              {/* Gold accent */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-8 w-20 h-20 border border-[#C9A84C]/20 rounded-full" />
                <div className="absolute bottom-20 right-20 w-8 h-8 border border-[#C9A84C]/30 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES GRID - With Staggered Animation */}
      <section className="relative py-28 bg-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Immigration Destinations
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight mb-4">
              Popular Immigration Programs
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We serve all countries worldwide. Here are our most popular Golden Visa and investment programs.
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
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9A84C] rounded-full text-[#0A1628] text-[10px] font-bold tracking-wider uppercase">
                      {country.tag}
                    </div>
                  </div>

                  {/* Content */}
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold border border-[#C9A84C]/30 rounded-full px-8 py-3 hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 text-sm tracking-wide"
            >
              View All Countries & Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS - Glassmorphism Cards */}
      <section className="relative py-28 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Client Stories
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">
              Real stories from families who have successfully secured their global mobility goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
                className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:bg-white/[0.12] hover:border-[#C9A84C]/30 transition-all duration-500"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#C9A84C]/20 mb-5" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>

                <p className="text-white/65 text-sm leading-relaxed mb-6 font-light italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#C9A84C]/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#C9A84C] text-xs mt-0.5">{t.origin} · {t.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/[0.04] border border-white/8 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          >
            <div>
              <p className="text-white font-bold text-lg">Ready to join our success stories?</p>
              <p className="text-white/40 text-sm mt-1">Over 1,200 families have trusted us with their global mobility journey.</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 px-8 py-3.5 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-lg hover:shadow-[#C9A84C]/25 transition-all duration-300 text-sm tracking-wide whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
