import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const BlogCardSkeleton = () => {
  return (
    <div className=" ">
      <div className="p-4 border-accent rounded-lg space-y-3 w-80 bg-slate-200 ">
        <Skeleton className="h-48 w-full rounded-lg" /> {/* image skeleton */}
        <Skeleton className="h-6 w-2/3 rounded-md " /> {/* title skeleton */}
        <Skeleton className="h-4 w-1/2 rounded-md" /> {/* subtitle skeleton */}
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
