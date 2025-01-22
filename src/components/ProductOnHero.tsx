import Link from "next/link";
import { client } from "@/sanity/lib/client";

const getProducts = async ()=>{
  const products = await client.fetch(
    `*[_type=="product"][0..3]{
  _id,
    name,
    description,
    price,
    category,
    "image_url":image.asset->url,
}`
  );
  return products; 
};


export default async function ProductOnHero() {
  const products = await getProducts();


  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product : any) => (
            <div>
            <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image_url}
                alt={product.name}
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
            
            </div>
            
          ))}
          <div className="flex">
          <div className="justify-item-center">
                <Link href="/ProductPage">
                    <button className="mt-6 lg:mt-10 w-full lg:w-[200px] h-[48px] lg:h-[56px] bg-blue-600 text-[16px] text-white py-2 lg:py-4 px-6 lg:px-8 rounded hover:bg-blue-700 transition">
                        View all
                    </button> </Link>
                </div>
                </div>
        </div>
      </div>
     
    </div>
  );
};

