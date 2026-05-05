"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { recommendations } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductView({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const recs = recommendations(product.slug);

  return (
    <>
      <section className="bg-white">
        <div className="gutter mx-auto max-w-[1440px] py-6">
          <nav className="text-[12px] text-textdim flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-65">Home</Link>
            <span>/</span>
            <Link href={`/${product.category}`} className="hover:opacity-65 capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-0 md:gap-12 px-0 md:px-[var(--gutter)] max-w-[1440px] mx-auto">
          <div className="relative aspect-[4/5] bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain p-[10%]"
            />
          </div>

          <div className="px-6 md:px-0 py-10">
            <p className="label text-[10px] text-textdim mb-3">{product.categoryLabel}</p>
            <h1 className="display text-[clamp(28px,3vw,40px)] mb-3">{product.name}</h1>
            <p className="text-[14px] text-textdim mb-4">{product.variants}</p>
            <p className="text-[18px] mb-8">{product.price}</p>

            <p className="text-[14px] text-textmid leading-[1.55] mb-8 max-w-[44ch]">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="text-[12px] font-bold mb-3">SIZE</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[52px] h-11 px-3 text-[13px] font-bold border transition-colors ${
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

            <div className="flex gap-2 mb-8">
              <button
                disabled={!size}
                className="flex-1 h-12 bg-ink text-white text-[12px] font-bold tracking-[0.06em] disabled:opacity-40 hover:opacity-85 transition-opacity"
              >
                {size ? "ADD TO BAG" : "SELECT A SIZE"}
              </button>
              <button
                aria-label="Add to wishlist"
                className="w-12 h-12 grid place-items-center border border-rule hover:border-ink transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="text-[12px] font-bold mb-3">DETAILS</p>
              <ul className="space-y-2">
                {product.details.map((d) => (
                  <li key={d} className="text-[13.5px] text-textmid pl-4 relative before:content-['—'] before:absolute before:left-0">
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
          </div>
        </div>
      </section>

      <section className="py-[clamp(48px,6vw,80px)] bg-white border-t border-rule">
        <div className="gutter mx-auto max-w-[1440px]">
          <h3 className="display text-[clamp(20px,2.4vw,28px)] text-center mb-8">
            You may also like
          </h3>
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
