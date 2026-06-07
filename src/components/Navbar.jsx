import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, waLink, site } from "@/lib/data";
import Logo from "./Logo";
import { WhatsAppIcon } from "./WhatsAppFab";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change & lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-rose/15 bg-cream/90 shadow-sm backdrop-blur-md"
            : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Link to="/" className="shrink-0" aria-label="Go to homepage">
            <Logo className="h-12 w-auto md:h-14" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-body text-sm font-normal tracking-wide transition-colors hover:text-rose ${
                  isActive(item.href) ? "text-rose" : "text-forest"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-rose transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 font-body text-sm font-bold text-cream transition-colors hover:bg-forest-deep sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order via WhatsApp
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-blush lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 rounded-full bg-current" />
                <span className="block h-0.5 w-6 rounded-full bg-current" />
                <span className="block h-0.5 w-6 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- Mobile drawer (top-level, not inside the blurred header) ---------- */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Dimmed scrim */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-forest/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Solid drawer panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-xs flex-col overflow-hidden bg-cream shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* soft brand glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-coral/20 blur-[80px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(rgba(194,93,114,0.08) 2px, transparent 2px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Drawer header */}
          <div className="relative flex items-center justify-between border-b border-rose/10 px-6 py-5">
            <Logo className="h-11 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-blush"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="relative flex-1 overflow-y-auto px-6 py-6">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                style={{ transitionDelay: open ? `${100 + i * 45}ms` : "0ms" }}
                className={`flex items-center justify-between border-b border-rose/10 py-3.5 font-display text-2xl transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${
                  isActive(item.href)
                    ? "text-rose"
                    : "text-forest hover:text-rose"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                )}
              </Link>
            ))}
          </nav>

          {/* Footer CTA */}
          <div className="relative border-t border-rose/10 px-6 py-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gradient flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-bold text-cream shadow-md shadow-rose/30"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order via WhatsApp
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center font-body text-xs font-bold uppercase tracking-[0.18em] text-forest/50 transition-colors hover:text-rose"
            >
              {site.instagram}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
