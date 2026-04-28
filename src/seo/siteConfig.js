export const SITE_NAME = 'ORA';
export const DEFAULT_THEME_COLOR = '#faf8f9';
export const DEFAULT_DESCRIPTION =
  'ORA is an AI-powered maternal health platform supporting pregnancy, fertility, connected care, and clinical intelligence.';
export const DEFAULT_KEYWORDS = [
  'ORA',
  'maternal health',
  'pregnancy AI',
  'fertility support',
  "women's health technology",
  'clinical intelligence',
  'digital health',
  'pregnancy companion',
];
export const DEFAULT_OG_IMAGE = '/og-image.svg';
export const FALLBACK_SITE_URL = process.env.REACT_APP_SITE_URL || 'https://www.ora-healthtech.com';

export const getBaseUrl = () => {
  if (typeof window !== 'undefined' && window.location?.origin && window.location.origin !== 'null') {
    return window.location.origin;
  }

  return FALLBACK_SITE_URL;
};

export const toAbsoluteUrl = (value = '/') => {
  try {
    return new URL(value, getBaseUrl()).toString();
  } catch (error) {
    return `${FALLBACK_SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
  }
};

export const trimDescription = (value, maxLength = 160) => {
  if (!value) return DEFAULT_DESCRIPTION;

  const normalized = value.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
};

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: getBaseUrl(),
  logo: toAbsoluteUrl('/icon-512.svg'),
  email: 'support@ora-healthtech.com',
  description: DEFAULT_DESCRIPTION,
});

export const buildWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: getBaseUrl(),
  description: DEFAULT_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: getBaseUrl(),
  },
});

export const buildWebPageSchema = ({
  url,
  name,
  description,
  type = 'WebPage',
  image,
}) => ({
  '@context': 'https://schema.org',
  '@type': type,
  name,
  url,
  description,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: getBaseUrl(),
  },
  about: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: getBaseUrl(),
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: image,
  },
});
