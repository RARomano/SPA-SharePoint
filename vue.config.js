const webpack = require("webpack");
const path = require("path");

module.exports = {
  chainWebpack: config => {
    const env = process.env.NODE_ENV === "production" ? "SharePoint" : "Mock";

    config.resolve.alias.set(
      "../services/Mock/Fornecedor.service",
      path.resolve(__dirname, `src/services/${env}/Fornecedor.service`)
    ); 
  }
};
