const path = require("path");

const vueSrc = "./src";

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc)
      }
    }
  }
}