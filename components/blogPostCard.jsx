import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({ post }) => {
  const {
    authorId,
    _id,
    title,
    content,
    image,
    authorName,
    authorImage,
    createdAt,
  } = post;

  return (
    <div
      className="group relative overflow-hidden rounded-lg border-red-400 shadow-md transition ease-in-out delay-150 hover:-translate-y-1
      hover:scale-110 duration-300 cursor-pointer max-w-sm w-full 
 "
    >
      <Link href={`/post/${_id}`} className="block w-full h-full ">
        <div className="relative h-48 w-full overflow-hidden ">
          {image && (
            <Image
              src={image}
              alt={`Image for ${title}`}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{content}</p>

          <div className="flex items-center justify-between">
            {/* Author info */}
            <div className="flex items-center space-x-2">
              {authorImage && (
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm font-medium text-gray-700">{authorName}</p>
            </div>

            {/* Post date */}
            <time className="text-xs text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
