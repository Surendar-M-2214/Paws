// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

 env:{
  BASE_URL:"http://localhost:3000/"

 },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
