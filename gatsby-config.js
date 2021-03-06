module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.shabazbadshah.com',
    title: `shabaz badshah dot com`,
    description: `Hello 👋, I'm Shabaz Badshah. I'm a Product Manager who develops Fullstack web experiences during his downtime. This site catalogs things I learn, find interesting, want to share, or anything cool I'm creating. There's no ads or distractions here.`,
    author: `@shabazbadshah`,
    contactInfo: {
      email: `badshah.shabaz.dev@gmail.com`,
      github: `https://www.github.com/ShabazBadshah`,
      linkedin: `https://www.linkedin.com/in/shabaz-badshah/`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.shabazbadshah.com',
        sitemap: 'https://www.shabazbadshah.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          }
        ]
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content/work/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shabazbadshah.com`,
        short_name: `@shabazbadshah`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#69a9e5`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`, // This path is relative to the root of the site.
        theme_color_in_head: true, // This will avoid adding theme-color meta tag.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
