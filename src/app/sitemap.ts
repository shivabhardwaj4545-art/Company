import { MetadataRoute } from 'next';
import projectsData from '@/content/projects.json';
import productsData from '@/content/products.json';
import servicesData from '@/content/services.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aikodx.com';

  const projects = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  const products = productsData.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  const services = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...services,
    ...products,
    ...projects,
  ];
}
