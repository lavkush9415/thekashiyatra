"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("kd-cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("kd-cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("kd-cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[60] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
              <Cookie size={18} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">We use cookies 🍪</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                We use cookies to enhance your experience and improve our services.{" "}
                <Link href="/privacy-policy" className="text-amber-600 hover:underline">Learn more</Link>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={accept}
                  className="flex-1 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="flex-1 py-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl text-xs hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
