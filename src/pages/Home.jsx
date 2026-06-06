import { products, site, waLink, testimonials } from "@/lib/data";
import { Button, SectionHeading, Stars } from "@/components/ui";
import { OccasionsStrip, ValueProps, InstagramStrip } from "@/components/Sections";
import FounderSection from "@/components/FounderSection";
import ProductCard from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppFab";
import { Icon } from "@/components/Icons";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* ---------- HERO (full-bleed immersive) ---------- */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        {/* Background image with slow Ken Burns zoom */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bento_main.png"
            alt="A beautifully curated Meenarshi's gift hamper"
            className="animate-kenburns h-full w-full object-cover object-center"
          />
        </div>
        {/* Overlays: soft white scrim for legibility (lighter toward the image) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/75 to-cream/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cream/60 via-transparent to-cream/30" />

        <div className="container-px mx-auto w-full max-w-7xl py-24">
          <div className="max-w-2xl">
            <p
              className="reveal mb-7 inline-flex items-center gap-2.5 rounded-full border border-rose/20 bg-cream/70 px-4 py-2 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose shadow-sm backdrop-blur-md"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-softpulse absolute inline-flex h-full w-full rounded-full bg-coral" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              Premium gifts &amp; hampers · {site.city}
            </p>

            <h1
              className="reveal font-display leading-[1.0] text-forest [text-shadow:0_1px_18px_rgba(255,250,249,0.6)]"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="block text-[3.2rem] sm:text-7xl lg:text-[5.4rem]">
                Meenarshi&rsquo;s
              </span>
              <span className="mt-1 block italic text-rose text-[2.4rem] sm:text-6xl lg:text-[4.2rem]">
                Gift Gallery
              </span>
            </h1>

            <p
              className="reveal mt-7 max-w-lg font-body text-lg font-normal leading-relaxed text-forest/75 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              {site.tagline} {site.subtagline}
            </p>

            <div
              className="reveal mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "0.42s" }}
            >
              <Button href="/shop" size="lg" className="shine">
                Shop Our Collections
              </Button>
              <Button
                as="a"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </Button>
            </div>

            {/* Feature chips with icons */}
            <div
              className="reveal mt-12 flex flex-wrap items-center gap-2.5"
              style={{ animationDelay: "0.54s" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-rose/15 bg-cream/70 px-3.5 py-2 font-body text-xs font-normal text-forest shadow-sm backdrop-blur-md">
                <Stars className="scale-75 origin-left" />
                <span className="font-bold text-forest">100+</span> clients
              </span>
              {[
                { icon: "sparkle", label: "Hand-curated" },
                { icon: "box", label: "Premium packaging" },
                { icon: "truckFast", label: "Same-day Abuja delivery" },
              ].map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full border border-rose/15 bg-cream/70 px-3.5 py-2 font-body text-xs font-normal text-forest shadow-sm backdrop-blur-md transition-colors hover:bg-cream"
                >
                  <Icon name={f.icon} className="h-4 w-4 text-rose" />
                  {f.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#featured"
          className="group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-forest/50 transition-colors hover:text-forest md:flex"
          aria-label="Scroll to content"
        >
          <span className="font-body text-[0.6rem] font-bold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-forest/30 p-1">
            <span className="animate-float h-1.5 w-1.5 rounded-full bg-forest/60" />
          </span>
        </a>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <div id="featured" />
      <OccasionsStrip />

      {/* ---------- FEATURED ---------- */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Handpicked for you"
            title="Featured gifts & hampers"
            subtitle="A glimpse of our most-loved pieces — each one ready to be made personal."
            className="md:mx-0"
          />
          <Button href="/shop" variant="secondary" className="shrink-0">
            View all
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ---------- BRAND STORY BAND ---------- */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream/20 shadow-2xl">
            <img
              src="/images/brand_story.png"
              alt="Hands holding a wrapped Meenarshi's hamper"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-coral">
              Our story
            </p>
            <h2 className="font-display text-3xl text-cream md:text-4xl lg:text-5xl">
              We put the love in every hamper
            </h2>
            <p className="mt-5 font-body text-base font-normal leading-relaxed text-cream/80">
              Founded by {site.founder}, Meenarshi&rsquo;s Gift Gallery began
              with a simple belief — that every occasion deserves a gift as
              special as the moment itself. From our home in Abuja, we curate
              each piece by hand, never generic, always thoughtful.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="light">
                Read our story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER ---------- */}
      <FounderSection />

      {/* ---------- WHY ---------- */}
      <ValueProps />

      {/* ---------- TESTIMONIAL TEASER ---------- */}
      <section className="bg-blush py-20 md:py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Stars className="justify-center" />
          <p className="mt-6 font-display text-2xl italic leading-snug text-forest md:text-3xl lg:text-4xl">
            &ldquo;{testimonials[2].quote}&rdquo;
          </p>
          <p className="mt-6 font-body text-sm font-bold uppercase tracking-widest text-rose">
            {testimonials[2].name}
          </p>
          <p className="font-body text-xs font-normal text-forest/60">
            {testimonials[2].occasion}
          </p>
          <div className="mt-8">
            <Button href="/testimonials" variant="secondary">
              Read more reviews
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- INSTAGRAM ---------- */}
      <InstagramStrip />

      {/* ---------- FINAL CTA ---------- */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-rose px-8 py-16 text-center text-cream md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cream/10" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-forest/20" />
          <h2 className="relative font-display text-3xl text-cream md:text-5xl">
            Ready to send something unforgettable?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl font-body font-normal text-cream/90">
            Tell us the occasion and we&rsquo;ll curate the perfect gift —
            beautifully packaged and delivered across Abuja.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button
              as="a"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order via WhatsApp
            </Button>
            <Button href="/customize" variant="outlineLight" size="lg">
              Customize a gift
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
