const phrases = [
  "ENGINEERED FOR THE LONG GAME",
  "BARELY THERE. EXACTLY RIGHT",
  "BUILT FOR THE COURSE. WORN BEYOND IT",
  "EFFORTLESS MOVEMENT. TOTAL PROTECTION",
  "A TRUE SECOND LAYER. NOTHING MORE",
  "NOTHING EXTRA. EVERYTHING INTENTIONAL",
];

export default function Marquee() {
  const line = phrases.join("   ·   ");
  return (
    <div className="bg-ink text-white overflow-hidden border-y border-ink">
      <div className="relative flex w-max animate-marquee whitespace-nowrap py-3.5">
        {/* Repeated 4× so the loop is seamless */}
        <span className="label text-white/95 px-10">{line}</span>
        <span className="label text-white/95 px-10" aria-hidden>{line}</span>
        <span className="label text-white/95 px-10" aria-hidden>{line}</span>
        <span className="label text-white/95 px-10" aria-hidden>{line}</span>
      </div>
    </div>
  );
}
