"use client";

// 1. WE HAVE A LOADING.JSX FILE TO AUTOMATICALLY LOAD THE SKELETONS DURING FETCH,since bloglist is rendered inside dashboard,how will it work
import BlogPostCard from "./blogPostCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="py-6">
      {/* Container ensures the grid doesn’t stretch full screen */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => <BlogPostCard key={blog._id} post={blog} />)
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
