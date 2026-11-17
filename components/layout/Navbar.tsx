"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, Moon, Menu, X, Search, Heart, Phone,
  MapPin, ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hotels", href: "/hotels" },
  { label: "Boats", href: "/boats" },
  {
    label: "Packages",
    href: "/packages",
    children: [
      // { label: "1 Day Darshan", href: "/packages/1-day-kashi-darshan" },
      // { label: "Spiritual Tour", href: "/packages/2-days-spiritual-tour" },
      // { label: "Heritage Tour", href: "/packages/3-days-heritage-tour" },
      // { label: "Kashi + Prayagraj", href: "/packages/kashi-prayagraj" },
      // { label: "Kashi + Ayodhya", href: "/packages/kashi-ayodhya" },
      // { label: "Luxury Kashi", href: "/packages/luxury-kashi" },
    ],
  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Cabs", href: "/cabs" },
      { label: "Experiences", href: "/experiences" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/about" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-amber-100 dark:border-gray-800"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg font-bold">ॐ</span>
              </div>
              <div>
                <span
                  className={cn(
                    "font-serif text-xl font-bold transition-colors duration-300",
                    isScrolled
                      ? "text-[#8B4513] dark:text-amber-400"
                      : "text-white drop-shadow-lg"
                  )}
                >
                  TheKashiYatra
                </span>
                <p
                  className={cn(
                    "text-xs transition-colors duration-300",
                    isScrolled
                      ? "text-amber-600 dark:text-amber-500"
                      : "text-amber-200"
                  )}
                >
                  Experience the Soul of Kashi
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                      isScrolled
                        ? isActive(link.href) && link.href !== "#"
                          ? "text-[#FF9933] dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10"
                          : "text-gray-700 dark:text-gray-200 hover:text-[#FF9933] hover:bg-amber-50 dark:hover:bg-gray-800"
                        : isActive(link.href) && link.href !== "#"
                        ? "text-amber-300 bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.label && "rotate-180")} />}
                    {isActive(link.href) && link.href !== "#" && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-52"
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-amber-100 dark:border-gray-700 overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-[#FF9933] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "p-2 rounded-full transition-all duration-200",
                  isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-[#FF9933]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <Link
                href="/wishlist"
                className={cn(
                  "p-2 rounded-full transition-all duration-200",
                  isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-[#FF9933]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                aria-label="Wishlist"
              >
                <Heart size={18} />
              </Link>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "p-2 rounded-full transition-all duration-200",
                    isScrolled
                      ? "text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              <a
                href="tel:+919277414831"
                aria-label="Call +91 92774 14831"
                title="Call +91 92774 14831"
                className={cn(
                  "flex items-center gap-2 p-2 xl:px-3 xl:py-2 rounded-full text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#8B4513] dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Phone size={15} />
                <span className="hidden xl:inline">+91 92774 14831</span>
              </a>

              <a
                href={getWhatsAppUrl(genericInquiryMessage("your travel packages and services"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <Phone size={15} />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
              <div className="p-6">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-8 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">ॐ</span>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-[#8B4513] dark:text-amber-400">TheKashiYatra</p>
                    <p className="text-xs text-amber-600">Experience the Soul of Kashi</p>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-[#FF9933] font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#FF9933] hover:bg-amber-50 dark:hover:bg-gray-800 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 space-y-3">
                  <a
                    href={getWhatsAppUrl(genericInquiryMessage("your travel packages and services"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full font-semibold shadow-lg"
                  >
                    <Phone size={16} />
                    Book Now
                  </a>
                  <div className="flex gap-3">
                    <Link
                      href="/wishlist"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      <Heart size={15} /> Wishlist
                    </Link>
                    {mounted && (
                      <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                      >
                        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                        {theme === "dark" ? "Light" : "Dark"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Contact info */}
                <div className="mt-8 p-4 bg-amber-50 dark:bg-gray-800 rounded-2xl">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Need help?</p>
                  <a href="tel:+919838043996" className="flex items-center gap-2 text-[#8B4513] dark:text-amber-400 font-medium">
                    <Phone size={15} /> +91 9838043996
                  </a>
                  <a href="tel:+919277414831" className="flex items-center gap-2 text-[#8B4513] dark:text-amber-400 font-medium mt-1">
                    <Phone size={15} /> +91 92774 14831
                  </a>
                  <a href="mailto:info.thekashiyatra@gmail.com" className="flex items-center gap-2 text-amber-600 text-sm mt-1">
                    <MapPin size={13} /> info.thekashiyatra@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 w-full max-w-2xl"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = (e.currentTarget.querySelector("input") as HTMLInputElement)?.value;
                  setSearchOpen(false);
                  window.location.href = `/search${q ? `?q=${encodeURIComponent(q)}` : ""}`;
                }}
              >
                <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                  <Search size={22} className="text-[#FF9933]" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search hotels, boats, packages, experiences..."
                    className="flex-1 text-lg bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400"
                  />
                  <button type="button" onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={20} />
                  </button>
                </div>
              </form>
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Popular Searches</p>
                {["Sunrise Boat Ride", "Kashi Vishwanath Darshan", "Heritage Hotels", "Ganga Aarti Package", "Luxury Package"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSearchOpen(false);
                      window.location.href = `/search?q=${encodeURIComponent(s)}`;
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm transition-colors"
                  >
                    <Search size={14} className="text-gray-400" />
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
