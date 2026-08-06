import { MetadataRoute } from "next";
import { hotels } from "@/lib/data/hotels";
import { boatRides } from "@/lib/data/boats";
import { packages } from "@/lib/data/packages";
import { experiences, cabServices } from "@/lib/data/experiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thekashiyatra.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/hotels`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/boats`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/packages`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/cabs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/experiences`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/ganga-aarti`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cancellation`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Hotel pages
  const hotelPages = hotels.map((h) => ({
    url: `${baseUrl}/hotels/${h.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Boat pages
  const boatPages = boatRides.map((b) => ({
    url: `${baseUrl}/boats/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Package pages
  const packagePages = packages.map((p) => ({
    url: `${baseUrl}/packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Cab pages
  const cabPages = cabServices.map((c) => ({
    url: `${baseUrl}/cabs/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Experience pages
  const experiencePages = experiences.map((e) => ({
    url: e.slug === "ganga-aarti-ceremony" ? `${baseUrl}/ganga-aarti` : `${baseUrl}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog post pages
  const blogSlugs = ["best-time-visit-varanasi", "ganga-aarti-guide", "varanasi-ghats-guide", "kashi-vishwanath-darshan-tips", "banarasi-silk-guide", "varanasi-street-food"];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...hotelPages, ...boatPages, ...packagePages, ...cabPages, ...experiencePages, ...blogPages];
}