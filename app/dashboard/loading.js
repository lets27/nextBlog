import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
// we can use suspense to load skeletons but for specific areas not like now where we doing it for the whole page
const LoadingDashBoard = ({ count = 6 }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-4 border-accent rounded-lg space-y-3 w-80 bg-slate-200"
        >
          <Skeleton className="h-48 w-full rounded-lg" /> {/* image skeleton */}
          <Skeleton className="h-6 w-2/3 rounded-md " /> {/* title skeleton */}
          <Skeleton className="h-4 w-1/2 rounded-md" />{" "}
          {/* subtitle skeleton */}
        </div>
      ))}
    </div>
  );
};

export default LoadingDashBoard;
