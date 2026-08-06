export interface BoatRide {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  duration: string;
  timing: string;
  price: number;
  capacity: string;
  features: string[];
  badge?: string;
  highlights: string[];
  route: string;
  safety: string[];
  includedServices: string[];
}

export const boatRides: BoatRide[] = [
  {
    id: 1,
    slug: "sunrise-boat-ride",
    title: 'Sunrise Boat Ride',
    description: 'Witness the magical golden sunrise over the sacred Ganga ghats from the tranquility of a traditional wooden boat.',
    image: '/sunrise1.jpg',
    gallery: ['/sunrise1.jpg', '/sunriseboat.png', '/ghats.jpg', '/boats.jpg', '/varansighat.png'],
    duration: '1.5 Hours',
    timing: '5:00 AM - 6:30 AM',
    price: 599,
    capacity: '6 Persons',
    features: ['Tea & Snacks', 'Photography Stops', 'Local Guide'],
    badge: 'Most Popular',
    highlights: [
      'Magical sunrise over the Ganga',
      'View all major ghats from the water',
      'Traditional wooden boat experience',
      'Photography stops at iconic ghats',
      'Complimentary tea & snacks on board',
    ],
    route: 'Assi Ghat → Dashashwamedh Ghat → Manikarnika Ghat → Return to Assi Ghat',
    safety: [
      'Life jackets provided for all passengers',
      'Experienced local boatmen',
      'Boats are regularly inspected and maintained',
      'Emergency contact available on board',
    ],
    includedServices: ['Tea & Snacks', 'Photography Stops', 'Local Guide', 'Life Jackets'],
  },
  {
    id: 2,
    slug: "ganga-aarti-evening-ride",
    title: 'Ganga Aarti Evening Ride',
    description: 'Float on the sacred Ganga and witness the mesmerizing Ganga Aarti ceremony from the best vantage point — your private boat.',
    image: '/gangaaarti1.jpg',
    gallery: ['/gangaaarti1.jpg', '/aarti.jpg', '/gangaaarti.png', '/gangaarti1.png', '/evening.jpg'],
    duration: '2 Hours',
    timing: '6:00 PM - 8:00 PM',
    price: 799,
    capacity: '8 Persons',
    features: ['Aarti View', 'Floating Diyas', 'Refreshments'],
    badge: 'Spiritual',
    highlights: [
      'Front-row view of the Ganga Aarti',
      'Float diyas on the sacred river',
      'Witness the fire ritual up close',
      'Best vantage point on the water',
      'Refreshments served on board',
    ],
    route: 'Dashashwamedh Ghat → Aarti Viewing Point → Return to Dashashwamedh Ghat',
    safety: [
      'Life jackets provided for all passengers',
      'Stable boats with experienced boatmen',
      'Boats anchored safely during the aarti',
      'Emergency contact available on board',
    ],
    includedServices: ['Aarti View', 'Floating Diyas', 'Refreshments', 'Life Jackets'],
  },
  {
    id: 3,
    slug: "private-luxury-cruise",
    title: 'Private Luxury Cruise',
    description: 'Your exclusive private boat for the ultimate Varanasi experience. Explore all 84 ghats at your own pace in complete luxury.',
    image: '/cn-boat.jpg',
    gallery: ['/cn-boat.jpg', '/cng-boat.jpg', '/musicalboat.png', '/boat.png', '/boat4.avif'],
    duration: '3 Hours',
    timing: 'Flexible Timings',
    price: 2499,
    capacity: 'Up to 12 Persons',
    features: ['Private Boat', 'AC Cabin', 'Snacks & Drinks', 'Photographer'],
    badge: 'Luxury',
    highlights: [
      'Exclusive private boat for your group',
      'Air-conditioned cabin for comfort',
      'Explore all 84 ghats at your own pace',
      'Professional photographer on board',
      'Snacks & drinks included',
    ],
    route: 'Custom route — all 84 ghats, flexible departure from any ghat',
    safety: [
      'Life jackets provided for all passengers',
      'Licensed luxury boat with safety equipment',
      'Experienced captain and crew',
      'Emergency contact available on board',
    ],
    includedServices: ['Private Boat', 'AC Cabin', 'Snacks & Drinks', 'Photographer', 'Life Jackets'],
  },
  {
    id: 4,
    slug: "all-ghats-grand-tour",
    title: 'All Ghats Grand Tour',
    description: 'A grand journey across all 84 ghats of Varanasi with detailed narration of history, mythology and culture.',
    image: '/mbbg1.png',
    gallery: ['/mbbg1.png', '/ghats2.jpg', '/ghat.png', '/shivalaghat.jpg', '/shivala.jpg'],
    duration: '4 Hours',
    timing: '7:00 AM - 11:00 AM',
    price: 1299,
    capacity: '10 Persons',
    features: ['84 Ghats Tour', 'Expert Guide', 'Breakfast Included'],
    badge: 'Heritage',
    highlights: [
      'Complete tour of all 84 ghats',
      'Expert guide with historical narration',
      'Breakfast included on board',
      'Learn about mythology and culture',
      'Photo stops at the most iconic ghats',
    ],
    route: 'Assi Ghat → All 84 Ghats → Raj Ghat → Return to Assi Ghat',
    safety: [
      'Life jackets provided for all passengers',
      'Experienced boatmen familiar with the full route',
      'Boats are regularly inspected and maintained',
      'Emergency contact available on board',
    ],
    includedServices: ['84 Ghats Tour', 'Expert Guide', 'Breakfast Included', 'Life Jackets'],
  },
]
