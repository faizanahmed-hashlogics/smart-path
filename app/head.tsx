export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://smartpath-consultancy.com/#organization",
                name: "Smart Path Consultancy",
                url: "https://smartpath-consultancy.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://smartpath-consultancy.com/logo.png",
                },
                sameAs: ["https://linkedin.com/company/smartpath-consultancy"],
              },
              {
                "@type": "WebSite",
                "@id": "https://smartpath-consultancy.com/#website",
                url: "https://smartpath-consultancy.com",
                name: "Smart Path Consultancy",
                publisher: {
                  "@id": "https://smartpath-consultancy.com/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://smartpath-consultancy.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
