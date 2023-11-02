const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/UI/Components"),
      "@pages": path.resolve(__dirname, "./src/UI/Pages"),
    },
  },
};
