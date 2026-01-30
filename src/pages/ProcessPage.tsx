import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, DollarSign, Award, Clock, Shield } from 'lucide-react';

const ProcessPage = () => {
  const steps = [
    {
      step: 1,
      title: 'Initial Consultation & Assessment',
      duration: '1-2 weeks',
      description: 'We begin with a comprehensive assessment of your personal situation, investment goals, and eligibility for various Golden Visa programs.',
      details: [
        'Free 60-minute consultation call with licensed expert',
        'Detailed eligibility assessment across all programs',
        'Investment capacity and risk tolerance evaluation',
        'Program recommendation based on your specific needs',
        'Timeline and cost breakdown for recommended programs'
      ],
      icon: Users
    },
    {
      step: 2,
      title: 'Program Selection & Documentation',
      duration: '2-4 weeks',
      description: 'Once you select your preferred program, we guide you through the documentation process and begin preparing your application.',
      details: [
        'Detailed program briefing and requirements walkthrough',
        'Document collection checklist and timeline',
        'Legal document review and authentication',
        'Translation and apostille services',
        'Preparation of government-ready application package'
      ],
      icon: FileText
    },
    {
      step: 3,
      title: 'Investment Sourcing & Due Diligence',
      duration: '4-8 weeks',
      description: 'We help you identify and secure qualifying investments that meet program requirements while maximizing your return potential.',
      details: [
        'Pre-vetted investment opportunity presentation',
        'Comprehensive due diligence on all options',
        'Legal review of investment agreements',
        'Coordination with local legal and financial partners',
        'Investment completion and documentation'
      ],
      icon: DollarSign
    },
    {
      step: 4,
      title: 'Application Submission & Processing',
      duration: '2-6 months',
      description: 'Our team submits your complete application and manages the entire government review process on your behalf.',
      details: [
        'Government application submission',
        'Biometric appointment scheduling and coordination',
        'Regular status updates and progress reporting',
        'Government communication and follow-up management',
        'Application review and approval facilitation'
      ],
      icon: Shield
    },
    {
      step: 5,
      title: 'Approval & Residency Card Issuance',
      duration: '2-4 weeks',
      description: 'Upon approval, we assist with the final steps to receive your residency card and begin your journey as a legal resident.',
      details: [
        'Approval notification and next steps guidance',
        'Residency card collection coordination',
        'Initial residency obligations briefing',
        'Banking and tax planning introduction',
        'Ongoing support program enrollment'
      ],
      icon: Award
    },
    {
      step: 6,
      title: 'Ongoing Support & Citizenship Path',
      duration: 'Ongoing',
      description: 'Our relationship continues with ongoing support to maintain your residency and guidance toward eventual citizenship.',
      details: [
        'Annual residency requirement compliance monitoring',
        'Residency card renewal assistance',
        'Tax planning and optimization guidance',
        'Citizenship eligibility assessment and preparation',
        '24/7 client support and emergency assistance'
      ],
      icon: Clock
    }
  ];

  const features = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. Clear, upfront pricing for all services with detailed breakdown of costs.',
      icon: DollarSign
    },
    {
      title: 'Expert Team',
      description: 'Licensed immigration consultants and legal experts with 15+ years of experience.',
      icon: Users
    },
    {
      title: 'Proven Track Record',
      description: '98% success rate with over 1,200 successful Golden Visa applications.',
      icon: Award
    },
    {
      title: 'End-to-End Service',
      description: 'Complete service from consultation to citizenship, including ongoing support.',
      icon: Shield
    }
  ];

  const guarantees = [
    'Money-back guarantee if application is rejected due to our error',
    'Fixed-price service packages with no surprise costs',
    'Direct access to your dedicated case manager',
    'Regular progress updates and transparent communication',
    'Compliance with all regulatory and ethical standards'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our Proven <span className="text-primary-600">Process</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              A systematic, transparent approach that has successfully guided over 1,200 families 
              through the Golden Visa process with a 98% success rate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                <p className="text-secondary-600">Structured Steps</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <p className="text-secondary-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1,200+</div>
                <p className="text-secondary-600">Families Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Step-by-Step Journey
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From initial consultation to citizenship eligibility, we guide you through every milestone
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-16 bg-primary-200"></div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2 md:mb-0">
                          {step.title}
                        </h3>
                        <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Duration: {step.duration}
                        </div>
                      </div>
                      
                      <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-600 text-sm leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Built on experience, refined through success, and focused on your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Most Golden Visa applications are completed within 6-12 months
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Bar */}
              <div className="absolute top-8 left-0 right-0 h-2 bg-primary-200 rounded-full hidden lg:block">
                <div className="absolute top-0 left-0 h-2 bg-primary-600 rounded-full w-full"></div>
              </div>

              {/* Timeline Points */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                {steps.map((step) => (
                  <div key={step.step} className="text-center relative">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-2 text-sm">
                      {step.title.split('&')[0].trim()}
                    </h3>
                    <p className="text-primary-600 text-sm font-semibold">
                      {step.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-bold text-secondary-900 mb-2">
                Fast-Track Available
              </h4>
              <p className="text-secondary-600">
                For urgent cases, we offer expedited processing that can reduce timelines by up to 50% 
                for eligible applicants and participating countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                Our Commitment to You
              </h2>
              <p className="text-xl text-secondary-600">
                Service guarantees that give you confidence in your investment
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                    Service Guarantees
                  </h3>
                  <ul className="space-y-4">
                    {guarantees.map((guarantee, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-600 leading-relaxed">{guarantee}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                    Success Metrics
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-secondary-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                      <div className="text-secondary-600">Application Success Rate</div>
                    </div>
                    <div className="bg-secondary-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary-600 mb-1">7.2</div>
                      <div className="text-secondary-600">Average Months to Approval</div>
                    </div>
                    <div className="bg-secondary-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary-600 mb-1">4.9/5</div>
                      <div className="text-secondary-600">Client Satisfaction Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Start with a free consultation to understand exactly how our process 
              will work for your specific situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;