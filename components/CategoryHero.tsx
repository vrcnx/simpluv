import Image from "next/image";
import Link from "next/link";

const tiles = [
  { label: "POLO SHOP",   src: "/images/hero-golfer.png",       href: "/polos" },
  { label: "BASES",       src: "/images/editorial-walk.png",    href: "/bases" },
  { label: "BOTTOMS",     src: "/images/editorial-swing.png",   href: "/bottoms" },
  { label: "ACCESSORIES", src: "/images/editorial-portrait.png", href: "/accessories" },
];

export default function CategoryHero() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
        {tiles.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="group block"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-warm grain">
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-105"
              />
            </div>
            <p className="display text-[13px] py-4">{t.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
