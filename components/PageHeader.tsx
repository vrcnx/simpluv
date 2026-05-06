import Image from "next/image";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  banner?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, banner }: Props) {
  if (banner) {
    return (
      <section className="relative w-full text-white lead-hero">
        <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[16/7] min-h-[360px] md:min-h-[400px] lg:min-h-[420px] overflow-hidden grain">
          <Image
            src={banner}
            alt={title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end z-10">
            <div className="w-full px-5 md:px-8 pb-10 md:pb-12">
              <p className="label text-white/85 mb-2">{eyebrow}</p>
              <h1 className="display text-[clamp(36px,4.5vw,64px)] mb-3">{title}</h1>
              {subtitle && (
                <p className="text-[14px] md:text-[15px] max-w-[60ch]">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[clamp(40px,5vw,72px)] border-b border-rule">
      <div className="gutter mx-auto max-w-[1440px]">
        <p className="label text-textdim mb-2">{eyebrow}</p>
        <h1 className="display text-[clamp(36px,4.5vw,64px)] mb-3">{title}</h1>
        {subtitle && (
          <p className="text-[14px] md:text-[16px] text-textmid max-w-[60ch]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
