import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Booking Confirmed — Kashi Darshan",
  description: "Your booking with Kashi Darshan has been confirmed. We'll send you the details shortly.",
  robots: { index: false, follow: false },
};

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        {/* Success animation */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-green-100 dark:bg-green-500/20 animate-ping opacity-40" />
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-500/30">
            <CheckCircle size={52} className="text-white" />
          </div>
        </div>

        <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Booking Confirmed! 🙏
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          Your journey to Kashi has been confirmed. May Lord Shiva bless your pilgrimage.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          A confirmation email & SMS will be sent within 5 minutes. Our team will call you within 2 hours.
        </p>

        {/* Booking summary card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700 mb-8 text-left">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Booking Details</h2>
          <div className="space-y-3">
            {[
              { label: "Booking ID", value: "#KD2024-8812" },
              { label: "Status", value: "✅ Confirmed" },
              { label: "Support", value: "+91 98765 43210" },
              { label: "Email", value: "info@kashidarshan.com" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 dark:border-gray-700/50 last:border-0">
                <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: "📧", title: "Check Email", desc: "Booking voucher sent" },
            { icon: "📞", title: "Expect a Call", desc: "Within 2 hours" },
            { icon: "💬", title: "WhatsApp", desc: "For instant support" },
          ].map((step) => (
            <div key={step.title} className="bg-amber-50 dark:bg-amber-500/10 rounded-2xl p-4 border border-amber-100 dark:border-amber-500/20 text-center">
              <div className="text-2xl mb-1">{step.icon}</div>
              <p className="font-semibold text-xs text-gray-800 dark:text-gray-200">{step.title}</p>
              <p className="text-xs text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
            Return Home
          </Link>
          <a
            href={getWhatsAppUrl(genericInquiryMessage("a question about my recent booking"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
