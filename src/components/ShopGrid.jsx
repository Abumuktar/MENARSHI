import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, occasions, occasionCopy } from "@/lib/data";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const filters = [{ key: "all", label: "All", emoji: "✨" }, ...occasions];

export default function ShopGrid() {
  const [searchParams] = useSearchParams();
  const initial = searchParams.get("occasion") || "all";
  const valid = filters.some((f) => f.key === initial) ? initial : "all";
  const [active, setActive] = useState(valid);

  // Keep the active filter in sync when the URL query changes
  useEffect(() => {
    setActive(filters.some((f) => f.key === initial) ? initial : "all");
  }, [initial]);

  const list =
    active === "all"
      ? products
      : products.filter((p) => p.occasion === active);

  const copy = occasionCopy[active];

  return (
    <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
      {/* Filter pills */}
      <div className="no-scrollbar -mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-center sm:gap-2.5 sm:overflow-visible">
        {filters.map((f) => {
          const on = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border px-4 py-2.5 font-body text-sm font-bold transition-all sm:px-5 ${
                on
                  ? "border-rose bg-rose text-cream shadow-sm"
                  : "border-rose/20 bg-cream text-forest hover:border-rose hover:text-rose"
              }`}
            >
              <span>{f.emoji}</span>
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Occasion intro copy */}
      {copy && (
        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl italic leading-snug text-forest/80 md:text-2xl">
          {copy}
        </p>
      )}

      {/* Grid */}
      {list.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center font-body font-normal text-forest/60">
          New pieces for this occasion are on their way — message us and
          we&rsquo;ll curate something just for you.
        </p>
      )}

      <p className="mt-12 text-center font-body text-xs font-normal text-forest/50">
        No checkout needed — every order is confirmed personally via WhatsApp or
        our contact form.
      </p>
    </div>
  );
}
