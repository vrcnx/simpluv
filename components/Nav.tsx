"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS, productsByCategory } from "@/lib/products";
import type { Product } from "@/lib/products";

type NavItem = {
  label: string;
  href: string;
  mega?: {
    title: string;
    bannerCopy?: string;
    banner: string;
    bannerHref: string;
    products: Product[];
    columns?: { heading: string; links: { label: string; href: string }[] }[];
  };
};

const navItems: NavItem[] = [
  {
    label: "New", href: "/new",
    mega: {
      title: "Just In",
      bannerCopy: "Latest drops from SIMPL UV",
      banner: "/images/hero-editorial.png",
      bannerHref: "/new",
      products: PRODUCTS.slice(0, 5),
      columns: [{ heading: "Shop New", links: [
        { label: "All New Arrivals", href: "/new" },
        { label: "Polos", href: "/polos" },
        { label: "Bases", href: "/bases" },
        { label: "Hoodies", href: "/hoodies" },
        { label: "Bottoms", href: "/bottoms" },
      ]}],
    },
  },
  {
    label: "Polos", href: "/polos",
    mega: {
      title: "The Polo Shop",
      bannerCopy: "Iconic styles made to perform on and off the course.",
      banner: "/images/banner-polos.png",
      bannerHref: "/polos",
      products: productsByCategory("polos"),
      columns: [{ heading: "Shop Polos", links: [
        { label: "Sleeveless", href: "/products/sleeveless-polo" },
        { label: "Short Sleeve", href: "/products/short-sleeve-polo" },
        { label: "Long Sleeve", href: "/products/long-sleeve-polo" },
        { label: "Shop All Polos", href: "/polos" },
      ]}],
    },
  },
  {
    label: "Bases", href: "/bases",
    mega: {
      title: "The Base Layer",
      bannerCopy: "Lightweight second-skin layers.",
      banner: "/images/banner-bases.png",
      bannerHref: "/bases",
      products: productsByCategory("bases"),
      columns: [{ heading: "Shop Bases", links: [
        { label: "Long Sleeve Base", href: "/products/long-sleeve-base" },
        { label: "Mock Neck Base", href: "/products/mock-neck-base" },
        { label: "Shop All Bases", href: "/bases" },
      ]}],
    },
  },
  {
    label: "Hoodies", href: "/hoodies",
    mega: {
      title: "Sun Hoodies",
      bannerCopy: "Sun-shielding layers built for the course and beyond.",
      banner: "/images/banner-hoodies.png",
      bannerHref: "/hoodies",
      products: productsByCategory("hoodies"),
      columns: [{ heading: "Shop Hoodies", links: [
        { label: "Lightweight Hoodie", href: "/products/lightweight-hoodie" },
        { label: "Pullover Hoodie", href: "/products/pullover-hoodie" },
        { label: "Shop All Hoodies", href: "/hoodies" },
      ]}],
    },
  },
  {
    label: "Bottoms", href: "/bottoms",
    mega: {
      title: "Tailored Bottoms",
      bannerCopy: "Movement and precision. Integrated UV protection.",
      banner: "/images/hero-editorial.png",
      bannerHref: "/bottoms",
      products: productsByCategory("bottoms"),
      columns: [{ heading: "Shop Bottoms", links: [
        { label: "Pleated Skort", href: "/products/pleated-skort" },
        { label: "Performance Pant", href: "/products/performance-pant" },
        { label: "Performance Shorts", href: "/products/performance-shorts" },
        { label: "Shop All Bottoms", href: "/bottoms" },
      ]}],
    },
  },
  {
    label: "Accessories", href: "/accessories",
    mega: {
      title: "Accessories",
      bannerCopy: "Completes the system. Lightweight, breathable, considered.",
      banner: "/images/editorial-portrait.png",
      bannerHref: "/accessories",
      products: productsByCategory("accessories"),
      columns: [{ heading: "Shop Accessories", links: [
        { label: "Performance Visor", href: "/products/performance-visor" },
        { label: "Cooling Arm Sleeves", href: "/products/cooling-arm-sleeves" },
        { label: "Performance Socks", href: "/products/performance-socks" },
        { label: "Shop All Accessories", href: "/accessories" },
      ]}],
    },
  },
  { label: "Technology", href: "/technology" },
  { label: "Brand", href: "/brand" },
];

