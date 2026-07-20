import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kashidarshan.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/hotels`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/boats`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/packages`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/cabs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/experiences`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cancellation`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Hotel pages
  const hotelIds = ["taj-nadesar-palace", "brijrama-palace", "radisson-varanasi", "golden-tulip", "hotel-ganges-view", "surya-varanasi"];
  const hotelPages = hotelIds.map((id) => ({
    url: `${baseUrl}/hotels/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Package pages
  const packageIds = ["1-day-kashi-darshan", "2-days-spiritual-tour", "3-days-heritage-tour", "kashi-prayagraj", "kashi-ayodhya", "luxury-kashi"];
  const packagePages = packageIds.map((id) => ({
    url: `${baseUrl}/packages/${id}`,
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

  return [...staticPages, ...hotelPages, ...packagePages, ...blogPages];
}
