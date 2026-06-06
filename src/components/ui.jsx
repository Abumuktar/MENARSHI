import { Link } from "react-router-dom";

/* Reusable button — primary (rose), secondary (forest outline), ghost */
export function Button({
  as = "link",
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-body font-bold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2";
  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-sm",
  };
  const variants = {
    primary:
      "bg-rose text-cream shadow-sm hover:bg-rose-deep hover:shadow-md hover:-translate-y-0.5",
    secondary:
      "border border-forest/30 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream",
    light:
      "bg-cream text-forest shadow-sm hover:bg-blush hover:-translate-y-0.5",
    outlineLight:
      "border border-cream/60 text-cream hover:bg-cream hover:text-forest",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (as === "button") {
    return (
      <button className={cls} {...props}>
        {children}
      </button>
    );
  }
  if (as === "a") {
    return (
      <a className={cls} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} to={href} {...props}>
      {children}
    </Link>
  );
}

/* Eyebrow + heading block */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] ${
            light ? "text-coral" : "text-rose"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-body text-base font-normal leading-relaxed ${
            light ? "text-cream/80" : "text-forest/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Stars({ count = 5, className = "" }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-coral">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
