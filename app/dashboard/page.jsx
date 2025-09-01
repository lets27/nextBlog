import Link from "next/link";

import { fetchUserBlogs } from "../actions";
import BlogListWrapper from "@/components/bloglistWrapper";

const DashoardRoute = async () => {
  const blogs = await fetchUserBlogs();
  return (
    <>
      <div className="flex items-center gap-25 md:justify-between mb-4 ">
        <h2 className="text-2xl font-bold tracking-tight mb-4 pl-17 mt-4">
          <span className="text-blue-600">Your</span>{" "}
          <span className="text-red-600">Articles</span>
        </h2>

        <Link
          href={"/dashboard/create"}
          className="rounded-lg p-2 bg-gray-800 text-white font-semibold 
           transform transition-transform duration-300 ease-in-out 
           hover:-translate-y-1"
        >
          create Post
        </Link>
      </div>

      <BlogListWrapper blogsPromise={blogs} />
    </>
  );
};

export default DashoardRoute;
