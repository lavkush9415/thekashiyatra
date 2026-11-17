import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — TheKashiYatra",
  description: "Read the terms and conditions for using TheKashiYatra travel booking services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full mb-4">Legal</span>
          <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-3">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: January 1, 2024</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing and using TheKashiYatra's website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services."
            },
            {
              title: "2. Booking Services",
              content: "TheKashiYatra acts as a booking platform connecting travelers with hotels, boat operators, tour guides, and other service providers. We facilitate bookings but are not directly responsible for the services provided by third parties."
            },
            {
              title: "3. Payment Terms",
              content: "All payments are processed securely through our payment gateway. Prices are in Indian Rupees (INR) and include applicable taxes. We accept UPI, credit/debit cards, net banking, and select EMI options."
            },
            {
              title: "4. User Accounts",
              content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account."
            },
            {
              title: "5. Cancellation & Refunds",
              content: "Cancellations and refunds are governed by our Cancellation Policy. Please review it carefully before making a booking. Refunds are processed to the original payment method within 5-7 business days."
            },
            {
              title: "6. Liability Limitation",
              content: "TheKashiYatra's liability is limited to the amount paid for the specific service booked. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our services."
            },
            {
              title: "7. Intellectual Property",
              content: "All content on this website including text, images, logos, and design is the property of TheKashiYatra and is protected by copyright law. Unauthorized use is strictly prohibited."
            },
            {
              title: "8. Governing Law",
              content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Varanasi, Uttar Pradesh."
            },
            {
              title: "9. Contact",
              content: "For questions about these Terms, contact us at legal@thekashiyatra.com or call +91 98765 43210."
            },
          ].map((section) => (
            <div key={section.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white text-lg mb-3">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {section.title === "9. Contact" ? (
                  <>
                    {section.content} For travel bookings, call{" "}
                    <a href="tel:+919277414831" className="text-amber-600 hover:underline">+91 92774 14831</a>.
                  </>
                ) : section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Questions? <Link href="/contact" className="text-amber-600 hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
