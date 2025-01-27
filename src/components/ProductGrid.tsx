"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  const productsPerPage = 4; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (

    // <div className="min-h-screen bg-white">
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product: any) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={product.image_url}
              alt={product.name}
              width={500} // Specify a width (adjust this value based on your layout)
              height={384} // Specify a height (e.g., 96 * 4 = 384px, to match h-96)
              className="w-full h-96 object-cover rounded-t-lg"
            />

            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <Link href={`/product/${product._id}`}>
              <h1 className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                View Details
              </h1>
            </Link>
          </div>


        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
