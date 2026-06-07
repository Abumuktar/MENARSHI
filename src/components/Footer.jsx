import { Link } from "react-router-dom";
import { site, nav } from "@/lib/data";
import { LogoChip } from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 bg-forest text-cream md:mt-24">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2">
            <LogoChip />
            <p className="mt-5 max-w-sm font-body text-sm font-normal leading-relaxed text-cream/70">
              Thoughtfully curated, beautifully delivered. Premium gifts &amp;
              hampers for life&rsquo;s most important occasions — proudly based
              in {site.city}.
            </p>
            <p className="mt-5 font-script text-2xl text-coral sm:text-3xl">
              Make every moment memorable.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.3em] text-coral">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-body text-sm font-normal text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.3em] text-coral">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 font-body text-sm font-normal text-cream/80">
              <li>{site.address}</li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-cream"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cream">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Instagram {site.instagram}
                </a>
              </li>
              <li className="text-cream/60">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-center md:flex-row md:text-left">
          <p className="font-body text-xs font-normal text-cream/60">
            © {new Date().getFullYear()} {site.name} · {site.founder}
          </p>
          <p className="font-body text-xs font-normal text-cream/60">
            Delivering across {site.areas.join(" · ")} &amp; beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
