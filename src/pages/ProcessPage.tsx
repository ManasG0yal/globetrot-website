import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, FileText, DollarSign, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Initial Consultation & Assessment",
      duration: "1-2 weeks",
      description: "Initial consultation to evaluate your eligibility and recommend the optimal immigration pathway based on your goals, qualifications, and budget.",
      details: [
        "Comprehensive eligibility assessment",
        "Country and program recommendation",
        "Timeline and cost breakdown",
        "Q&A session with licensed consultant"
      ]
    },
    {
      number: "02",
      icon: FileText,
      title: "Documentation & Preparation",
      duration: "2-4 weeks",
      description: "We handle all paperwork, document translation, apostille services, and ensure every requirement is meticulously prepared.",
      details: [
        "Document checklist and guidance",
        "Professional translation services",
        "Apostille and legalization",
        "Application form completion"
      ]
    },
    {
      number: "03",
      icon: DollarSign,
      title: "Investment & Property Selection",
      duration: "1-3 months",
      description: "For Golden Visa programs, we connect you with trusted real estate agents and investment advisors to select compliant properties.",
      details: [
        "Pre-approved property selection",
        "Legal due diligence",
        "Purchase agreement support",
        "Investment verification"
      ]
    },
    {
      number: "04",
      icon: Send,
      title: "Application Submission",
      duration: "1-2 weeks",
      description: "Complete application package prepared and submitted to immigration authorities with full compliance and tracking.",
      details: [
        "Final application review",
        "Government submission",
        "Payment of government fees",
        "Application tracking setup"
      ]
    },
    {
      number: "05",
      icon: Clock,
      title: "Processing & Follow-up",
      duration: "4-10 months",
      description: "We monitor your application status, respond to any requests for additional information, and keep you updated throughout.",
      details: [
        "Regular status updates",
        "Respond to authority requests",
        "Biometric appointment scheduling",
        "Interview preparation (if required)"
      ]
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Approval & Residency Card",
      duration: "1-2 weeks",
      description: "Receive your approval and residency card. We assist with travel arrangements, relocation planning, and integration services.",
      details: [
        "Approval notification",
        "Residency card collection",
        "Relocation assistance",
        "Integration support"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does the entire process take?",
      answer: "Processing times vary by country and program. Tourist visas can take 2-4 weeks, business visas 4-8 weeks, and Golden Visa programs typically 6-12 months from initial consultation to residency card in hand."
    },
    {
      question: "What are the typical costs involved?",
      answer: "Costs include government fees (€5,000-€20,000 depending on country), investment requirements (€250,000-€500,000+ for Golden Visas), legal fees (€5,000-€15,000), and our consultation fees (varies by service). We provide detailed cost breakdowns in your initial consultation."
    },
    {
      question: "Can my family be included in the application?",
      answer: "Yes! Most Golden Visa and residency programs allow inclusion of spouse, dependent children (usually under 21-26), and sometimes dependent parents. Family members receive the same residency rights."
    },
    {
      question: "Do I need to speak the local language?",
      answer: "Language requirements vary by program. Golden Visa programs typically have no language requirements for the investment phase. Citizenship applications may require basic language proficiency (usually A2-B1 level)."
    },
    {
      question: "What happens if my application is rejected?",
      answer: "With our 98% success rate, rejections are rare. We conduct thorough pre-screening to avoid issues. If a rejection occurs, we analyze the reason, recommend next steps, and in most cases can reapply or appeal. Some government fees may be non-refundable."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
            alt="Process"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
        </div>

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
              Our Process
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl lg:text-6xl text-white leading-tight mb-6"
          >
            <span className="shimmer-text">Simple</span>, Transparent{" "}
            <br className="hidden sm:block" />
            Immigration Process
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
          >
            From initial consultation to citizenship, we guide you through every step with complete transparency. 
            Our proven 6-step process ensures your success.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-28 bg-[#F8F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
        
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Step by Step
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight">
              How We Work
            </h2>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#C9A84C] to-[#D4B85A] rounded-2xl flex items-center justify-center text-[#0A1628] font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#FFFEF9] border border-gray-100/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-[#C9A84C]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#0A1628]">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.35em] uppercase mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#0A1628] leading-tight">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F7F4] rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
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
              Ready to Begin Your Immigration Journey?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Book your consultation today and take the first step toward global mobility
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

export default ProcessPage;
