// src/config/seo.ts
import type { SEOProps } from 'astro-seo';

// Company base information
export const COMPANY_INFO = {
  name: 'Aguilar & Abogados Asociados',
  description: 'Firma legal especializada en derecho de seguros que brinda asesoría y representación jurídica tanto a personas como a empresas en Colombia.',
  url: 'https://example.com', // Replace with your actual domain
  phone: '+57-301-551-1676', // Replace with actual phone
  email: 'alejandro.aguilar@aguilarabogadosasociados.co', // Replace with actual email
  address: {
    street: 'Cra 58 #119A -49, Bogotá', // Replace with actual address
    city: 'Bogotá',
    region: 'Cundinamarca',
    postalCode: '110111', // Replace with actual postal code
    country: 'Colombia'
  },
  logo: '/assets/images/logo.png', // Replace with actual logo path
  image: '/assets/images/logo.png', // Replace with actual OG image path
  foundingDate: '2018', // Replace with actual founding date
  socialMedia: {
    facebook: 'https://www.facebook.com/people/Aguilarabogadosasociados/100064024895879/',
    linkedin: 'https://www.linkedin.com/in/abogadoalejandroaguilar/',
    instagram: 'https://www.instagram.com/aguilar_abogados_/'
  }
};

// Default SEO configuration
export const DEFAULT_SEO: SEOProps = {
  title: 'Aguilar & Abogados Asociados | Especialistas en Derecho de Seguros',
  description: 'Firma legal especializada en derecho de seguros en Colombia. Defendemos sus derechos ante aseguradoras con transparencia, efectividad y compromiso.',
  canonical: COMPANY_INFO.url,
  openGraph: {
    basic: {
      title: 'Aguilar & Abogados Asociados | Especialistas en Derecho de Seguros',
      type: 'website',
      image: COMPANY_INFO.url + COMPANY_INFO.image,
      url: COMPANY_INFO.url
    },
    optional: {
      description: COMPANY_INFO.description,
      siteName: COMPANY_INFO.name,
      locale: 'es_CO'
    }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aguilarabogados', // Replace with actual Twitter handle
    creator: '@aguilarabogados',
    title: 'Aguilar & Abogados Asociados | Especialistas en Derecho de Seguros',
    description: COMPANY_INFO.description,
    image: COMPANY_INFO.url + COMPANY_INFO.image
  },
  extend: {
    // link: [
    //   { rel: 'icon', type: "image/x-icon", href: '/favicons/favicon.ico' },
    //   { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicons/apple-touch-icon.png' },
    //   { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
    //   { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
    //   { rel: "icon", href: "/favicons/favicon.svg", type: "image/svg+xml" }

    // ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: COMPANY_INFO.name },
      { name: 'keywords', content: 'abogados seguros, derecho seguros Colombia, asesoría legal seguros, representación judicial seguros, siniestros rechazados, pólizas seguros' },
      { name: 'theme-color', content: '#C49B53' }, // Adjust to your brand color
      { name: 'msapplication-TileColor', content: '#C49B53' },
      { httpEquiv: 'Content-Language', content: 'es-CO' }
    ]
  }
};

