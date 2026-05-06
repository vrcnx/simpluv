import Image from "next/image";
import Link from "next/link";

const items = [
  {
    label: "BASES",
    sub: "Lightweight second-skin layers, engineered for the long game.",
    src: "/images/banner-bases.png",
    href: "/bases",
  },
  {
    label: "HOODIES",
    sub: "Sun-shielding layers built for the course and beyond.",
    src: "/images/banner-hoodies.png",
    href: "/hoodies",
  },
];

export default function TwoUpGrid() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 px-2 lg:px-3">
      {items.map((it) => (
        <Link
          key={it.label}
          href={it.href}
          className="relative block aspect-[16/9] md:aspect-[16/9] lg:aspect-[5/4] overflow-hidden text-white grain"
        >
          <Image
            src={it.src}
            alt={it.label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="px-6 md:px-10 pb-8 md:pb-10">
              <h3 className="display text-[clamp(28px,3vw,42px)] mb-2">{it.label}</h3>
              <p className="text-[14px] mb-3 max-w-[42ch]">{it.sub}</p>
              <span className="underline-cta">Shop Now</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
