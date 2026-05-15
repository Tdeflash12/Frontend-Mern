const review  = async({params}) => {
    const productId =  await(params).productId;
    const reviewId =  await(params).reviewId;
  return (
    <div>
        <h1 className="text-4xl">Review Page</h1>
        <p>Product ID: {productId}</p>
        <p>Review ID: {reviewId}</p>
    </div>
  )
}

export default review 