import { founder } from "@/lib/data";
import { Button } from "./ui";
import { Icon } from "./Icons";
import Reveal, { CountUp } from "./Reveal";

/* "100+" -> { to: 100, suffix: "+" } so the stat can count up */
function parseStat(value) {
  const m = String(value).match(/^(\d+)(.*)$/);
  return m ? { to: parseInt(m[1], 10), suffix: m[2] } : { to: 0, suffix: value };
}

/*
  Founder showcase — Gargadi-style composition (pill eyebrow, hover-lift
  card, portrait + quote-with-avatar, stat row) rendered in Meenarshi's
  rose / forest / blush palette.

  Used on the landing page (with the CTA + "read more" link) and on the
  dedicated /founder page (showLink={false}).
*/
export default function FounderSection({ showLink = true, className = "" }) {
  return (
    <section className={`container-px mx-auto max-w-7xl py-20 md:py-28 ${className}`}>
      <Reveal className="group relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-rose/10 bg-cream p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_18px_50px_rgba(47,74,58,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_28px_70px_rgba(47,74,58,0.12)] md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
        {/* soft brand glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral/15 blur-[90px]" />

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-blush bg-gradient-to-b from-blush to-cream shadow-xl">
          <img
            src={founder.image}
            alt={`${founder.name}, ${founder.role} of Meenarshi's Gift Gallery`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
          />
          {/* Name plate */}
          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-cream/40 bg-forest/85 px-4 py-3 text-cream backdrop-blur-sm">
            <p className="font-display text-lg leading-tight">{founder.name}</p>
            <p className="font-body text-[0.7rem] font-bold uppercase tracking-[0.18em] text-coral">
              {founder.role}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-blush px-4 py-1.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rose">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Meet the founder
          </p>

          <h2 className="font-display text-3xl leading-tight text-forest md:text-4xl lg:text-[2.75rem]">
            {founder.tagline}
          </h2>

          {/* Quote with avatar */}
          <figure className="mt-6 rounded-2xl border-l-4 border-rose bg-blush/60 p-5">
            <blockquote className="font-display text-lg italic leading-snug text-forest md:text-xl">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose font-body text-sm font-bold text-cream">
                {founder.initials}
              </span>
              <span>
                <span className="block font-body text-sm font-bold text-forest">
                  {founder.name}
                </span>
                <span className="block font-body text-xs text-forest/60">
                  {founder.role}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Stats */}
          <dl className="mt-7 grid grid-cols-3 gap-3">
            {founder.stats.map((s) => {
              const { to, suffix } = parseStat(s.value);
              return (
              <div
                key={s.label}
                className="rounded-2xl border border-rose/10 bg-cream px-3 py-4 text-center"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp
                    to={to}
                    suffix={suffix}
                    className="text-gradient block font-display text-2xl md:text-3xl"
                  />
                  <span className="mt-1 block font-body text-[0.68rem] font-bold uppercase tracking-[0.12em] text-forest/60">
                    {s.label}
                  </span>
                </dd>
              </div>
              );
            })}
          </dl>

          {showLink && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/founder">Meet Ameenah</Button>
              <Button href="/about" variant="secondary">
                Our story
              </Button>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* Compact value cards — Gargadi gc-card hover-lift, Meenarshi palette */
export function FounderValues({ className = "" }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-3 ${className}`}>
      {founder.values.map((v) => (
        <div
          key={v.title}
          className="rounded-2xl border border-rose/10 bg-cream p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose/20 hover:shadow-lg"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-rose">
            <Icon name={v.icon} />
          </span>
          <h3 className="mt-5 font-display text-xl text-forest">{v.title}</h3>
          <p className="mt-2 font-body text-sm font-normal leading-relaxed text-forest/65">
            {v.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
