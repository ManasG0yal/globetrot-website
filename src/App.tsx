import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import CountryPage from './pages/CountryPage';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import AppGenie from './components/AppGenie';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap');

          :root {
            --gold: #C9A84C;
            --gold-light: #E8D48B;
            --navy: #0A1628;
            --navy-mid: #0F2040;
          }

          html { scroll-behavior: smooth; }

          body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }

          .font-serif {
            font-family: 'Playfair Display', Georgia, serif;
          }

          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #0A1628; }
          ::-webkit-scrollbar-thumb { background: #C9A84C50; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: #C9A84C80; }
          ::selection { background: #C9A84C25; color: #0A1628; }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .shimmer-text {
            background: linear-gradient(90deg, #C9A84C, #E8D48B, #C9A84C);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 4s linear infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .float-anim { animation: float 6s ease-in-out infinite; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .section-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #C9A84C30, transparent);
          }
        `}</style>

        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/country/:countryCode" element={<CountryPage />} />
          </Routes>
        </main>
        <Footer />

        <AppGenie />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/971582958724"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        </a>

        {/* Scroll to Top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-50 w-10 h-10 bg-[#0A1628]/80 backdrop-blur border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
