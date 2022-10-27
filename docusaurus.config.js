// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Portfolio Development Fair",
  tagline: "Build your own portfolio website!",
  url: "https://pdf.scottylabs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ScottyLabs", // Usually your GitHub org/user name.
  projectName: "pdf", // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "PDF Logo",
          src: "img/pdf-logo.png",
        },
        items: [{ to: "/setup", label: "Setup", position: "left" }],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Website",
            href: "https://scottylabs.org/",
          },
          {
            label: "Instagram",
            href: "https://instagram.com/cmu.scottylabs",
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/ScootyLabs",
          },
          {
            label: "Slack",
            href: "http://go.scottylabs.org/slack",
          },
          {
            label: "Medium",
            href: "https://medium.com/tartanhacks",
          },
          {
            label: "Tartan Connect",
            href: "https://tartanconnect.cmu.edu/feeds?type=club&type_id=68253",
          },

          {
            label: "Email",
            href: "mailto://hello@scottylabs.org",
          },
        ],
        copyright: `Made with ❤️ by ScottyLabs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
