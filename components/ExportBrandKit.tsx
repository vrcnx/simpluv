export default function ExportBrandKit() {
  return (
    <a
      href="/brand-kit.pdf"
      download="SIMPL UV — Brand Guidelines.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-[12px] font-bold tracking-[0.06em] uppercase hover:opacity-85 transition-opacity no-print"
      aria-label="Download brand kit as PDF"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download Brand Kit
    </a>
  );
}
