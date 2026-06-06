import { Link } from "react-router-dom";
import { occasions, valueProps, gallery, site } from "@/lib/data";
import { Icon } from "./Icons";
import { SectionHeading } from "./ui";

/* Page hero used on inner pages */
export function PageHero({ eyebrow, title, subtitle, script }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush to-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/25 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-forest/10 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,126,138,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="container-px relative mx-auto max-w-4xl py-20 text-center md:py-28">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose/25 bg-cream/80 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.25em] text-rose shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl leading-[1.05] text-forest md:text-6xl">
          {title}
        </h1>
        {script && (
          <p className="mt-2 font-display text-2xl italic text-rose md:text-3xl">
            {script}
          </p>
        )}
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-body text-base font-normal leading-relaxed text-forest/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* Horizontal occasions strip */
export function OccasionsStrip() {
  return (
    <section className="border-y border-rose/10 bg-cream py-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible">
          {occasions.map((o) => (
            <Link
              key={o.key}
              to={`/shop?occasion=${o.key}`}
              className="group flex min-w-[120px] flex-1 snap-start flex-col items-center gap-3 rounded-2xl border border-transparent bg-blush/60 px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-rose/20 hover:bg-blush"
            >
              <span className="text-3xl transition-transform group-hover:scale-110">
                {o.emoji}
              </span>
              <span className="font-body text-sm font-bold text-forest">
                {o.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Why Meenarshi's — value props */
export function ValueProps() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <SectionHeading
        eyebrow="Why Meenarshi's"
        title="Gifting, elevated"
        subtitle="Every order is handled with the same care we'd give our own — from the first message to the moment it's unwrapped."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-rose/10 bg-cream p-7 text-center transition-shadow hover:shadow-md"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose">
              <Icon name={v.icon} />
            </span>
            <h3 className="mt-5 font-display text-xl text-forest">{v.title}</h3>
            <p className="mt-2 font-body text-sm font-normal leading-relaxed text-forest/65">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Instagram feed strip */
export function InstagramStrip() {
  return (
    <section className="bg-blush py-20 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="On the gram"
          title="Follow the gallery"
          subtitle={`Follow us for daily inspo ${site.instagram}`}
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.slice(0, 6).map((g, i) => (
            <a
              key={i}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-cream"
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-forest/0 text-cream opacity-0 transition-all group-hover:bg-forest/40 group-hover:opacity-100">
                <InstagramGlyph className="h-7 w-7" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-bold text-rose hover:text-rose-deep"
          >
            <InstagramGlyph className="h-5 w-5" />
            {site.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

export function InstagramGlyph({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.06-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.06 4.7c.05 1.1.24 1.7.4 2.1.2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.06 1.6.06 4.7.06s3.5 0 4.7-.06c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.06-1.2.06-1.6.06-4.7s0-3.5-.06-4.7c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.83-1.3 3.5 3.5 0 0 0-1.3-.83c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.06A4.94 4.94 0 1 0 12 17a4.94 4.94 0 0 0 0-9.88zm0 8.14A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.3-8.34a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}
