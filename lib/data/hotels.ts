export interface RoomType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  capacity: string;
  size?: string;
  description: string;
  images: string[];
  amenities: string[];
  badge?: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
}

export interface GuestReview {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  amenities: string[];
  category: "luxury" | "premium" | "standard" | "heritage";
  description: string;
  highlights: string[];
  checkIn: string;
  checkOut: string;
  badge?: string;
  roomTypes: RoomType[];
  nearbyAttractions: NearbyAttraction[];
  guestReviewsList: GuestReview[];
}

export const hotels: Hotel[] = [
  {
    id: "varanasi-heritage-hotel",
    name: "Varanasi Heritage Hotel",
    location: "Assi Ghat, Varanasi",
    rating: 4.9,
    reviews: 1248,
    price: 2500,
    originalPrice: 2500,
    image: "/dh1.jpeg",
    images: [
      "/dh.jpeg",
      "/dh2.jpeg",
      "/dh3.jpeg", "/dh5.jpeg", "/dtwinh1.jpeg", "/dtwinh2.jpeg", "/dtwinh3.jpeg", "/dtwinh5.jpeg"
    ],
    amenities: ["Restaurant", "WiFi", "Parking"],
    category: "luxury",
    description: "A heritage palace hotel offering the finest luxury experience in Varanasi with royal rooms and impeccable service.",
    highlights: ["Heritage property", "Royal interiors", "Private garden", "Butler service"],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    badge: "Best Seller",
    roomTypes: [
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 2500,
        originalPrice: 2500,
        capacity: "2 Adults",
        size: "220 sq.ft",
        description: "Warmly appointed rooms with heritage furnishings, garden views, and all essential modern comforts for a restful stay.",
        images: ["/deluxeheri.jpeg", "/dh.jpeg", "/dh1.jpeg", "/dh2.jpeg", "/dh3.jpeg", "/dh5.jpeg", "/dh6.jpeg"],
        amenities: ["AC", "WiFi", "TV", "Room Service", "Garden View"],
      },
      {
        id: "super-deluxe",
        name: "Super Deluxe Room",
        price: 3200,
        originalPrice: 3600,
        capacity: "2 Adults + 1 Child",
        size: "280 sq.ft",
        description: "Spacious upgraded rooms featuring elegant decor, a seating nook, and enhanced amenities for extra comfort.",
        images: ["/superdeluxeh.jpeg", "/sdh1.jpeg", "/sdh2.jpeg", "/sdh3.jpeg", "/sdh4.jpeg"],
        amenities: ["AC", "WiFi", "Mini Bar", "TV", "Seating Area", "Room Service"],
        badge: "Popular",
      },
      {
        id: "premium",
        name: "Premium Room",
        price: 3800,
        originalPrice: 4300,
        capacity: "2 Adults",
        size: "320 sq.ft",
        description: "Premium river-facing rooms with plush interiors, curated artwork, and a private balcony overlooking the Ganga.",
        images: [
          "/preh.jpeg", "/preh1.jpeg", "/preh2.jpeg", "/preh3.jpeg", "/preh4.jpeg",
          "/preh5.jpeg", "/preh6.jpeg", "/pre7h.jpeg", "/pre1.jpeg", "/pre4.1.jpeg",
        ],
        amenities: ["AC", "WiFi", "River View", "Balcony", "Mini Bar", "Bathtub"],
        badge: "River View",
      },
      {
        id: "twin",
        name: "Twin Room",
        price: 3000,
        originalPrice: 3400,
        capacity: "2 Adults (Twin Beds)",
        size: "250 sq.ft",
        description: "Comfortable twin-bedded rooms ideal for friends or colleagues travelling together, with all the charm of heritage decor.",
        images: ["/dtwinh.jpeg", "/dtwinh1.jpeg", "/dtwinh2.jpeg", "/dtwinh3.jpeg"],
        amenities: ["AC", "WiFi", "TV", "Twin Beds", "Room Service"],
      },
      {
        id: "suite",
        name: "Suite Room",
        price: 5500,
        originalPrice: 6200,
        capacity: "2 Adults + 2 Children",
        size: "480 sq.ft",
        description: "The pinnacle of heritage luxury — a separate living area, royal furnishings, and butler service for an unforgettable stay.",
        images: ["/suits.jpeg", "/suits1.jpeg"],
        amenities: ["AC", "WiFi", "Living Area", "Butler Service", "Mini Bar", "Bathtub", "River View"],
        badge: "Most Popular",
      },
      {
        id: "executive",
        name: "Executive Room",
        price: 4500,
        originalPrice: 5000,
        capacity: "3 Adults",
        size: "350 sq.ft",
        description: "Executive rooms designed for discerning travellers, featuring a dedicated work desk and access to the rooftop lounge.",
        images: [
          "/v1.jpeg", "/v2.jpeg", "/v3.jpeg", "/v4.jpeg", "/v5.jpeg",
          "/v6.jpeg", "/v7.jpeg", "/v8.jpeg", "/v9.jpeg", "/vinn.jpeg", "/vw.jpeg", "/reception.jpeg", "/receptv.jpeg",
        ],
        amenities: ["AC", "WiFi", "Work Desk", "Lounge Access", "Room Service"],
      },
    ],
    nearbyAttractions: [
      { name: "Assi Ghat", distance: "2 min walk" },
      { name: "Dashashwamedh Ghat", distance: "15 min drive" },
      { name: "Kashi Vishwanath Temple", distance: "20 min drive" },
      { name: "BHU Campus", distance: "10 min drive" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Ananya Rao", avatar: "https://i.pravatar.cc/150?img=5", rating: 5, date: "May 2024", comment: "The Suite Room was breathtaking — royal interiors and a view of the Ganga we'll never forget. Butler service made it extra special." },
      { id: "r2", name: "Karan Malhotra", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, date: "April 2024", comment: "Booked the Premium Room for the river view and it did not disappoint. Staff was attentive and breakfast was excellent." },
      { id: "r3", name: "Ritu Verma", avatar: "https://i.pravatar.cc/150?img=23", rating: 4, date: "February 2024", comment: "Lovely heritage property near Assi Ghat. The Deluxe Room was cozy and clean, great value for the price." },
    ],
  },
  {
    id: "jamuna-guest-house",
    name: "Jamuna(P) Guest House",
    location: "Darbhanga Ghat, Varanasi",
    rating: 4.8,
    reviews: 892,
    price: 12000,
    originalPrice: 16000,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    ],
    amenities: ["Ganga View", "Restaurant", "WiFi", "Rooftop", "AC", "Room Service"],
    category: "heritage",
    description: "A 200-year-old restored palace on the banks of the Ganga offering unparalleled river views.",
    highlights: ["Ganga view rooms", "Heritage architecture", "Rooftop restaurant", "Cultural evenings"],
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    badge: "Ganga View",
    roomTypes: [
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 9500,
        originalPrice: 12500,
        capacity: "2 Adults",
        size: "200 sq.ft",
        description: "Restored palace rooms with antique furnishings and courtyard views, steps away from the ghat.",
        images: ["/j1.jpeg", "/j3.jpeg", "/j4.jpeg"],
        amenities: ["AC", "WiFi", "Room Service", "Courtyard View"],
      },
      {
        id: "premium-ganga-view",
        name: "Premium Ganga View Room",
        price: 12000,
        originalPrice: 16000,
        capacity: "2 Adults",
        size: "260 sq.ft",
        description: "Wake up to unobstructed views of the Ganga from this premium heritage room with period decor.",
        images: ["/j5.jpeg", "/j6.jpeg", "/jamuna2.jpeg"],
        amenities: ["AC", "WiFi", "Ganga View", "Room Service", "Rooftop Access"],
        badge: "Ganga View",
      },
      {
        id: "family",
        name: "Family Room",
        price: 15500,
        originalPrice: 19000,
        capacity: "2 Adults + 2 Children",
        size: "340 sq.ft",
        description: "A generously sized heritage room perfect for families, with connecting sleeping areas and river-facing windows.",
        images: ["/j7.jpeg", "/j8.jpeg", "/j9.jpeg"],
        amenities: ["AC", "WiFi", "Ganga View", "Extra Bedding", "Room Service"],
      },
    ],
    nearbyAttractions: [
      { name: "Darbhanga Ghat", distance: "1 min walk" },
      { name: "Manikarnika Ghat", distance: "8 min walk" },
      { name: "Dashashwamedh Ghat", distance: "5 min walk" },
      { name: "Kashi Vishwanath Temple", distance: "12 min walk" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Devansh Oberoi", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, date: "March 2024", comment: "The Ganga View room was worth every rupee — waking up to the river and the morning aarti sounds was magical." },
      { id: "r2", name: "Simran Kaur", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, date: "January 2024", comment: "Beautifully restored heritage property. The Family Room fit all of us comfortably and the location can't be beaten." },
      { id: "r3", name: "Arvind Nair", avatar: "https://i.pravatar.cc/150?img=40", rating: 4, date: "December 2023", comment: "Charming old-world property right on the ghats. Rooms are a bit compact but the views make up for it." },
    ],
  },
  {
    id: "radisson-varanasi",
    name: "Radisson Hotel Varanasi",
    location: "Mall Road, Varanasi",
    rating: 4.6,
    reviews: 2140,
    price: 6500,
    originalPrice: 9000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    amenities: ["Pool", "Spa", "Bar", "WiFi", "Gym", "Conference"],
    category: "premium",
    description: "Modern luxury hotel with world-class amenities in the heart of Varanasi.",
    highlights: ["Rooftop pool", "Multi-cuisine restaurant", "Business center", "24/7 concierge"],
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    badge: "Top Rated",
    roomTypes: [
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 6500,
        originalPrice: 9000,
        capacity: "2 Adults",
        size: "300 sq.ft",
        description: "Contemporary rooms with plush bedding, city views, and access to the hotel's pool and gym.",
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80",
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80",
        ],
        amenities: ["AC", "WiFi", "Pool Access", "Gym Access", "Mini Bar"],
      },
      {
        id: "premium",
        name: "Premium Room",
        price: 8200,
        originalPrice: 11000,
        capacity: "2 Adults + 1 Child",
        size: "360 sq.ft",
        description: "Upgraded rooms with a lounge chair, premium bath amenities, and complimentary breakfast at the multi-cuisine restaurant.",
        images: [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&q=80",
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1000&q=80",
        ],
        amenities: ["AC", "WiFi", "Breakfast Included", "Bathtub", "Lounge Chair"],
        badge: "Popular",
      },
      {
        id: "suite",
        name: "Suite Room",
        price: 11500,
        originalPrice: 15000,
        capacity: "2 Adults + 2 Children",
        size: "550 sq.ft",
        description: "A spacious suite with a separate living room, panoramic city views, and priority access to the spa.",
        images: [
          "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1000&q=80",
          "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=1000&q=80",
          "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=1000&q=80",
        ],
        amenities: ["AC", "WiFi", "Living Area", "Spa Access", "Mini Bar", "Bathtub"],
        badge: "Best Value",
      },
    ],
    nearbyAttractions: [
      { name: "Varanasi Cantt Railway Station", distance: "10 min drive" },
      { name: "Lanka Market", distance: "12 min drive" },
      { name: "Dashashwamedh Ghat", distance: "18 min drive" },
      { name: "Kashi Vishwanath Temple", distance: "20 min drive" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Neha Kapoor", avatar: "https://i.pravatar.cc/150?img=44", rating: 5, date: "June 2024", comment: "Great business hotel — the Suite Room was spacious and the rooftop pool was a wonderful way to unwind after sightseeing." },
      { id: "r2", name: "Aditya Chauhan", avatar: "https://i.pravatar.cc/150?img=52", rating: 4, date: "April 2024", comment: "Clean, modern, well-located. The Premium Room breakfast was a great touch." },
      { id: "r3", name: "Pooja Bhatt", avatar: "https://i.pravatar.cc/150?img=58", rating: 5, date: "February 2024", comment: "Loved the gym and spa access with the Deluxe Room. Staff were very professional." },
    ],
  },
  {
    id: "golden-tulip",
    name: "Golden Tulip Essential",
    location: "Sigra, Varanasi",
    rating: 4.4,
    reviews: 1560,
    price: 4200,
    originalPrice: 6000,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    ],
    amenities: ["Restaurant", "WiFi", "AC", "Parking", "Room Service"],
    category: "standard",
    description: "Comfortable and well-appointed hotel with excellent connectivity to all major ghats.",
    highlights: ["Central location", "Complimentary breakfast", "Temple tour arrangements", "Travel desk"],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    roomTypes: [
      {
        id: "standard",
        name: "Standard Room",
        price: 4200,
        originalPrice: 6000,
        capacity: "2 Adults",
        size: "230 sq.ft",
        description: "Comfortable, no-frills rooms with everything you need for a convenient stay near Sigra.",
        images: [
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80",
        ],
        amenities: ["AC", "WiFi", "Room Service", "TV"],
      },
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 5200,
        originalPrice: 7200,
        capacity: "2 Adults + 1 Child",
        size: "270 sq.ft",
        description: "A larger room with upgraded furnishings, a work desk, and complimentary breakfast included.",
        images: [
          "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1000&q=80",
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1000&q=80",
        ],
        amenities: ["AC", "WiFi", "Breakfast Included", "Work Desk", "Room Service"],
        badge: "Popular",
      },
    ],
    nearbyAttractions: [
      { name: "Sigra Market", distance: "5 min walk" },
      { name: "Godowlia Market", distance: "20 min drive" },
      { name: "Kashi Vishwanath Temple", distance: "25 min drive" },
      { name: "Varanasi Airport", distance: "35 min drive" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Rohan Deshmukh", avatar: "https://i.pravatar.cc/150?img=62", rating: 4, date: "May 2024", comment: "Good value Deluxe Room with breakfast included. Travel desk helped us plan the temple tour easily." },
      { id: "r2", name: "Kavita Iyer", avatar: "https://i.pravatar.cc/150?img=65", rating: 4, date: "March 2024", comment: "Clean and centrally located. The Standard Room was compact but comfortable for a short stay." },
      { id: "r3", name: "Manish Trivedi", avatar: "https://i.pravatar.cc/150?img=68", rating: 5, date: "January 2024", comment: "Friendly staff, good parking, and easy access to Sigra market. Would book again." },
    ],
  },
  {
    id: "hotel-ganges-view",
    name: "Hotel Ganges View",
    location: "Assi Ghat, Varanasi",
    rating: 4.7,
    reviews: 678,
    price: 3500,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    ],
    amenities: ["Ganga View", "Rooftop", "Yoga", "WiFi", "Traditional Decor"],
    category: "heritage",
    description: "A boutique heritage property at Assi Ghat with authentic Banarasi charm.",
    highlights: ["Steps to Assi Ghat", "Yoga classes", "Rooftop Ganga view", "Homemade meals"],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    badge: "Boutique",
    roomTypes: [
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 3500,
        originalPrice: 5000,
        capacity: "2 Adults",
        size: "210 sq.ft",
        description: "Traditionally decorated rooms with handcrafted furniture and a peaceful, homely atmosphere.",
        images: [
          "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=1000&q=80",
          "https://images.unsplash.com/photo-1595521624992-48a59aef95c3?w=1000&q=80",
        ],
        amenities: ["WiFi", "Fan/AC", "Traditional Decor", "Homemade Meals"],
      },
      {
        id: "ganga-view",
        name: "Ganga View Room",
        price: 4300,
        originalPrice: 6000,
        capacity: "2 Adults",
        size: "240 sq.ft",
        description: "Rooms overlooking the Ganga with direct rooftop access for sunrise yoga and evening aarti views.",
        images: [
          "https://images.unsplash.com/photo-1601565415267-724aa70a7b5c?w=1000&q=80",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&q=80",
        ],
        amenities: ["WiFi", "AC", "Ganga View", "Rooftop Access", "Yoga Sessions"],
        badge: "Ganga View",
      },
    ],
    nearbyAttractions: [
      { name: "Assi Ghat", distance: "1 min walk" },
      { name: "Tulsi Ghat", distance: "5 min walk" },
      { name: "BHU Campus", distance: "10 min drive" },
      { name: "Dashashwamedh Ghat", distance: "15 min drive" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Ishaan Bhalla", avatar: "https://i.pravatar.cc/150?img=70", rating: 5, date: "April 2024", comment: "The Ganga View Room and rooftop yoga sessions made this the most peaceful stay of our trip." },
      { id: "r2", name: "Divya Prakash", avatar: "https://i.pravatar.cc/150?img=8", rating: 4, date: "February 2024", comment: "Authentic Banarasi charm, homemade meals were delicious, and Assi Ghat is right outside." },
      { id: "r3", name: "Sameer Joshi", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, date: "November 2023", comment: "Boutique gem — small but full of character. Loved watching the aarti from the rooftop." },
    ],
  },
  {
    id: "surya-varanasi",
    name: "Surya Hotel Varanasi",
    location: "The Mall, Varanasi",
    rating: 4.3,
    reviews: 990,
    price: 2800,
    originalPrice: 4000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    ],
    amenities: ["Restaurant", "Bar", "WiFi", "AC", "Parking"],
    category: "standard",
    description: "A classic hotel offering great value with a central location and warm hospitality.",
    highlights: ["Value for money", "Restaurant on-site", "Easy access to ghats", "24/7 reception"],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    roomTypes: [
      {
        id: "standard",
        name: "Standard Room",
        price: 2800,
        originalPrice: 4000,
        capacity: "2 Adults",
        size: "200 sq.ft",
        description: "Simple, clean rooms with everything you need for a comfortable budget-friendly stay.",
        images: ["/s1.jpeg", "/s2.jpeg"],
        amenities: ["AC", "WiFi", "TV", "Room Service"],
      },
      {
        id: "deluxe",
        name: "Deluxe Room",
        price: 3400,
        originalPrice: 4800,
        capacity: "2 Adults + 1 Child",
        size: "250 sq.ft",
        description: "A roomier option with upgraded interiors and access to the on-site restaurant and bar.",
        images: ["/s3.jpeg", "/s5.jpeg"],
        amenities: ["AC", "WiFi", "Mini Bar", "Room Service", "Restaurant Access"],
        badge: "Popular",
      },
    ],
    nearbyAttractions: [
      { name: "Varanasi Cantt Railway Station", distance: "8 min drive" },
      { name: "Sarnath", distance: "30 min drive" },
      { name: "Dashashwamedh Ghat", distance: "20 min drive" },
      { name: "Kashi Vishwanath Temple", distance: "22 min drive" },
    ],
    guestReviewsList: [
      { id: "r1", name: "Tanvi Sharma", avatar: "https://i.pravatar.cc/150?img=28", rating: 4, date: "March 2024", comment: "Great value for money. The Deluxe Room was comfortable and the restaurant food was tasty." },
      { id: "r2", name: "Gaurav Sethi", avatar: "https://i.pravatar.cc/150?img=31", rating: 4, date: "January 2024", comment: "Reception staff were helpful round the clock. Simple Standard Room but very clean." },
      { id: "r3", name: "Priyanka Das", avatar: "https://i.pravatar.cc/150?img=23", rating: 5, date: "December 2023", comment: "Convenient location near the station, easy to get to Sarnath and the ghats from here." },
    ],
  },
];
