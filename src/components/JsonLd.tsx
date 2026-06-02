// JSON-LD structured data components for rich Google results

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "LocalBusiness"],
    "@id": "https://akshaya-pharmacy.vercel.app/#organization",
    name: "Akshaya Community Pharmacy",
    alternateName: "Akshaya Pharmacy",
    description:
      "Akshaya Community Pharmacy is South Kerala's largest community pharmacy network, providing genuine branded and generic medicines at 15–60% discount across 75+ stores in Kollam, Thiruvananthapuram, and Alappuzha.",
    url: "https://akshaya-pharmacy.vercel.app",
    telephone: "+91-92078-56815",
    email: "info@akshayapharmacy.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Kollam",
      addressRegion: "Kerala",
      postalCode: "691001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.8932,
      longitude: 76.6141,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    areaServed: [
      { "@type": "City", name: "Kollam", containedInPlace: { "@type": "State", name: "Kerala" } },
      { "@type": "City", name: "Thiruvananthapuram", containedInPlace: { "@type": "State", name: "Kerala" } },
      { "@type": "City", name: "Alappuzha", containedInPlace: { "@type": "State", name: "Kerala" } },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medicines at Discount",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "Branded Medicines" },
          description: "Up to 30% off on branded medicines",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "Generic Medicines" },
          description: "Up to 60% off on generic medicines",
        },
      ],
    },
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 100 },
    sameAs: [
      "https://github.com/red-pilledd/akshaya-pharmacy",
    ],
    franchise: {
      "@type": "Product",
      name: "Akshaya Community Pharmacy Franchise",
      description: "Franchise opportunity for pharmacy owners across Kerala",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Akshaya Community Pharmacy offer medicines at a discount?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshaya Community Pharmacy procures medicines directly from licensed manufacturers and authorised distributors at bulk rates, eliminating unnecessary middlemen. These savings are passed directly to customers, resulting in 15–60% discount off MRP.",
        },
      },
      {
        "@type": "Question",
        name: "Are the medicines at Akshaya Community Pharmacy genuine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All medicines at Akshaya Community Pharmacy are sourced exclusively from licensed manufacturers and verified distributors. Every store is staffed by a qualified, licensed pharmacist.",
        },
      },
      {
        "@type": "Question",
        name: "How many Akshaya Community Pharmacy stores are there?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshaya Community Pharmacy has 75+ stores across three districts in South Kerala: Kollam, Thiruvananthapuram, and Alappuzha.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get an Akshaya Community Pharmacy franchise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can apply for a franchise by visiting our Franchise page and filling the inquiry form, or by calling +91 92078 56815. Our team will contact you within 2 business days.",
        },
      },
      {
        "@type": "Question",
        name: "Which districts does Akshaya Community Pharmacy serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Akshaya Community Pharmacy currently serves Kollam (30+ stores), Thiruvananthapuram (25+ stores), and Alappuzha (20+ stores) in South Kerala.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
