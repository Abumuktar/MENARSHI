import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, occasions, occasionCopy } from "@/lib/data";
import ProductCard from "./ProductCard";

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
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => {
          const on = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 font-body text-sm font-bold transition-all ${
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
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
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
