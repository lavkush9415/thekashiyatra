import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kashi Darshan",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full mb-4">Legal</span>
          <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly to us, such as when you create an account, make a booking, or contact us. This includes: Name, email address, phone number, payment information, and travel preferences."
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information we collect to: process bookings, send booking confirmations and updates, provide customer support, send promotional communications (with your consent), improve our services, and comply with legal obligations."
            },
            {
              title: "3. Information Sharing",
              content: "We share your information with hotels, boat operators, and service providers only as necessary to fulfill your booking. We do not sell your personal information to third parties."
            },
            {
              title: "4. Data Security",
              content: "We implement industry-standard security measures including 256-bit SSL encryption to protect your personal information. However, no method of transmission over the Internet is 100% secure."
            },
            {
              title: "5. Cookies",
              content: "We use cookies to enhance your experience on our website. You can control cookie settings through your browser preferences."
            },
            {
              title: "6. Your Rights",
              content: "You have the right to access, correct, or delete your personal information. Contact us at privacy@kashidarshan.com to exercise these rights."
            },
            {
              title: "7. Contact Us",
              content: "If you have questions about this Privacy Policy, please contact us at privacy@kashidarshan.com or write to us at Godaulia, Varanasi — 221001."
            },
          ].map((section) => (
            <div key={section.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white text-lg mb-3">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
