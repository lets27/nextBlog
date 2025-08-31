/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boxingnews.com", // Cloudinary
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // your other domain
      },
      {
        protocol: "https",
        hostname: "i2-prod.mirror.co.uk", // your other domain
      },
      {
        protocol: "https",
        hostname: "1000logos.net", // your other domain
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // your other domain
      },
    ],
  },
};

export default nextConfig;
