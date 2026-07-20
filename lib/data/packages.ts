export interface Package {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  includes: string[];
  itinerary: { day: string; activities: string[] }[];
  category: "spiritual" | "heritage" | "combo" | "luxury";
  maxGuests: number;
  badge?: string;
  description: string;
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: "1-day-kashi-darshan",
    name: "1 Day Kashi Darshan",
    duration: "1 Day",
    destinations: ["Varanasi"],
    price: 2499,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    rating: 4.7,
    reviews: 2890,
    includes: ["AC Transport", "Temple Guide", "Boat Ride", "Breakfast", "Prasad"],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "5:00 AM – Sunrise Boat Ride on Ganga",
          "7:00 AM – Kashi Vishwanath Temple Darshan",
          "9:00 AM – Breakfast at local dhaba",
          "10:00 AM – Annapurna Temple & Kal Bhairav",
          "12:00 PM – Sarnath visit",
          "4:00 PM – Evening at Ghats",
          "6:00 PM – Ganga Aarti at Dasaswamedh Ghat",
        ],
      },
    ],
    category: "spiritual",
    maxGuests: 20,
    badge: "Best Value",
    description: "The perfect introduction to Kashi's spiritual essence — visit all major temples and ghats in one day.",
    highlights: ["12 temple visits", "Sunrise boat ride", "Ganga Aarti experience", "Local cuisine"],
  },
  {
    id: "2-days-spiritual-tour",
    name: "2 Days Spiritual Tour",
    duration: "2 Days / 1 Night",
    destinations: ["Varanasi", "Sarnath"],
    price: 5999,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80",
    rating: 4.8,
    reviews: 1560,
    includes: ["Hotel Stay", "AC Transport", "All Meals", "Temple Guide", "2 Boat Rides"],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Sunrise Boat Ride",
          "Kashi Vishwanath Darshan",
          "Sarnath Buddhist Circuit",
          "Evening Ganga Aarti",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Morning Yoga at Assi Ghat",
          "Heritage Walk – Old City",
          "Silk Weaving Workshop",
          "Departure",
        ],
      },
    ],
    category: "spiritual",
    maxGuests: 15,
    badge: "Most Popular",
    description: "A complete spiritual journey through the holy city of Kashi and the Buddhist circuit of Sarnath.",
    highlights: ["Sarnath included", "Heritage walk", "Silk weaving experience", "Yoga session"],
  },
  {
    id: "3-days-heritage-tour",
    name: "3 Days Heritage Tour",
    duration: "3 Days / 2 Nights",
    destinations: ["Varanasi", "Sarnath", "Vindhyachal"],
    price: 9999,
    originalPrice: 14000,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    rating: 4.9,
    reviews: 780,
    includes: ["Premium Hotel", "AC Transport", "All Meals", "Expert Guide", "3 Boat Rides", "Cultural Show"],
    itinerary: [
      { day: "Day 1", activities: ["Arrival & Check-in", "Ghat Walk", "Evening Aarti"] },
      { day: "Day 2", activities: ["Sunrise Boat", "Temples", "Sarnath", "Cultural Show"] },
      { day: "Day 3", activities: ["Vindhyachal", "Heritage Walk", "Shopping", "Departure"] },
    ],
    category: "heritage",
    maxGuests: 12,
    badge: "Heritage Pick",
    description: "Explore Kashi's 5000-year heritage — temples, ghats, Sarnath, and the cultural tapestry of Banaras.",
    highlights: ["Vindhyachal Devi Darshan", "Cultural dance show", "Premium accommodation", "Expert historian guide"],
  },
  {
    id: "kashi-prayagraj",
    name: "Kashi + Prayagraj Combo",
    duration: "4 Days / 3 Nights",
    destinations: ["Varanasi", "Prayagraj"],
    price: 14999,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80",
    rating: 4.7,
    reviews: 560,
    includes: ["Hotel Stay", "AC Coach", "All Meals", "Prayagraj Sangam Boat", "Guides"],
    itinerary: [
      { day: "Day 1", activities: ["Varanasi arrival", "Ganga Aarti"] },
      { day: "Day 2", activities: ["Kashi Temples", "Sarnath"] },
      { day: "Day 3", activities: ["Drive to Prayagraj", "Triveni Sangam"] },
      { day: "Day 4", activities: ["Allahabad Fort", "Anand Bhavan", "Return"] },
    ],
    category: "combo",
    maxGuests: 20,
    badge: "Combo Deal",
    description: "The ultimate Uttar Pradesh pilgrimage — Kashi and Prayagraj (Allahabad) in one epic journey.",
    highlights: ["Triveni Sangam dip", "Allahabad Fort", "Anand Bhavan", "Two sacred cities"],
  },
  {
    id: "kashi-ayodhya",
    name: "Kashi + Ayodhya Tour",
    duration: "5 Days / 4 Nights",
    destinations: ["Varanasi", "Ayodhya"],
    price: 18999,
    originalPrice: 26000,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    rating: 4.8,
    reviews: 890,
    includes: ["Luxury Hotel", "AC Transport", "All Meals", "Expert Guide", "Darshan Assistance"],
    itinerary: [
      { day: "Day 1", activities: ["Varanasi arrival", "Kashi Vishwanath"] },
      { day: "Day 2", activities: ["Sunrise boat", "All major temples"] },
      { day: "Day 3", activities: ["Drive to Ayodhya", "Ram Janmabhoomi"] },
      { day: "Day 4", activities: ["Hanuman Garhi", "Saryu Aarti", "Kanak Bhawan"] },
      { day: "Day 5", activities: ["Morning prayer", "Return to Varanasi", "Departure"] },
    ],
    category: "spiritual",
    maxGuests: 15,
    badge: "Premium Spiritual",
    description: "Visit the two holiest cities of Hinduism — Kashi and Ayodhya — in one divine pilgrimage.",
    highlights: ["Ram Janmabhoomi Darshan", "Saryu Aarti", "Luxury transport", "VIP Darshan"],
  },
  {
    id: "luxury-kashi",
    name: "Luxury Kashi Experience",
    duration: "3 Days / 2 Nights",
    destinations: ["Varanasi"],
    price: 34999,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    rating: 5.0,
    reviews: 234,
    includes: ["5-Star Hotel", "Private Car", "All Gourmet Meals", "Personal Butler", "Private Boat", "Spa"],
    itinerary: [
      { day: "Day 1", activities: ["Luxury hotel check-in", "Private boat sunset cruise", "Fine dining dinner"] },
      { day: "Day 2", activities: ["Sunrise private boat", "VIP Temple Darshan", "Spa treatment", "Cultural evening"] },
      { day: "Day 3", activities: ["Yoga & meditation", "Heritage walk", "Silk shopping", "Private farewell dinner"] },
    ],
    category: "luxury",
    maxGuests: 4,
    badge: "Ultra Luxury",
    description: "The most exclusive Kashi experience — 5-star comfort with deeply personal spiritual encounters.",
    highlights: ["5-star accommodation", "Private guide", "Spa & wellness", "Curated fine dining"],
  },
];
