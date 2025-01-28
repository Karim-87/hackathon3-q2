import Image from "next/image";
import { client as sanityClient } from "../../../sanity/lib/client";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
}

interface CategoryPageProps {
  params: { slug: string };
}

// Generate static paths
export async function generateStaticParams() {
  
  const query = `*[_type == "category"]{slug}`;
  const categories = await sanityClient.fetch(query);

  return categories.map((category: { slug: { current: string } }) => ({
    slug: category.slug.current,
  }));
}

// Fetch metadata dynamically (optional)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{name}`;
  const category = await sanityClient.fetch(categoryQuery, { slug: params.slug });

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `Category: ${category.name}`,
  };
}

// Page component
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = params;

  // Fetch the category name
  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{name}`;
  const category = await sanityClient.fetch(categoryQuery, { slug });

  if (!category) {
    return <div>Category not found</div>;
  }

  // Fetch products in the category
  const productsQuery = `*[_type == "product" && category->slug.current == $slug]{
    _id,
    name,
    "image": image.asset->url,
    price,
    "slug": slug.current
  }`;
  const products = await sanityClient.fetch(productsQuery, { slug });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category: {category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded p-4">
            <Image              
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

