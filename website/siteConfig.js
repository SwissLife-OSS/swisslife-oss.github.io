// List of projects/orgs using your project for the users page.
const users = [{
  caption: 'Swiss Life',
  image: '/img/logo_sl_oss.svg',
  infoLink: 'https://SwissLife-OSS.github.io',
  pinned: true,
}, ];

const basicUrl = 'https://swisslife-oss.github.io';
const githubBaseUrl = 'https://github.com/SwissLife-OSS';
const repoUrl = githubBaseUrl + '/swisslife-oss.github.io';
const snapshooterUrl = basicUrl + "/snapshooter/";
const squadronUrl = basicUrl + "/squadron/";

const siteConfig = {
  title: 'Swiss Life | OSS', // Title for your website.
  tagline: 'Open source project from Swiss Life',
  url: basicUrl, // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: basicUrl,
  baseUrl: '/',

  snapshooterUrl,
  squadronUrl,
  githubBaseUrl,

  // DocSearch
  algolia: {
    apiKey: '39489e5eb0c1a936be6ed354c0358c41', 
    indexName: 'swisslife-oss', 
  },

  //google analytics
  gaTrackingId: "UA-134342473-1",

  // Used for publishing and more
  projectName: 'swisslife-oss.github.io',
  organizationName: 'SwissLife-OSS',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{
      blog: true,
      label: 'Blog'
    },
    {
      href: githubBaseUrl,
      label: 'GitHub',
      external: true
    },
    { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_sl_oss.svg',
  footerIcon: 'img/logo_sl_oss.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
  },
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Swiss Life Developer`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'tomorrow-night',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo_sl_oss.svg',
  twitterImage: 'img/logo_sl_oss.svg',

  // direct editing of docs
  editUrl: "https://github.com/SwissLife-OSS/swisslife-oss.github.io/edit/source/docs/",


  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,
  repoUrl,

  blogSidebarCount: "ALL",
  blogSidebarTitle: {
    default: "Recent posts",
    all: "All blog posts"
  }
};

module.exports = siteConfig;