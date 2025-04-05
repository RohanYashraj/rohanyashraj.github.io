import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rohanyashraj.github.io";

  // Add your static routes here
  const staticRoutes = [
    "/",
    "/work",
    "/resume",
    "/contact",
    "/services",
    // Add other static routes as needed
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    changeFrequency: "monthly", // Adjust as needed ('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never')
    priority: route === "/" ? 1.0 : 0.8, // Adjust priority (0.0 to 1.0)
  }));

  // Add dynamic routes if any (e.g., blog posts, project details)
  // const dynamicRoutes = await getDynamicRoutes(); // Example function to fetch dynamic paths
  // sitemapEntries.push(...dynamicRoutes);

  return sitemapEntries;
}
