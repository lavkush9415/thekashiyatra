export interface Experience {
  id: string;
  name: string;
  category: "spiritual" | "cultural" | "wellness" | "adventure";
  duration: string;
  timing: string;
  price: number;
  image: string;
  icon: string;
  rating: number;
  reviews: number;
  description: string;
  includes: string[];
  highlights: string[];
  badge?: string;
  color: string;
  bgGradient: string;
}

export const experiences: Experience[] = [
  {
    id: "ganga-aarti",
    name: "Ganga Aarti Ceremony",
    category: "spiritual",
    duration: "1.5 hours",
    timing: "6:30 PM – 8:00 PM",
    price: 0,
    image: "/gangaaarti1.jpg",
    icon: "🪔",
    rating: 5.0,
    reviews: 8920,
    description: "Witness the magnificent Ganga Aarti at Dasaswamedh Ghat — a profound ritual of fire, chanting, and devotion.",
    includes: ["Guided viewing spot", "Cultural commentary", "Photo guidance", "Flowers for offering"],
    highlights: ["Best viewing spot", "Evening ritual", "Photography tips", "Spiritual immersion"],
    badge: "Free Experience",
    color: "text-orange-500",
    bgGradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: "temple-tour",
    name: "Kashi Temple Circuit",
    category: "spiritual",
    duration: "4 hours",
    timing: "6:00 AM – 10:00 AM",
    price: 1200,
    image: "/kashiyatra.jpg",
    icon: "🛕",
    rating: 4.9,
    reviews: 3420,
    description: "Visit the 12 most sacred temples of Kashi with a knowledgeable priest-guide who shares ancient lore.",
    includes: ["Expert guide", "Prasad", "Temple entry assistance", "Transport"],
    highlights: ["Kashi Vishwanath", "Kal Bhairav", "Annapurna Temple", "Sankat Mochan"],
    badge: "Spiritual Favorite",
    color: "text-red-500",
    bgGradient: "from-red-500/20 to-pink-500/20",
  },
  // {
  //   id: "rudrabhishek",
  //   name: "Rudrabhishek Puja",
  //   category: "spiritual",
  //   duration: "3 hours",
  //   timing: "5:00 AM – 8:00 AM",
  //   price: 3500,
  //   image: "https://images.unsplash.com/photo-1609178846337-c1c2b7c1b69e?w=800&q=80",
  //   icon: "🙏",
  //   rating: 4.9,
  //   reviews: 1240,
  //   description: "A sacred Vedic ritual performed by learned priests at Kashi Vishwanath — a deeply transformative experience.",
  //   includes: ["Puja materials", "Priest", "Prasad", "Certificate", "Blessings"],
  //   highlights: ["Vedic chanting", "Personal blessings", "Abhishek ceremony", "Prasad distribution"],
  //   badge: "Sacred Ritual",
  //   color: "text-purple-500",
  //   bgGradient: "from-purple-500/20 to-indigo-500/20",
  // },
  // {
  //   id: "pind-daan",
  //   name: "Pind Daan at Manikarnika",
  //   category: "spiritual",
  //   duration: "2 hours",
  //   timing: "Flexible",
  //   price: 5000,
  //   image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80",
  //   icon: "🕯️",
  //   rating: 4.8,
  //   reviews: 780,
  //   description: "Perform the sacred Pind Daan rituals at Manikarnika Ghat — believed to liberate ancestors from the cycle of rebirth.",
  //   includes: ["Priest", "All puja materials", "Ganga Jal", "Pitru Paksha guidance"],
  //   highlights: ["Manikarnika Ghat", "Experienced priests", "Ancestral liberation", "Vedic rituals"],
  //   badge: "Ancestral Rites",
  //   color: "text-gray-700",
  //   bgGradient: "from-gray-500/20 to-slate-500/20",
  // },
  {
    id: "subah-e-banaras",
    name: "Subah-e-Banaras",
    category: "cultural",
    duration: "2 hours",
    timing: "5:30 AM – 7:30 AM",
    price: 800,
    image: "/sunriseboat.png",
    icon: "🌅",
    rating: 4.9,
    reviews: 2140,
    description: "Experience the magical 'Morning of Banaras' — the cultural sunrise program at Assi Ghat with classical music.",
    includes: ["Cultural program", "Classical music", "Yoga demo", "Chai"],
    highlights: ["Live classical music", "Morning yoga", "Cultural storytelling", "Sunrise views"],
    badge: "Cultural Gem",
    color: "text-amber-500",
    bgGradient: "from-amber-500/20 to-orange-500/20",
  },
  // {
  //   id: "yoga-assi-ghat",
  //   name: "Yoga at Assi Ghat",
  //   category: "wellness",
  //   duration: "1.5 hours",
  //   timing: "6:00 AM – 7:30 AM",
  //   price: 500,
  //   image: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=800&q=80",
  //   icon: "🧘",
  //   rating: 4.8,
  //   reviews: 1890,
  //   description: "Practice authentic Hatha Yoga and Pranayama by the sacred Ganga with certified instructors.",
  //   includes: ["Yoga mat", "Instructor", "Herbal tea", "Meditation session"],
  //   highlights: ["Hatha Yoga", "Pranayama", "Riverside meditation", "Certified instructors"],
  //   badge: "Wellness",
  //   color: "text-green-500",
  //   bgGradient: "from-green-500/20 to-teal-500/20",
  // },
  // {
  //   id: "silk-weaving",
  //   name: "Banarasi Silk Workshop",
  //   category: "cultural",
  //   duration: "3 hours",
  //   timing: "10:00 AM – 1:00 PM",
  //   price: 1500,
  //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  //   icon: "🧵",
  //   rating: 4.7,
  //   reviews: 560,
  //   description: "Learn the ancient art of Banarasi silk weaving from master weavers and create your own piece.",
  //   includes: ["Master weaver session", "Try weaving", "Silk fabric sample", "Chai & snacks"],
  //   highlights: ["UNESCO heritage craft", "Hands-on weaving", "Silk fabric gift", "Authentic workshops"],
  //   color: "text-pink-500",
  //   bgGradient: "from-pink-500/20 to-rose-500/20",
  // },
  // {
  //   id: "heritage-walk",
  //   name: "Old City Heritage Walk",
  //   category: "cultural",
  //   duration: "3 hours",
  //   timing: "7:00 AM – 10:00 AM",
  //   price: 900,
  //   image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80",
  //   icon: "🚶",
  //   rating: 4.6,
  //   reviews: 1230,
  //   description: "Navigate the ancient labyrinthine lanes of Varanasi with an expert historian guide.",
  //   includes: ["Expert guide", "Heritage map", "Breakfast at local spot", "Ghats visit"],
  //   highlights: ["Ancient galis", "Street food tasting", "Photo stops", "Local stories"],
  //   color: "text-blue-500",
  //   bgGradient: "from-blue-500/20 to-cyan-500/20",
  // },
];

