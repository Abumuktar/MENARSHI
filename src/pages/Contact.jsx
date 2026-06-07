import { site, waLink } from "@/lib/data";
import { PageHero, InstagramGlyph } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

function InfoCard({ children }) {
  return (
    <div className="rounded-2xl border border-rose/10 bg-blush/50 p-5">
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & order"
        title="Let's make it memorable"
        subtitle="Place an order, request a quote, or just say hello. We'd love to help you find the perfect gift."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left — quick contact */}
          <div className="space-y-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-body text-sm font-bold">
                  Chat with us on WhatsApp
                </span>
                <span className="block font-body text-xs font-normal text-white/85">
                  Fastest way to order — we reply quickly
                </span>
              </span>
            </a>

            <InfoCard>
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-rose">
                Call or WhatsApp
              </h3>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-1 block font-body text-sm text-forest hover:text-rose"
              >
                {site.phone}
              </a>
            </InfoCard>

            <InfoCard>
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-rose">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block font-body text-sm text-forest hover:text-rose"
              >
                {site.email}
              </a>
            </InfoCard>

            <InfoCard>
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-rose">
                Location
              </h3>
              <p className="mt-1 font-body text-sm font-normal text-forest/80">
                {site.address} — delivering citywide across{" "}
                {site.areas.join(", ")} &amp; beyond.
              </p>
            </InfoCard>

            <InfoCard>
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-rose">
                Business hours
              </h3>
              <p className="mt-1 font-body text-sm font-normal text-forest/80">
                {site.hours}
              </p>
            </InfoCard>

            <InfoCard>
              <h3 className="font-body text-xs font-bold uppercase tracking-wider text-rose">
                Follow us
              </h3>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-body text-sm text-forest hover:text-rose"
              >
                <InstagramGlyph className="h-4 w-4" />
                {site.instagram}
              </a>
            </InfoCard>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="mb-2 font-display text-2xl text-forest md:text-3xl">
              Send an enquiry
            </h2>
            <p className="mb-6 font-body text-sm font-normal text-forest/70">
              Fill in your details and we&rsquo;ll get back to you with options
              and a quote.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="overflow-hidden rounded-[2rem] border border-rose/10">
          <iframe
            title={`${site.name} — ${site.city}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              site.mapQuery
            )}&z=${site.mapZoom || 12}&output=embed`}
            className="h-80 w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
