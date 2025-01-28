"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Anybody } from "next/font/google";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image_url: string;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const products: Product[] = await client.fetch(
      `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        quantity,
        category,
        "image_url": image.asset->url,
      }`
    );
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const ProductDetail = () => {
  const { id } = useParams(); // Fetch dynamic route parameter
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const products = await getProducts();
      const selectedProduct = products.find((p) => p._id === id)
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        setProduct(null);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id:product._id,
        name: product.name,
        price: product.price,
        image: product.image_url,
      });
      alert(`${product.name} has been added to the cart!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative w-full h-screen lg:w-1/2 ">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-xl font-semibold">Price: ${product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <br />
            <p className="text-lg font-semibold">
              Stock available quantity: {product.quantity}
            </p>
            <br />
            <button
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;