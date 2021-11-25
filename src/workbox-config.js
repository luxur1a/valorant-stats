module.exports = {
  swDest: "build/service-worker.js",
  globDirectory: "build/",
  globPatterns: [
    "static/{js,css,data}/**/!(*map*)",
    "static/images/priority/*",
  ],
};
