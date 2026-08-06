"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToast } from "@/components/providers/ToastProvider";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    showToast("🙏 Message sent! We'll respond within 2 hours.", "success");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="py-24 bg-[#FFF8F0] dark:bg-gray-950 mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            badge="Get In Touch"
            title="Plan Your"
            highlightedWord=" Sacred Journey"
            subtitle="Let our pilgrimage experts craft the perfect Kashi experience for you."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: "Call / WhatsApp",
                lines: ["+91 9838043996"],
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info.thekashiyatra@gmail.com"],
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: MapPin,
                title: "Office Address",
                lines: ["B3/260 Shivala, Varanasi, Uttar Pradesh 221001"],
                color: "from-amber-500 to-orange-600",
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon – Sun: 6:00 AM – 10:00 PM", "Emergency: 24×7"],
                color: "from-purple-500 to-pink-600",
              },
            ].map((info) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-card border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0`}>
                  <info.icon size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{info.title}</h4>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-500 dark:text-gray-400 text-xs">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5120714064547!2d82.97336857619!3d25.310858228985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e4e4700fb85%3A0x30d3e96b9db37d86!2sKashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kashi Vishwanath Temple Map"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-luxury border border-gray-100 dark:border-gray-700"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-7">
              Fill in the form and our team will get back to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ramesh Sharma"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ramesh@email.com"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 9838043996"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    <option value="">Select service...</option>
                    <option value="hotel">Hotel Booking</option>
                    <option value="boat">Boat Ride</option>
                    <option value="package">Tour Package</option>
                    <option value="cab">Cab Service</option>
                    <option value="experience">Spiritual Experience</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your travel plans, dates, group size, or special requirements..."
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Or reach us directly:{" "}
                <a
                  href={getWhatsAppUrl(genericInquiryMessage("planning my Kashi trip"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-medium hover:underline"
                >
                  WhatsApp
                </a>{" "}
                ·{" "}
                <a href="tel:+919838043996" className="text-amber-600 font-medium hover:underline">
                  +91 9838043996
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
