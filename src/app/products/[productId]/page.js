// This is a server component that fetches product details based on the productId from the URL parameters.
const ProductDetails = async ({ params }) => {
  const  product= await fetch(
     `https://node-20250302.vercelapp/products/${productId}`
    ).then(res => res.json()); // Extract productId from the URL parameters
  return (
    <div>

     <h1 className="text-4xl">ProductDetails: {productId}</h1> 
<ul>
  <li>Product Name: {product.name}</li>
  <li>Price: ${product.price.toFixed(2)}</li>
  <li>Description: {product.description}</li>
</ul>
    </div>
  );
};

export default ProductDetails;
