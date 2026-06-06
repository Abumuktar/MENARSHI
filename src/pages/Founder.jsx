import { founder, site, waLink } from "@/lib/data";
import { PageHero } from "@/components/Sections";
import FounderSection, { FounderValues } from "@/components/FounderSection";
import { Button, SectionHeading } from "@/components/ui";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

export default function Founder() {
  return (
    <>
      <PageHero
        eyebrow="Meet the founder"
        title={founder.name}
        script={founder.role}
        subtitle={founder.tagline}
      />

      {/* Founder showcase card (shared with the landing page) */}
      <FounderSection showLink={false} />

      {/* Bio band — Gargadi dark "impact" band in forest */}
      <section className="relative overflow-hidden bg-forest py-20 text-cream md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/15 blur-[120px]" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-coral">
              Her story
            </p>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              How Meenarshi&rsquo;s began
            </h2>
            <div className="mt-5 space-y-4 font-body text-base font-normal leading-relaxed text-cream/80">
              {founder.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Stats restated as a clean grid on the dark band */}
          <div className="grid grid-cols-3 gap-4">
            {founder.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-cream/10 bg-cream/5 px-3 py-6 text-center"
              >
                <span className="block font-display text-3xl text-coral md:text-4xl">
                  {s.value}
                </span>
                <span className="mt-2 block font-body text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What she curates by */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="What she curates by"
          title="The standard behind every gift"
          subtitle="Three principles Ameenah set on day one — and still curates by today."
        />
        <FounderValues className="mt-14" />
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-rose px-8 py-16 text-center text-cream md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cream/10" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-forest/20" />
          <h2 className="relative font-display text-3xl text-cream md:text-5xl">
            Let&rsquo;s curate something special
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl font-body font-normal text-cream/90">
            Tell {founder.name.split(" ")[0]} the occasion and we&rsquo;ll craft
            the perfect gift — beautifully packaged and delivered across{" "}
            {site.city.split(",")[0]}.
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
            <Button href="/shop" variant="outlineLight" size="lg">
              Browse collections
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
