import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up — Create Your TheKashiYatra Account",
  description: "Create your free TheKashiYatra account to book hotels, boats, packages, and manage your pilgrimage bookings.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
            <span className="text-white text-3xl">ॐ</span>
          </div>
          <h1 className="font-serif text-3xl font-bold gradient-text">Join TheKashiYatra</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Begin your divine journey today</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-luxury border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white text-xl mb-6">Create Your Account</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">First Name</label>
                <input type="text" placeholder="Ramesh" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Last Name</label>
                <input type="text" placeholder="Sharma" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 placeholder-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 placeholder-gray-400" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 placeholder-gray-400" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 placeholder-gray-400" />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" className="mt-1 accent-amber-500" />
              <label htmlFor="terms" className="text-xs text-gray-500 dark:text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-amber-600 hover:underline">Terms & Conditions</Link>
                {" "}and{" "}
                <Link href="/privacy-policy" className="text-amber-600 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all">
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-600 font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
