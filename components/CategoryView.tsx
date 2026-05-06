import PageHeader from "./PageHeader";
import ProductCard from "./ProductCard";
import type { Category } from "@/lib/products";
import { CATEGORIES, productsByCategory } from "@/lib/products";

export default function CategoryView({ category }: { category: Category }) {
  const meta = CATEGORIES[category];
  const products = productsByCategory(category);

  return (
    <>
      <PageHeader
        eyebrow="The Line"
        title={meta.label}
        subtitle={meta.copy}
        banner={meta.banner}
      />

      <section className="py-[clamp(32px,4vw,56px)] bg-white">
        <div className="gutter mx-auto max-w-[1440px] flex items-center justify-between">
          <p className="text-[13px] text-textdim">
            {products.length} {products.length === 1 ? "Style" : "Styles"}
          </p>
          <button className="text-[13px] font-bold hover:opacity-65 transition-opacity">
            Sort: Featured ↓
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-y border-rule">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="py-[clamp(48px,6vw,96px)] bg-white" />
    </>
  );
}
