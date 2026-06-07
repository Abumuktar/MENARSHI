import { useState } from "react";
import { Link } from "react-router-dom";
import { occasions, valueProps, gallery, site, faqs, waLink } from "@/lib/data";
import { Icon } from "./Icons";
import { SectionHeading, Button } from "./ui";
import { WhatsAppIcon } from "./WhatsAppFab";
import Reveal, { CountUp } from "./Reveal";

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
      <Reveal className="container-px relative mx-auto max-w-4xl py-16 text-center sm:py-20 md:py-28">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose/25 bg-cream/80 px-4 py-1.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose shadow-sm backdrop-blur sm:text-xs sm:tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[2.25rem] leading-[1.05] text-forest sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {script && (
          <p className="mt-2 font-display text-xl italic text-rose sm:text-2xl md:text-3xl">
            {script}
          </p>
        )}
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm font-normal leading-relaxed text-forest/70 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </Reveal>
    </section>
  );
}

/* Horizontal occasions strip */
export function OccasionsStrip() {
  return (
    <section className="border-y border-rose/10 bg-cream py-8 md:py-10">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 md:mx-0 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible md:px-0">
          {occasions.map((o) => (
            <Link
              key={o.key}
              to={`/shop?occasion=${o.key}`}
              className="group flex min-w-[108px] flex-1 snap-start flex-col items-center gap-2.5 rounded-2xl border border-transparent bg-blush/60 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose/20 hover:bg-blush hover:shadow-md md:gap-3 md:py-6"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                {o.emoji}
              </span>
              <span className="font-body text-sm font-bold text-forest">
                {o.label}
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* Why Meenarshi's — value props */
export function ValueProps() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
      <SectionHeading
        eyebrow="Why Meenarshi's"
        title="Gifting, elevated"
        subtitle="Every order is handled with the same care we'd give our own — from the first message to the moment it's unwrapped."
      />
      <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {valueProps.map((v, i) => (
          <Reveal
            key={v.title}
            delay={i * 90}
            className="group rounded-2xl border border-rose/10 bg-cream p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose/20 hover:shadow-lg sm:p-7"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-rose transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <Icon name={v.icon} />
            </span>
            <h3 className="mt-5 font-display text-xl text-forest">{v.title}</h3>
            <p className="mt-2 font-body text-sm font-normal leading-relaxed text-forest/65">
              {v.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* Instagram feed strip */
export function InstagramStrip() {
  return (
    <section className="bg-blush py-16 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="On the gram"
          title="Follow the gallery"
          subtitle={`Follow us for daily inspo ${site.instagram}`}
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.slice(0, 6).map((g, i) => (
            <Reveal
              as="a"
              key={i}
              delay={(i % 3) * 80}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl bg-cream"
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
            </Reveal>
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

/* Animated stats band — counters tick up on scroll */
const stats = [
  { to: 100, suffix: "+", label: "Happy clients", icon: "heart" },
  { to: 500, suffix: "+", label: "Gifts curated", icon: "gift" },
  { to: 6, suffix: "", label: "Areas across Abuja", icon: "truckFast" },
  { to: 100, suffix: "%", label: "Made personal", icon: "sparkle" },
];

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-blush py-16 md:py-20">
      <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-coral/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-rose/10 blur-[100px]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="group flex flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-rose shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-14 sm:w-14">
                <Icon name={s.icon} />
              </span>
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="text-gradient mt-4 font-display text-4xl md:text-5xl"
              />
              <span className="mt-1.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-forest/60">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* How it works — three clean, connected steps */
const steps = [
  {
    icon: "sparkle",
    title: "Tell us the occasion",
    desc: "Share who it's for, the vibe and your budget — on WhatsApp or our quick form.",
  },
  {
    icon: "box",
    title: "We curate & wrap",
    desc: "We hand-pick each piece and finish it with premium, photo-ready packaging.",
  },
  {
    icon: "truckFast",
    title: "We deliver",
    desc: "Same-day across Abuja — beautifully presented, right to their door.",
  },
];

export function ProcessSteps() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="Gifting in three easy steps"
        subtitle="From the first message to the moment it's unwrapped — we handle every detail."
      />
      <div className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
        {/* connecting line */}
        <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 120}
            className="group relative flex flex-col items-center text-center"
          >
            <span className="bg-brand-gradient relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-cream shadow-lg shadow-rose/30 transition-transform duration-300 group-hover:scale-110">
              <Icon name={s.icon} />
              <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cream bg-forest font-body text-[0.7rem] font-bold text-cream">
                {i + 1}
              </span>
            </span>
            <h3 className="mt-6 font-display text-xl text-forest">{s.title}</h3>
            <p className="mt-2 max-w-xs font-body text-sm font-normal leading-relaxed text-forest/65">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* Moving marquee ribbon of occasions — pauses on hover */
export function Marquee() {
  const items = [
    "Birthdays",
    "Weddings",
    "Bridal Showers",
    "Corporate Gifts",
    "Anniversaries",
    "Just Because",
  ];
  const row = [...items, ...items]; // duplicated for a seamless loop
  return (
    <section
      aria-hidden="true"
      className="bg-brand-gradient-warm animate-gradient marquee-paused overflow-hidden py-4"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className="mx-7 inline-flex items-center gap-7 font-display text-lg text-cream md:text-2xl"
          >
            {it}
            <span className="text-cream/70">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* FAQ — clean two-column accordion, fully animated */
export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Left — intro */}
        <Reveal>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-blush px-4 py-1.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Good to know
          </p>
          <h2 className="font-display text-[1.75rem] leading-tight text-forest sm:text-3xl md:text-4xl lg:text-5xl">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p className="mt-4 font-body text-sm font-normal leading-relaxed text-forest/70 sm:text-base">
            Everything you need to know about ordering, delivery and making your
            gift truly personal. Still curious? We&rsquo;re a message away.
          </p>
          <div className="mt-7">
            <Button
              as="a"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us
            </Button>
          </div>
        </Reveal>

        {/* Right — accordion */}
        <Reveal delay={120} className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-cream transition-colors duration-300 ${
                  open ? "border-rose/30 shadow-sm" : "border-rose/10"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base text-forest sm:text-lg"
                >
                  {f.q}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      open ? "bg-rose text-cream rotate-180" : "bg-blush text-rose"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-body text-sm font-normal leading-relaxed text-forest/70">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
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
