// import type { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

// export const metadata: Metadata = {
//   title: "My Bookings — TheKashiYatra Account",
//   description: "View and manage all your TheKashiYatra bookings — hotels, boat rides, tour packages, and experiences.",
//   robots: { index: false, follow: false },
// };

// const mockBookings = [
//   {
//     id: "KD2024-8810",
//     type: "Hotel",
//     name: "Brijrama Palace",
//     date: "March 15–18, 2024",
//     status: "Confirmed",
//     amount: "₹45,000",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80",
//     icon: "🏨",
//     statusColor: "text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400",
//   },
//   {
//     id: "KD2024-7712",
//     type: "Boat Ride",
//     name: "Sunrise Ganga Cruise",
//     date: "February 28, 2024",
//     status: "Completed",
//     amount: "₹2,500",
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80",
//     icon: "⛵",
//     statusColor: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400",
//   },
//   {
//     id: "KD2024-6201",
//     type: "Tour Package",
//     name: "3 Days Heritage Tour",
//     date: "January 10–13, 2024",
//     status: "Completed",
//     amount: "₹18,999",
//     image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&q=80",
//     icon: "🗺️",
//     statusColor: "text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400",
//   },
//   {
//     id: "KD2024-5501",
//     type: "Experience",
//     name: "Rudrabhishek Puja",
//     date: "January 10, 2024",
//     status: "Cancelled",
//     amount: "₹3,500",
//     image: "https://images.unsplash.com/photo-1609178846337-c1c2b7c1b69e?w=200&q=80",
//     icon: "🙏",
//     statusColor: "text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400",
//   },
// ];

// export default function MyBookingsPage() {
//   return (
//     <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
//           <div>
//             <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">My Bookings</h1>
//             <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage all your TheKashiYatra reservations</p>
//           </div>
//           <Link href="/packages" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all">
//             + New Booking
//           </Link>
//         </div>

//         {/* Stats row */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
//           {[
//             { label: "Total Bookings", value: "4", icon: "📋" },
//             { label: "Confirmed", value: "1", icon: "✅" },
//             { label: "Completed", value: "2", icon: "🎉" },
//             { label: "Total Spent", value: "₹69,999", icon: "💳" },
//           ].map((stat) => (
//             <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-card border border-gray-100 dark:border-gray-700 text-center">
//               <div className="text-2xl mb-1">{stat.icon}</div>
//               <p className="font-bold text-gray-900 dark:text-white text-lg">{stat.value}</p>
//               <p className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bookings List */}
//         <div className="space-y-4">
//           {mockBookings.map((booking) => (
//             <div
//               key={booking.id}
//               className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row"
//             >
//               {/* Image */}
//               <div className="relative w-full sm:w-36 h-32 sm:h-auto shrink-0">
//                 <Image src={booking.image} alt={booking.name} fill className="object-cover" sizes="144px" />
//                 <div className="absolute inset-0 bg-black/20" />
//                 <div className="absolute top-2 left-2 text-2xl">{booking.icon}</div>
//               </div>

//               {/* Content */}
//               <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-xs text-gray-400 font-mono">{booking.id}</span>
//                     <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400">
//                       {booking.type}
//                     </span>
//                   </div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{booking.name}</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">📅 {booking.date}</p>
//                 </div>

//                 <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
//                   <span className={`px-3 py-1 text-xs font-semibold rounded-full ${booking.statusColor}`}>
//                     {booking.status}
//                   </span>
//                   <p className="font-bold text-[#8B4513] dark:text-amber-400 text-lg">{booking.amount}</p>
//                   <div className="flex gap-2">
//                     <button className="px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
//                       View
//                     </button>
//                     {booking.status === "Confirmed" && (
//                       <button className="px-3 py-1.5 text-xs border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Help section */}
//         <div className="mt-8 bg-amber-50 dark:bg-amber-500/10 rounded-2xl p-5 border border-amber-100 dark:border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div>
//             <h3 className="font-semibold text-gray-900 dark:text-white">Need help with a booking?</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Our team is available 24×7 for support.</p>
//           </div>
//           <div className="flex gap-3">
//             <a
//               href={getWhatsAppUrl(genericInquiryMessage("help with my existing booking"))}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
//             >
//               WhatsApp
//             </a>
//             <a href="tel:+919876543210" className="px-4 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all">
//               Call Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
