const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    domains: ["raw.githubusercontent.com"],
    path: "",
  },
};

module.exports = withVanillaExtract(nextConfig);
