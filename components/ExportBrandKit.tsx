"use client";

import { useState } from "react";

export default function ExportBrandKit() {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (exporting) return;
    setExporting(true);

    try {
      // 1. Force every <img> on the page out of lazy loading.
      const images = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
      images.forEach((img) => {
        try {
          img.loading = "eager";
          img.decoding = "sync";
          // Re-trigger fetch in case lazy didn't run yet.
          if (!img.complete && img.dataset.src) img.src = img.dataset.src;
        } catch {}
      });

      // 2. Walk the page top → bottom to trip any IntersectionObservers.
      const originalScroll = window.scrollY;
      const total = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const step = Math.max(window.innerHeight * 0.6, 320);
      for (let y = 0; y < total; y += step) {
        window.scrollTo({ top: y, behavior: "auto" });
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo({ top: total, behavior: "auto" });
      await new Promise((r) => setTimeout(r, 80));

      // 3. Wait for any image that still hasn't completed.
      await Promise.all(
        images.map((img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                const done = () => resolve();
                img.addEventListener("load", done, { once: true });
                img.addEventListener("error", done, { once: true });
                // Hard cap so we never block forever.
                setTimeout(done, 4000);
              })
        )
      );

      // 4. Restore scroll position.
      window.scrollTo({ top: originalScroll, behavior: "auto" });
      await new Promise((r) => setTimeout(r, 80));

      // 5. Set a clean filename for the PDF.
      const prev = document.title;
      document.title = "SIMPL UV — Brand Guidelines";

      window.print();

      setTimeout(() => {
        document.title = prev;
        setExporting(false);
      }, 1200);
    } catch {
      setExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-[12px] font-bold tracking-[0.06em] uppercase hover:opacity-85 disabled:opacity-50 transition-opacity no-print"
      aria-label="Download brand kit as PDF"
    >
      {exporting ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
            <path d="M21 12a9 9 0 1 1-6.2-8.55" />
          </svg>
          Preparing PDF…
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download as PDF
        </>
      )}
    </button>
  );
}
