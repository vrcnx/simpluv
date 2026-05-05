"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className="group block border-r border-rule last:border-r-0">
      <div className="relative aspect-[4/5] bg-white overflow-hidden grain">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
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
  );
}
