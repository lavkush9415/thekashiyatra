import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About TheKashiYatra — Our Story & Mission",
  description:
    "Learn about TheKashiYatra — founded in 2016 to provide authentic, premium pilgrimage experiences in Varanasi. Our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/kashiyatrabg.jpg"
          alt="Kashi Vishwanath Temple"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
              About TheKashiYatra
            </h1>
            <p className="text-white/80 text-xl max-w-2xl">
              Born from devotion, built on trust.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full mb-4">Our Mission</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Making Sacred Kashi <span className="gradient-text">Accessible to All</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Founded in 2016 by a team of devoted Varanasi locals and travel professionals, TheKashiYatra was born from a simple belief: every pilgrim deserves a seamless, safe, and spiritually fulfilling journey to the ancient city of Kashi.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Over 8 years, we have helped over 50,000 pilgrims from across India and the world experience the divine energy of Varanasi — from the first rays of the sun on the Ganga to the golden flames of the Ganga Aarti.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe travel is not just about visiting places — it&apos;s about transformation. That&apos;s why every package we design, every hotel we recommend, and every experience we curate is chosen with the pilgrim&apos;s soul in mind.
            </p>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-luxury">
            <Image
              src="/kashivishwanath.png"
              alt="Sunrise over Ganga"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/20 to-transparent" />
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">Our <span className="gradient-text">Values</span></h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-amber-300" />
            <span className="text-amber-500">✦</span>
            <span className="h-px w-12 bg-amber-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "🙏", title: "Devotion", description: "Every service we offer is imbued with reverence for Kashi's sacred traditions." },
            { icon: "🛡️", title: "Trust", description: "Transparency, honesty, and reliability form the foundation of every booking." },
            { icon: "⭐", title: "Excellence", description: "We accept nothing less than the best for our pilgrims — in service, stays, and experiences." },
            { icon: "🌿", title: "Responsibility", description: "We promote sustainable, culturally sensitive tourism that respects Varanasi's heritage." },
          ].map((val) => (
            <div key={val.title} className="bg-white dark:bg-gray-800 rounded-3xl p-7 shadow-card border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{val.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our <span className="gradient-text">Team</span></h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-amber-300" />
            <span className="text-amber-500">✦</span>
            <span className="h-px w-12 bg-amber-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Bhai Lal Yadav", role: "Founder & Spiritual Guide", src: "/founder.jpeg" },
            { name: "Pratima Yadav", role: "Head of Operations", src: "/pratima1.jpeg" },
            // { name: "Arjun Tiwari", role: "Travel Experience Lead", img: "https://i.pravatar.cc/200?img=65" },
            { name: "Chanchal Yadav", role: "Guest Relations Manager", src: "/chanchal.jpeg" },
          ].map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-amber-100 dark:ring-amber-500/20 group-hover:ring-amber-300 dark:group-hover:ring-amber-500 transition-all">
                <Image
  src={member.src}
  alt={member.name}
  fill
  sizes="96px"
  className="object-cover"
/>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-amber-600 dark:text-amber-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
