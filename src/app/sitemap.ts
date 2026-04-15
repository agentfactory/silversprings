import type { MetadataRoute } from "next";
import { programs, products } from "@/lib/content";

const base = "https://silverspringstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/our-mission",
    "/programs",
    "/stories",
    "/shop",
    "/donate",
    "/get-involved",
    "/contact",
  ];
  const now = new Date();
  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      priority: p === "" ? 1 : 0.7,
    })),
    ...programs.map((p) => ({
      url: `${base}/programs/${p.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...products.map((p) => ({
      url: `${base}/shop/${p.slug}`,
      lastModified: now,
      priority: 0.5,
    })),
  ];
}
