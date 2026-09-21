import { useEffect } from 'react';

const BASE_URL = 'https://hemchand-portfolio.vercel.app';
const DEFAULT_SITE_NAME = 'Hemchand Paunikar — Official Portfolio';

export default function SEOHead({
  title = 'Hemchand Paunikar — Official Portfolio | UI/UX & Product Designer',
  description = 'Official website and portfolio of Hemchand Paunikar, UI/UX and Product Designer based in India. View UX research, design systems, mobile apps, and product case studies.',
  path = '',
  keywords = 'Hemchand Paunikar, Hemchand Paunikar portfolio, Hemchand Paunikar UI UX, Hemchand Paunikar designer, Hemchand, Paunikar, UI UX Designer India, Product Designer Nagpur',
  ogImage = '/og-image.jpg',
  jsonLd = null,
}) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set meta attribute
    const setMetaTag = (nameAttr, nameVal, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Hemchand Paunikar');

    // OpenGraph Tags
    setMetaTag('property', 'og:site_name', DEFAULT_SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', fullOgImage);

    // Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullOgImage);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Dynamic Structured Data JSON-LD
    let scriptTag = document.getElementById('dynamic-page-jsonld');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-page-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Optional cleanup if needed
    };
  }, [title, description, path, keywords, fullOgImage, canonicalUrl, jsonLd]);

  return null;
}
