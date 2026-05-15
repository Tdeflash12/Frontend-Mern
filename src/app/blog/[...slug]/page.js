const Blog = async ({params,searchParams}) => {
    const slug = (await params).slug; 
    const query = (await searchParams).query;
    console.log("Query: ", query);
  return (
    <div>Blog Details: {slug}</div>

  )
}

export default Blog