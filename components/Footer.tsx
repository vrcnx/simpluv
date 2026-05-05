"use client";

import Link from "next/link";

const features = [
  { icon: "truck",    label: "FREE SHIPPING ON ORDERS $150+" },
  { icon: "return",   label: "EASY, TRACKED 30 DAY RETURNS" },
  { icon: "package",  label: "RECEIVE YOUR ORDER IN 2–5 BUSINESS DAYS" },
  { icon: "duty",     label: "IMPORT DUTY INCLUDED" },
  { icon: "rewards",  label: "FREE RETURNS WITH SIMPL UV REWARDS" },
  { icon: "phone",    label: "DOWNLOAD THE APP FOR EARLY ACCESS" },
];

export default function Footer() {
  const line = features
    .map((f) => f.label)
    .join("   ·   ");

  return (
    <footer className="bg-white text-ink border-t border-rule">
      {/* Feature marquee */}
      <div className="border-b border-rule overflow-hidden py-5 md:py-7">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex items-center gap-8 md:gap-12 px-8 md:px-12" aria-hidden={k > 0}>
              {features.map((f, i) => (
                <div key={`${k}-${i}`} className="flex items-center gap-3 md:gap-3.5 shrink-0">
                  <FeatureIcon name={f.icon} />
                  <span className="text-[10.5px] md:text-[11.5px] font-bold tracking-[0.06em]">{f.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3-column main footer */}
      <div className="gutter mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-[clamp(40px,4vw,80px)] py-[clamp(56px,7vw,96px)]">
        {/* Help */}
        <FooterCol
          title="Help"
          align="left"
          links={[
            { label: "Return Policy", href: "#" },
            { label: "Start a Return", href: "#" },
            { label: "Track Order", href: "#" },
            { label: "Track Return", href: "#" },
            { label: "Size Guide", href: "#" },
            { label: "Ordering", href: "#" },
            { label: "Shipping", href: "#" },
            { label: "International", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Contact Us", href: "#" },
          ]}
        />

        {/* Newsletter */}
        <div className="text-center">
          <h5 className="display text-[15px] mb-5">Stay in the Know</h5>
          <p className="text-[13.5px] text-textmid max-w-[44ch] mx-auto mb-5 leading-[1.55]">
            Be the first to discover new drops, special offers, and all things SIMPL UV.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              f.querySelector<HTMLInputElement>("input")!.value = "";
              f.querySelector<HTMLButtonElement>("button")!.textContent = "✓";
            }}
            className="grid grid-cols-[1fr_auto] max-w-[420px] mx-auto border border-rule"
          >
            <input
              type="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              className="bg-transparent outline-none px-4 py-3 text-[13.5px]"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-ink text-white px-5 hover:opacity-85 transition-opacity"
            >
              →
            </button>
          </form>
          <p className="text-[11px] text-textdim max-w-[44ch] mx-auto mt-4 leading-[1.55]">
            By submitting your email you agree to receive marketing messages from SIMPL UV. View{" "}
            <Link href="#" className="underline">Terms</Link> &{" "}
            <Link href="#" className="underline">Privacy</Link>.
          </p>
          <p className="text-[12px] mt-6">
            <Link href="#" className="underline font-bold">Sign up for SMS to never miss a drop ›</Link>
          </p>
        </div>

        {/* More */}
        <FooterCol
          title="More"
          align="right"
          links={[
            { label: "Brand", href: "/brand" },
            { label: "Technology", href: "/technology" },
            { label: "New Arrivals", href: "/new" },
            { label: "Store Locator", href: "#" },
            { label: "SIMPL UV Rewards", href: "#" },
            { label: "Sustainability", href: "/brand" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
          ]}
        />
      </div>

      {/* Social icons */}
      <div className="border-t border-rule py-7">
        <div className="flex items-center justify-center gap-7">
          <SocialIcon label="Instagram" path="instagram" />
          <SocialIcon label="Facebook" path="facebook" />
          <SocialIcon label="YouTube" path="youtube" />
          <SocialIcon label="X" path="x" />
          <SocialIcon label="TikTok" path="tiktok" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rule">
        <div className="gutter mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-4 py-5 text-[12px] text-textmid">
          <span className="flex items-center gap-2">
            <span aria-hidden>🇺🇸</span> USD
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:opacity-65">Sitemap</Link>
            <Link href="#" className="hover:opacity-65">Accessibility</Link>
            <Link href="#" className="hover:opacity-65">Privacy</Link>
            <Link href="#" className="hover:opacity-65">Terms</Link>
            <Link href="#" className="hover:opacity-65">Do Not Sell My Info</Link>
          </div>
          <span>© 2025 SIMPL UV</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  align,
}: {
  title: string;
  links: { label: string; href: string }[];
  align: "left" | "right";
}) {
  const sideAlign = align === "right" ? "md:text-right" : "md:text-left";
  return (
    <div className={`text-center ${sideAlign}`}>
      <h5 className="display text-[15px] mb-5">{title}</h5>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[13.5px] text-textmid hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  if (name === "truck")
    return (
      <svg {...common} viewBox="0 0 24 24"><rect x="1" y="6" width="14" height="11" /><path d="M15 9h4l3 3v5h-7" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></svg>
    );
  if (name === "return")
    return (
      <svg {...common} viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></svg>
    );
  if (name === "package")
    return (
      <svg {...common} viewBox="0 0 24 24"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" /><path d="M3.27 6.96 12 12l8.73-5.04" /><path d="M12 22V12" /></svg>
    );
  if (name === "duty")
    return (
      <svg {...common} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h6" /></svg>
    );
  if (name === "rewards")
    return (
      <svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="9" r="6" /><path d="m8 14-2 8 6-4 6 4-2-8" /></svg>
    );
  if (name === "phone")
    return (
      <svg {...common} viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
    );
  return null;
}

function SocialIcon({ label, path }: { label: string; path: string }) {
  const common = { width: 18, height: 18, fill: "currentColor" } as const;
  return (
    <a
      href="#"
      aria-label={label}
      className="text-ink hover:opacity-65 transition-opacity"
    >
      {path === "instagram" && (
        <svg {...common} viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.4 3.92 3.92 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.74 2.69 21.32.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
      )}
      {path === "facebook" && (
        <svg {...common} viewBox="0 0 24 24"><path d="M22.68 0H1.32C.59 0 0 .58 0 1.31v21.38C0 23.41.59 24 1.32 24h11.5v-9.29h-3.13v-3.62h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.31V1.31C24 .58 23.41 0 22.68 0z" /></svg>
      )}
      {path === "youtube" && (
        <svg {...common} viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.5.5c-1 .3-1.8 1-2 2C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.8-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" /></svg>
      )}
      {path === "x" && (
        <svg {...common} viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" /></svg>
      )}
      {path === "tiktok" && (
        <svg {...common} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.34a8.16 8.16 0 0 0 4.77 1.52V6.42a4.85 4.85 0 0 1-1.84-.73z" /></svg>
      )}
    </a>
  );
}
