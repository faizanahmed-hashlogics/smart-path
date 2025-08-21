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
                "@id": "https://smartpath.ae/#organization",
                name: "Smart Path Consultancy",
                url: "https://smartpath.ae",
                logo: {
                  "@type": "ImageObject",
                  url: "https://smartpath.ae/logo.png",
                },
                sameAs: ["https://linkedin.com/company/smartpath-consultancy"],
              },
              {
                "@type": "WebSite",
                "@id": "https://smartpath.ae/#website",
                url: "https://smartpath.ae",
                name: "Smart Path Consultancy",
                publisher: {
                  "@id": "https://smartpath.ae/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://smartpath.ae/?s={search_term_string}",
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
