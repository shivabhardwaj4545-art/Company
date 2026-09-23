import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/kx-control-857df3/'],
    },
    sitemap: 'https://aikodx.com/sitemap.xml',
  };
}
