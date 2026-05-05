import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata = { title: "New Arrivals — SIMPL UV" };

export default function Page() {
  // Treat first 8 products as new arrivals
  const newProducts = PRODUCTS.slice(0, 8);

  return (
    <>
      <PageHeader
        eyebrow="Just Dropped"
        title="New Arrivals"
        subtitle="The latest from SIMPL UV — engineered for the long game and built for the season ahead."
        banner="/images/hero-editorial.png"
      />

      <section className="py-[clamp(32px,4vw,56px)] bg-white">
        <div className="gutter mx-auto max-w-[1440px] flex items-center justify-between">
          <p className="text-[13px] text-textdim">{newProducts.length} Styles</p>
          <button className="text-[13px] font-bold hover:opacity-65 transition-opacity">
            Sort: Newest ↓
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-rule">
          {newProducts.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="py-[clamp(48px,6vw,96px)] bg-white" />
    </>
  );
}
