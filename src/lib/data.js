// ============================================================
// Meenarshi's Gift Gallery — Central content & config
// Edit prices, products and details here in one place.
// ============================================================

export const site = {
  name: "Meenarshi's Gift Gallery",
  shortName: "Meenarshi's",
  founder: "Ameenah Dikko Radda",
  tagline: "Curated gifts for every occasion.",
  subtagline: "Premium hampers & personalized gifts delivered across Abuja.",
  city: "Abuja, Nigeria",
  instagram: "@meenarshisgiftgallery",
  instagramUrl: "https://instagram.com/meenarshisgiftgallery",
  email: "hello@meenarshisgiftgallery.com",
  // Replace with the real WhatsApp business number (international format, no +).
  whatsapp: "2348000000000",
  areas: ["Wuse", "Maitama", "Gwarinpa", "Jabi", "Garki", "Asokoro"],
  hours: "Mon – Sat · 9:00am – 7:00pm",
};

// Pre-filled WhatsApp message helper
export function waLink(message) {
  const base = `https://wa.me/${site.whatsapp}`;
  const text =
    message ||
    "Hello Meenarshi's Gift Gallery! I'd like to order a gift. Here are my details:%0A%0AOccasion:%0ABudget:%0ADelivery date:%0ASpecial requests:";
  return `${base}?text=${typeof message === "string" ? encodeURIComponent(message) : text}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Hampers", href: "/hampers" },
  { label: "Customize", href: "/customize" },
  { label: "Gallery", href: "/gallery" },
  { label: "Founder", href: "/founder" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// ------------------------------------------------------------
// Founder — showcased on the landing page & the /founder page.
// Swap `image` for the real portrait at /images/founder.png.
// ------------------------------------------------------------
export const founder = {
  name: "Ameenah Dikko Radda",
  role: "Founder & Lead Curator",
  image: "/images/founder.png",
  initials: "AR",
  tagline: "The heart and hands behind every Meenarshi's hamper.",
  quote:
    "We believe every occasion deserves a gift as special as the moment itself.",
  bio: [
    "Meenarshi's Gift Gallery began with a simple love of giving — and a belief that a gift should feel as meaningful as the moment it celebrates. What started as carefully wrapped presents for friends and family in Abuja grew into a brand trusted for the city's most important occasions.",
    "Today, Ameenah and her small team curate every hamper by hand — choosing each piece, ribbon and note with intention. Never generic, always personal: that is the standard she set on day one and the one she still curates by.",
  ],
  stats: [
    { value: "100+", label: "Happy clients" },
    { value: "500+", label: "Gifts curated" },
    { value: "6+", label: "Areas served" },
  ],
  values: [
    {
      icon: "sparkle",
      title: "Hand-curated",
      desc: "Every piece chosen personally — never off a generic shelf.",
    },
    {
      icon: "heart",
      title: "Made personal",
      desc: "Names, notes and little details that make a gift truly theirs.",
    },
    {
      icon: "box",
      title: "Elegantly finished",
      desc: "Premium presentation from the first ribbon to the reveal.",
    },
  ],
};

export const occasions = [
  { key: "birthday", label: "Birthdays", emoji: "🎂" },
  { key: "wedding", label: "Weddings", emoji: "💍" },
  { key: "bridal", label: "Bridal", emoji: "👰" },
  { key: "corporate", label: "Corporate", emoji: "🏢" },
  { key: "customized", label: "Customized", emoji: "✏️" },
  { key: "just-because", label: "Just Because", emoji: "🎁" },
];

export const valueProps = [
  {
    title: "Curated Selection",
    desc: "Every piece is hand-selected — never generic, always thoughtful.",
    icon: "sparkle",
  },
  {
    title: "Premium Packaging",
    desc: "Elegant presentation from the ribbon to the reveal.",
    icon: "box",
  },
  {
    title: "Fast Abuja Delivery",
    desc: "Citywide delivery across Wuse, Maitama, Gwarinpa & beyond.",
    icon: "truck",
  },
  {
    title: "Fully Customizable",
    desc: "Add names, messages, photos or a brand logo — make it yours.",
    icon: "heart",
  },
];

// Unsplash imagery placeholders — swap for real flat-lay photography at launch.
const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const products = [
  {
    slug: "blush-birthday-hamper",
    name: "Blush Birthday Hamper",
    occasion: "birthday",
    price: "₦45,000",
    priceValue: 45000,
    short: "Luxurious treats & a personalised keepsake to make their day.",
    image: img("photo-1513201099705-a9746e1e201f"),
  },
  {
    slug: "forever-wedding-set",
    name: "Forever Wedding Set",
    occasion: "wedding",
    price: "₦85,000",
    priceValue: 85000,
    short: "A gift as beautiful as their love story — ceremony to honeymoon.",
    image: img("photo-1607344645866-009c320b63e0"),
  },
  {
    slug: "bride-to-be-box",
    name: "Bride-To-Be Box",
    occasion: "bridal",
    price: "₦60,000",
    priceValue: 60000,
    short: "Spoil her with a curated bridal hamper she'll treasure.",
    image: img("photo-1522673607200-164d1b6ce486"),
  },
  {
    slug: "executive-corporate-hamper",
    name: "Executive Corporate Hamper",
    occasion: "corporate",
    price: "Enquire for Price",
    priceValue: 0,
    short: "Your brand, beautifully wrapped — optional branded packaging.",
    image: img("photo-1481437156560-3205f6a55735"),
  },
  {
    slug: "just-because-bouquet-box",
    name: "Just Because Bouquet Box",
    occasion: "just-because",
    price: "₦30,000",
    priceValue: 30000,
    short: "A little reminder that they're loved — no occasion needed.",
    image: img("photo-1608755728617-aefab37d2edd"),
  },
  {
    slug: "signature-custom-hamper",
    name: "Signature Custom Hamper",
    occasion: "customized",
    price: "From ₦40,000",
    priceValue: 40000,
    short: "Built around your story — choose every detail with us.",
    image: img("photo-1578985545062-69928b1d9587"),
  },
  {
    slug: "sweet-celebration-tower",
    name: "Sweet Celebration Tower",
    occasion: "birthday",
    price: "₦52,000",
    priceValue: 52000,
    short: "Layers of indulgence stacked into one show-stopping gift.",
    image: img("photo-1512909006721-3d6018887383"),
  },
  {
    slug: "golden-anniversary-hamper",
    name: "Golden Anniversary Hamper",
    occasion: "wedding",
    price: "₦70,000",
    priceValue: 70000,
    short: "Celebrate the years with a richly curated keepsake hamper.",
    image: img("photo-1519681393784-d120267933ba"),
  },
];

export const hampers = [
  {
    slug: "the-meenarshi-signature",
    name: "The Meenarshi Signature",
    price: "₦95,000",
    desc: "Our flagship hamper — premium chocolates, a scented candle, fine teas, a silk-wrapped keepsake and fresh florals, presented in our signature forest-green box.",
    image: img("photo-1513201099705-a9746e1e201f", 1000),
    tags: ["Bestseller", "Premium"],
  },
  {
    slug: "the-sweetheart",
    name: "The Sweetheart Set",
    price: "₦48,000",
    desc: "Romantic and warm — artisan treats, a handwritten note card, a soft plush and a single preserved rose. Perfect for anniversaries and just-because moments.",
    image: img("photo-1608755728617-aefab37d2edd", 1000),
    tags: ["Romance"],
  },
  {
    slug: "the-celebration",
    name: "The Celebration Hamper",
    price: "₦58,000",
    desc: "Bright, joyful and generous — a curated mix of sweets, sparkling drink, balloons and a personalised banner for birthdays worth remembering.",
    image: img("photo-1512909006721-3d6018887383", 1000),
    tags: ["Birthday"],
  },
  {
    slug: "the-executive",
    name: "The Executive Set",
    price: "Custom quote",
    desc: "Corporate gifting done right — premium hampers with optional branded packaging for clients, staff and partners. Volume orders welcome.",
    image: img("photo-1481437156560-3205f6a55735", 1000),
    tags: ["Corporate"],
  },
];

export const testimonials = [
  {
    name: "Aisha B.",
    occasion: "Birthday gift · Maitama",
    rating: 5,
    quote:
      "Absolutely stunning. The packaging alone made my sister cry happy tears. Meenarshi's never misses.",
  },
  {
    name: "Chidinma O.",
    occasion: "Corporate hampers · Wuse",
    rating: 5,
    quote:
      "We ordered 20 branded hampers for clients and every single one was flawless. So professional and elegant.",
  },
  {
    name: "Fatima & Yusuf",
    occasion: "Wedding · Asokoro",
    rating: 5,
    quote:
      "Our wedding hamper was beyond beautiful. Thoughtfully curated, beautifully delivered — exactly as promised.",
  },
  {
    name: "Grace N.",
    occasion: "Bridal shower · Gwarinpa",
    rating: 5,
    quote:
      "The bride-to-be box was the highlight of the shower. Everyone asked where I got it. Highly recommend!",
  },
  {
    name: "Tunde A.",
    occasion: "Just because · Jabi",
    rating: 5,
    quote:
      "Ordered last minute and they still delivered same day, perfectly wrapped. Lifesavers with impeccable taste.",
  },
  {
    name: "Halima S.",
    occasion: "Anniversary · Garki",
    rating: 5,
    quote:
      "Every detail was considered. It felt personal and luxurious. This is my go-to gift shop in Abuja now.",
  },
];

export const occasionCopy = {
  birthday:
    "Make their day unforgettable. Our birthday hampers are packed with love — from luxurious treats to personalised keepsakes that show exactly how much they mean to you.",
  wedding:
    "Celebrate their forever with a gift as beautiful as their love story. Our wedding hampers are curated to impress, from the ceremony to the honeymoon.",
  corporate:
    "Your brand, beautifully wrapped. Corporate gifting done right — premium hampers with optional branded packaging for clients, staff, and partners.",
  bridal:
    "The bride deserves the best. Spoil her with a curated bridal hamper she'll treasure long after the big day.",
};

export const gallery = [
  { image: img("photo-1513201099705-a9746e1e201f", 700), caption: "Birthday hamper for a client in Maitama" },
  { image: img("photo-1607344645866-009c320b63e0", 700), caption: "Wedding set delivered to Asokoro" },
  { image: img("photo-1608755728617-aefab37d2edd", 700), caption: "Just-because bouquet box, Wuse" },
  { image: img("photo-1522673607200-164d1b6ce486", 700), caption: "Bridal shower gift, Gwarinpa" },
  { image: img("photo-1481437156560-3205f6a55735", 700), caption: "Corporate hampers for a partner brand" },
  { image: img("photo-1512909006721-3d6018887383", 700), caption: "Celebration tower, Garki" },
  { image: img("photo-1578985545062-69928b1d9587", 700), caption: "Signature custom hamper, Jabi" },
  { image: img("photo-1519681393784-d120267933ba", 700), caption: "Golden anniversary hamper, Maitama" },
];
