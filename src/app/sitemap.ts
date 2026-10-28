import type { MetadataRoute } from 'next';
import { SITE_URL } from '../../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/writing`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/gaiyo`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/worldview`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/bookshelf`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/exploring`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
