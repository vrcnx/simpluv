import Image from "next/image";

export default function EditorialFeature() {
  return (
    <section className="bg-warm">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[680px]">
          <Image
            src="/images/editorial-walk.png"
            alt="A SIMPL UV golfer walking the fairway"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-[clamp(24px,5vw,80px)] py-[clamp(80px,8vw,120px)]">
          <div>
            <span className="label text-textdim mb-5 inline-block">
              The Long Walk
            </span>
            <h2 className="display text-[clamp(32px,4.4vw,60px)] mb-6">
              Built for the course.<br />Worn beyond it.
            </h2>
            <p className="text-textmid text-[clamp(15px,1.2vw,18px)] max-w-[44ch] leading-[1.55] mb-9">
              Every piece is designed for the rhythm of an eighteen-hole day —
              bright sun, long walks, quiet greens — and made to live just as
              comfortably off the course.
            </p>
            <a
              href="#collection"
              className="inline-flex items-center px-7 py-3 bg-ink text-white text-[12px] font-medium tracking-[0.04em] hover:bg-ink/85 transition-colors"
            >
              Shop the look
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
