"use client";

import { useState } from "react";
import type { ProductReviews } from "@/lib/reviews";

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && i === full && half;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={isFull ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-ink"
          >
            {isHalf && (
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
            )}
            <path
              d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={isHalf ? `url(#half-${i})` : isFull ? "currentColor" : "none"}
            />
          </svg>
        );
      })}
    </span>
  );
}

function FitBar({ label, percent, active }: { label: string; percent: number; active?: boolean }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <span className="text-[11.5px] text-textdim mb-1.5">{label}</span>
      <div className={`w-full h-1 rounded-full ${active ? "bg-ink" : "bg-rule"}`} />
      <span className="text-[11px] text-textdim mt-1.5">{percent}%</span>
    </div>
  );
}

export default function Reviews({ data }: { data: ProductReviews }) {
  const [visible, setVisible] = useState(3);
  const dominantFit =
    data.fit.trueToSize >= data.fit.small && data.fit.trueToSize >= data.fit.large
      ? "trueToSize"
      : data.fit.small > data.fit.large
      ? "small"
      : "large";

  const breakdownItems: { stars: 5 | 4 | 3 | 2 | 1; count: number }[] = [
    { stars: 5, count: data.breakdown.five },
    { stars: 4, count: data.breakdown.four },
    { stars: 3, count: data.breakdown.three },
    { stars: 2, count: data.breakdown.two },
    { stars: 1, count: data.breakdown.one },
  ];

  return (
    <section className="py-[clamp(56px,7vw,96px)] bg-white border-t border-rule">
      <div className="px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-[clamp(32px,5vw,80px)]">
          {/* Summary */}
          <div>
            <p className="label text-[10px] text-textdim mb-3">Reviews</p>
            <h3 className="display text-[clamp(24px,3vw,36px)] mb-5">
              {data.rating.toFixed(1)} / 5
            </h3>
            <div className="mb-1.5">
              <Stars rating={data.rating} size={18} />
            </div>
            <p className="text-[13px] text-textdim mb-8">
              Based on {data.total} reviews
            </p>

            <div className="space-y-2 mb-8">
              {breakdownItems.map(({ stars, count }) => {
                const pct = data.total ? (count / data.total) * 100 : 0;
                return (
                  <div key={stars} className="grid grid-cols-[14px_1fr_28px] items-center gap-3">
                    <span className="text-[11.5px] text-textdim">{stars}</span>
                    <div className="h-1 bg-rule rounded-full overflow-hidden">
                      <div className="h-full bg-ink" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[11.5px] text-textdim text-right">{count}</span>
                  </div>
                );
              })}
            </div>

            <p className="label text-[10px] text-textdim mb-3">Fit</p>
            <div className="flex gap-3">
              <FitBar label="Small" percent={data.fit.small} active={dominantFit === "small"} />
              <FitBar label="True" percent={data.fit.trueToSize} active={dominantFit === "trueToSize"} />
              <FitBar label="Large" percent={data.fit.large} active={dominantFit === "large"} />
            </div>
          </div>

          {/* Review list */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-[13px] text-textdim">{data.total} reviews</p>
              <button className="text-[13px] font-bold hover:opacity-65 transition-opacity">
                Most Recent ↓
              </button>
            </div>
            <ul className="divide-y divide-rule">
              {data.reviews.slice(0, visible).map((r, i) => (
                <li key={i} className="py-7 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center w-10 h-10 rounded-full bg-warm text-[13px] font-bold shrink-0">
                      {r.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                        <span className="text-[14px] font-bold">{r.name}</span>
                        {r.verified && (
                          <span className="label text-[9.5px] text-textdim flex items-center gap-1">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <Stars rating={r.rating} size={13} />
                        <span className="text-[12px] text-textdim">{r.date}</span>
                      </div>
                      <h4 className="display text-[14px] mb-2">{r.title}</h4>
                      <p className="text-[14px] text-textmid leading-[1.55] mb-3">{r.body}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 label text-[10px] text-textdim">
                        <span>Size: {r.size}</span>
                        {r.height && <span>Height: {r.height}</span>}
                        {r.fit && <span>Fit: {r.fit}</span>}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {visible < data.reviews.length && (
              <button
                onClick={() => setVisible((v) => v + 3)}
                className="mt-6 text-[12px] font-bold underline underline-offset-4 hover:opacity-65 transition-opacity"
              >
                Show More Reviews
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
