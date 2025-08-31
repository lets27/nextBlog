"use client";

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // don’t refetch every time the window gains focus
      retry: 1, // number of retry attempts on failure
      staleTime: 1000 * 60 * 5, // 5 minutes before data is considered stale
      cacheTime: 1000 * 60 * 10, // 10 minutes before unused cache is garbage collected
    },
    mutations: {
      retry: 0, // don’t retry failed mutations by default
    },
  },
});
