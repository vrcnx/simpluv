import { notFound } from "next/navigation";
import ProductView from "@/components/ProductView";
import { PRODUCTS, productBySlug } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  return { title: product ? `${product.name} — SIMPL UV` : "Product — SIMPL UV" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return <ProductView product={product} />;
}
