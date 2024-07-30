/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
    env: {
      EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY
    }
  };

export default nextConfig;
