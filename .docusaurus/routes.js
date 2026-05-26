import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/it/markdown-page',
    component: ComponentCreator('/it/markdown-page', '7c1'),
    exact: true
  },
  {
    path: '/it/search',
    component: ComponentCreator('/it/search', 'c8d'),
    exact: true
  },
  {
    path: '/it/docs',
    component: ComponentCreator('/it/docs', '722'),
    routes: [
      {
        path: '/it/docs',
        component: ComponentCreator('/it/docs', 'aa2'),
        routes: [
          {
            path: '/it/docs',
            component: ComponentCreator('/it/docs', 'ca2'),
            routes: [
              {
                path: '/it/docs/',
                component: ComponentCreator('/it/docs/', '572'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/bookings-and-checkout/availability-and-quotes',
                component: ComponentCreator('/it/docs/bookings-and-checkout/availability-and-quotes', '05e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/bookings-and-checkout/checkout-flow',
                component: ComponentCreator('/it/docs/bookings-and-checkout/checkout-flow', 'b3e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/bookings-and-checkout/fallback-mode',
                component: ComponentCreator('/it/docs/bookings-and-checkout/fallback-mode', '3a7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/bookings-and-checkout/search-context-and-urls',
                component: ComponentCreator('/it/docs/bookings-and-checkout/search-context-and-urls', 'a5a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/adding-a-provider',
                component: ComponentCreator('/it/docs/developer-reference/adding-a-provider', 'd55'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/architecture',
                component: ComponentCreator('/it/docs/developer-reference/architecture', 'e8e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/canonical-unit-fields',
                component: ComponentCreator('/it/docs/developer-reference/canonical-unit-fields', 'f40'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/kross-api',
                component: ComponentCreator('/it/docs/developer-reference/kross-api', '777'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/post-meta-reference',
                component: ComponentCreator('/it/docs/developer-reference/post-meta-reference', '070'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/sync-hooks-and-filters',
                component: ComponentCreator('/it/docs/developer-reference/sync-hooks-and-filters', '7b9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/developer-reference/unit-info-renderers',
                component: ComponentCreator('/it/docs/developer-reference/unit-info-renderers', '13b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/add-search-and-booking-to-pages',
                component: ComponentCreator('/it/docs/getting-started/add-search-and-booking-to-pages', '7fa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/admin-screens',
                component: ComponentCreator('/it/docs/getting-started/admin-screens', '3ec'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/connect-your-provider',
                component: ComponentCreator('/it/docs/getting-started/connect-your-provider', '957'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/frontend-settings',
                component: ComponentCreator('/it/docs/getting-started/frontend-settings', 'f5b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/installation',
                component: ComponentCreator('/it/docs/getting-started/installation', '5ac'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/getting-started/run-your-first-sync',
                component: ComponentCreator('/it/docs/getting-started/run-your-first-sync', '73d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/introduction/how-it-works',
                component: ComponentCreator('/it/docs/introduction/how-it-works', '4ca'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/introduction/requirements',
                component: ComponentCreator('/it/docs/introduction/requirements', 'b43'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/introduction/what-is-bec',
                component: ComponentCreator('/it/docs/introduction/what-is-bec', '410'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/providers/kross-booking',
                component: ComponentCreator('/it/docs/providers/kross-booking', '936'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/providers/providers-overview',
                component: ComponentCreator('/it/docs/providers/providers-overview', '0e5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-available-units-count',
                component: ComponentCreator('/it/docs/shortcodes/bec-available-units-count', 'e91'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-booking-summary',
                component: ComponentCreator('/it/docs/shortcodes/bec-booking-summary', '720'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-checkout',
                component: ComponentCreator('/it/docs/shortcodes/bec-checkout', '5c2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-dates',
                component: ComponentCreator('/it/docs/shortcodes/bec-dates', '1e2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-fallback',
                component: ComponentCreator('/it/docs/shortcodes/bec-fallback', '26a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-quote',
                component: ComponentCreator('/it/docs/shortcodes/bec-quote', '2cc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-search',
                component: ComponentCreator('/it/docs/shortcodes/bec-search', '482'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-unit-field',
                component: ComponentCreator('/it/docs/shortcodes/bec-unit-field', '114'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-unit-filters',
                component: ComponentCreator('/it/docs/shortcodes/bec-unit-filters', '2cf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-unit-gallery',
                component: ComponentCreator('/it/docs/shortcodes/bec-unit-gallery', 'd15'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-unit-info',
                component: ComponentCreator('/it/docs/shortcodes/bec-unit-info', 'e82'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-unit-url',
                component: ComponentCreator('/it/docs/shortcodes/bec-unit-url', 'c4b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/bec-version',
                component: ComponentCreator('/it/docs/shortcodes/bec-version', 'c90'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/elementor-loop-grid-availability-filter',
                component: ComponentCreator('/it/docs/shortcodes/elementor-loop-grid-availability-filter', '64f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/elementor-unit-gallery',
                component: ComponentCreator('/it/docs/shortcodes/elementor-unit-gallery', '1dc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/shortcodes/shortcodes-overview',
                component: ComponentCreator('/it/docs/shortcodes/shortcodes-overview', '229'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/styling/booking-summary-presets',
                component: ComponentCreator('/it/docs/styling/booking-summary-presets', 'd53'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/styling/search-form-presets',
                component: ComponentCreator('/it/docs/styling/search-form-presets', '55d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/styling/styling-overview',
                component: ComponentCreator('/it/docs/styling/styling-overview', 'e2f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/styling/theme-variables-and-custom-css',
                component: ComponentCreator('/it/docs/styling/theme-variables-and-custom-css', '320'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/troubleshooting/common-issues',
                component: ComponentCreator('/it/docs/troubleshooting/common-issues', '80a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/troubleshooting/uninstalling',
                component: ComponentCreator('/it/docs/troubleshooting/uninstalling', '3f5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/troubleshooting/using-the-api-log',
                component: ComponentCreator('/it/docs/troubleshooting/using-the-api-log', 'e91'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/editing-a-unit',
                component: ComponentCreator('/it/docs/units/editing-a-unit', '96b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/gallery-images',
                component: ComponentCreator('/it/docs/units/gallery-images', 'e7a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/listing-filters-admin',
                component: ComponentCreator('/it/docs/units/listing-filters-admin', 'bcb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/permalinks-and-archive',
                component: ComponentCreator('/it/docs/units/permalinks-and-archive', '409'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/syncing-units',
                component: ComponentCreator('/it/docs/units/syncing-units', '9ab'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/unit-categories',
                component: ComponentCreator('/it/docs/units/unit-categories', 'ea8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/it/docs/units/units-overview',
                component: ComponentCreator('/it/docs/units/units-overview', '5b3'),
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
    path: '/it/',
    component: ComponentCreator('/it/', '211'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
