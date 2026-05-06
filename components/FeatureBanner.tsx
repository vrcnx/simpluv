import Image from "next/image";
import Link from "next/link";

export default function FeatureBanner() {
  return (
    <section className="relative w-full text-white bg-warm px-2 md:px-3">
      <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/9] min-h-[480px] md:min-h-[560px] lg:min-h-[680px] overflow-hidden grain">
        <Image
          src="/images/banner-feature.png"
          alt="SIMPL-UV Technology"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end z-10">
          <div className="w-full px-5 md:px-8 pb-10 md:pb-14">
            <p className="label mb-3 opacity-90">SIMPL-UV TECHNOLOGY</p>
            <h2 className="display text-[clamp(40px,5vw,72px)] mb-3 max-w-[16ch]">
              Built to disappear.<br />Engineered to perform.
            </h2>
            <Link href="/technology" className="underline-cta">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
