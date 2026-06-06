import { site, waLink } from "@/lib/data";
import { PageHero } from "@/components/Sections";
import { Button } from "@/components/ui";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

const values = [
  { title: "Curation", desc: "Every product is hand-selected, never generic." },
  { title: "Warmth", desc: "Gifts that feel personal and emotionally considered." },
  { title: "Elegance", desc: "Premium presentation from packaging to delivery." },
  { title: "Reliability", desc: "Trusted for Abuja's most important occasions." },
  { title: "Personalization", desc: "Customized gifts for truly unique moments." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="The heart behind the hampers"
        script="thoughtfully curated"
      />

      {/* Founder / story */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-blush shadow-xl">
            <img
              src="/images/brand_story.png"
              alt="Founder Ameenah Dikko Radda curating a gift"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rose">
              Founder · {site.founder}
            </p>
            <h2 className="font-display text-3xl text-forest md:text-4xl">
              How Meenarshi&rsquo;s began
            </h2>
            <div className="mt-5 space-y-4 font-body text-base font-normal leading-relaxed text-forest/75">
              <p>
                Meenarshi&rsquo;s Gift Gallery was born from a love of giving —
                and a belief that a gift should feel as meaningful as the moment
                it celebrates. What started as carefully wrapped presents for
                friends and family grew into Abuja&rsquo;s home of beautiful,
                thoughtfully curated gifts.
              </p>
              <p>
                Today, {site.founder} and her team curate premium hampers for
                birthdays, weddings, bridal showers, corporate occasions and
                everything in between — each one designed to feel personal,
                luxurious, and unmistakably yours.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-rose bg-blush/60 p-6">
              <p className="font-display text-xl italic leading-snug text-forest md:text-2xl">
                &ldquo;We believe every occasion deserves a gift as special as
                the moment itself.&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <Button href="/founder" variant="secondary">
                Meet the founder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest py-20 text-cream md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-coral">
              What we stand for
            </p>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Our brand values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-6"
              >
                <span className="font-display text-3xl text-coral">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl text-cream">
                  {v.title}
                </h3>
                <p className="mt-2 font-body text-sm font-normal leading-relaxed text-cream/70">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="container-px mx-auto max-w-4xl py-20 text-center md:py-28">
        <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rose">
          Proudly Abuja-based
        </p>
        <h2 className="font-display text-3xl text-forest md:text-4xl">
          Delivering citywide &amp; beyond
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body font-normal text-forest/70">
          We deliver across Abuja — and we&rsquo;re always happy to arrange
          delivery further afield.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[...site.areas, "& beyond"].map((a) => (
            <span
              key={a}
              className="rounded-full border border-rose/20 bg-blush px-5 py-2 font-body text-sm font-bold text-forest"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            as="a"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order via WhatsApp
          </Button>
          <Button href="/shop" variant="secondary" size="lg">
            Browse collections
          </Button>
        </div>
      </section>
    </>
  );
}