export interface CabService {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  vehicleType: string;
  duration: string;
  features: string[];
  badge: string;
}

export const cabServices: CabService[] = [
  {
  id: 1,
  title: 'Dzire Taxi Service',
  subtitle: '4 Seater • Local & Outstation Trips',
  image: '/dzire.jpg',
  price: 2500,
  vehicleType: 'Dzire (4 Seater)',
  duration: 'Full Day',
  features: [
    'Varanasi Local - ₹2500',
    'Prayagraj - ₹3500',
    'Ayodhya - ₹6000',
    'Bodhgaya - ₹6500',
    'Prayagraj + Ayodhya - ₹7500',
  ],
  badge: 'Most Booked',
},
  {
  id: 2,
  title: 'City Sightseeing',
  subtitle: 'Carens / Ertiga • 6 Seater',
  image: '/carens.jpg',
  price: 3500,
  vehicleType: 'Carens / Ertiga',
  duration: 'Full Day',
  features: [
    'Varanasi Local - ₹3500',
    'Prayagraj - ₹4500',
    'Ayodhya - ₹7000',
    'Bodhgaya - ₹7500',
    'Prayagraj + Ayodhya - ₹8500',
  ],
  badge: 'Most Booked',
},
  {
  id: 3,
  title: 'Group Tour Vehicle',
  subtitle: '8 Seater • Local & Outstation Trips',
  image: '/urbania1.jpg',
  price: 3500,
  vehicleType: '8 Seater',
  duration: 'Full Day',
  features: [
    'Varanasi Local - ₹3500',
    'Prayagraj - ₹5000',
    'Ayodhya - ₹7500',
    'Bodhgaya - ₹8000',
    'Prayagraj + Ayodhya - ₹9000',
  ],
  badge: 'Group Travel',
},
  {
  id: 4,
  title: 'Varanasi Tour Package',
  subtitle: '2 Nights / 3 Days • 4 People',
  image: '/crysta1.jpg',
  price: 22000,
  vehicleType: '4 Guests',
  duration: '2N / 3D',
  features: [
    '3 Star Hotel',
    'Breakfast Included',
    'Airport Pickup & Drop',
    'Local City Tour',
    '₹5500 Per Person',
  ],
  badge: 'Best Value',
},
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review: "Kashi Darshan made my first Varanasi trip absolutely magical. The sunrise boat ride was ethereal, and our guide Rajan was incredibly knowledgeable. Every detail was taken care of — from hotel check-in to temple VIP darshan. Will definitely return!",
    service: "2 Days Spiritual Tour",
    date: "March 2024",
    verified: true,
  },
  {
    id: "t2",
    name: "Rajesh Gupta",
    location: "Delhi, NCR",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review: "The Ganga Aarti from the boat was the most profound experience of my life. The whole package — hotel, boat, temples — was seamlessly organized. Kashi Darshan is truly the best way to experience Banaras.",
    service: "Evening Ganga Aarti Cruise",
    date: "January 2024",
    verified: true,
  },
  {
    id: "t3",
    name: "Anita Menon",
    location: "Bengaluru, Karnataka",
    avatar: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    review: "I traveled alone as a woman and felt completely safe. The team was professional, the hotel was fantastic, and the Rudrabhishek puja arranged at Kashi Vishwanath temple was deeply meaningful. Highly recommended!",
    service: "Rudrabhishek + Hotel Package",
    date: "February 2024",
    verified: true,
  },
  {
    id: "t4",
    name: "Suresh Patel",
    location: "Ahmedabad, Gujarat",
    avatar: "https://i.pravatar.cc/150?img=67",
    rating: 4,
    review: "Excellent service for our family pilgrimage trip. The Kashi + Ayodhya combo was well-planned. Hotel quality was great, cab drivers were professional and on time. A small hiccup with the temple timing was quickly resolved.",
    service: "Kashi + Ayodhya Tour",
    date: "December 2023",
    verified: true,
  },
  {
    id: "t5",
    name: "Meera Krishnan",
    location: "Chennai, Tamil Nadu",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review: "The yoga at Assi Ghat at sunrise with the Ganga flowing by was absolutely transformative. The Subah-e-Banaras cultural program with classical music was breathtaking. A spiritual recharge I needed badly!",
    service: "Wellness + Spiritual Package",
    date: "November 2023",
    verified: true,
  },
  {
    id: "t6",
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 5,
    review: "Booked the luxury package for my parents' 50th anniversary — they were overjoyed! The palace hotel, private boat, and VIP darshan were perfectly curated. Kashi Darshan truly delivers a 10-lakh experience!",
    service: "Luxury Kashi Experience",
    date: "October 2023",
    verified: true,
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: "/ghats.jpg",
    alt: "Sunrise over Ganga Varanasi",
    category: "ghats",
    width: 800,
    height: 600,
  },
  {
    id: "g2",
    src: "/aarti.jpg",
    alt: "Ganga Aarti at Dasaswamedh Ghat",
    category: "aarti",
    width: 800,
    height: 1000,
  },
  {
    id: "g3",
    src: "/kashivishwanath.png",
    alt: "Kashi Vishwanath Temple",
    category: "temples",
    width: 800,
    height: 600,
  },
  {
    id: "g4",
    src: "/boats.jpg",
    alt: "Boats at Varanasi Ghat",
    category: "boats",
    width: 800,
    height: 700,
  },
  {
    id: "g5",
    src: "/sunriseboat.png",
    alt: "Morning Yoga at Assi Ghat",
    category: "wellness",
    width: 800,
    height: 600,
  },
  {
    id: "g6",
    src: "/ghats.jpg",
    alt: "Varanasi Ghats Panorama",
    category: "ghats",
    width: 800,
    height: 500,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Banarasi Silk Sarees",
    category: "culture",
    width: 800,
    height: 600,
  },
  {
    id: "g8",
    src: "/h2.jpeg",
    alt: "Heritage Hotel Varanasi",
    category: "hotels",
    width: 800,
    height: 600,
  },
  {
    id: "g9",
    src: "/sunset.jpg",
    alt: "Evening at the Ghats",
    category: "ghats",
    width: 800,
    height: 900,
  },
];