// JSON-LD Schema for Organization
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': COMPANY_INFO.url + '#organization',
  name: COMPANY_INFO.name,
  alternateName: 'Aguilar & Abogados',
  description: COMPANY_INFO.description,
  url: COMPANY_INFO.url,
  logo: COMPANY_INFO.url + COMPANY_INFO.logo,
  image: COMPANY_INFO.url + COMPANY_INFO.image,
  foundingDate: COMPANY_INFO.foundingDate,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.region,
    postalCode: COMPANY_INFO.address.postalCode,
    addressCountry: COMPANY_INFO.address.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.60971, // Replace with actual coordinates for Bogotá location
    longitude: -74.08175
  },
  sameAs: [
    COMPANY_INFO.socialMedia.facebook,
    COMPANY_INFO.socialMedia.linkedin,
    COMPANY_INFO.socialMedia.instagram
  ],
  serviceType: 'Legal Services',
  areaServed: {
    '@type': 'Country',
    name: 'Colombia'
  },
  knowsAbout: [
    'Derecho de Seguros',
    'Representación Judicial',
    'Asesoría Legal',
    'Siniestros de Seguros',
    'Pólizas de Seguros',
    'Reclamaciones de Seguros'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Legales Especializados en Seguros',
    itemListElement: [
      // Servicios para Personas
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reclamación por Indemnización Negada',
          description: 'Reabrimos siniestros negados, aportamos pruebas sólidas y exigimos el pago con intereses moratorios',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestión de Reclamaciones sin Respuesta',
          description: 'Forzamos contestación usando Derecho de Petición y quejas ante Superfinanciera cuando las aseguradoras no responden tras 30 días',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Análisis y Concepto de Pólizas',
          description: 'Emitimos conceptos técnico-jurídicos claros sobre coberturas, exclusiones y plan de acción para su póliza',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reclamación por Robo de Vehículo',
          description: 'Gestionamos reclamaciones integrales por robo vehicular, recogemos pruebas y presentamos demanda si procede',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asesoría Especializada en Derecho de Seguros',
          description: 'Orientación personalizada sobre trámites, documentos clave y plazos críticos en seguros',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestión de Accidentes de Tránsito',
          description: 'Activamos cobertura de RC del causante y negociamos indemnización total en accidentes con póliza de automóvil ajeno',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reclamación por Daños en Electrodomésticos',
          description: 'Reclamamos reposición o indemnización total por daños eléctricos cubiertos en pólizas de hogar',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Activación de Póliza de Vida Deudores',
          description: 'Hacemos efectiva la póliza por fallecimiento, detenemos cobros bancarios y liberamos el patrimonio familiar',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cobertura por Invalidez en Seguros de Vida',
          description: 'Probamos incapacidad y exigimos condonación de deuda más intereses por invalidez',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ejecución de Pólizas de Cumplimiento',
          description: 'Analizamos clausulado, cuantificamos daños y exigimos indemnización al afianzador por incumplimiento de contratistas',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agilización de Trámites Dilatados',
          description: 'Impugnamos exigencias documentales innecesarias, demostramos suficiencia probatoria y aceleramos trámites',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Defensa en Seguros de Salud',
          description: 'Interponemos acciones para autorizar tratamientos médicos o reembolsos integrales negados por aseguradoras',
          serviceType: 'Legal Service',
          category: 'Servicios para Personas'
        }
      },
      // Servicios para Empresas
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Capacitaciones Corporativas en Seguros',
          description: 'Talleres in-house personalizados (2-4h) con casos prácticos y últimas sentencias, adaptados a los ramos que maneja su empresa',
          serviceType: 'Training Service',
          category: 'Servicios para Empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Outsourcing Legal Especializado',
          description: 'Área jurídica on-demand: conceptos especializados, redacción de cláusulas, respuesta a siniestros y tutelas',
          serviceType: 'Legal Service',
          category: 'Servicios para Empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Representación Judicial y Extrajudicial Empresarial',
          description: 'Defensa integral ante Superfinanciera, juzgados y tribunales con estrategia probatoria completa para empresas y directivos',
          serviceType: 'Legal Service',
          category: 'Servicios para Empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Acompañamiento Jurídico Preventivo',
          description: 'Auditoría semestral de pólizas, alertas tempranas de riesgos y matriz de cumplimiento normativo',
          serviceType: 'Consulting Service',
          category: 'Servicios para Empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Análisis de Clausulado y Condiciones',
          description: 'Informe comparativo detallado: exclusiones, sublímites y recomendaciones para optimizar coberturas empresariales',
          serviceType: 'Consulting Service',
          category: 'Servicios para Empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ejecución de Pólizas de Cumplimiento Empresariales',
          description: 'Reclamación integral por incumplimiento de contratistas/proveedores: gestión de pruebas y demanda judicial si es necesario',
          serviceType: 'Legal Service',
          category: 'Servicios para Empresas'
        }
      }
    ]
  }
};

// JSON-LD Schema for Website
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': COMPANY_INFO.url + '#website',
  name: COMPANY_INFO.name,
  alternateName: 'Aguilar Abogados',
  description: COMPANY_INFO.description,
  url: COMPANY_INFO.url,
  inLanguage: 'es-CO',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Organization',
    name: COMPANY_INFO.name
  },
  publisher: {
    '@id': COMPANY_INFO.url + '#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: COMPANY_INFO.url + '/buscar?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

// JSON-LD Schema for Blog/Articles section
export const BLOG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': COMPANY_INFO.url + '/blog#blog',
  name: 'Blog - ' + COMPANY_INFO.name,
  description: 'Artículos y recursos sobre derecho de seguros, reclamaciones y asesoría legal especializada',
  url: COMPANY_INFO.url + '/blog',
  inLanguage: 'es-CO',
  author: {
    '@id': COMPANY_INFO.url + '#organization'
  },
  publisher: {
    '@id': COMPANY_INFO.url + '#organization'
  }
};

// Function to generate JSON-LD for individual blog posts
export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishDate: Date;
  updateDate?: Date;
  author?: string;
  tags?: string[];
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${COMPANY_INFO.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `${COMPANY_INFO.url}/blog/${post.slug}`,
    datePublished: post.publishDate.toISOString(),
    dateModified: (post.updateDate || post.publishDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author || COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    publisher: {
      '@id': COMPANY_INFO.url + '#organization'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${COMPANY_INFO.url}/blog/${post.slug}`
    },
    image: post.image ? COMPANY_INFO.url + post.image : COMPANY_INFO.url + COMPANY_INFO.image,
    keywords: post.tags?.join(', ') || 'derecho seguros, asesoría legal',
    inLanguage: 'es-CO',
    isPartOf: {
      '@id': COMPANY_INFO.url + '/blog#blog'
    },
    about: {
      '@type': 'Thing',
      name: 'Derecho de Seguros'
    }
  };
}

// Function to generate SEO props for pages
export function generatePageSEO(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}): SEOProps {
  const fullUrl = COMPANY_INFO.url + options.path;
  const fullTitle = `${options.title} | ${COMPANY_INFO.name}`;

  return {
    title: fullTitle,
    description: options.description,
    canonical: fullUrl,
    noindex: options.noindex || false,
    openGraph: {
      basic: {
        title: fullTitle,
        type: 'website',
        image: COMPANY_INFO.url + (options.image || COMPANY_INFO.image),
        url: fullUrl
      },
      optional: {
        description: options.description,
        siteName: COMPANY_INFO.name,
        locale: 'es_CO'
      }
    },
    twitter: {
      card: 'summary_large_image',
      site: '@aguilarabogados',
      creator: '@aguilarabogados',
      title: fullTitle,
      description: options.description,
      image: COMPANY_INFO.url + (options.image || COMPANY_INFO.image)
    }
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

// FAQ Schema generator for service pages
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}