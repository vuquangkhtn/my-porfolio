/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // https://melvingeorge.me/blog/set-html-lang-attribute-in-nextjs
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
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
