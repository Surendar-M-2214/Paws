import  { NextConfig } from "next";

const  NextConfig = {
  /* config options here */
 
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default NextConfig;
