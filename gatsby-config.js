module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "nicholas-portfolio",
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/main";`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`,
          'Roboto'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ],
};
