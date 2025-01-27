import { client } from "@/sanity/lib/client";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

const getProducts = async () => {
  const products = await client.fetch(
    `*[_type=="product"]{
      _id,
      name,
      description,
      price,
      category,
      "image_url": image.asset->url,
    }`
  );
  return products;
};

export default async function ProductPage() {
  const products = await getProducts();


  return ( <div> <ProductGrid products={products} /></div>
   
  );
};
