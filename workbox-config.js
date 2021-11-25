module.exports = {
  globDirectory: "./",
  globPatterns: ["**/*.{html,json,js,css,woff}"],
  swDest: "./sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
