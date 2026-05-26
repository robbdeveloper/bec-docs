import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cb9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fee'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '87b'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'ec3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/bookings-and-checkout/availability-and-quotes',
                component: ComponentCreator('/docs/bookings-and-checkout/availability-and-quotes', '126'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/bookings-and-checkout/checkout-flow',
                component: ComponentCreator('/docs/bookings-and-checkout/checkout-flow', 'e77'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/bookings-and-checkout/fallback-mode',
                component: ComponentCreator('/docs/bookings-and-checkout/fallback-mode', '690'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/bookings-and-checkout/search-context-and-urls',
                component: ComponentCreator('/docs/bookings-and-checkout/search-context-and-urls', 'a62'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/adding-a-provider',
                component: ComponentCreator('/docs/developer-reference/adding-a-provider', 'e2e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/architecture',
                component: ComponentCreator('/docs/developer-reference/architecture', '395'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/canonical-unit-fields',
                component: ComponentCreator('/docs/developer-reference/canonical-unit-fields', '93e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/kross-api',
                component: ComponentCreator('/docs/developer-reference/kross-api', '3fa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/post-meta-reference',
                component: ComponentCreator('/docs/developer-reference/post-meta-reference', '2cf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/sync-hooks-and-filters',
                component: ComponentCreator('/docs/developer-reference/sync-hooks-and-filters', '82a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer-reference/unit-info-renderers',
                component: ComponentCreator('/docs/developer-reference/unit-info-renderers', 'e3b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/add-search-and-booking-to-pages',
                component: ComponentCreator('/docs/getting-started/add-search-and-booking-to-pages', '01b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/admin-screens',
                component: ComponentCreator('/docs/getting-started/admin-screens', '48d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/connect-your-provider',
                component: ComponentCreator('/docs/getting-started/connect-your-provider', 'e75'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/frontend-settings',
                component: ComponentCreator('/docs/getting-started/frontend-settings', '515'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '8e2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/run-your-first-sync',
                component: ComponentCreator('/docs/getting-started/run-your-first-sync', '30b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/introduction/how-it-works',
                component: ComponentCreator('/docs/introduction/how-it-works', 'ea1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/introduction/requirements',
                component: ComponentCreator('/docs/introduction/requirements', '666'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/introduction/what-is-bec',
                component: ComponentCreator('/docs/introduction/what-is-bec', 'e39'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/providers/kross-booking',
                component: ComponentCreator('/docs/providers/kross-booking', '0b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/providers/providers-overview',
                component: ComponentCreator('/docs/providers/providers-overview', '7ea'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-available-units-count',
                component: ComponentCreator('/docs/shortcodes/bec-available-units-count', 'b14'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-booking-summary',
                component: ComponentCreator('/docs/shortcodes/bec-booking-summary', 'd21'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-checkout',
                component: ComponentCreator('/docs/shortcodes/bec-checkout', '44e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-dates',
                component: ComponentCreator('/docs/shortcodes/bec-dates', '60d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-fallback',
                component: ComponentCreator('/docs/shortcodes/bec-fallback', 'ab7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-quote',
                component: ComponentCreator('/docs/shortcodes/bec-quote', '2a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-search',
                component: ComponentCreator('/docs/shortcodes/bec-search', '966'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-unit-field',
                component: ComponentCreator('/docs/shortcodes/bec-unit-field', '9e0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-unit-filters',
                component: ComponentCreator('/docs/shortcodes/bec-unit-filters', '18a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-unit-gallery',
                component: ComponentCreator('/docs/shortcodes/bec-unit-gallery', '679'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-unit-info',
                component: ComponentCreator('/docs/shortcodes/bec-unit-info', '962'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-unit-url',
                component: ComponentCreator('/docs/shortcodes/bec-unit-url', '2a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/bec-version',
                component: ComponentCreator('/docs/shortcodes/bec-version', 'cfa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/elementor-loop-grid-availability-filter',
                component: ComponentCreator('/docs/shortcodes/elementor-loop-grid-availability-filter', 'ed8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/elementor-unit-gallery',
                component: ComponentCreator('/docs/shortcodes/elementor-unit-gallery', '1d6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/shortcodes/shortcodes-overview',
                component: ComponentCreator('/docs/shortcodes/shortcodes-overview', '9b1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/styling/booking-summary-presets',
                component: ComponentCreator('/docs/styling/booking-summary-presets', '675'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/styling/search-form-presets',
                component: ComponentCreator('/docs/styling/search-form-presets', 'e77'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/styling/styling-overview',
                component: ComponentCreator('/docs/styling/styling-overview', '7e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/styling/theme-variables-and-custom-css',
                component: ComponentCreator('/docs/styling/theme-variables-and-custom-css', '85b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/common-issues',
                component: ComponentCreator('/docs/troubleshooting/common-issues', '74f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/uninstalling',
                component: ComponentCreator('/docs/troubleshooting/uninstalling', 'd14'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/troubleshooting/using-the-api-log',
                component: ComponentCreator('/docs/troubleshooting/using-the-api-log', '6c0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/editing-a-unit',
                component: ComponentCreator('/docs/units/editing-a-unit', '901'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/gallery-images',
                component: ComponentCreator('/docs/units/gallery-images', '36f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/listing-filters-admin',
                component: ComponentCreator('/docs/units/listing-filters-admin', 'b21'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/permalinks-and-archive',
                component: ComponentCreator('/docs/units/permalinks-and-archive', 'afe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/syncing-units',
                component: ComponentCreator('/docs/units/syncing-units', 'dd6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/unit-categories',
                component: ComponentCreator('/docs/units/unit-categories', '1a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/units/units-overview',
                component: ComponentCreator('/docs/units/units-overview', 'f12'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
