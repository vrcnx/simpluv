import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Technology — SIMPL UV" };

const features = [
  { n: "01", t: "UV Protective", b: "Built-in sun protection — engineered into the fiber, not coated on top. UPF 50+." },
  { n: "02", t: "Lightweight", b: "Barely-there weight. Forgotten on the body from the first swing to the last." },
  { n: "03", t: "Breathable", b: "Continuous airflow. Engineered to stay cool in direct sunlight." },
  { n: "04", t: "Quick-drying", b: "Moisture moves through the fabric. No clinging, no added weight." },
  { n: "05", t: "Adaptive Movement", b: "Structured where it needs to hold; fluid where it needs to release." },
  { n: "06", t: "Durable", b: "Engineered for repeated wear, washes, and seasons. Built to last." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="SIMPL-UV Technology"
        title="Built to disappear."
        subtitle="A single fabric system, engineered for the course. SIMPL-UV is built to disappear on the body and perform without compromise."
        banner="/images/banner-feature.png"
      />

      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="gutter mx-auto max-w-[1440px]">
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-[clamp(40px,6vw,100px)] items-start">
            <div className="relative aspect-[4/5] bg-warm overflow-hidden">
              <Image src="/images/tech-fabric.png" alt="SIMPL-UV fabric" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="label text-textdim mb-4">The Fabric</p>
              <h2 className="display text-[clamp(28px,3.6vw,48px)] mb-5">
                One fabric.<br />Six guarantees.
              </h2>
              <p className="text-textmid mb-10 max-w-[44ch] leading-[1.55]">
                Every piece in our line is built from the same SIMPL-UV fabric system —
                a precise blend engineered to perform in heat, in light, and in motion.
              </p>

              <ul>
                {features.map((f, i) => (
                  <li
                    key={f.n}
                    className={`grid grid-cols-[auto_1fr] gap-6 py-4 border-t border-rule ${i === features.length - 1 ? "border-b" : ""}`}
                  >
                    <span className="label text-textdim pt-1.5">{f.n}</span>
                    <div>
                      <h4 className="display text-[14px] mb-1">{f.t}</h4>
                      <p className="text-textmid text-[13px] leading-[1.55]">{f.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm py-[clamp(48px,6vw,96px)]">
        <div className="gutter mx-auto max-w-[1100px] text-center">
          <h3 className="display text-[clamp(22px,2.6vw,32px)] mb-5">
            Wear it. Forget it.
          </h3>
          <p className="text-textmid max-w-[60ch] mx-auto mb-8">
            The whole point: protection without distraction. SIMPL-UV is the fabric that gets out of your way.
          </p>
          <Link
            href="/new"
            className="inline-flex items-center px-7 py-3 bg-ink text-white text-[12px] font-bold tracking-[0.06em] hover:opacity-85 transition-opacity"
          >
            SHOP THE LINE
          </Link>
        </div>
      </section>
    </>
  );
}
