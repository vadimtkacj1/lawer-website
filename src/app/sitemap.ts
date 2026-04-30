import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avi-mashkanta.com';

  // Use static dates for stable pages - only update when content actually changes
  // This prevents Google from seeing constant changes and helps with indexation
  const homePageDate = new Date('2026-03-20'); // Update when homepage changes
  const servicesDate = new Date('2026-03-20'); // Update when service pages change
  const serviceAreasDate = new Date('2026-04-30'); // Fresh signal for regional pages
  const staticPagesDate = new Date('2026-03-20'); // Update when static pages change

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: homePageDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: staticPagesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticPagesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Services
    {
      url: `${baseUrl}/services/mortgage-for-purchase`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/dira-behanacha-mortgage`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/loan-consolidation`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/reverse-mortgage`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/mortgage-refused`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/renovation-mortgage`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/foreign-mortgages`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/debt-consolidation`,
      lastModified: servicesDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // Service Areas (Regional Pages)
    {
      url: `${baseUrl}/service-areas/mortgage-advisor-holon`,
      lastModified: serviceAreasDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/service-areas/mortgage-advisor-bat-yam`,
      lastModified: serviceAreasDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/service-areas/mortgage-advisor-rishon-lezion`,
      lastModified: serviceAreasDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },

    // Legal pages
    {
      url: `${baseUrl}/accessibility`,
      lastModified: staticPagesDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticPagesDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticPagesDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}
