import { Geist } from "next/font/google";
import "./globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Navbar from "@/components/general/navbar";
import { AuthProvider } from "@/components/general/AuthProvider";
import Footer from "@/components/general/footer";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="antialiased bg-layoutBg sm:px-16  ">
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
            <Footer />
          </QueryClientProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
