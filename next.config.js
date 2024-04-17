module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    path: "/",
    loader: "akamai",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  trailingSlash: true,
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/" },
  //   };
  // },
};
