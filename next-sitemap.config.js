const siteUrl = "https://ulumm-landing-page-2.firebaseapp.com/";

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
