import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    preferredCountries: '',
    message: '',
    howDidYouHear: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1628]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-[#FFFEF9] rounded-2xl shadow-2xl p-10 text-center"
        >
          <div className="w-20 h-20 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#C9A84C]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your consultation request has been received. One of our immigration experts 
            will contact you within 24 hours to discuss your options.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-xl transition-all duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8"
          >
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl lg:text-6xl text-white leading-tight mb-6"
          >
            Book Your <span className="shimmer-text">Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
          >
            Schedule a consultation with our licensed immigration experts. We'll assess your eligibility 
            and recommend the best pathway for your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-[#F8F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-serif text-3xl text-[#0A1628] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1628] mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">
                      PO5 Bays Water Building Number 7<br />
                      Business Bay, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1628] mb-1">Phone</h3>
                    <a href="tel:+971048323705" className="text-gray-600 text-sm hover:text-[#C9A84C] transition-colors">
                      +971 048323705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1628] mb-1">Email</h3>
                    <a href="mailto:info@globetrotmigration.com" className="text-gray-600 text-sm hover:text-[#C9A84C] transition-colors">
                      info@globetrotmigration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1628] mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Sunday - Thursday: 9AM - 6PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-[#FFFEF9] rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                    Current Country of Residence *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                    Where would you like to go?
                  </label>
                  <input
                    type="text"
                    name="preferredCountries"
                    value={formData.preferredCountries}
                    onChange={handleChange}
                    placeholder="e.g. Portugal, Canada, Australia..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    placeholder="Tell us about your immigration goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4B85A] text-[#0A1628] font-bold rounded-full hover:shadow-xl hover:shadow-[#C9A84C]/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending ? 'Sending...' : 'Book Consultation'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
