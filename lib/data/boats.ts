export interface Boat {
  id: string;
  name: string;
  type: "rowing" | "motorized" | "luxury" | "private";
  duration: string;
  timing: string;
  capacity: number;
  price: number;
  pricePerPerson?: number;
  image: string;
  rating: number;
  reviews: number;
  includes: string[];
  description: string;
  highlights: string[];
  badge?: string;
  color: string;
}

export const boats: Boat[] = [
  {
    id: "sunrise-boat",
    name: "Sunrise Boat Ride",
    type: "rowing",
    duration: "1.5 hours",
    timing: "5:00 AM – 6:30 AM",
    capacity: 6,
    price: 800,
    pricePerPerson: 800,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    rating: 4.9,
    reviews: 3420,
    includes: ["Rowing boat", "Life jackets", "Hot tea", "Photography stops"],
    description: "Witness the magical sunrise over the sacred Ganga — the most divine experience in Kashi.",
    highlights: ["Golden hour photography", "Visit burning ghats", "Manikarna Ghat stop", "Calm morning waters"],
    badge: "Most Popular",
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: "ganga-aarti-cruise",
    name: "Evening Ganga Aarti Cruise",
    type: "motorized",
    duration: "2 hours",
    timing: "6:00 PM – 8:00 PM",
    capacity: 20,
    price: 1200,
    pricePerPerson: 1200,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    rating: 4.8,
    reviews: 2180,
    includes: ["Motorboat", "Life jackets", "Flowers for offering", "Aarti viewing"],
    description: "Experience the spectacular Ganga Aarti from the water — a truly transcendental spectacle.",
    highlights: ["Front-row Aarti view", "Flower & diya offering", "Cultural commentary", "Dasaswamedh Ghat"],
    badge: "Must Do",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "private-luxury-boat",
    name: "Private Luxury Cruise",
    type: "luxury",
    duration: "3 hours",
    timing: "Flexible",
    capacity: 8,
    price: 8500,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    rating: 5.0,
    reviews: 456,
    includes: ["Luxury boat", "Personal guide", "Breakfast/Snacks", "Photography", "Champagne"],
    description: "An exclusive private cruise on the sacred Ganga with butler service and personalized itinerary.",
    highlights: ["Private boat", "Butler on board", "Customizable route", "Premium refreshments"],
    badge: "Premium",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "morning-meditation",
    name: "Morning Meditation Sail",
    type: "rowing",
    duration: "1 hour",
    timing: "5:30 AM – 6:30 AM",
    capacity: 4,
    price: 600,
    pricePerPerson: 600,
    image: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=800&q=80",
    rating: 4.7,
    reviews: 890,
    includes: ["Rowing boat", "Meditation guide", "Life jackets", "Herbal tea"],
    description: "Begin your day with gentle meditation as you drift along the Ganga at dawn.",
    highlights: ["Guided meditation", "Silent sailing", "Sunrise views", "Spiritual experience"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "all-ghats-tour",
    name: "All Ghats Explorer",
    type: "motorized",
    duration: "4 hours",
    timing: "7:00 AM – 11:00 AM",
    capacity: 15,
    price: 1800,
    pricePerPerson: 1800,
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
    rating: 4.6,
    reviews: 1240,
    includes: ["Motorboat", "Guide", "Stops at 10 ghats", "Water bottle"],
    description: "Visit all 88 ghats of Kashi from the Ganga — the complete Varanasi experience.",
    highlights: ["88 ghats overview", "Expert commentary", "10 major stops", "Cultural insights"],
    color: "from-blue-500 to-indigo-600",
  },
];
