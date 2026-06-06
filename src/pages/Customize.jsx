import { PageHero } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import CustomizeForm from "@/components/CustomizeForm";

const steps = [
  {
    icon: "gift",
    title: "Choose your base",
    desc: "Start with a hamper, gift box or bouquet-style arrangement that fits the occasion.",
  },
  {
    icon: "pen",
    title: "Add personal touches",
    desc: "Names, a heartfelt message, a photo print, or your brand logo — make it unmistakably theirs.",
  },
  {
    icon: "truckFast",
    title: "We package & deliver",
    desc: "We wrap it to perfection and deliver across Abuja — or you collect it in person.",
  },
];

export default function Customize() {
  return (
    <>
      <PageHero
        eyebrow="Customized gifts"
        title="Make it personal"
        script="for truly unique moments"
        subtitle="The most memorable gifts are the ones made just for them. Here's how we bring yours to life."
      />

      {/* 3-step process */}
      <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-rose/10 bg-cream p-8 text-center shadow-sm"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose px-4 py-1 font-body text-xs font-bold uppercase tracking-widest text-cream">
                Step {i + 1}
              </span>
              <span className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-blush text-rose">
                <Icon name={s.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-forest">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm font-normal leading-relaxed text-forest/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Request form */}
      <section className="container-px mx-auto max-w-3xl pb-24">
        <div className="mb-10 text-center">
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rose">
            Customization request
          </p>
          <h2 className="font-display text-3xl text-forest md:text-4xl">
            Tell us about your gift
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body font-normal text-forest/70">
            Share a few details and we&rsquo;ll craft a custom quote just for
            you.
          </p>
        </div>
        <CustomizeForm />
      </section>
    </>
  );
}
