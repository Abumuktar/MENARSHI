import { site } from "@/lib/data";

/**
 * Brand logo — the real Meenarshi's lockup (gift box + wordmark).
 * File: /public/images/meenarshi.png
 *
 * Default renders directly (great on cream/white backgrounds).
 * For dark backgrounds (e.g. the footer) use <LogoChip /> which sits it
 * on a light rounded card, since the artwork has a white background.
 */
export default function Logo({ className = "h-14 w-auto" }) {
  return (
    <img
      src="/images/meenarshi.png"
      alt={site.name}
      width={1536}
      height={1024}
      className={className}
    />
  );
}

export function LogoChip({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-cream p-3 shadow-sm ${className}`}
    >
      <Logo className="h-16 w-auto" />
    </span>
  );
}
