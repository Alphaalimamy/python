
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI LAB TRAINING',
  tagline: 'LEARN PYTHON THE EASY',
  favicon: 'img/favicon.ico',

  url: 'https://alphaalimamy.github.io', // Your website URL
  baseUrl: '/',

  projectName: 'alphaalimamy.github.io',
  organizationName: 'alphaalimamy',
  trailingSlash: false,

  projectName: 'python', // Usually your repo name.


  // Set the production url of your site here
  url: 'https://ai-python.netlify.app',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI LAB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'My Blog', position: 'left'},
         //  {label: 'GitHub',position: 'right',},
        ],
      },
      footer: {
        style: 'dark',
        links: [
         
          {
            title: 'Community',
            items: [
              {
                label: 'facebook',
                href: 'https://github.com/Alphaalimamy/python.git',
              },
             
              {
                label: 'Twitter',
                href: 'https://github.com/Alphaalimamy/python.git',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://github.com/Alphaalimamy/python.git',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Alphaalimamy/python.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI LAB PYTHON TRAINING`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  
    
};


export default config;
