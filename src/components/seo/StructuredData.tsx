import { brandInfo, locations } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sukiyaki-nikuniku.ac-fe.online";

export function StructuredData() {
  // Create Branch Schemas (Restaurants)
  const restaurantSchemas = locations.map((loc) => ({
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#${loc.id}`, // Anchor link ID
    "name": `${brandInfo.name} ${loc.name}`,
    "url": SITE_URL,
    "image": [
       // Using absolute URL for images. In a real scenario, each location might have its own cover.
       // Fallback to a main hero image if specific one not available easily as absolute URL.
       // Assuming we have this file.
       `${SITE_URL}/images/og-image.jpg`, 
    ],
    "description": brandInfo.description,
    "telephone": loc.phone,
    "servesCuisine": "Japanese",
    "priceRange": "$$ - $$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.address,
      "addressLocality": loc.district, 
      "addressRegion": loc.city,
      "addressCountry": "TW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.geo.lat,
      "longitude": loc.geo.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "17:30",
        "closes": "23:59" // Avoid 00:00 confusion
      }
    ],
    "hasMap": loc.mapUrl 
  }));

  // Create Organization Schema (Headquarters)
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": brandInfo.fullName,
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.png`,
    "sameAs": [
      brandInfo.social.facebook,
      brandInfo.social.instagram
    ]
  };

  // Combine into @graph
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...restaurantSchemas
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
