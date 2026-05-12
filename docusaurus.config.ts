import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * Production builds should set DOCS_SITE_URL to the canonical public origin
 * (e.g. https://docs.example.com, no trailing slash). See DEPLOY_COOLIFY.md.
 */
const siteUrl =
  process.env.DOCS_SITE_URL ?? 'http://localhost:3000';

const config: Config = {
  title: 'Booking Engine Connector',
  tagline: 'WordPress documentation for Booking Engine Connector',
  favicon: 'Logo/logo-no-space.svg',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: '/',

  organizationName: 'booking-engine-connector',
  projectName: 'bec-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
      it: {
        label: 'Italiano',
        htmlLang: 'it',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/bec-social-card.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Booking Engine Connector',
        src: 'Logo/logo-full-name-no-space.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Home',
              to: '/docs/',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting/common-issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Booking Engine Connector documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
