import { gallery, site } from "@/lib/data";
import { PageHero, InstagramGlyph } from "@/components/Sections";
import { Button } from "@/components/ui";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="A gallery of gifting"
        subtitle="A peek at past orders and packaging. Love what you see? Order yours today."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        {/* Masonry via CSS columns */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-rose/10 bg-blush shadow-sm"
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-forest/90 to-transparent p-5 font-body text-sm font-normal text-cream transition-transform duration-300 group-hover:translate-y-0">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-[2.5rem] bg-forest px-8 py-14 text-center text-cream md:py-16">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Love what you see?
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body font-normal text-cream/80">
            Order yours today, or follow along for daily inspiration on
            Instagram.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/shop" variant="light" size="lg">
              Order yours today →
            </Button>
            <Button
              as="a"
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
              size="lg"
            >
              <InstagramGlyph className="h-4 w-4" />
              {site.instagram}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
