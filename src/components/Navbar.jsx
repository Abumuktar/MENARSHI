import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, waLink } from "@/lib/data";
import Logo from "./Logo";
import { WhatsAppIcon } from "./WhatsAppFab";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change & lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-rose/15 bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="Go to homepage">
          <Logo className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-body text-sm font-normal tracking-wide transition-colors hover:text-rose ${
                  active ? "text-rose" : "text-forest"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-rose transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
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
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-blush lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen slide-in */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-px flex h-full flex-col justify-center gap-2">
          {nav.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`font-display text-3xl transition-colors ${
                  active ? "text-rose" : "text-forest hover:text-rose"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-body text-sm font-bold text-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
