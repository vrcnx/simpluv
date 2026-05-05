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
  image: string;       // flat lay product shot
  modelImage?: string; // on-model editorial photo
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

  // ── Expanded Line ────────────────────────────────────────────────
  {
    slug: "sleeveless-polo-sky",
    name: "The Sleeveless Polo — Sky",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Sleeveless  ·  Color: Sky Blue",
    price: "$148",
    description:
      "The signature sleeveless polo in our brand sky blue. Lightweight SIMPL-UV fabric with a clean ribbed white collar.",
    details: [
      "SIMPL-UV performance fabric",
      "Three-button mother-of-pearl placket",
      "Ribbed knit collar in tonal white",
      "A-line silhouette with subtle taper",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "sleeveless-polo-black",
    name: "The Sleeveless Polo — Black",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Sleeveless  ·  Color: Black",
    price: "$148",
    description:
      "A graphic-bold take on the signature polo. Black ground with hairline white piping for a sharp tailored line.",
    details: [
      "SIMPL-UV performance fabric",
      "Three-button mother-of-pearl placket",
      "Hairline white contrast piping at collar and armholes",
      "A-line silhouette",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "striped-short-sleeve-polo",
    name: "The Striped Short Sleeve Polo",
    category: "polos",
    categoryLabel: "SIGNATURE POLO",
    variants: "Short Sleeve  ·  Color: White / Navy / Sky",
    price: "$162",
    description:
      "An elevated weekend polo. Crisp white ground with horizontal navy and sky stripes across the chest.",
    details: [
      "SIMPL-UV performance fabric",
      "Cap-sleeve construction",
      "Two-button placket",
      "Engineered yarn-dye stripe — no print, no fade",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "white-base",
    name: "The Long Sleeve Base — White",
    category: "bases",
    categoryLabel: "SIMPL-UV BASE",
    variants: "Long Sleeve  ·  Color: White",
    price: "$132",
    description:
      "The base layer in pristine white. Pairs cleanly under any polo, holds shape through long days.",
    details: [
      "SIMPL-UV performance fabric",
      "Mock-neck collar with quarter-zip",
      "Subtle tonal piping along shoulder seams",
      "Thumb-hole cuffs",
      "Quick-drying  ·  UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "quarter-zip-hoodie",
    name: "The Quarter-Zip Pullover",
    category: "hoodies",
    categoryLabel: "PERFORMANCE LAYER",
    variants: "Color: Cream",
    price: "$216",
    description:
      "A refined performance pullover. Cream tonal-stitch fabric with a sleek silver quarter-zip — the dressier sibling of our hoodie.",
    details: [
      "SIMPL-UV performance fabric",
      "Mock-neck with matte silver quarter-zip",
      "Slim feminine cut",
      "Tonal-stitch weave for elevated drape",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "tennis-skirt",
    name: "The Tennis Skirt",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "Color: White",
    price: "$148",
    description:
      "A short tennis-inspired pleat. Three crisp knife pleats, fitted waist, built-in shorts.",
    details: [
      "SIMPL-UV performance fabric",
      "Three knife pleats",
      "Built-in compression shorts",
      "Fitted high-rise waistband",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "bermuda-shorts",
    name: "The Bermuda Shorts",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "9\" Inseam  ·  Color: White",
    price: "$152",
    description:
      "Knee-length bermudas tailored for the course. Sharp pressed creases, slant pockets, structured drape.",
    details: [
      "SIMPL-UV performance fabric",
      "9\" inseam",
      "Pressed front creases",
      "Slant side pockets, one back welt pocket",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "cropped-pant",
    name: "The Cropped Pant",
    category: "bottoms",
    categoryLabel: "TAILORED BOTTOM",
    variants: "Color: Cream",
    price: "$184",
    description:
      "A mid-calf cropped trouser with a subtle ankle taper. Equally polished on the course and off.",
    details: [
      "SIMPL-UV performance fabric",
      "Mid-calf crop with subtle ankle taper",
      "Hidden side pockets",
      "Internal drawcord waist",
      "UPF 50+",
    ],
    image: "__SLUG__",
  },
  {
    slug: "knit-headband",
    name: "The Knit Headband",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Color: Sky Blue",
    price: "$38",
    description:
      "A soft ribbed-knit headband in our brand sky blue. Stays put without pulling the hairline.",
    details: [
      "Performance knit blend",
      "Soft ribbed texture",
      "Slim feminine width",
      "Machine-washable",
    ],
    image: "__SLUG__",
  },
  {
    slug: "performance-belt",
    name: "The Performance Belt",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Color: White",
    price: "$78",
    description:
      "A slim woven belt with a polished gold-tone buckle. Built to hold a tailored waistband cleanly.",
    details: [
      "Woven performance webbing",
      "Polished gold-tone rectangular buckle",
      "Slim 25mm width",
      "Sized XS – L",
    ],
    image: "__SLUG__",
  },
  {
    slug: "leather-glove",
    name: "The Leather Golf Glove",
    category: "accessories",
    categoryLabel: "ACCESSORIES",
    variants: "Lead Hand  ·  Color: White",
    price: "$42",
    description:
      "Premium soft cabretta leather. Ventilated knuckles, neat velcro closure, broken-in feel from the first wear.",
    details: [
      "Soft cabretta leather",
      "Ventilated knuckle perforations",
      "Velcro closure",
      "Sized for left or right lead hand",
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

// Resolve the per-slug image URLs for each product.
PRODUCTS.forEach((p) => {
  if (p.image === "__SLUG__") p.image = `/images/product-${p.slug}.png`;
  if (!p.modelImage) p.modelImage = `/images/model-${p.slug}.png`;
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
