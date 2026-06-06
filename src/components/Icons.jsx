/* Thin-line brand icons for value props & steps */
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

export function Icon({ name, className = "h-7 w-7" }) {
  const map = {
    sparkle: (
      <>
        <path d="M12 3l1.8 4.9L18.8 9l-4.9 1.8L12 16l-1.8-5.2L5.2 9l5-1.1L12 3z" />
        <path d="M19 14l.7 1.9 1.9.7-1.9.7L19 19l-.7-1.7-1.9-.7 1.9-.7L19 14z" />
      </>
    ),
    box: (
      <>
        <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" />
        <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9M12 3v4.5" />
      </>
    ),
    truck: (
      <>
        <path d="M3 7h10v8H3zM13 10h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="1.6" />
        <circle cx="17" cy="17" r="1.6" />
      </>
    ),
    heart: (
      <path d="M12 20s-7-4.4-7-9.3C5 8 6.8 6.2 9 6.2c1.4 0 2.4.7 3 1.6.6-.9 1.6-1.6 3-1.6 2.2 0 4 1.8 4 4.5C19 15.6 12 20 12 20z" />
    ),
    gift: (
      <>
        <path d="M4 11h16v9H4zM4 7h16v4H4zM12 7v13M12 7C12 7 9 3 7 5s2 2 5 2zM12 7c0 0 3-4 5-2s-2 2-5 2z" />
      </>
    ),
    pen: (
      <path d="M14 4l6 6L9 21H3v-6L14 4z" />
    ),
    truckFast: (
      <>
        <path d="M9 7h7v8H9zM16 10h3l2 2v3h-5z" />
        <path d="M2 9h4M2 12h3" />
        <circle cx="12" cy="17" r="1.4" />
        <circle cx="19" cy="17" r="1.4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {map[name] || map.gift}
    </svg>
  );
}
