const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const isDev = process.env.NODE_ENV === "development";
const baseUrl = isDev ? "/" : "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DIN docs",
  tagline: "Documentation for the Decentralized Infrastrucure Network (DIN).",
  url: "https://docs-template.consensys.io",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicons/favicon.svg",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Consensys", // Usually your GitHub org/user name.
  projectName: "doc.din", // Usually your repo name.
  deploymentBranch: "gh-pages", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Consensys/docs-template/tree/main/",
          routeBasePath: "/",
          path: "./docs",
          includeCurrentVersion: true,
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],


  future: {
    experimental_faster: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        style: "dark",
        logo: {
          alt: 'DIN Logo',
          src: 'img/logos/DIN Symbol On Light.svg', // Used in light mode
          srcDark: 'img/logos/DIN Symbol On Dark.svg', // Used in dark mode
          height: 48,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            docId: "din/overview/introduction",
            position: "left",
            label: "Documentation",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            docId: "api-reference/supported-networks",
            position: "left",
            label: "API reference",
          },
          {
            href: "https://github.com/Consensys/doc.din",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DIN Documentation",
            items: [
              {
                label: "Get Started",
                to: "/introduction",
              },
              {
                label: "Gateways",
                to: "/gateways/overview",
              },
              {
                label: "DIN as an AVS",
                to: "/avs/concepts",
              },
              {
                label: "Architecture",
                to: "/architecture-overview",
              },
            ],
          },
          {
            title: "Explore",
            items: [
              {
                label: "DIN Home",
                href: "https://www.infura.io/solutions/decentralized-infrastructure-service",
              },
              {
                label: "White paper",
                href: "https://drive.google.com/file/d/1hCHmcXMN6YpmGQkdxSTuZb6Ne_EaehJt/view",
              },
              {
                label: "Infura",
                href: "https://www.infura.io/",
              },
              {
                label: "Consensys home",
                href: "https://consensys.net/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Consensys/docs-template",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/consensys",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Consensys, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-",
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
        indexBlog: false,
      },
    ],
  ],
};

module.exports = config;
