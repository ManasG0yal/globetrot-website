import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Globe, CheckCircle, ArrowRight, Target, Heart, Shield } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

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
      name: 'Aman Sharma',
      position: 'Founder & CEO',
      qualifications: ['Immigration Expert', 'Founder & CEO', '8+ Years Experience'],
      image: '/akshat.jpeg',
      bio: 'Visionary entrepreneur and founder of Globetrot, Aman has helped hundreds of families and investors achieve their global mobility goals across 28+ countries.'
    },
    {
      name: 'Akshat Sharma',
      position: 'Operations Officer',
      qualifications: ['Operations Expert', 'Client Relations', '8+ Years Experience'],
      image: '/akshat.jpg',
      objectPosition: '50% -75px',
      bio: 'Akshat oversees day-to-day operations ensuring every client case is handled efficiently and with the highest standards of service delivery.'
    },
    {
      name: 'Sukhwinder',
      position: 'Technical Officer',
      qualifications: ['Tech Infrastructure', 'Systems Expert', '8+ Years Experience'],
      image: '/sukhwinder.jpg',
      objectPosition: '50% -60px',
      bio: 'Sukhwinder leads the technical infrastructure of Globetrot, ensuring seamless digital processes and secure handling of all client data.'
    }
  ];

  const stats = [
    { number: '598', suffix: '+', label: 'Successful Applications' },
    { number: '98', suffix: '%', label: 'Success Rate' },
    { number: '8', suffix: '+', label: 'Years Experience' },
    { number: '28', suffix: '+', label: 'Countries Served' }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We set the highest standards in immigration consulting'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent guidance at every step'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships with our clients'
    }
  ];

  return (
    <>
      {/* Hero Section - Animated */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0A1628]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute h-px bg-[#FFFEF9] w-full" style={{ top: `${i * 16}%` }} />
          ))}
        </div>

        {/* Gold accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8"
          >
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
              About Globetrot
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl lg:text-6xl text-white leading-tight mb-6"
          >
            The Firm of{" "}
            <span className="shimmer-text">Global Citizens</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            In an increasingly interconnected world, the ability to traverse borders with ease and security 
            is more than just a privilege—it's a strategic advantage. We transform immigration challenges 
            into opportunities for entrepreneurs and professionals worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:scale-[1.03] transition-all duration-300 text-sm tracking-wide"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Stats - Animated Counters */}
      <section className="py-20 bg-[#F8F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold text-[#C9A84C] mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-[#0A1628]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight mb-4">
              Why Choose Globetrot Migration
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#FFFEF9] border border-gray-100/50 rounded-2xl p-8 hover:border-[#C9A84C]/30 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-28 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Core Values
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
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
              Our Team
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight mb-4">
              Meet the Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of licensed immigration consultants brings decades of combined experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-[#FFFEF9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: (member as any).objectPosition || '50% 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-1">{member.name}</h3>
                  <p className="text-[#C9A84C] font-semibold mb-4">{member.position}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.qualifications.map((qual, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-[#C9A84C]/10 text-[#0A1628] rounded-full font-medium">
                        {qual}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Book a consultation with our immigration experts today
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

export default AboutPage;
