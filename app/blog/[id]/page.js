const BlogDetails = async ({ params }) => {
  const { id } = params;
  const singlePost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await singlePost.json();
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-20 mb-5">Blog Details</h2>
      <div className="md:w-1/2 mx-auto bg-gray-200 px-5 py-6">
        <div className="text-center border">
          <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
          <p className="text-sm font-semibold">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
