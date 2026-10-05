import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'product';
  schemaData?: object;
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  schemaData,
}) => {
  useEffect(() => {
    // Update document title
    const fullTitle = `${title} | AI Tools Directory & Review Hub`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://aitoolshub.io${canonicalPath}`);

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', fullTitle);
    document.head.appendChild(ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.setAttribute('content', description);
    document.head.appendChild(ogDesc);

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, type, schemaData]);

  return null;
};
