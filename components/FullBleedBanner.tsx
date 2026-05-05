import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
  alignment?: "left" | "right";
  textColor?: "white" | "ink";
}

export default function FullBleedBanner({
  src, alt, title, subtitle, href, alignment = "left", textColor = "white",
}: Props) {
  return (
    <section className={`relative w-full px-2 md:px-3 ${textColor === "white" ? "text-white" : "text-ink"}`}>
      <div className="relative aspect-[5/6] md:aspect-[16/8] min-h-[420px] md:min-h-[540px] overflow-hidden grain">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 flex items-end z-10 ${alignment === "right" ? "justify-end" : ""}`}>
          <div className={`w-full px-5 md:px-8 pb-10 md:pb-12 ${alignment === "right" ? "text-right" : ""}`}>
            <h2 className="display text-[clamp(32px,4vw,52px)] mb-3">{title}</h2>
            <p className="text-[14px] md:text-[15px] mb-4 max-w-[60ch] inline-block">{subtitle}</p>
            <div>
              <Link href={href} className="underline-cta">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
