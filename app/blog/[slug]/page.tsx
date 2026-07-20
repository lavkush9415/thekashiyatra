import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorImg: string;
  authorRole: string;
  tags: string[];
}> = {
  "best-time-visit-varanasi": {
    title: "Best Time to Visit Varanasi: A Complete Seasonal Guide",
    excerpt: "Discover the perfect time to experience Varanasi's spiritual energy, ghats, and cultural festivals throughout the year.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    category: "Travel Guide",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Pandit Raghav Mishra",
    authorImg: "https://i.pravatar.cc/100?img=70",
    authorRole: "Founder & Spiritual Guide",
    tags: ["Varanasi", "Travel Planning", "Seasons", "Festivals"],
    content: `
Varanasi, the eternal city, welcomes pilgrims and travelers throughout the year — but certain seasons offer a uniquely divine experience. Here's our complete guide.

## 🌸 October to March — The Golden Season

This is undeniably the **best time to visit Varanasi**. The weather is cool and pleasant (15°C–25°C), making long walks along the ghats, sunrise boat rides, and temple visits comfortable.

**Highlights:**
- **Dev Deepawali (November)**: The ghats transform into a sea of 1 million diyas. It's arguably the most spectacular sight in all of India.
- **Ganga Mahotsav** (November): A 5-day cultural festival celebrating the Ganga.
- **Maha Shivaratri** (February/March): The city erupts in chants of "Har Har Mahadev." Lakhs of devotees throng the ghats.
- **Basant Panchami**: Kite festivals and yellow-clad devotees fill the city.

**Pro tip:** Book your accommodation at least 2 months in advance during November and December — hotels fill up fast.

## ☀️ April to June — Hot but Spiritual

Temperatures climb to 40°C+, but the spiritual energy doesn't dim. The ghats are less crowded, and you'll experience a more authentic, local side of Varanasi.

**Highlights:**
- **Ganga Dashami** (May/June): A very important festival celebrating the descent of Ganga from heaven.
- Budget travelers find better hotel rates during this period.
- Early morning (4–6 AM) boat rides are magical before the heat sets in.

## 🌧️ July to September — Monsoon Magic

The monsoon transforms Varanasi's landscape. The Ganga rises dramatically, flooding some lower ghats, and the city takes on an ethereal, misty quality.

**Highlights:**
- **Sawan (Holy Month of Shiva)**: Every Monday, the city buzzes with Kanwar Yatris.
- **Nag Panchami & Raksha Bandhan**: Colorful celebrations at temples.
- Lush greenery around Sarnath and Vindhyachal.

⚠️ **Caution:** Boat rides may be restricted during heavy flood months (August). Always check with local operators.

## 🪔 Best Festivals to Plan Around

| Festival | Month | Experience |
|----------|-------|-----------|
| Dev Deepawali | November | 1 million lamps on the ghats |
| Maha Shivaratri | Feb/March | All-night vigil, massive crowds |
| Ganga Mahotsav | November | Classical music, cultural shows |
| Holi | March | Wild colors in the lanes |
| Dussehra | October | Largest Ravan effigy in Asia at Ramnagar |

## 🛏️ Our Recommendation

For **first-time visitors**, plan your trip in **October, November, or February**. The weather is perfect, the festivals are vibrant, and every moment by the Ganga feels like a blessing.

For the **complete pilgrimage experience** — the kind that transforms you — nothing beats the spiritual charge of **Maha Shivaratri in Varanasi**.

Ready to plan your trip? [Explore our packages](/packages) or [contact our team](/contact) for a personalized itinerary.
    `,
  },
  "ganga-aarti-guide": {
    title: "The Complete Guide to Ganga Aarti — What to Expect",
    excerpt: "Everything you need to know about the spectacular Ganga Aarti ceremony at Dasaswamedh Ghat — timings, best spots, and tips.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    category: "Spiritual Guide",
    readTime: "7 min read",
    date: "February 28, 2024",
    author: "Priya Shukla",
    authorImg: "https://i.pravatar.cc/100?img=47",
    authorRole: "Head of Operations",
    tags: ["Ganga Aarti", "Varanasi", "Spiritual", "Photography"],
    content: `
The **Ganga Aarti** at Dasaswamedh Ghat is one of the most profound spiritual spectacles on Earth. Every evening, as the sun sets over Mother Ganga, seven young priests perform a synchronized ritual of fire, incense, and devotion that has continued unbroken for centuries.

## What Is Ganga Aarti?

Aarti is a Hindu ritual of worship in which light is offered to a deity. At Dasaswamedh Ghat, this offering is made to Mother Ganga herself — and the scale and grandeur of it is unlike anything else you'll witness.

Seven brass lamps, each holding multiple wicks, are whirled in circular patterns. Incense fills the air. Conch shells blow. Mantras echo. And thousands of devotees stand transfixed.

## ⏰ Timings (2024)

| Month | Evening Aarti Time |
|-------|-------------------|
| October – February | 6:30 PM |
| March – May | 7:00 PM |
| June – September | 7:15 PM |

*Also: Morning (Subah-e-Banaras) Aarti takes place at sunrise (5:30–6:00 AM). Less crowded, equally magical.*

## 🏖️ Best Viewing Spots

1. **Boat on the Ganga** (⭐⭐⭐⭐⭐) — The best view by far. Watching from the river gives you the full panorama of the ghats, the lights, and the crowd. Book a boat with us at least 1 hour before.

2. **Dasaswamedh Ghat Steps** — Free but crowded. Arrive 45 minutes early to secure a good spot near the front.

3. **Nearby Ghats** — Maan Mandir and Rajendra Prasad Ghats offer side-angle views with fewer crowds.

## 📸 Photography Tips

- **Golden hour shots**: Position your boat slightly to the north of Dasaswamedh for the best angle.
- **Exposure**: Use a tripod or steady boat rail. Low light requires longer exposures.
- **Avoid flash**: It disturbs other devotees and the spiritual atmosphere.
- **Best shot**: The reflection of the diyas on the Ganga surface.

## 🙏 Spiritual Etiquette

- Remove footwear before entering the ghat steps area.
- Participate if you wish — offer flowers or diyas on a leaf boat (₹10–20 from vendors).
- Maintain silence or speak softly during the ritual.
- Photography is generally allowed but be respectful.

## 🚫 Common Mistakes to Avoid

- **Don't arrive late** — the crowd becomes impenetrable after the aarti begins.
- **Don't leave belongings unattended** — the area is busy.
- **Don't trust random touts** — book your boat ride through a verified operator like us.

## Our Recommendation

Book our **Ganga Aarti Boat Experience** — we guarantee:
- Private or semi-private boats with cushioned seating
- Expert guide to explain the ritual
- Flower & diya for offering
- Drop back to your hotel

[Book Now →](/experiences)
    `,
  },
  "varanasi-ghats-guide": {
    title: "The 88 Ghats of Varanasi: A Pilgrim's Complete Guide",
    excerpt: "Explore all 88 sacred ghats of Varanasi — their history, significance, and the rituals performed at each.",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=1200&q=80",
    category: "Heritage",
    readTime: "10 min read",
    date: "January 20, 2024",
    author: "Arjun Tiwari",
    authorImg: "https://i.pravatar.cc/100?img=65",
    authorRole: "Travel Experience Lead",
    tags: ["Ghats", "Heritage", "Varanasi", "Pilgrimage"],
    content: `
Varanasi's 88 ghats stretch for nearly 6.5 km along the western bank of the Ganga, creating one of the most extraordinary riverfront panoramas in the world. Each ghat has its own story, its own deity, and its own living tradition.

## The Most Sacred Ghats

### 🔥 Manikarnika Ghat — The Great Cremation Ghat

The most sacred burning ghat in the world. Hindus believe that those cremated here achieve moksha (liberation from the cycle of rebirth). The fires here never go out — they've been burning for centuries.

**Visiting etiquette:**
- Do not photograph cremations
- Dress modestly and cover your head
- Do not eat or drink on the ghat

### 🙏 Dasaswamedh Ghat — The King of Ghats

The most vibrant and famous ghat. Home to the nightly Ganga Aarti. According to legend, Brahma performed a 10-horse sacrifice (Dasa Ashwamedha Yajna) here when welcoming Lord Shiva.

**Best time:** Evening, for the Ganga Aarti.

### 🌅 Assi Ghat — Where the River Meets Serenity

Where the Assi river merges with the Ganga. This is the southernmost of the main ghats and a hub for yoga and morning meditation. The sunrise here is extraordinary.

**Best time:** 5:30–7:00 AM for Subah-e-Banaras (Morning of Banaras) festival.

### 🏛️ Man Mandir Ghat — The Observatory Ghat

Built by Maharaja Man Singh of Jaipur. Houses Jantar Mantar, an astronomical observatory. The ghat structure itself is an architectural marvel.

### 🚣 Panchganga Ghat — Five Rivers Confluence

Believed to be the meeting point of five sacred rivers (Ganga, Yamuna, Saraswati, Kiran, and Dhutpapa). One of the most important bathing ghats.

## The Morning Walk Route (Our Recommendation)

The best way to experience the ghats is a morning walk from **Assi Ghat to Manikarnika Ghat** — about 3 km along the riverbank. Start at 5:30 AM to catch the sunrise.

**Route:** Assi → Tulsi → Hanuman → Harischandra → Kedar → Dasaswamedh → Man Mandir → Manikarnika

**Time required:** 2.5–3 hours at a leisurely pace.

Our [heritage walk experience](/experiences) covers this entire route with an expert local guide who brings each ghat alive with stories.

## Tips for Ghat Visits

- **Wear comfortable shoes** — you'll walk on uneven stone steps
- **Carry water** — especially in summer
- **Be respectful** of rituals in progress
- **Beware of touts** at Manikarnika — many claim to collect for the "burning ghat fund"
- **Sunrise is magical** — set that alarm!
    `,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Blog Post Not Found — Kashi Darshan" };
  return {
    title: `${post.title} — Kashi Darshan Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-amber-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Parse basic markdown-like content to HTML
  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    const elements: React.ReactElement[] = [];
    let tableRows: string[][] = [];
    let inTable = false;
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (!line.trim()) {
        if (inTable && tableRows.length > 0) {
          elements.push(
            <div key={`table-${i}`} className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {tableRows.map((row, ri) => (
                    <tr key={ri} className={ri === 0 ? "bg-amber-50 dark:bg-amber-500/10 font-semibold" : "border-b border-gray-100 dark:border-gray-700"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="py-2.5 px-3 text-gray-700 dark:text-gray-300">{cell.trim()}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          tableRows = [];
          inTable = false;
        }
        i++;
        continue;
      }

      if (line.startsWith("| ")) {
        if (!line.includes("---")) {
          inTable = true;
          tableRows.push(line.split("|").filter(c => c.trim()).map(c => c.trim()));
        }
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-serif text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-semibold text-xl text-gray-900 dark:text-white mt-6 mb-2">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
        elements.push(
          <p key={i} className="font-semibold text-gray-800 dark:text-gray-200 my-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("- ")) {
        const items: string[] = [line];
        while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
          i++;
          items.push(lines[i]);
        }
        elements.push(
          <ul key={i} className="space-y-1.5 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <span className="text-amber-500 mt-1 shrink-0">✦</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-600 hover:underline">$1</a>') }} />
              </li>
            ))}
          </ul>
        );
      } else if (line.startsWith("⚠️") || line.startsWith("*Note") || line.startsWith("*Caution")) {
        elements.push(
          <div key={i} className="my-4 px-4 py-3 bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-400 rounded-r-xl text-amber-800 dark:text-amber-300 text-sm">
            {line}
          </div>
        );
      } else {
        elements.push(
          <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed my-3"
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*([^*]+)\*\*/g, "<strong class='text-gray-800 dark:text-gray-200'>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-600 hover:underline font-medium">$1</a>') }}
          />
        );
      }
      i++;
    }
    return elements;
  };

  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover brightness-60" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Image src={post.authorImg} alt={post.author} width={32} height={32} className="rounded-full" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{post.author}</p>
                  <p className="text-xs text-gray-400">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            </div>

            {/* Article content */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs rounded-full border border-amber-200 dark:border-amber-500/20">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-sm text-gray-500">Share:</span>
              <a href={`https://wa.me/?text=${encodeURIComponent(post.title)}`} className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors">WhatsApp</a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} className="px-3 py-1.5 bg-gray-800 text-white text-xs rounded-full hover:bg-gray-900 transition-colors">X (Twitter)</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            {/* CTA */}
            <div className="bg-gradient-to-br from-[#8B4513] to-[#FF9933] rounded-2xl p-5 text-white">
              <div className="text-2xl mb-2">🙏</div>
              <h3 className="font-semibold mb-2 text-sm">Plan Your Kashi Journey</h3>
              <p className="text-white/80 text-xs mb-4">Let our experts craft the perfect pilgrimage for you.</p>
              <Link href="/contact" className="block text-center py-2 bg-white text-[#8B4513] rounded-xl text-xs font-semibold hover:shadow-lg transition-all">
                Get Free Quote
              </Link>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Related Articles</h3>
              <div className="space-y-3">
                {relatedPosts.map(([key, rPost]) => (
                  <Link key={key} href={`/blog/${key}`} className="flex gap-3 group">
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0">
                      <Image src={rPost.image} alt={rPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">{rPost.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{rPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-amber-50 dark:bg-amber-500/10 rounded-2xl p-4 border border-amber-100 dark:border-amber-500/20">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Book a Hotel", href: "/hotels" },
                  { label: "Boat Rides", href: "/boats" },
                  { label: "Tour Packages", href: "/packages" },
                  { label: "Experiences", href: "/experiences" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 hover:underline">
                    <span>→</span> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
