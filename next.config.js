module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'lib', '__tests__'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