export const faqs = [
  {
    question: "What is the best time to visit Varanasi?",
    answer: "The best time to visit Varanasi is October to March when the weather is pleasant (15–25°C). The Ganga Aarti is spectacular year-round, but winter months offer the most comfortable experience for sightseeing, boat rides, and temple visits.",
  },
  {
    question: "How do I book a boat ride for Ganga Aarti?",
    answer: "You can book directly through our website by selecting the 'Boats' section, choosing your preferred boat type, date, and time. We offer morning sunrise rides, evening Aarti cruises, and private luxury boats. Instant booking confirmation is sent via email and WhatsApp.",
  },
  {
    question: "Are your hotels verified and safe?",
    answer: "Yes! All hotels listed on Kashi Darshan are personally inspected by our team. We verify hygiene standards, safety measures, service quality, and authenticity before listing them. We have partnerships with 50+ hotels ranging from heritage properties to luxury palaces.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 48 hours before your booking date. Cancellations within 24–48 hours receive a 50% refund. Cancellations within 24 hours are non-refundable except in special circumstances. Please review our detailed Cancellation Policy page.",
  },
  {
    question: "Can I customize a package as per my requirements?",
    answer: "Absolutely! Our team specializes in creating bespoke pilgrimage and travel experiences. Contact us via WhatsApp or the contact form, share your requirements, budget, and travel dates, and we'll craft a personalized Kashi experience just for you.",
  },
  {
    question: "Is Varanasi safe for solo female travelers?",
    answer: "Yes, Varanasi is generally safe for solo female travelers, especially with a trusted guide. Kashi Darshan provides female-friendly accommodations, verified guides, and 24/7 support. We recommend our guided packages for solo travelers for maximum safety and peace of mind.",
  },
  {
    question: "How do I reach Varanasi?",
    answer: "Varanasi (Kashi) is well-connected by air (Lal Bahadur Shastri Airport), rail (Varanasi Junction & Manduadih station), and road (NH-2, NH-7). We offer airport and railway station pickup services at affordable rates.",
  },
];

export const stats = [
  { label: "Happy Pilgrims", value: 50000, suffix: "+" },
  { label: "Partner Hotels", value: 120, suffix: "+" },
  { label: "Successful Tours", value: 25000, suffix: "+" },
  { label: "Years of Service", value: 8, suffix: "+" },
];
