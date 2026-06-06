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
      {/* ---------- HERO (clean, centered — Gargadi-style) ---------- */}
      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden bg-cream px-6 py-28 text-center md:py-32">
        {/* Faint background image — kept as a soft mood, not a backdrop you read over */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/bento_main.png"
            alt=""
            aria-hidden="true"
            className="animate-kenburns h-full w-full object-cover object-center"
          />
        </div>
        {/* Strong cream scrim so the image stays faint and the text is crisp */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,250,249,0.94) 0%, rgba(255,250,249,0.86) 55%, rgba(255,250,249,0.74) 100%)",
          }}
        />
        {/* Subtle rose dot grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(rgba(194,93,114,0.10) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "10px 10px",
          }}
        />
        {/* Soft brand glow blobs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-coral/20 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <p
            className="reveal mb-7 inline-flex items-center gap-2.5 rounded-full border border-rose/20 bg-cream/80 px-4 py-2 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose shadow-sm backdrop-blur-md"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-softpulse absolute inline-flex h-full w-full rounded-full bg-coral" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            Premium gifts &amp; hampers · {site.city}
          </p>

          <h1
            className="reveal font-display text-[2.6rem] leading-[1.08] text-forest sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "0.15s" }}
          >
            Curated gifts for{" "}
            <span className="relative whitespace-nowrap text-rose">
              every occasion
              <span className="absolute inset-x-0 bottom-1.5 -z-10 h-3 rounded bg-coral/40 md:bottom-2.5" />
            </span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl font-body text-base font-normal leading-relaxed text-forest/70 md:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            {site.subtagline} Hand-curated, beautifully packaged, and made
            personal for the moments that matter.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap justify-center gap-3"
            style={{ animationDelay: "0.42s" }}
          >
            <Button href="/shop" size="lg" className="shine">
              Shop Our Collections
              <Icon name="arrow" className="h-4 w-4" />
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

          <p
            className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-body text-xs font-normal text-forest/60"
            style={{ animationDelay: "0.54s" }}
          >
            <Stars className="scale-90" />
            <span className="font-bold text-forest">100+ happy clients</span>
            <span aria-hidden="true">·</span>
            <span>Same-day Abuja delivery</span>
          </p>
        </div>
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
