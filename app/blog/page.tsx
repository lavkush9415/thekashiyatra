import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — TheKashiYatra Travel Guide & Spiritual Insights",
  description: "Read our Varanasi travel guides, temple insights, ghat stories, and tips for the perfect pilgrimage to Kashi.",
};

const blogPosts = [
  {
    id: "best-time-visit-varanasi",
    title: "Best Time to Visit Varanasi: A Complete Seasonal Guide",
    excerpt: "Discover the perfect time to experience Varanasi's spiritual energy, ghats, and cultural festivals throughout the year.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Travel Guide",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Pandit Raghav Mishra",
  },
  {
    id: "ganga-aarti-guide",
    title: "The Complete Guide to Ganga Aarti — What to Expect",
    excerpt: "Everything you need to know about the spectacular Ganga Aarti ceremony at Dasaswamedh Ghat — timings, best spots, and tips.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Spiritual Guide",
    readTime: "7 min read",
    date: "February 28, 2024",
    author: "Priya Shukla",
  },
  {
    id: "varanasi-ghats-guide",
    title: "The 88 Ghats of Varanasi: A Pilgrim's Complete Guide",
    excerpt: "Explore all 88 sacred ghats of Varanasi — their history, significance, and the rituals performed at each.",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
    category: "Heritage",
    readTime: "10 min read",
    date: "January 20, 2024",
    author: "Arjun Tiwari",
  },
  {
    id: "kashi-vishwanath-darshan-tips",
    title: "Kashi Vishwanath Temple: Everything About the New Corridor",
    excerpt: "With the new Kashi Vishwanath Corridor, temple visits have transformed. Here's what's changed and how to plan your darshan.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    category: "Temple Guide",
    readTime: "6 min read",
    date: "December 10, 2023",
    author: "Pandit Raghav Mishra",
  },
  {
    id: "banarasi-silk-guide",
    title: "Banarasi Silk: The Weaver's Story & How to Buy Authentic",
    excerpt: "Discover the 500-year-old craft of Banarasi silk weaving and learn how to identify and buy authentic pieces.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Culture",
    readTime: "4 min read",
    date: "November 5, 2023",
    author: "Sunita Devi",
  },
  {
    id: "varanasi-street-food",
    title: "Varanasi Street Food Guide: What to Eat & Where",
    excerpt: "From malaiyyo to kachori-sabzi, explore the legendary street food of Banaras that locals swear by.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80",
    category: "Food & Culture",
    readTime: "5 min read",
    date: "October 22, 2023",
    author: "Priya Shukla",
  },
];

const categories = ["All", "Travel Guide", "Spiritual Guide", "Heritage", "Temple Guide", "Culture", "Food & Culture"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            📖 Kashi Chronicles
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Travel Blog</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Stories, guides, and insights from the eternal city of Kashi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600 transition-all first:bg-gradient-to-r first:from-[#8B4513] first:to-[#FF9933] first:text-white first:border-transparent">
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-10">
          <Link href={`/blog/${blogPosts[0].id}`} className="group relative block h-80 sm:h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-3">{blogPosts[0].category}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{blogPosts[0].title}</h2>
              <p className="text-white/70 text-sm mb-3 line-clamp-2">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-white/50 text-xs">
                <span>{blogPosts[0].author}</span>
                <span>·</span>
                <span>{blogPosts[0].date}</span>
                <span>·</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold text-gray-700 dark:text-gray-200 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF9933] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
