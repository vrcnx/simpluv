import Image from "next/image";

const features = [
  { n: "01", t: "UV Protective", b: "Built-in sun protection — engineered, not coated." },
  { n: "02", t: "Lightweight", b: "Barely-there weight. Forgotten on the body." },
  { n: "03", t: "Breathable", b: "Continuous airflow. Cool in direct sunlight." },
  { n: "04", t: "Quick-drying", b: "Moisture moves through. No clinging, no weight." },
  { n: "05", t: "Adaptive Movement", b: "Structured where it holds, fluid where it releases." },
];

export default function Technology() {
  return (
    <section id="technology" className="py-[clamp(64px,8vw,120px)] bg-white">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-[1.05fr_1fr] gap-[clamp(40px,6vw,100px)] items-center">
          <div className="relative aspect-[4/5] bg-warm overflow-hidden">
            <Image
              src="/images/tech-fabric.png"
              alt="SIMPL-UV fabric"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute bottom-5 left-5 label bg-white text-ink px-3.5 py-2">
              SIMPL-UV  /  PERFORMANCE FABRIC
            </span>
          </div>
          <div>
            <span className="label text-textdim mb-5 inline-block">
              Technology
            </span>
            <h2 className="display text-[clamp(32px,4.4vw,60px)] mb-6">
              Barely there.<br />Exactly right.
            </h2>
            <p className="text-textmid max-w-[44ch] mb-10 leading-[1.55]">
              A single fabric system, engineered for the course. SIMPL-UV is
              built to disappear on the body and perform without compromise.
            </p>

            <ul>
              {features.map((f, i) => (
                <li
                  key={f.n}
                  className={`grid grid-cols-[auto_1fr] gap-6 py-4 border-t border-rule ${
                    i === features.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="label text-textdim pt-1.5">{f.n}</span>
                  <div>
                    <h4 className="display text-[14px] mb-1">{f.t}</h4>
                    <p className="text-textmid text-[13px]">{f.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
