export interface RoomType {
  type: string;
  roomType: string;
  price: number;
  capacity: string;
  description: string;
  images: string[];
  amenities: string[];
}

export interface HotelPolicies {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  payment: string;
  children: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  type: string;
}

export interface GuestReview {
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Hotel {
  id: number;
  slug: string;
  name: string;
  category: string;
  hotelType: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  pricePerNight: number;
  location: string;
  coordinates: Coordinates;
  amenities: string[];
  badge?: string;
  description: string;
  fullDescription: string;
  roomTypes: RoomType[];
  policies: HotelPolicies;
  nearbyAttractions: NearbyAttraction[];
  guestReviews: GuestReview[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    slug: "varanasi-heritage",
    name: "Varanasi Heritage",
    category: "Premium",
    hotelType: "Premium",
    image: "/h1.jpeg",
    images: ["/h1.jpeg", "/h2.jpeg", "/h3.jpeg", "/h4.jpeg", "/dh5.jpeg", "/dh6.jpeg"],
    rating: 5.0,
    reviews: 89,
    pricePerNight: 2500,
    location: "Assi Ghat, Varanasi",
    coordinates: { lat: 25.2889, lng: 83.0069 },
    amenities: ["Free wifi", "Free parking", "Bed and Breakfast", "Ganga view", "Rooftop Restaurant", "Travel Desk"],
    badge: "Three Star",
    description: "A palatial heritage property with breathtaking views of the Ganga, featuring royal architecture and world-class amenities.",
    fullDescription: "Nestled on the banks of the sacred Ganga at Assi Ghat, Varanasi Heritage offers an unparalleled blend of royal grandeur and modern luxury. This meticulously restored palace features ornate interiors, and fine dining that celebrates the culinary heritage of Banaras. Each room is a masterpiece of design, combining traditional motifs with contemporary comfort. Wake up to the mesmerizing view of the Ganga, participate in the evening aarti from the private ghat, and experience the true essence of Banaras royalty.",
    roomTypes: [
      {
        type: "Deluxe Room",
        roomType: "Deluxe",
        price: 2500,
        capacity: "2 Adults",
        description: "Elegantly appointed deluxe room with river-facing windows, plush bedding, and modern amenities — the perfect retreat after a day exploring the ghats.",
        images: ["/deluxeheri.jpeg", "/dh3.jpeg", "/h1.jpeg", "/h2.jpeg", "/h5.jpeg", "/dh6.jpeg"],
        amenities: ["AC", "TV", "River View", "Free WiFi", "Hot Water"],
      },
      {
        type: "Suits Room",
        roomType: "Suits",
        price: 4500,
        capacity: "4 Adults",
        description: "A spacious suite offering a separate living area, a luxurious Jacuzzi, and a private balcony with panoramic Ganga views — pure indulgence.",
        images: ["/suits.jpeg", "/suits1.jpeg", "/dh2.jpeg"],
        amenities: ["AC", "Living Room", "Jacuzzi", "Ganga View Balcony", "Room Service"],
      },
      {
        type: "Super Deluxe Room",
        roomType: "Super Deluxe",
        price: 7500,
        capacity: "6 Adults",
        description: "The crown jewel of Varanasi Heritage — a palatial royal suite with a private terrace, dedicated butler, and exclusive ghat access for a truly regal experience.",
        images: ["/superdeluxeh.jpeg", "/sdh2.jpeg", "/sdh1.jpeg", "/sdh3.jpeg", "/sdh4.jpeg"],
        amenities: ["AC", "Butler Service", "Private Ghat Access"],
      },
      {
        type: "Twin Deluxe Room",
        roomType: "Twin Deluxe",
        price: 2500,
        capacity: "3 Adults",
        description: "Perfect for friends or colleagues — two large twin beds, city-view windows, and all modern comforts make this our most popular room for group travellers.",
        images: ["/dtwinh.jpeg", "/dtwinh1.jpeg", "/dh2.jpeg"],
        amenities: ["AC", "TV", "Twin Beds", "City View", "Free WiFi"],
      },
      {
        type: "Standard Room",
        roomType: "Premium",
        price: 2500,
        capacity: "2 Adults",
        description: "A cosy, well-appointed standard room featuring traditional artwork, comfortable beds, and modern bathroom essentials — ideal for couples and solo travellers.",
        images: ["/preh.jpeg", "/preh1.jpeg", "/preh2.jpeg", "/preh3.jpeg", "/preh4.jpeg", "/preh5.jpeg", "/preh6.jpeg"],
        amenities: ["AC", "TV", "Attached Bathroom", "Free WiFi"],
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before check-in. 50% charge within 48 hours.",
      payment: "50% advance booking required. Balance at check-in.",
      children: "Children below 6 years stay free. Extra bed charges apply.",
    },
    nearbyAttractions: [
      { name: "Assi Ghat", distance: "0.1 km", type: "Ghat" },
      { name: "Kashi Vishwanath Temple", distance: "2.5 km", type: "Temple" },
      { name: "Dashashwamedh Ghat", distance: "3 km", type: "Ghat" },
      { name: "Banaras Hindu University", distance: "4 km", type: "University" },
    ],
    guestReviews: [
      { name: "Ananya Sharma", city: "Delhi", rating: 5, date: "March 2024", comment: "Absolutely stunning property! The Ganga view from our room was breathtaking. The staff was incredibly courteous and helpful." },
      { name: "Rahul Verma", city: "Mumbai", rating: 5, date: "February 2024", comment: "A perfect blend of heritage and luxury. Will definitely come back." },
      { name: "Priya Patel", city: "Bangalore", rating: 5, date: "January 2024", comment: "The evening aarti from the hotel ghat was a spiritual experience. Food was exceptional." },
    ],
  },
  {
    id: 2,
    slug: "jamuna-p-guest-house",
    name: "Jamuna(P) Guest House",
    category: "Premium",
    hotelType: "Luxury",
    image: "/j9.jpeg",
    images: ["/j1.jpeg", "/j3.jpeg", "/j4.jpeg", "/j5.jpeg", "/j6.jpeg", "/j7.jpeg", "/j8.jpeg", "/j9.jpeg", "/jamuna2.jpeg", "/reception.jpeg"],
    rating: 4.8,
    reviews: 156,
    pricePerNight: 1499,
    location: "Shivala Ghat, Varanasi",
    coordinates: { lat: 25.29, lng: 83.008 },
    amenities: ["Free wifi", "Ganga view", "Travel Desk"],
    badge: "Top Rated",
    description: "Artistically designed boutique hotel with vibrant interiors, rooftop dining, and direct access to the ghats.",
    fullDescription: "Jamuna(P) Guest House is a celebration of Banaras's vibrant arts and culture. Located just steps away from Shivala Ghat, this boutique property features artistically designed rooms that showcase local craftsmanship, a stunning rooftop restaurant offering panoramic views of the Ganga, and a serene yoga deck for morning practice. The hotel's intimate size ensures personalized attention and a peaceful atmosphere. Every corner of the property tells a story through its carefully curated art pieces, traditional textiles, and handcrafted furniture.",
    roomTypes: [
      {
        type: "Standard Room",
        roomType: "Premium",
        price: 1499,
        capacity: "2 Adults",
        description: "A cosy, well-appointed standard room featuring traditional artwork, comfortable beds, and modern bathroom essentials — ideal for couples and solo travellers.",
        images: ["/j1.jpeg", "/j3.jpeg", "/j4.jpeg"],
        amenities: ["AC", "TV", "Attached Bathroom", "Free WiFi"],
      },
      {
        type: "Deluxe Room",
        roomType: "Deluxe",
        price: 3500,
        capacity: "3 Adults",
        description: "Spacious deluxe room with hand-painted murals and a Ganga-facing window — wake up to the serene sound of the river every morning.",
        images: ["/j5.jpeg", "/j6.jpeg", "/j7.jpeg"],
        amenities: ["AC", "TV", "Ganga View", "Mini Fridge", "Free WiFi"],
      },
      {
        type: "Art Suite",
        roomType: "Suites",
        price: 5500,
        capacity: "4 Adults",
        description: "A curated sanctuary blending local artistry with luxury comfort — featuring a living area, a private balcony, and an exclusive art collection handpicked by local artists.",
        images: ["/j8.jpeg", "/j9.jpeg", "/jamuna2.jpeg"],
        amenities: ["AC", "Living Area", "Art Collection", "Private Balcony", "Room Service"],
      },
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "10:30 AM",
      cancellation: "Free cancellation 24 hours before check-in. Late cancellation charged 1 night.",
      payment: "Full payment at check-in accepted via card, UPI, or cash.",
      children: "Children welcome. Extra bed available at ₹500/night.",
    },
    nearbyAttractions: [
      { name: "Shivala Ghat", distance: "0.05 km", type: "Ghat" },
      { name: "Harishchandra Ghat", distance: "0.5 km", type: "Ghat" },
      { name: "Kashi Vishwanath Temple", distance: "1.5 km", type: "Temple" },
      { name: "Manikarnika Ghat", distance: "1 km", type: "Ghat" },
    ],
    guestReviews: [
      { name: "Vikram Singh", city: "Jaipur", rating: 5, date: "April 2024", comment: "The rooftop restaurant has the best view of the Ganga. Food was delicious and the vibe was amazing." },
      { name: "Neha Gupta", city: "Pune", rating: 4, date: "March 2024", comment: "Loved the artistic interiors! Each room is unique. The morning yoga session was a great start to the day." },
      { name: "Amit Joshi", city: "Kolkata", rating: 5, date: "February 2024", comment: "Perfect location, walking distance to the ghats. The staff made us feel very welcome." },
    ],
  },
  {
    id: 3,
    slug: "hotel-varanasi-inn",
    name: "Hotel Varanasi Inn",
    category: "Budget",
    hotelType: "Budget",
    image: "/v1.jpeg",
    images: ["/v1.jpeg", "/v2.jpeg", "/v3.jpeg", "/v5.jpeg", "/v6.jpeg", "/v7.jpeg", "/v8.jpeg", "/v9.jpeg", "/vw.jpeg", "/vinn.jpeg", "/receptv.jpeg"],
    rating: 4.4,
    reviews: 312,
    pricePerNight: 2500,
    location: "Sigra, Varanasi",
    coordinates: { lat: 25.3176, lng: 83.0062 },
    amenities: ["Free wifi", "Free parking", "Bed and Breakfast", "Ganga view", "Rooftop Restaurant", "Travel Desk"],
    badge: "Best Value",
    description: "Comfortable and affordable accommodation in the heart of Varanasi, perfect for budget-conscious travelers.",
    fullDescription: "Hotel Varanasi Inn offers the perfect base for exploring the wonders of Varanasi without breaking the bank. Situated in the bustling Godowlia area, just minutes from the iconic Kashi Vishwanath Temple, this hotel provides clean, comfortable rooms with all essential amenities. Start your day with a complimentary breakfast before heading out to explore the nearby temples, ghats, and narrow lanes of the old city. Our friendly staff is always ready with local tips and recommendations to make your Varanasi visit truly memorable.",
    roomTypes: [
      {
        type: "Standard Room",
        roomType: "Budget",
        price: 2200,
        capacity: "2 Adults",
        description: "A clean, comfortable standard room with all essential amenities — great value for budget-conscious travellers seeking a central Varanasi base.",
        images: ["/v1.jpeg", "/v2.jpeg", "/v3.jpeg"],
        amenities: ["AC", "TV", "Attached Bathroom", "Free WiFi"],
      },
      {
        type: "Deluxe Room",
        roomType: "Deluxe",
        price: 2200,
        capacity: "3 Adults",
        description: "A step up from standard — our deluxe room offers a city view, extra space, and premium linen for a more relaxing stay in the heart of Varanasi.",
        images: ["/v5.jpeg", "/v6.jpeg", "/v7.jpeg"],
        amenities: ["AC", "TV", "City View", "Mini Fridge", "Free WiFi"],
      },
      {
        type: "Family Room",
        roomType: "Super Deluxe",
        price: 2500,
        capacity: "4 Adults",
        description: "Spacious interconnecting rooms ideal for families — plenty of room for everyone, with all the comforts of home and easy access to Varanasi's top attractions.",
        images: ["/vinn.jpeg", "/receptv.jpeg", "/v1.jpeg"],
        amenities: ["AC", "TV", "Interconnecting Rooms", "Extra Beds", "Free WiFi"],
      },
    ],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 24 hours before check-in.",
      payment: "Pay at hotel. Online booking discount available.",
      children: "Children under 8 stay free with parents.",
    },
    nearbyAttractions: [
      { name: "Kashi Vishwanath Temple", distance: "0.3 km", type: "Temple" },
      { name: "Dashashwamedh Ghat", distance: "0.8 km", type: "Ghat" },
      { name: "Shri Kashi Vishwanath Corridor", distance: "0.4 km", type: "Landmark" },
      { name: "Banaras Silk Market", distance: "0.2 km", type: "Market" },
    ],
    guestReviews: [
      { name: "Rajesh Kumar", city: "Patna", rating: 5, date: "April 2024", comment: "Excellent value for money! Clean rooms, great location near the temple. Breakfast was good." },
      { name: "Sneha Reddy", city: "Hyderabad", rating: 4, date: "March 2024", comment: "Very convenient location. Walking distance to most attractions. Staff was helpful." },
      { name: "Mohammad Ali", city: "Lucknow", rating: 4, date: "February 2024", comment: "Good budget hotel. Basic but clean. Perfect for a short stay in Varanasi." },
    ],
  },
  {
    id: 4,
    slug: "shivangi-inn",
    name: "Shivangi Inn",
    category: "Premium",
    hotelType: "Premium",
    image: "/s2.jpeg",
    images: ["/s1.jpeg", "/s2.jpeg", "/s3.jpeg", "/s4.jpeg", "/s5.jpeg"],
    rating: 4.9,
    reviews: 74,
    pricePerNight: 1499,
    location: "Shivala Ghat, Varanasi",
    coordinates: { lat: 25.2895, lng: 83.0075 },
    amenities: ["Free wifi", "Ganga view", "Travel Desk"],
    badge: "Heritage Stay",
    description: "A premium hotel in Varanasi offering elegant rooms, modern comforts, exceptional hospitality, and convenient access to the city's iconic temples, ghats, and tourist attractions.",
    fullDescription: "Shivangi Inn is a premium hotel in Varanasi designed to provide a perfect blend of comfort, convenience, and warm hospitality. Located close to the city's most popular attractions, including Kashi Vishwanath Temple, Dashashwamedh Ghat, Assi Ghat, and Sarnath, the hotel is an ideal choice for pilgrims, families, business travelers, and tourists. Guests can enjoy spacious air-conditioned rooms, complimentary high-speed Wi-Fi, delicious multi-cuisine dining, 24-hour room service, travel assistance, and professional staff committed to delivering a memorable stay. Whether you are exploring the spiritual heritage of Banaras or visiting for business, Shivangi Inn offers a peaceful and comfortable experience with modern amenities and excellent service.",
    roomTypes: [
      {
        type: "Heritage Room",
        roomType: "Deluxe",
        price: 1499,
        capacity: "2 Adults",
        description: "Authentically restored heritage room adorned with antique furniture, hand-carved wooden accents, and a courtyard view — step into 200 years of Banarasi history.",
        images: ["/s1.jpeg", "/s2.jpeg"],
        amenities: ["AC", "Antique Furniture", "Courtyard View", "Heritage Bath", "Free WiFi"],
      },
      {
        type: "Grand Heritage Suite",
        roomType: "Suites",
        price: 2500,
        capacity: "2 Adults",
        description: "A grand suite featuring a sitting area with original teak furniture, a private terrace overlooking the Ganga, and a heritage bathroom with brass fittings.",
        images: ["/s3.jpeg", "/s4.jpeg"],
        amenities: ["AC", "Sitting Area", "Private Terrace", "Ganga View", "Premium Toiletries"],
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation 72 hours before check-in. 50% charge within 72 hours.",
      payment: "50% deposit required for booking. Balance at check-in via card or UPI.",
      children: "Children above 10 years welcome. Heritage property, some areas may not be child-friendly.",
    },
    nearbyAttractions: [
      { name: "Shivala Ghat", distance: "0.1 km", type: "Ghat" },
      { name: "Tulsi Manas Temple", distance: "0.8 km", type: "Temple" },
      { name: "Banaras Hindu University", distance: "3 km", type: "University" },
      { name: "Sarnath", distance: "10 km", type: "Heritage" },
    ],
    guestReviews: [
      { name: "Arun Mehta", city: "London", rating: 5, date: "March 2024", comment: "An extraordinary heritage experience! The haveli is a living museum. The Ganga view from the terrace is unforgettable." },
      { name: "Deepa Nair", city: "Kochi", rating: 5, date: "February 2024", comment: "Magical stay! The private Ganga puja arranged by the staff was a deeply spiritual experience. Food was authentic and delicious." },
      { name: "Carlos Mendez", city: "Barcelona", rating: 5, date: "January 2024", comment: "The most authentic Indian experience I have ever had. Every corner of this haveli has a story. Absolutely loved it." },
    ],
  },
];
