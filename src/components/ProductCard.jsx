import { waLink, occasions } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppFab";

export default function ProductCard({ product }) {
  const occasion = occasions.find((o) => o.key === product.occasion);
  const message = `Hello Meenarshi's Gift Gallery! I'd like to order the "${product.name}". Please share availability, pricing and delivery details.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rose/10 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-blush">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {occasion && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-cream/90 px-2.5 py-1 font-body text-[0.6rem] font-bold uppercase tracking-wide text-forest backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[0.65rem]">
            {occasion.emoji} {occasion.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-base leading-snug text-forest sm:text-lg md:text-xl">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 font-body text-[0.8rem] font-normal leading-relaxed text-forest/65 sm:text-sm">
          {product.short}
        </p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-gradient mt-4 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 font-body text-xs font-bold text-cream shadow-sm shadow-rose/20 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Order via WhatsApp
        </a>
      </div>
    </article>
  );
}
