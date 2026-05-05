import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-ink text-white">
      <div className="relative h-[88vh] min-h-[640px] w-full overflow-hidden grain">
        <Image
          src="/images/hero-editorial.png"
          alt="SIMPL UV editorial — performance golf apparel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end z-10">
          <div className="w-full px-5 md:px-8 pb-12 md:pb-14">
            <h1 className="display text-[clamp(40px,5vw,68px)] mb-3">
              Just In
            </h1>
            <p className="text-[14px] md:text-[15px] mb-4 max-w-[60ch]">
              New today, gone tomorrow — shop the latest from SIMPL UV before they sell out.
            </p>
            <Link href="/new" className="underline-cta">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
