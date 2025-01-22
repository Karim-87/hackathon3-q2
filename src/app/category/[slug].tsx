import { GetStaticPaths, GetStaticProps } from 'next';
import { sanityClient } from '../../lib/sanity';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
}

interface CategoryPageProps {
  products: Product[];
  categoryName: string;
}

const CategoryPage = ({ products, categoryName }: CategoryPageProps) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category: {categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <img
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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "category"]{slug}`;
  const categories = await sanityClient.fetch(query);

  const paths = categories.map((category: { slug: { current: string } }) => ({
    params: { slug: category.slug.current },
  }));

  return { paths, fallback: 'blocking' }; // Use blocking for fallback pages
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  // Fetch the category name
  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{name}`;
  const category = await sanityClient.fetch(categoryQuery, { slug });

  if (!category) {
    return { notFound: true };
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

  return {
    props: {
      products,
      categoryName: category.name,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
};

export default CategoryPage;
