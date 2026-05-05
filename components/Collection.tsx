import Image from "next/image";
import Link from "next/link";

const products = [
  { title: "The Sleeveless Polo", meta: "White", price: "$148", src: "/images/product-polo.png" },
  { title: "The Long Sleeve Base", meta: "Black", price: "$132", src: "/images/product-base.png" },
  { title: "The Sun Hoodie", meta: "Sky", price: "$184", src: "/images/product-hoodie.png" },
  { title: "The Skort", meta: "White", price: "$156", src: "/images/product-bottoms.png" },
  { title: "The Visor", meta: "White", price: "$48", src: "/images/product-accessories.png" },
];

export default function Collection() {
  return (
    <section id="collection" className="py-[clamp(64px,8vw,120px)] bg-white">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="mb-[clamp(40px,5vw,64px)] flex items-end justify-between gap-6">
          <div>
            <span className="label text-textdim mb-2 inline-block">The Curation</span>
            <h2 className="display text-[clamp(32px,4.4vw,56px)]">Refined. Minimal. Yours.</h2>
            <p className="text-textmid mt-3 max-w-[60ch] text-[14px]">
              A curated selection from the line. Coordinated by design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-10">
          {products.map((p) => (
            <Link key={p.title} href="#" className="group block">
              <div className="relative aspect-[4/5] bg-white overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-contain p-[12%] transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-4">
                <h4 className="display text-[14px] font-medium mb-1">{p.title}</h4>
                <p className="text-[12px] text-textdim mb-1">{p.meta}</p>
                <p className="text-[13px]">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
