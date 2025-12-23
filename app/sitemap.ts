import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rohanyashraj.github.io";

  // Add your static routes here
  const staticRoutes = [
    "/",
    "/work",
    "/resume",
    "/resume/view",
    "/contact",
    "/services",
    // Add other static routes as needed
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1.0
        : route.includes("work") || route.includes("services")
        ? 0.9
        : 0.8,
  }));

  // Add dynamic routes if any (e.g., blog posts, project details)
  // const dynamicRoutes = await getDynamicRoutes(); // Example function to fetch dynamic paths
  // sitemapEntries.push(...dynamicRoutes);

  return sitemapEntries;
}
