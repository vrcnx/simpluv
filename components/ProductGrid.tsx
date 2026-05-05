import Image from "next/image";
import Link from "next/link";

const items = [
  {
    n: "01",
    title: "The SIMPL UV Polos",
    short: "Polos",
    variants: "Long Sleeve  ·  Short Sleeve  ·  Sleeveless",
    desc: "Lightweight SIMPL-UV fabric. Clean structured drape. Built-in UV protection without weight.",
    src: "/images/product-polo.png",
    href: "#polos",
  },
  {
    n: "02",
    title: "The SIMPL UV Bases",
    short: "Bases",
    variants: "Long Sleeve",
    desc: "Ultra-light second layer. Temperature regulation. Close adaptive fit. Quick-drying.",
    src: "/images/product-base.png",
    href: "#bases",
  },
  {
    n: "03",
    title: "The SIMPL UV Hoodies",
    short: "Hoodies",
    variants: "Full Coverage",
    desc: "Lightweight sun shield. Stays cool in direct sunlight. Zero bulk.",
    src: "/images/product-hoodie.png",
    href: "#hoodies",
  },
  {
    n: "04",
    title: "The SIMPL UV Bottoms",
    short: "Bottoms",
    variants: "Pants  ·  Shorts  ·  Skirts",
    desc: "Movement and precision. Integrated UV protection. Tailored edge to modern golf wear.",
    src: "/images/product-bottoms.png",
    href: "#bottoms",
  },
  {
    n: "05",
    title: "The SIMPL UV Accessories",
    short: "Accessories",
    variants: "Arm Sleeves  ·  Hats  ·  Socks",
    desc: "Completes the system. Lightweight, breathable, UV-protective. Considered.",
    src: "/images/product-accessories.png",
    href: "#accessories",
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-[clamp(64px,8vw,120px)] bg-white">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="mb-[clamp(40px,5vw,64px)] flex items-end justify-between gap-6">
          <div>
            <span className="label text-textdim mb-2 inline-block">
              Shop the System
            </span>
            <h2 className="display text-[clamp(32px,4.4vw,56px)]">The Line</h2>
          </div>
          <Link href="#shop" className="hidden md:inline-flex text-[12px] underline underline-offset-4 hover:opacity-65 transition-opacity">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-10">
          {items.map((p) => (
            <Link
              key={p.n}
              href={p.href}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-white overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-contain p-[10%] transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-4">
                <h3 className="display text-[15px] font-medium mb-1.5">
                  {p.title}
                </h3>
                <p className="text-[12px] text-textdim mb-2">{p.variants}</p>
                <p className="text-[12.5px] text-textmid leading-[1.5]">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
