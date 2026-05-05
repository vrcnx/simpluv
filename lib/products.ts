export type Category =
  | "polos"
  | "bases"
  | "hoodies"
  | "bottoms"
  | "accessories";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  variants: string;
  price: string;
  description: string;
  details: string[];
  image: string;
  hero?: string;
}

export const PRODUCTS: Product[] = [
  // Polos
  {
    slug: "sleeveless-polo",
    name: "The Sleeveless Polo",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Sleeveless  ·  Color: White",
    price: "$148",
    description:
      "Lightweight SIMPL-UV fabric with a clean structured drape. Built-in UV protection without weight — the modern golf essential.",
    details: [
      "SIMPL-UV performance fabric",
      "Three-button mother-of-pearl placket",
      "Ribbed knit collar with sky blue contrast trim",
      "A-line silhouette with subtle taper",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "short-sleeve-polo",
    name: "The Short Sleeve Polo",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Short Sleeve  ·  Color: White",
    price: "$158",
    description:
      "A cap-sleeve polo cut for movement. Clean shoulder seam, fitted body, refined details.",
    details: [
      "SIMPL-UV performance fabric",
      "Three-button mother-of-pearl placket",
      "Cap-sleeve construction",
      "Subtle side-seam shaping",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "long-sleeve-polo",
    name: "The Long Sleeve Polo",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Long Sleeve  ·  Color: White",
    price: "$168",
    description:
      "Full coverage in our signature SIMPL-UV fabric. Tailored cut, performance feel.",
    details: [
      "SIMPL-UV performance fabric",
      "Three-button mother-of-pearl placket",
      "Slim-tailored long sleeves",
      "Thumb-hole cuffs",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },

  // Bases
  {
    slug: "long-sleeve-base",
    name: "The Long Sleeve Base",
    category: "bases",
    categoryLabel: "SIMPL-UV BASE",
    variants: "Long Sleeve  ·  Color: Black",
    price: "$132",
    description:
      "An ultra-light second-skin layer. Temperature regulation from the inside out, with a close adaptive fit.",
    details: [
      "SIMPL-UV performance fabric",
      "Mock-neck collar with quarter-zip",
      "Subtle white piping along shoulder seams",
      "Thumb-hole cuffs",
      "Quick-drying  ·  UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "mock-neck-base",
    name: "The Mock Neck Base",
    category: "bases",
    categoryLabel: "SIMPL-UV BASE",
    variants: "Long Sleeve  ·  Color: Sky",
    price: "$138",
    description:
      "A clean mock-neck silhouette in a soft sky tone. Pulls on, layers easily, disappears on the body.",
    details: [
      "SIMPL-UV performance fabric",
      "Soft mock-neck collar",
      "Slim adaptive fit",
      "Quick-drying  ·  UPF 50+",
    ],
    image: "__SLUG__",
  },

  // Hoodies
  {
    slug: "lightweight-hoodie",
    name: "The Lightweight Hoodie",
    category: "hoodies",
    categoryLabel: "SUN HOODIE",
    variants: "Color: Sky",
    price: "$184",
    description:
      "A lightweight sun shield engineered to stay cool in direct sunlight. Zero bulk, full coverage.",
    details: [
      "SIMPL-UV performance fabric",
      "Quarter-zip placket",
      "Deep hood with white drawcord",
      "Ribbed cuffs",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "pullover-hoodie",
    name: "The Pullover Hoodie",
    category: "hoodies",
    categoryLabel: "SUN HOODIE",
    variants: "Color: White",
    price: "$198",
    description:
      "A streamlined pullover. Built for early-morning rounds and late-afternoon shadows.",
    details: [
      "SIMPL-UV performance fabric",
      "Pull-on construction",
      "Adjustable hood",
      "Slim feminine cut",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },

  // Bottoms
  {
    slug: "pleated-skort",
    name: "The Pleated Skort",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "Color: White",
    price: "$156",
    description:
      "Movement and precision in equal measure. Crisp box pleats with built-in shorts and side zip.",
    details: [
      "SIMPL-UV performance fabric",
      "Box-pleated overlay with hidden shorts",
      "Structured waistband, side zip",
      "Mid-thigh length",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "performance-pant",
    name: "The Performance Pant",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "Color: White",
    price: "$176",
    description:
      "A tailored straight-leg trouser made for the course. Movement-forward, structured drape.",
    details: [
      "SIMPL-UV performance fabric",
      "Slim straight-leg cut",
      "Hidden side pockets",
      "Internal drawcord waist",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "performance-shorts",
    name: "The Performance Shorts",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "Color: White",
    price: "$128",
    description:
      "Five-inch tailored shorts. Structured, breathable, refined.",
    details: [
      "SIMPL-UV performance fabric",
      "5\" inseam",
      "Two side pockets, one back welt pocket",
      "Slim tailored fit",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },

  // Accessories
  {
    slug: "performance-visor",
    name: "The Performance Visor",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Color: White",
    price: "$48",
    description:
      "A structured curved-brim visor with a refined metallic adjuster. Soft, breathable, made to be forgotten.",
    details: [
      "SIMPL-UV performance fabric",
      "Curved structured brim",
      "Gold-tone adjustable buckle",
      "Soft sweatband",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "cooling-arm-sleeves",
    name: "The Cooling Arm Sleeves",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Color: White",
    price: "$58",
    description:
      "A second skin for sun-bright rounds. Slip on, slip off — total UV coverage, zero weight.",
    details: [
      "SIMPL-UV performance fabric",
      "Stay-put silicone bands",
      "Pair, machine-washable",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "performance-socks",
    name: "The Performance Socks",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Color: White",
    price: "$28",
    description:
      "Cushioned, breathable, low-cut. Engineered to disappear inside the shoe.",
    details: [
      "Compression arch support",
      "Ventilated mesh weave",
      "Reinforced heel and toe",
      "Pair",
    ],
    image: "__SLUG__",
  },
];

export const CATEGORIES: Record<Category, { label: string; copy: string; banner: string }> = {
  polos: {
    label: "Polos",
    copy: "The modern golf essential. Lightweight SIMPL-UV fabric, structured drape, built-in UV protection.",
    banner: "/images/banner-polos.png",
  },
  bases: {
    label: "Bases",
    copy: "Lightweight second-skin layers, engineered for the long game.",
    banner: "/images/banner-bases.png",
  },
  hoodies: {
    label: "Hoodies",
    copy: "Sun-shielding layers built for the course and beyond.",
    banner: "/images/banner-hoodies.png",
  },
  bottoms: {
    label: "Bottoms",
    copy: "Movement and precision. Integrated UV protection. A tailored edge to modern golf wear.",
    banner: "/images/hero-editorial.png",
  },
  accessories: {
    label: "Accessories",
    copy: "Completes the system. Lightweight, breathable, UV-protective. Considered.",
    banner: "/images/editorial-portrait.png",
  },
};

// Resolve the per-slug image URL for each product.
PRODUCTS.forEach((p) => {
  if (p.image === "__SLUG__") p.image = `/images/product-${p.slug}.png`;
});

export function productsByCategory(c: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === c);
}

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function recommendations(slug: string): Product[] {
  const me = productBySlug(slug);
  if (!me) return PRODUCTS.slice(0, 4);
  return PRODUCTS.filter((p) => p.slug !== slug && p.category !== me.category).slice(0, 4);
}
