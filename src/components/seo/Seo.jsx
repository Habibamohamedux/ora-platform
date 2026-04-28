import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_THEME_COLOR,
  SITE_NAME,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
  toAbsoluteUrl,
  trimDescription,
} from '../../seo/siteConfig';

const setMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      tag.setAttribute(key, value);
    }
  });
};

const setLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      tag.setAttribute(key, value);
    }
  });
};

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} preview image`,
  keywords = [],
  path,
  type = 'website',
  schemaType = 'WebPage',
  noIndex = false,
  includeOrganization = false,
  includeWebSite = false,
  structuredData,
}) => {
  const location = useLocation();

  useEffect(() => {
    const resolvedPath = path || location.pathname || '/';
    const canonicalUrl = toAbsoluteUrl(resolvedPath);
    const imageUrl = toAbsoluteUrl(image);
    const seoDescription = trimDescription(description);
    const seoKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])].join(', ');
    const robots = noIndex ? 'noindex,nofollow' : 'index,follow';

    document.title = title;

    setMetaTag('meta[name="description"]', { name: 'description', content: seoDescription });
    setMetaTag('meta[name="robots"]', { name: 'robots', content: robots });
    setMetaTag('meta[name="keywords"]', { name: 'keywords', content: seoKeywords });
    setMetaTag('meta[name="author"]', { name: 'author', content: 'ORA Technologies' });
    setMetaTag('meta[name="application-name"]', { name: 'application-name', content: SITE_NAME });
    setMetaTag('meta[name="apple-mobile-web-app-title"]', {
      name: 'apple-mobile-web-app-title',
      content: SITE_NAME,
    });
    setMetaTag('meta[name="theme-color"]', { name: 'theme-color', content: DEFAULT_THEME_COLOR });

    setMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: type });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: title });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: seoDescription });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaTag('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMetaTag('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt });
    setMetaTag('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });

    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seoDescription,
    });
    setMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    setMetaTag('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt });
    setMetaTag('meta[name="twitter:url"]', { name: 'twitter:url', content: canonicalUrl });

    setLinkTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    const schemaPayload =
      structuredData ||
      [
        ...(includeOrganization ? [buildOrganizationSchema()] : []),
        ...(includeWebSite ? [buildWebsiteSchema()] : []),
        buildWebPageSchema({
          url: canonicalUrl,
          name: title,
          description: seoDescription,
          type: schemaType,
          image: imageUrl,
        }),
      ];

    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) existingScript.remove();

    if (schemaPayload && (!Array.isArray(schemaPayload) || schemaPayload.length > 0)) {
      const script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaPayload);
      document.head.appendChild(script);
    }
  }, [
    description,
    image,
    imageAlt,
    includeOrganization,
    includeWebSite,
    keywords,
    location.pathname,
    noIndex,
    path,
    schemaType,
    structuredData,
    title,
    type,
  ]);

  return null;
};

export default Seo;
