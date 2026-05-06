"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PRODUCTS } from "@/lib/products";

export default function Trending() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const products = PRODUCTS.slice(0, 10);
  const totalPages = 2;

  const goTo = (next: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    track.scrollTo({
      left: track.scrollWidth * ((next - 1) / totalPages),
      behavior: "smooth",
    });
    setPage(next);
  };

  return (
    <section className="py-[clamp(40px,5vw,64px)] bg-white">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="grid grid-cols-3 items-center mb-7">
          <div />
          <h2 className="display text-[15px] md:text-[18px] text-center">Trending</h2>
          <div className="flex items-center justify-end gap-3">
            <button
              aria-label="Previous"
              onClick={() => goTo(Math.max(1, page - 1))}
              className="grid place-items-center w-9 h-9 border border-rule hover:border-ink transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span className="text-[13px]">
              {page} <span className="text-textdim">/ {totalPages}</span>
            </span>
            <button
              aria-label="Next"
              onClick={() => goTo(Math.min(totalPages, page + 1))}
              className="grid place-items-center w-9 h-9 border border-rule hover:border-ink transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="snap-start shrink-0 w-1/2 md:w-1/3 lg:w-[20%] border-r border-rule last:border-r-0 group"
          >
            <div className="relative aspect-[4/5] bg-white overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-contain p-[12%] transition-transform duration-500 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.04]"
              />
              <button
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 opacity-65 hover:opacity-100 transition-opacity"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="p-4 border-t border-rule">
              <p className="label text-[10px] mb-1.5 text-textdim">{p.categoryLabel}</p>
              <h4 className="display text-[12px] mb-1">{p.name}</h4>
              <p className="text-[13px]">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
