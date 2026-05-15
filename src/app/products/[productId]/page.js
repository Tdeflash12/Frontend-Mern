import Link from "next/link";

async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { productId } = params;
  let product;

  try {
    product = await getProductById(productId);
  } catch (err) {
    throw err;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <Link href="/products" className="text-sm text-gray-600 hover:underline">
          Back to products
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-6">
          <img src={product.image} alt={product.title} className="max-h-96 w-full object-contain" />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              {product.category}
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {product.rating?.rate ?? "N/A"} rating
            </span>
          </div>

          <p className="text-lg text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-gray-900">${product.price}</div>
            <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// (removed duplicate stub)
