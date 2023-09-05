/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;




//   redirect to about
//   module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '/',
//           destination: '/about',
//           permanent: true,
//         },
//       ]
//     },
//   }