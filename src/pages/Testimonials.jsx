import { testimonials, waLink } from "@/lib/data";
import { PageHero } from "@/components/Sections";
import { Button, Stars } from "@/components/ui";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Kind words"
        title="Loved by gift-givers"
        script="across Abuja"
        subtitle="The perfect gift, every time — here's what our clients have to say."
      />

      <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="break-inside-avoid rounded-2xl border border-rose/10 bg-cream p-7 shadow-sm"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 font-display text-xl italic leading-snug text-forest">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <span className="block font-body text-sm font-bold text-forest">
                  {t.name}
                </span>
                <span className="block font-body text-xs font-normal text-rose">
                  {t.occasion}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stat band */}
        <div className="mt-16 grid gap-6 rounded-[2rem] bg-blush p-10 text-center sm:grid-cols-3">
          {[
            { stat: "100+", label: "Gifts delivered" },
            { stat: "5.0", label: "Average rating" },
            { stat: "Same day", label: "Abuja delivery" },
          ].map((s) => (
            <div key={s.label}>
              <span className="block font-display text-4xl text-rose md:text-5xl">
                {s.stat}
              </span>
              <span className="font-body text-xs font-bold uppercase tracking-widest text-forest/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            as="a"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Join our happy clients
          </Button>
        </div>
      </section>
    </>
  );
}
