"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/providers/ToastProvider";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

// SVG social icons (lucide-react v3 removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const quickLinks = [
  { label: "About TheKashiYatra", href: "/about" },
  { label: "Our Hotels", href: "/hotels" },
  { label: "Boat Bookings", href: "/boats" },
  { label: "Cab Services", href: "/cabs" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Spiritual Experiences", href: "/experiences" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation Policy", href: "/cancellation" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/the_kashi_yatra/",
    label: "Instagram",
    color: "hover:text-pink-500"
  },

  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-500" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-500" },
  { icon: TwitterXIcon, href: "https://twitter.com", label: "X (Twitter)", color: "hover:text-sky-400" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast("🙏 Subscribed! You'll receive divine updates from Kashi.", "success");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-medium text-sm">
              ✨ Exclusive Offers for Group Bookings — Save up to 30%!
            </p>
            <a
              href={getWhatsAppUrl(genericInquiryMessage("a group booking quote"))}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-white text-[#8B4513] rounded-full text-sm font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">ॐ</span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-amber-400">TheKashiYatra</p>
                <p className="text-xs text-amber-600/80">Experience the Soul of Kashi</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted companion for spiritual travel in Varanasi. We curate premium pilgrimage experiences that blend ancient traditions with modern comfort.
            </p>
            <div className="space-y-3">
              <a href="tel:+919838043996" className="flex items-center gap-3 text-sm hover:text-amber-400 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Phone size={14} className="text-amber-500" />
                </div>
                +91 9838043996
              </a>
              <a href="mailto:info.thekashiyatra@gmail.com" className="flex items-center gap-3 text-sm hover:text-amber-400 transition-colors">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Mail size={14} className="text-amber-500" />
                </div>
                info.thekashiyatra@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <MapPin size={14} className="text-amber-500" />
                </div>
                 B3/260 Shivala, Varanasi - 221001
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-gray-700 ${social.color} hover:scale-110`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-amber-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 relative">
              Information
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-amber-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-6 relative">
              Divine Updates
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-amber-500 rounded-full" />
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive offers, spiritual insights, and Kashi travel tips.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-9 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Send size={15} />
                Subscribe Now
              </button>
            </form>

            {/* Payment methods */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3">Secure Payments</p>
              <div className="flex gap-2 flex-wrap">
                {["UPI", "Visa", "MC", "RuPay", "NetBnk"].map((method) => (
                  <span key={method} className="px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 TheKashiYatra. All rights reserved. Made with{" "}
            <Heart size={12} className="inline text-red-500" /> in Varanasi.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