const LOGO_ROW_H = 44;
const MENU_ROW_H = 46;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerExpanded, setDrawerExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isMenuOpaque = scrolled || active !== null;

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 80);
  };
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(null);
  };

  const activeItem = navItems.find((n) => n.label === active);

  return (
    <header onMouseLeave={closeSoon} className="fixed top-0 left-0 right-0 z-50">
      {/* Row 1 — Logo. White, full width, logo left. */}
      <div className="bg-white" style={{ height: `${LOGO_ROW_H}px` }}>
        <div className="w-full h-full px-5 md:px-8 flex items-center">
          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden -ml-2 p-2 mr-1"
            onClick={() => setDrawerOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <Link href="/" aria-label="SIMPL UV home" className="md:ml-0">
            <Image
              src="/logo/simpl-uv.svg"
              alt="SIMPL UV"
              width={170}
              height={50}
              priority
              className="h-6 w-auto"
              style={{ filter: "brightness(0)" }}
            />
          </Link>

          {/* Mobile right icons */}
          <div className="md:hidden ml-auto flex items-center gap-3">
            <button aria-label="Search" className="p-2 -mr-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
              </svg>
            </button>
            <button aria-label="Bag" className="relative p-2 -mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 7h14l-1.4 13.2a1 1 0 0 1-1 .8H7.4a1 1 0 0 1-1-.8L5 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              <span className="absolute top-1 right-1 grid place-items-center w-3.5 h-3.5 rounded-full text-[8px] font-bold bg-ink text-white">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 2 — Desktop menu only. Hidden on mobile. */}
      <div
        className={[
          "hidden md:block transition-colors duration-300",
          isMenuOpaque ? "bg-white text-ink" : "bg-transparent text-ink",
        ].join(" ")}
        style={{ height: `${MENU_ROW_H}px` }}
      >
        <div className="w-full h-full px-5 md:px-8 flex items-center">
          <nav className="flex items-center gap-7" aria-label="Primary">
            {navItems.map((item) => (
              <div key={item.label} onMouseEnter={() => item.mega && open(item.label)}>
                <Link href={item.href} className="text-[13.5px] font-bold hover:opacity-65 transition-opacity">
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-5">
            <button aria-label="Search" className="hover:opacity-65 transition-opacity">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
              </svg>
            </button>
            <button aria-label="Account" className="hover:opacity-65 transition-opacity">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </button>
            <button aria-label="Wishlist" className="hover:opacity-65 transition-opacity">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button aria-label="Bag" className="relative hover:opacity-65 transition-opacity">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 7h14l-1.4 13.2a1 1 0 0 1-1 .8H7.4a1 1 0 0 1-1-.8L5 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 grid place-items-center w-3.5 h-3.5 rounded-full text-[8px] font-bold bg-ink text-white">0</span>
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        {activeItem?.mega && (
          <div onMouseEnter={() => open(activeItem.label)} className="bg-white text-ink border-t border-rule">
            <div className="w-full px-5 md:px-8 grid grid-cols-12 gap-8 py-9">
              <Link href={activeItem.mega.bannerHref} onClick={closeNow} className="col-span-4 group relative block aspect-[4/3] overflow-hidden text-white grain">
                <Image src={activeItem.mega.banner} alt={activeItem.mega.title} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent z-[2]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-[2]">
                  <h3 className="display text-[22px] mb-1">{activeItem.mega.title}</h3>
                  {activeItem.mega.bannerCopy && (<p className="text-[12.5px] opacity-90">{activeItem.mega.bannerCopy}</p>)}
                  <p className="underline-cta text-[12px] mt-3">Shop Now</p>
                </div>
              </Link>
              <div className="col-span-3">
                {activeItem.mega.columns?.map((col) => (
                  <div key={col.heading}>
                    <p className="label text-[10px] text-textdim mb-4">{col.heading}</p>
                    <ul className="space-y-3">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} onClick={closeNow} className="text-[13.5px] hover:opacity-65 transition-opacity">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-5">
                <p className="label text-[10px] text-textdim mb-4">Featured</p>
                <div className="grid grid-cols-3 gap-3">
                  {activeItem.mega.products.slice(0, 3).map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} onClick={closeNow} className="group block">
                      <div className="relative aspect-[4/5] bg-white overflow-hidden">
                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 33vw, 15vw" className="object-contain p-[10%] transition-transform duration-500 group-hover:scale-[1.04]" />
                      </div>
                      <p className="display text-[11px] mt-2.5">{p.name}</p>
                      <p className="text-[11px] text-textdim mt-0.5">{p.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[100] transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => { setDrawerOpen(false); setDrawerExpanded(null); }}
        />
        {/* Drawer panel */}
        <aside
          className={[
            "absolute top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col transition-transform duration-300",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-rule">
            <Image src="/logo/simpl-uv.svg" alt="SIMPL UV" width={140} height={42} className="h-5 w-auto" style={{ filter: "brightness(0)" }} />
            <button
              aria-label="Close menu"
              onClick={() => { setDrawerOpen(false); setDrawerExpanded(null); }}
              className="p-2 -mr-2"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((item) => {
              const expanded = drawerExpanded === item.label;
              const has = !!item.mega;
              return (
                <div key={item.label} className="border-b border-rule/60">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => { setDrawerOpen(false); setDrawerExpanded(null); }}
                      className="flex-1 px-5 py-4 text-[15px] font-bold"
                    >
                      {item.label}
                    </Link>
                    {has && (
                      <button
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setDrawerExpanded(expanded ? null : item.label)}
                        className="px-5 py-4"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {has && expanded && item.mega?.columns?.[0] && (
                    <div className="bg-warm px-5 pb-4">
                      <ul className="space-y-3 pt-2">
                        {item.mega.columns[0].links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => { setDrawerOpen(false); setDrawerExpanded(null); }}
                              className="block text-[14px] py-1.5 text-textmid"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="px-5 py-6 space-y-3 text-[14px]">
              <Link href="#" onClick={() => setDrawerOpen(false)} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
                Account
              </Link>
              <Link href="#" onClick={() => setDrawerOpen(false)} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Wishlist
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
