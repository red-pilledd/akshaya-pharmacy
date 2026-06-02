import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akshaya Community Pharmacy",
    short_name: "Akshaya Pharmacy",
    description: "Genuine medicines at 15–60% discount. 75+ stores across South Kerala.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#065F46",
    orientation: "portrait",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    categories: ["health", "medical", "shopping"],
    lang: "en-IN",
  };
}
