/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.test.*/,
        loader: 'ignore-loader'
      }
    );
    return config;
  }
};
