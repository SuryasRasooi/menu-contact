const siteUrl = "https://suryasrasooi-8a0d7.firebaseapp.com/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
  },
};
