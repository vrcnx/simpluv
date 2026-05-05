import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import ExportBrandKit from "@/components/ExportBrandKit";
import { PRODUCTS } from "@/lib/products";

export const metadata = { title: "Brand — SIMPL UV" };

const palette = [
  { name: "SIMPL Black", hex: "#0A0A0A", role: "Primary" },
  { name: "SIMPL White", hex: "#FFFFFF", role: "Primary" },
  { name: "Sky Blue",    hex: "#89CFF0", role: "Dominant" },
  { name: "Ice Blue",    hex: "#D6EAF8", role: "Secondary" },
  { name: "Deep Navy",   hex: "#0F2040", role: "Accent" },
  { name: "Sun Glow",    hex: "#F5E3BC", role: "Accent" },
];

const pillars = [
  { n: "01", t: "Protection", b: "Built-in UV protection for long days outside. SIMPL-UV fabric blocks the sun without adding weight." },
  { n: "02", t: "Performance", b: "Breathable, lightweight, adaptive fabric engineered for unrestricted movement through every swing." },
  { n: "03", t: "Precision", b: "Clean silhouettes, structured drape, considered details. A tailored edge to modern golf wear." },
];

const dos = [
  "Engineered for the long game.",
  "Barely there. Exactly right.",
  "Built for the course. Worn beyond it.",
  "Effortless movement. Total protection.",
  "A true second layer. Nothing more.",
];

const donts = [
  "Our AMAZING new collection is HERE!",
  "The best golf shirt you'll EVER wear",
  "Super comfy & cute for the course",
  "Buy now — FREE shipping today only!",
  "Trendy styles for the modern golfer",
];

const photography = [
  { src: "/images/hero-editorial.png",     caption: "Editorial — Coastal" },
  { src: "/images/editorial-walk.png",     caption: "The Long Walk" },
  { src: "/images/editorial-swing.png",    caption: "Mid-Swing" },
  { src: "/images/editorial-portrait.png", caption: "The Portrait" },
  { src: "/images/hero-golfer.png",        caption: "Hero — Open Sky" },
  { src: "/images/banner-polos.png",       caption: "Banner — Polos" },
  { src: "/images/banner-bases.png",       caption: "Banner — Bases" },
  { src: "/images/banner-hoodies.png",     caption: "Banner — Hoodies" },
  { src: "/images/banner-feature.png",     caption: "Feature — SIMPL-UV" },
  { src: "/images/tech-fabric.png",        caption: "Macro — Fabric" },
  { src: "/images/mood-bg.png",            caption: "Mood — Solar" },
];

