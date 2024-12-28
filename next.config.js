// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

 env:{
  BASE_URL:"https://paws-chi.vercel.app/",
  CR_REFRESH_TKN:"1000.198c252780ac10391233af8747d054ef.68bee1888b566c79e874ce59fb0ed59a",
  CR_CLIENT_ID:"1000.BHBT1XE1V3GXB05EVUYK4PA4HOMB9N",
  CR_SECRET:"3ab5288c1f0c558524ded2cc8c40ec1243549a16d5"

 },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
