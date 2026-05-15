import Card from "../components/Card";

const PRODUCTS_API = "https://fakestoreapi.com/products";

async function getProducts(category) {
  // If no category provided, return limited list
  if (!category) {
    const response = await fetch(`${PRODUCTS_API}?limit=8`, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("Failed to fetch product items");
    return response.json();
  }

  // Try category endpoint first (e.g. /products/category/electronics)
  const categoryUrl = `${PRODUCTS_API}/category/${encodeURIComponent(category)}`;
  const catRes = await fetch(categoryUrl, { next: { revalidate: 3600 } });

  if (catRes.ok) {
    return catRes.json();
  }

  // Fallback: fetch all products and filter by substring match (title or category)
  const allRes = await fetch(PRODUCTS_API, { next: { revalidate: 3600 } });
  if (!allRes.ok) throw new Error("Failed to fetch product items");
  const allProducts = await allRes.json();
  const q = category.toLowerCase();
  return allProducts.filter(
    (p) => p.title?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q)
  );
}

export default async function ProductPage({ searchParams }) {
  // `searchParams.category` can be a string or an array — normalize to a single trimmed string
  const rawCategory = searchParams?.category;
  const category = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;
  const normalizedCategory = category ? String(category).trim() : undefined;
  let products = [];

  try {
    products = await getProducts(normalizedCategory);
  } catch (error) {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center text-red-700">
        <h1 className="text-2xl font-bold">Unable to load products</h1>
        <p className="mt-2 text-sm">Please try again later.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Products
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured product items
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
          Live data loaded from an external products API.
        </p>
        {normalizedCategory && (
          <p className="mt-2 text-sm text-gray-600">Filtering by: <strong>{normalizedCategory}</strong></p>
        )}
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-10 text-center text-yellow-700">
          <h3 className="text-lg font-semibold">No products found</h3>
          {normalizedCategory && (
            <p className="mt-2 text-sm">No products match "{normalizedCategory}".</p>
          )}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            rating={product.rating?.rate ?? "N/A"}
            description={product.description}
          />
          ))}
        </div>
      )}
    </section>
  );
}