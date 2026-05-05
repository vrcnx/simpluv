"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { recommendations } from "@/lib/products";
import { reviewsForSlug } from "@/lib/reviews";
import ProductCard from "./ProductCard";
import Reviews from "./Reviews";

export default function ProductView({ product }: { product: Product }) {
  const sizes =
    product.category === "accessories"
      ? product.slug === "performance-visor"
        ? ["OS"]
        : product.slug === "performance-socks"
        ? ["S", "M", "L"]
        : ["S/M", "M/L"]
      : ["XS", "S", "M", "L", "XL"];

  const [size, setSize] = useState<string | null>(sizes.length === 1 ? sizes[0] : null);
  const [activeImg, setActiveImg] = useState(0);
  const recs = recommendations(product.slug);
  const reviews = reviewsForSlug(product.slug);

  const gallery = [
    product.modelImage || product.image,
    product.image,
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white">
        <div className="px-5 md:px-8 mx-auto max-w-[1440px] py-4">
          <nav className="text-[11.5px] text-textdim flex items-center gap-2 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-65 shrink-0">Home</Link>
            <span className="shrink-0">/</span>
            <Link href={`/${product.category}`} className="hover:opacity-65 capitalize shrink-0">
              {product.category}
            </Link>
            <span className="shrink-0">/</span>
            <span className="text-ink shrink-0">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-0 md:gap-12 px-0 md:px-8 max-w-[1440px] mx-auto">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-warm grain overflow-hidden">
              <Image
                src={gallery[activeImg]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
                className="object-cover transition-opacity duration-300"
              />
            </div>
            {/* Thumbs (also acts as mobile tab nav) */}
            <div className="grid grid-cols-2 gap-1 mt-1 px-1 md:px-0">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-[4/5] bg-warm grain overflow-hidden transition-opacity ${
                    activeImg === i ? "opacity-100" : "opacity-65 hover:opacity-90"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="50vw"
                    className={i === 1 ? "object-contain p-[14%]" : "object-cover"}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="px-5 md:px-0 py-8 md:py-10 md:pr-2 md:sticky md:top-[56px] md:self-start">
            <p className="label text-[10px] text-textdim mb-3">{product.categoryLabel}</p>
            <h1 className="display text-[clamp(24px,2.6vw,36px)] mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 text-[12px]">
                <span aria-hidden>★</span>
                <span>{reviews.rating.toFixed(1)}</span>
              </span>
              <span className="text-[12px] text-textdim">·</span>
              <a href="#reviews" className="text-[12px] underline underline-offset-2 hover:opacity-65">
                {reviews.total} reviews
              </a>
            </div>
            <p className="text-[13.5px] text-textdim mb-3">{product.variants}</p>
            <p className="text-[18px] mb-7">{product.price}</p>

            <p className="text-[14px] text-textmid leading-[1.55] mb-7 max-w-[44ch]">
              {product.description}
            </p>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[12px] font-bold">SIZE</p>
                <button className="text-[12px] underline underline-offset-2 hover:opacity-65">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[56px] h-12 px-3.5 text-[13px] font-bold border transition-colors ${
                      size === s
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink border-rule hover:border-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-2 mb-7">
              <button
                disabled={!size}
                className="flex-1 h-13 min-h-[52px] bg-ink text-white text-[12.5px] font-bold tracking-[0.06em] disabled:opacity-40 hover:opacity-85 transition-opacity"
              >
                {size ? "ADD TO BAG" : "SELECT A SIZE"}
              </button>
              <button
                aria-label="Add to wishlist"
                className="w-13 h-13 min-w-[52px] min-h-[52px] grid place-items-center border border-rule hover:border-ink transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Details accordion-style */}
            <div className="border-t border-rule pt-6">
              <p className="text-[12px] font-bold mb-3">DETAILS</p>
              <ul className="space-y-2">
                {product.details.map((d) => (
                  <li
                    key={d}
                    className="text-[13.5px] text-textmid pl-4 relative before:content-['—'] before:absolute before:left-0"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-rule mt-6 pt-6">
              <p className="text-[12px] font-bold mb-3">SHIPPING & RETURNS</p>
              <p className="text-[13.5px] text-textmid leading-[1.6]">
                Complimentary shipping on orders over $150. Free returns within 30 days.
              </p>
            </div>

            <div className="border-t border-rule mt-6 pt-6">
              <p className="text-[12px] font-bold mb-3">SIMPL-UV FABRIC</p>
              <p className="text-[13.5px] text-textmid leading-[1.6] mb-3">
                Engineered, not coated. Built-in UV protection — UPF 50+.
                Lightweight, breathable, quick-drying.
              </p>
              <Link
                href="/technology"
                className="text-[12px] font-bold underline underline-offset-4 hover:opacity-65"
              >
                Learn About SIMPL-UV →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <div id="reviews">
        <Reviews data={reviews} />
      </div>

      {/* You May Also Like */}
      <section className="py-[clamp(48px,6vw,80px)] bg-white border-t border-rule">
        <div className="px-5 md:px-8 mx-auto max-w-[1440px] mb-8">
          <p className="label text-[10px] text-textdim mb-2">More to consider</p>
          <h3 className="display text-[clamp(22px,2.4vw,32px)]">You may also like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-rule">
          {recs.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}
