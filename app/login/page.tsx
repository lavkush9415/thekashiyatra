import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login — Kashi Darshan",
  description: "Login to your Kashi Darshan account to manage bookings, view history, and more.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
            <span className="text-white text-3xl">ॐ</span>
          </div>
          <h1 className="font-serif text-3xl font-bold gradient-text">Kashi Darshan</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Welcome back, pilgrim</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-luxury border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white text-xl mb-6">Sign In to Your Account</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Password</label>
                <Link href="/forgot-password" className="text-xs text-amber-600 hover:underline">Forgot password?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center gap-3">
              <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs text-gray-400">or continue with</span>
              <span className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <a href="https://wa.me/919876543210?text=I+want+to+login+to+Kashi+Darshan" className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="text-green-500">💬</span> WhatsApp
              </a>
            </div>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-amber-600 font-semibold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