export default function Page() {
  return (
    <>
      {/* Print-only cover page (visible only when exporting to PDF) */}
      <section className="print-only" style={{ pageBreakAfter: "always", textAlign: "center", padding: "60mm 16mm" }}>
        <Image
          src="/logo/simpl-uv.svg"
          alt="SIMPL UV"
          width={300}
          height={88}
          style={{ filter: "brightness(0)", margin: "0 auto 32mm", height: "16mm", width: "auto" }}
        />
        <p style={{ fontSize: "11px", letterSpacing: "0.26em", textTransform: "uppercase", color: "#666", marginBottom: "12mm" }}>
          Brand Guidelines  ·  2025
        </p>
        <h1 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "8mm" }}>
          The SIMPL UV Brand
        </h1>
        <p style={{ fontSize: "14px", color: "#444", maxWidth: "60ch", margin: "0 auto", lineHeight: 1.6 }}>
          Performance golf apparel built around UV protection, movement, and refined minimalism.
          <br /><br />
          <em>Nothing extra. Everything intentional.</em>
        </p>
      </section>

      <PageHeader
        eyebrow="The Brand"
        title="SIMPL UV"
        subtitle="Performance golf apparel built around UV protection, movement, and refined minimalism. Nothing extra. Everything intentional."
        banner="/images/brand-hero.png"
      />

      {/* Floating PDF download — top of brand page, hidden in print */}
      <div className="no-print bg-white border-b border-rule">
        <div className="px-5 md:px-8 py-5 flex items-center justify-between gap-4">
          <p className="text-[13px] text-textdim">
            Save this page as a PDF for offline reference or sharing with partners.
          </p>
          <ExportBrandKit />
        </div>
      </div>

      {/* Mission */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="gutter mx-auto max-w-[1100px] text-center">
          <p className="label text-textdim mb-5">Mission</p>
          <h2 className="display text-[clamp(24px,3.2vw,42px)] leading-[1.25] mb-6">
            Remove everything unnecessary. What remains is fabric engineered for movement, UV protection designed for long days on the course, and a silhouette that looks as considered as it performs.
          </h2>
          <p className="text-[14px] text-textdim">SIMPL UV  ·  Brand Story</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-[clamp(48px,6vw,96px)] bg-warm">
        <div className="gutter mx-auto max-w-[1440px]">
          <p className="label text-textdim mb-8">Brand Pillars</p>
          <div className="grid md:grid-cols-3 gap-[clamp(32px,4vw,64px)]">
            {pillars.map((p) => (
              <div key={p.n}>
                <span className="label text-textdim block mb-4">{p.n}</span>
                <h3 className="display text-[clamp(20px,2.2vw,28px)] mb-3">{p.t}</h3>
                <p className="text-textmid text-[14px] leading-[1.55]">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-[clamp(48px,6vw,96px)] bg-white print-page-break">
        <div className="gutter mx-auto max-w-[1440px]">
          <p className="label text-textdim mb-8">Logo System</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="aspect-[3/2] bg-warm grid place-items-center">
              <Image src="/logo/simpl-uv.svg" alt="SIMPL UV" width={220} height={64} className="h-10 w-auto" style={{ filter: "brightness(0)" }} />
            </div>
            <div className="aspect-[3/2] bg-ink grid place-items-center">
              <Image src="/logo/simpl-uv.svg" alt="SIMPL UV reversed" width={220} height={64} className="h-10 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="aspect-[3/2] bg-sky grid place-items-center">
              <Image src="/logo/simpl-uv.svg" alt="SIMPL UV on sky" width={220} height={64} className="h-10 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-2 mt-2">
            <p className="label text-textdim text-center">Primary  /  Light backgrounds</p>
            <p className="label text-textdim text-center">Reversed  /  Dark backgrounds</p>
            <p className="label text-textdim text-center">Brand Blue  /  Alternate</p>
          </div>
        </div>
      </section>

      {/* Color */}
      <section className="py-[clamp(48px,6vw,96px)] bg-white border-t border-rule print-page-break">
        <div className="gutter mx-auto max-w-[1440px]">
          <p className="label text-textdim mb-8">Color System</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {palette.map((c) => (
              <div key={c.hex}>
                <div
                  className={`aspect-square ${c.hex === "#FFFFFF" ? "border border-rule" : ""}`}
                  style={{ backgroundColor: c.hex }}
                />
                <p className="display text-[12px] mt-3">{c.name}</p>
                <p className="text-[11px] text-textdim mt-0.5">{c.role}</p>
                <p className="text-[11px] text-textdim mt-0.5">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="py-[clamp(48px,6vw,96px)] bg-warm print-page-break">
        <div className="gutter mx-auto max-w-[1440px]">
          <p className="label text-textdim mb-8">Voice & Tone</p>
          <div className="grid md:grid-cols-2 gap-[clamp(32px,4vw,64px)]">
            <div>
              <p className="display text-[14px] mb-5">We write like this</p>
              <ul className="space-y-3">
                {dos.map((d) => (
                  <li key={d} className="text-[15px] flex gap-3">
                    <span className="text-ink shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="display text-[14px] mb-5 text-textdim">Not like this</p>
              <ul className="space-y-3">
                {donts.map((d) => (
                  <li key={d} className="text-[15px] flex gap-3 text-textdim">
                    <span className="shrink-0">✗</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Gallery */}
      <section className="py-[clamp(48px,6vw,96px)] bg-white print-page-break">
        <div className="gutter mx-auto max-w-[1440px] mb-10">
          <p className="label text-textdim mb-2">Photography</p>
          <h2 className="display text-[clamp(24px,3vw,40px)] mb-3">The Visual Library</h2>
          <p className="text-[14px] text-textmid max-w-[60ch]">
            Every brand photograph in the SIMPL UV system. Bright daylight, open sky,
            soft sun flares, the rhythm of an eighteen-hole day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 md:px-3">
          {photography.map((img) => (
            <figure key={img.src} className="relative aspect-[3/4] overflow-hidden bg-warm group">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-3 left-3 label text-[10px] bg-ink text-white px-3 py-1.5">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The Line — all products */}
      <section className="py-[clamp(48px,6vw,96px)] bg-white border-t border-rule print-page-break">
        <div className="gutter mx-auto max-w-[1440px] mb-10">
          <p className="label text-textdim mb-2">The Line</p>
          <h2 className="display text-[clamp(24px,3vw,40px)] mb-3">All Products</h2>
          <p className="text-[14px] text-textmid max-w-[60ch]">
            Every piece in the SIMPL UV system, built from a single performance fabric.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-rule">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* Slogan */}
      <section className="py-[clamp(64px,8vw,120px)] bg-ink text-white print-page-break">
        <div className="gutter mx-auto max-w-[1100px] text-center">
          <p className="label text-white/55 mb-6">Brand Slogan</p>
          <p className="display text-[clamp(24px,3.4vw,44px)] leading-[1.2]">
            Nothing extra.<br />Everything intentional.
          </p>
          <Link
            href="/new"
            className="inline-flex items-center mt-10 px-7 py-3 bg-white text-ink text-[12px] font-bold tracking-[0.06em] hover:opacity-85 transition-opacity"
          >
            SHOP THE LINE
          </Link>
        </div>
      </section>
    </>
  );
}
