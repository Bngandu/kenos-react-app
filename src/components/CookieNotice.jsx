import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "ktm-cookie-notice-dismissed";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the notice only if the visitor hasn't dismissed it before.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore if storage unavailable
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-label="Cookie notice"
          className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4"
        >
          <div className="max-w-4xl mx-auto glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
            <p className="text-white/80 text-sm font-light leading-relaxed flex-1">
              We use cookies and Google Analytics to understand how visitors use
              our website and to improve your experience. By continuing to browse,
              you agree to this use.
            </p>
            <button
              onClick={dismiss}
              className="shrink-0 px-6 py-2.5 bg-gold text-dark font-bold rounded-full hover:bg-secondary-light transition-all hover:scale-105 text-xs uppercase tracking-wide"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
