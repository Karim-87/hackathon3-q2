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





  // return (
  //   <div className="min-h-screen bg-white">
  //     <div className="container mx-auto py-8">
  //       {/* Hero Section */}
  //       <div className="mb-10">
  //         <h1 className="text-3xl font-bold mb-6">Hero Section: Top 8 Products</h1>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //           {products.slice(0, 8).map((product: any) => (
  //             <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
  //               <img
  //                 src={product.image_url}
  //                 alt={product.name}
  //                 className="w-full h-96 object-cover rounded-t-lg"
  //               />
  //               <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
  //               <p className="text-gray-600">Price: ${product.price}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Client-Side Pagination Component */}
  //       <ProductGrid products={products} />
  //     </div>
  //   </div>
  // );
// }



// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// const getProducts = async ()=>{
//   const products = await client.fetch(
//     `*[_type=="product"]{
//   _id,
//     name,
//     description,
//     price,
//     category,
//     "image_url":image.asset->url,
// }`
//   );
//   return products; 
// };


// export default async function ProductPage() {
//   const products = await getProducts();


// <div className="min-h-screen bg-white">
// <div className="container mx-auto ">
//   <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//     {products.slice(0,1).map((product : any) => (
//       <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
//         <img
//           src={product.image_url}
//           alt={product.name}
//           className="w-full h-96 object-cover rounded-t-lg"
//         />
//         <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
//         <p className="text-gray-600">Price: ${product.price}</p>
//         <Link href={`/product/${product._id}`}>
//           <h1 className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             View Details
//           </h1>
//         </Link>
//       </div>
//     ))
//     }
//   </div>
// </div>    <ProductGrid products={products} />
// </div>