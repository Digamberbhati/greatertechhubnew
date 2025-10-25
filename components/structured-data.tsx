export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GreaterTechHub",
    url: "https://greatertechhub.com",
    logo: "https://greatertechhub.com/logo.png",
    description: "Leading IT services company offering comprehensive technology solutions",
    sameAs: [
      "https://www.facebook.com/greatertechhub",
      "https://www.twitter.com/greatertechhub",
      "https://www.linkedin.com/company/greatertechhub",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+1-234-567-890",
      email: "support@greatertechhub.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "Silicon Valley",
      addressRegion: "CA",
      postalCode: "94025",
      addressCountry: "US",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
