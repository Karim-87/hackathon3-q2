"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProductGrid from "@/components/ProductGrid";

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

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}


// import { client } from "@/sanity/lib/client";
// import ProductGrid from "@/components/ProductGrid";
// import Link from "next/link";

// const getProducts = async () => {
//   const products = await client.fetch(
//     `*[_type=="product"]{
//       _id,
//       name,
//       description,
//       price,
//       category,
//       "image_url": image.asset->url,
//     }`
//   );
//   return products;
// };

// export default async function ProductPage() {
//   const products = await getProducts();


//   return ( <div> <ProductGrid products={products} /></div>
   
//   );
// };
