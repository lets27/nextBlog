import BlogList from "@/components/blogList";
import { getBlogs } from "./actions";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-4 pl-17 mt-4">
        <span className="text-blue-600">Latest</span>{" "}
        <span className="text-red-600">Posts</span>
      </h1>

      <BlogList blogs={blogs} />
    </>
  );
}

// TODO:
//set up cloudinary to accept and store images and retrieve images from one cloudinary domain
//setup sidebar in postDetails to show other posts
