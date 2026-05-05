import Image from "next/image";

export default function BrandIntro() {
  return (
    <section className="bg-white py-[clamp(56px,7vw,96px)]">
      <div className="gutter mx-auto max-w-[1440px] flex flex-col items-center text-center">
        <Image
          src="/logo/simpl-uv.svg"
          alt="SIMPL UV"
          width={260}
          height={80}
          className="h-10 md:h-14 w-auto mb-7"
          priority
        />
        <p className="display text-[clamp(20px,2vw,28px)] tracking-[-0.02em] leading-[1.15] max-w-[24ch]">
          Performance Golf Apparel.<br />
          <span className="text-textdim">Engineered without distraction.</span>
        </p>
        <span className="label mt-7 text-textdim">
          NOTHING EXTRA  ·  EVERYTHING INTENTIONAL
        </span>
      </div>
    </section>
  );
}
