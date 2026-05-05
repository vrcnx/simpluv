import Image from "next/image";

export default function EditorialGrid() {
  return (
    <section className="bg-white py-[clamp(64px,8vw,120px)]">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="mb-[clamp(40px,5vw,64px)]">
          <span className="label text-textdim mb-2 inline-block">On the Course</span>
          <h2 className="display text-[clamp(32px,4.4vw,56px)]">
            Worn beyond it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { src: "/images/editorial-portrait.png", cap: "01  /  THE PORTRAIT", aspect: "aspect-[3/4]" },
            { src: "/images/mood-bg.png", cap: "02  /  CLEAR HORIZON", aspect: "aspect-[3/4]" },
            { src: "/images/editorial-swing.png", cap: "03  /  MID-SWING", aspect: "aspect-[3/4]" },
            { src: "/images/hero-golfer.png", cap: "04  /  COASTAL", aspect: "aspect-[3/4]" },
          ].map((it) => (
            <figure key={it.cap} className={`relative ${it.aspect} overflow-hidden bg-warm group`}>
              <Image
                src={it.src}
                alt={it.cap}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.025]"
              />
              <figcaption className="absolute bottom-5 left-5 label bg-ink text-white px-3.5 py-2">
                {it.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
