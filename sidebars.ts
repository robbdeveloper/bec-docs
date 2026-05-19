import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Explicit sidebar for Booking Engine Connector documentation.
 * Folder/file numeric prefixes (01-, 02-, …) are stripped from document ids by Docusaurus.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/what-is-bec',
        'introduction/how-it-works',
        'introduction/requirements',
      ],
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/installation',
        'getting-started/connect-your-provider',
        'getting-started/run-your-first-sync',
        'getting-started/add-search-and-booking-to-pages',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: ['providers/providers-overview', 'providers/kross-booking'],
    },
    {
      type: 'category',
      label: 'Units',
      items: [
        'units/units-overview',
        'units/syncing-units',
        'units/editing-a-unit',
        'units/gallery-images',
        'units/permalinks-and-archive',
        'units/unit-categories',
      ],
    },
    {
      type: 'category',
      label: 'Bookings & checkout',
      items: [
        'bookings-and-checkout/search-context-and-urls',
        'bookings-and-checkout/availability-and-quotes',
        'bookings-and-checkout/checkout-flow',
        'bookings-and-checkout/fallback-mode',
      ],
    },
    {
      type: 'category',
      label: 'Shortcodes',
      items: [
        'shortcodes/shortcodes-overview',
        'shortcodes/bec-search',
        'shortcodes/bec-dates',
        'shortcodes/bec-quote',
        'shortcodes/bec-checkout',
        'shortcodes/bec-booking-summary',
        'shortcodes/bec-unit-url',
        'shortcodes/bec-unit-info',
        'shortcodes/bec-fallback',
        'shortcodes/bec-version',
        'shortcodes/bec-unit-field',
        'shortcodes/bec-unit-gallery',
        'shortcodes/elementor-loop-grid-availability-filter',
        'shortcodes/elementor-unit-gallery',
      ],
    },
    {
      type: 'category',
      label: 'Styling',
      items: [
        'styling/styling-overview',
        'styling/search-form-presets',
        'styling/booking-summary-presets',
        'styling/theme-variables-and-custom-css',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/using-the-api-log',
        'troubleshooting/uninstalling',
      ],
    },
    {
      type: 'category',
      label: 'Developer reference',
      collapsed: true,
      items: [
        'developer-reference/architecture',
        'developer-reference/sync-hooks-and-filters',
        'developer-reference/post-meta-reference',
        'developer-reference/canonical-unit-fields',
        'developer-reference/kross-api',
        'developer-reference/adding-a-provider',
        'developer-reference/unit-info-renderers',
      ],
    },
  ],
};

export default sidebars;
