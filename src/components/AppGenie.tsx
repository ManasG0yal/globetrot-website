import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Sparkles, CheckCircle, Loader2 } from 'lucide-react';

export default function AppGenie() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNotify = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setEmail('');
      setStatus('idle');
    }, 400);
  };

  return (
    <>
      {/* Floating Genie Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
          backgroundSize: '200% 200%',
          animation: 'shimmer-bg 3s ease infinite',
          boxShadow: '0 0 24px rgba(201,168,76,0.5)',
        }}
        title="Globetrot App"
        aria-label="Open Globetrot App info"
      >
        <Sparkles className="w-6 h-6 text-[#0A1628]" />
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal — centers on mobile, anchors to button on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              className="fixed z-50
                bottom-0 left-0 right-0 mx-0 rounded-b-none
                sm:bottom-24 sm:left-6 sm:right-auto sm:mx-0 sm:w-80 sm:rounded-3xl"
            >
              <div
                className="relative overflow-hidden rounded-t-3xl sm:rounded-3xl"
                style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.25)' }}
              >
                {/* Gold top bar */}
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #C9A84C, #E8D48B, #C9A84C)' }} />

                {/* Mobile drag handle */}
                <div className="flex justify-center pt-3 pb-0 sm:hidden">
                  <div className="w-10 h-1 rounded-full bg-white/20" />
                </div>

                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="p-6 sm:p-7 pt-5 sm:pt-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                    style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
                  >
                    <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#C9A84C' }} />
                  </div>

                  {/* Heading */}
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A84C' }}>
                    Coming Soon
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.04em' }}
                  >
                    Globetrot App
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    Your global mobility journey in the palm of your hand. Track applications, explore destinations, and connect with experts — all from one place.
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {[
                      'Real-time application tracking',
                      'Expert chat & consultations',
                      'Document vault & reminders',
                    ].map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                        <span className="text-white/60 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Email input + notify */}
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center gap-2 py-4"
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: '#C9A84C' }} />
                      <p className="text-white font-semibold text-sm">You're on the list!</p>
                      <p className="text-white/50 text-xs text-center">
                        Check your inbox — we've sent you a confirmation.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none focus:ring-2 transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: status === 'error' ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(201,168,76,0.2)',
                          }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                          onBlur={e => (e.currentTarget.style.borderColor = status === 'error' ? 'rgba(239,68,68,0.6)' : 'rgba(201,168,76,0.2)')}
                          onKeyDown={e => e.key === 'Enter' && handleNotify()}
                        />
                        {status === 'error' && (
                          <p className="text-red-400 text-xs mt-1.5 pl-1">Please enter a valid email address.</p>
                        )}
                      </div>
                      <button
                        onClick={handleNotify}
                        disabled={status === 'loading'}
                        className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                        style={{
                          background: 'linear-gradient(135deg, #C9A84C, #D4B85A)',
                          color: '#0A1628',
                          boxShadow: '0 4px 20px rgba(201,168,76,0.25)',
                        }}
                      >
                        {status === 'loading' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            Notify Me on Launch
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer-bg {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}
