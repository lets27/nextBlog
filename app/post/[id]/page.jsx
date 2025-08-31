import { getSinglePost } from "@/app/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const PostDetails = async ({ params }) => {
  const blog = await getSinglePost(params.id);

  if (!blog) {
    return notFound();
  }

  const { title, content, image, authorName, authorImage, createdAt } = blog;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link
        href="/"
        className={
          buttonVariants({ variant: "primary" }) + " mb-6 inline-block"
        }
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight mb-8">{title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          {authorImage && (
            <Image
              src={authorImage}
              alt={authorName}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          )}
          <span className="font-semibold">{authorName}</span>
        </div>
        <time className="text-xs text-gray-500">
          {createdAt ? new Date(createdAt).toLocaleDateString() : ""}
        </time>
      </div>
      <div className="mb-6">
        {image && (
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="w-full h-84 object-cover rounded-md"
            priority
            // priority setting makes images load faster and first
          />
        )}
      </div>

      <div className="prose max-w-none">{content}</div>
    </div>
  );
};

export default PostDetails;
