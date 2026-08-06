import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation Policy — TheKashiYatra",
  description: "Understand the TheKashiYatra cancellation and refund policy for hotels, boats, packages, and experiences.",
};

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs font-semibold rounded-full mb-4">Policies</span>
          <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-3">Cancellation Policy</h1>
          <p className="text-gray-500">Effective from January 1, 2024</p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-5 mb-8">
          <p className="text-amber-800 dark:text-amber-300 text-sm font-medium">
            🙏 We understand that travel plans change. We've designed our cancellation policy to be as flexible as possible while maintaining the quality of our services.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              service: "Hotel Bookings",
              icon: "🏨",
              policies: [
                { timing: "More than 48 hours before check-in", refund: "100% refund", color: "text-green-600 dark:text-green-400" },
                { timing: "24–48 hours before check-in", refund: "50% refund", color: "text-yellow-600 dark:text-yellow-400" },
                { timing: "Less than 24 hours before check-in", refund: "No refund", color: "text-red-600 dark:text-red-400" },
              ],
            },
            {
              service: "Boat Rides",
              icon: "⛵",
              policies: [
                { timing: "More than 24 hours before ride", refund: "100% refund", color: "text-green-600 dark:text-green-400" },
                { timing: "12–24 hours before ride", refund: "50% refund", color: "text-yellow-600 dark:text-yellow-400" },
                { timing: "Less than 12 hours before ride", refund: "No refund", color: "text-red-600 dark:text-red-400" },
              ],
            },
            {
              service: "Tour Packages",
              icon: "🗺️",
              policies: [
                { timing: "More than 7 days before departure", refund: "100% refund", color: "text-green-600 dark:text-green-400" },
                { timing: "3–7 days before departure", refund: "75% refund", color: "text-yellow-600 dark:text-yellow-400" },
                { timing: "1–3 days before departure", refund: "50% refund", color: "text-orange-600 dark:text-orange-400" },
                { timing: "Less than 24 hours before departure", refund: "No refund", color: "text-red-600 dark:text-red-400" },
              ],
            },
            {
              service: "Spiritual Experiences",
              icon: "🙏",
              policies: [
                { timing: "More than 24 hours before", refund: "100% refund", color: "text-green-600 dark:text-green-400" },
                { timing: "Less than 24 hours before", refund: "No refund", color: "text-red-600 dark:text-red-400" },
              ],
            },
          ].map((item) => (
            <div key={item.service} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white text-lg mb-4">
                <span>{item.icon}</span>
                {item.service}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">Cancellation Timing</th>
                      <th className="text-left py-2 text-gray-500 font-medium">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.policies.map((policy) => (
                      <tr key={policy.timing} className="border-b border-gray-50 dark:border-gray-700/50 last:border-0">
                        <td className="py-2.5 pr-4 text-gray-600 dark:text-gray-400">{policy.timing}</td>
                        <td className={`py-2.5 font-semibold ${policy.color}`}>{policy.refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">How to Cancel</h2>
          <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
            <li>Log in to your TheKashiYatra account</li>
            <li>Go to Booking History</li>
            <li>Select the booking you wish to cancel</li>
            <li>Click &ldquo;Cancel Booking&rdquo; and confirm</li>
            <li>Refund will be processed within 5–7 business days</li>
          </ol>
          <p className="mt-4 text-sm text-gray-500">
            Need help? <Link href="/contact" className="text-amber-600 hover:underline">Contact us</Link> or WhatsApp at +91 98765 43210.
          </p>
        </div>
      </div>
    </div>
  );
}
