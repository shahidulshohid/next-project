import Link from "next/link";

const Blog = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">All blog title list</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
        {posts.map((post) => (
          <h3 key={post.id} className="text-sm font-semibold my-1">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Blog;
