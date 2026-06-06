import { hampers, waLink } from "@/lib/data";
import { PageHero } from "@/components/Sections";
import { Button } from "@/components/ui";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

export default function Hampers() {
  return (
    <>
      <PageHero
        eyebrow="Hampers & sets"
        title="Curated sets, beautifully boxed"
        subtitle="Our signature hampers — each one thoughtfully composed and finished with our premium packaging."
      />

      <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {hampers.map((h, i) => {
            const reversed = i % 2 === 1;
            const message = `Hello Meenarshi's Gift Gallery! I'd like to order "${h.name}". Please share availability, pricing and delivery details.`;
            return (
              <div
                key={h.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`relative aspect-[5/4] overflow-hidden rounded-[2rem] border-4 border-blush shadow-xl ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className={reversed ? "md:order-1" : ""}>
                  <div className="flex flex-wrap gap-2">
                    {h.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-coral/20 px-3 py-1 font-body text-[0.65rem] font-bold uppercase tracking-wider text-rose-deep"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-3xl text-forest md:text-4xl">
                    {h.name}
                  </h2>
                  <p className="mt-4 font-body text-base font-normal leading-relaxed text-forest/75">
                    {h.desc}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      as="a"
                      href={waLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Order this hamper
                    </Button>
                    <Button href="/customize" variant="secondary">
                      Make it custom
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-[2.5rem] bg-blush px-8 py-14 text-center md:py-16">
          <h2 className="font-display text-3xl text-forest md:text-4xl">
            Don&rsquo;t see exactly what you want?
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body font-normal text-forest/70">
            Every hamper can be tailored to your budget, occasion and personal
            touches. Let&rsquo;s build yours together.
          </p>
          <div className="mt-8">
            <Button href="/customize" size="lg">
              Start a custom hamper
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
