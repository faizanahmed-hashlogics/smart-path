import { Container } from "@/components/ui/container"
import Image from "next/image"

export function TrustRow() {
  // Partner logos (ensure these files exist in /public/images)
  const logos = [
    { src: "/images/final logo-02.png", alt: "Smart Path Consultancy" },
    { src: "/images/business%20logo.jpg", alt: "Business Logo" },
    { src: "/images/dubai-business-trade.png", alt: "Dubai Business Trade" },
  ]

  // Duplicate to create a longer, seamless marquee track
  const marqueeItems = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="py-24 md:py-28 border-y border-border bg-card/30">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent/90 mb-2">Trusted by</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            Founders across the <span className="text-accent">UAE</span>
          </h2>
          <div className="mt-4 h-px w-24 mx-auto bg-border/60" />
        </div>
      </Container>

      {/* Full-width marquee (bleeds edge-to-edge) */}
      <div
        className="mt-10 relative overflow-hidden w-screen mx-[calc(50%-50vw)]"
        aria-label="Trusted brands marquee"
      >
        <div
          className="flex items-center gap-16 w-max will-change-transform animate-marquee-ltr whitespace-nowrap"
          style={{ animationDuration: "15s" }}
        >
          {marqueeItems.map((logo, idx) => (
            <div key={`m-${idx}`} className="h-16 md:h-20 flex items-center flex-none shrink-0 px-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={72}
                sizes="(min-width: 768px) 220px, 160px"
                className="h-14 md:h-16 w-auto flex-none shrink-0 object-contain opacity-100 transition"
                priority={idx < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
