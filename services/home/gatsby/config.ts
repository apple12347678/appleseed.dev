import { GatsbyConfig } from 'gatsby';
import path from 'path';

const root = path.dirname(__dirname);

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'appleseed',
    author: {
      name: 'Chankyu Kang',
      summary: 'Frontend developer & infrastructure architect',
      email: 'ck.kenneth.kang@gmail.com',
    },
    description: 'A homepage of appleseed',
    site_url: 'https://appleseed.dev',
  },
  plugins: [
    'gatsby-plugin-typegen',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resume',
        path: `${root}/content/resume`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${root}/content/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: `${root}/content/locale`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'ko'],
        defaultLanguage: 'ko',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        redirect: false,
        pages: [
          {
            matchPath: '/:lang?/resume',
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/assets\/.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "appleseed's homepage",
        short_name: 'appleseed',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#17181c',
        display: 'minimal-ui',
        icons: [
          {
            src: 'icons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans:400,600'],
        },
      },
    },
  ],
};

export default config;
