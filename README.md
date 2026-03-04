## Make Next.js setup 

        PS D:\Namrata\RichSolution> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force
        >>
        PS D:\Namrata\RichSolution> npx create-next-app@latest
        √ What is your project named? ... richsolution
        √ Would you like to use the recommended Next.js defaults? » No, customize settings
        √ Would you like to use TypeScript? ... No 
        √ Which linter would you like to use? » ESLint
        √ Would you like to use React Compiler? ... No 
        √ Would you like to use Tailwind CSS? ...  Yes
        √ Would you like your code inside a `src/` directory? ... No 
        √ Would you like to use App Router? (recommended) ...  Yes
        √ Would you like to customize the import alias (`@/*` by default)? ... No 
        Creating a new Next.js app in D:\Namrata\RichSolution\richsolution.

        Using npm.

        Initializing project with template: app-tw


        Installing dependencies:
        - next
        - react
        - react-dom

        Installing devDependencies:
        - @tailwindcss/postcss
        - eslint
        - eslint-config-next
        - tailwindcss

# Bhumi Industrial Consultant - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [SEO Configuration](#seo-configuration)
4. [Routing System](#routing-system)
5. [Components](#components)
6. [Layout System](#layout-system)
7. [Font Management](#font-management)
8. [Error Handling](#error-handling)
9. [Data Management](#data-management)
10. [Static Generation (SSG)](#static-generation-ssg)
11. [Metadata Management](#metadata-management)
12. [Schema Markup (JSON-LD)](#schema-markup-json-ld)
13. [Sitemap & Robots](#sitemap--robots)
14. [Next.js Configuration](#nextjs-configuration)
15. [Best Practices & Patterns](#best-practices--patterns)

---

## Project Overview

**Bhumi Industrial Consultant** is a Next.js 15+ website for an industrial consulting firm based in Nashik, India. The site provides information about industrial and financial services with a focus on SEO optimization, static site generation, and structured data.

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Fonts**: Next.js Font Optimization (`next/font/google`)
- **Icons**: Lucide React
- **Build Tool**: Turbopack (development), Webpack (production)
- **Deployment**: Standalone output (optimized for containerized deployments)

---

## Project Structure

```
bhumi-industrial/
├── app/
│   ├── about/
│   │   └── page.js                    # About page
│   ├── contact/
│   │   └── page.js                    # Contact page
│   ├── industrial/
│   │   └── page.js                    # Industrial services listing
│   ├── services/
│   │   ├── page.js                     # Financial services listing
│   │   └── [slug]/
│   │       └── page.js                 # Dynamic service detail pages
│   ├── fonts.js                         # Font configuration
│   ├── layout.js                        # Root layout with metadata
│   ├── error.js                         # Global error boundary
│   ├── not-found.js                     # 404 page
│   ├── page.js                          # Homepage
│   ├── robots.js                        # Robots.txt generator
│   └── sitemap.js                       # Sitemap.xml generator
├── components/
│   └── seowrapper/
│       └── SeoWrapper.jsx                # JSON-LD wrapper component
├── lib/
│   └── data.js                           # Data fetching utilities
├── utils/
│   └── seoConfig.js                       # Central SEO configuration
├── public/                                # Static assets
│   ├── favicon.ico
│   ├── og-*.jpg                           # Open Graph images
│   ├── site.webmanifest                   # PWA manifest
│   ├── browserconfig.xml                   # IE/Edge configuration
│   └── mstile-*.png                        # Windows tile icons
└── next.config.mjs                         # Next.js configuration
```

---

## SEO Configuration

The `utils/seoConfig.js` file serves as the **central hub for all SEO-related data**. It follows a modular pattern where all site information, page metadata, and service data are defined in one place.

### Key Components of seoConfig.js:

#### 1. **siteSEO** - Global Site Information
```javascript
export const siteSEO = {
  siteName: "Bhumi Industrial Consultant",
  defaultTitle: "Bhumi Industrial Consultant Nashik | MIDC All Services | MSME Udyam | FI-ACC",
  defaultDescription: "26+ years MIDC NOC, MSME Udyam registration, DPR/CMA reports, term loans, project finance. Nashik Ambad Satpur Pune Chakan industrial consultants since 1999",
  baseUrl: "https://bhumiindustrial.com",
  defaultImage: "/og-bhumi-nashik.jpg",
  locale: "en_IN",
  email: "infofiiacc@gmail.com",
  phone: "+91-9822242170",
  address: "Office no 301/302, Tulips Apartment, College Road, Nashik-422005",
  foundingYear: "1999",
  founder: "Milind Rajhans",
};
```
**Purpose**: Defines business information used across the site for schema markup and contact details.

#### 2. **pageSEO** - Page-Specific Metadata
```javascript
export const pageSEO = {
  home: {
    title: "Bhumi Industrial Consultant Nashik | MIDC All Services | MSME Udyam | Term Loans | FI-ACC",
    description: "Complete industrial & financial consulting. MIDC NOC, MSME Udyam registration, DPR/CMA reports, term loans, project finance. Nashik Ambad Satpur 26+ years experts",
    keywords: "MIDC consultant Nashik, MSME Udyam registration Nashik, industrial consultant Nashik, project finance Nashik, DPR report Nashik, term loan consultant Nashik, FI-ACC Nashik",
    canonical: "/",
    ogImage: "/og-home.jpg",
  },
  industrial: { ... },
  financial: { ... },
  about: { ... },
  contact: { ... },
};
```
**Purpose**: Stores unique metadata for each static page, used by `buildMetadata()`.

#### 3. **buildMetadata()** - Metadata Factory
```javascript
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: { ... },
    twitter: { ... },
    robots: { ... },
  };
}
```

#### 4. **industrialServices & financialServices** - Service Data
```javascript
export const financialServices = {
  "term-loans": {
    title: "Term Loans Nashik | Industrial Project Term Loan | Bhumi FI-ACC Financial Services",
    description: "Term loans Nashik for industrial projects. Machinery purchase, factory construction, expansion term loans Ambad Satpur approval experts",
    keywords: "term loan consultant Nashik, industrial term loan Nashik, project term loan Ambad MIDC, machinery term loan Nashik",
    h1: "Industrial Term Loans in Nashik — Best Rates Guaranteed",
    breadcrumb: "Term Loans",
  },
  // ... 13 more services
};
```

---

## Layout System

### Root Layout (`app/layout.jsx`)
The root layout defines the HTML structure, metadata defaults, and global configurations.

#### Key Features:

1. **Metadata Configuration**
```javascript
export const metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    template: `%s | ${siteSEO.siteName}`,
    default: siteSEO.defaultTitle,
  },
  description: siteSEO.defaultDescription,
  keywords: ["MIDC consultant Nashik", "MSME Udyam registration Nashik", ...],
  authors: [{ name: siteSEO.founder, url: siteSEO.baseUrl }],
  creator: siteSEO.founder,
  publisher: siteSEO.siteName,
  // ... Open Graph, Twitter, Robots config
};
```

2. **Icon Configuration**
```javascript
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "32x32" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  other: [
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f97316" },
  ],
},
manifest: "/site.webmanifest",
```

3. **Performance Optimizations in `<head>`**
```javascript
<head>
  {/* Preconnect for critical origins */}
  <link rel="preconnect" href="https://images.unsplash.com" />

  {/* Preload LCP image */}
  <link
    rel="preload"
    as="image"
    href="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=80"
    fetchPriority="high"
  />

  {/* Geo tags for local SEO */}
  <meta name="geo.region" content="IN-MH" />
  <meta name="geo.placename" content="Nashik" />
  <meta name="geo.position" content="19.9975;73.7898" />
  
  {/* Windows Phone meta tags */}
  <meta name="msapplication-navbutton-color" content="#f97316" />
</head>
```

4. **JSON-LD Structured Data in Layout**
```javascript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteSEO.siteName,
  image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
  telephone: siteSEO.phone,
  email: siteSEO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteSEO.address.split(",")[0],
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "422005",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.9975,
    longitude: 73.7898,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  foundingDate: siteSEO.foundingYear,
  founder: { "@type": "Person", name: siteSEO.founder },
  areaServed: ["Nashik", "Pune", "Chakan", "Ambad", "Satpur", "Sinnar"],
};
```

---

## Font Management

### Font Configuration (`app/fonts.js`)
Uses `next/font/google` for optimized font loading:

```javascript
import { DM_Serif_Text, Urbanist, Poppins } from "next/font/google";

// DM Serif Text - for titles (serif font for headings)
export const dmSerif = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
  preload: true,
  fallback: ["Georgia", "serif"],
});

// Urbanist - primary font (sans-serif for body text)
export const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// Poppins - secondary font (alternative sans-serif)
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});
```

### Usage in Layout:
```javascript
<html
  lang="en"
  className={`${dmSerif.variable} ${urbanist.variable} ${poppins.variable} scroll-smooth`}
>
```

### CSS Variables Usage:
```css
/* In globals.css or Tailwind config */
h1 {
  font-family: var(--font-dm-serif);
}

body {
  font-family: var(--font-urbanist);
}
```

**Benefits of next/font:**
- Automatic self-hosting (no external requests)
- Automatic font optimization
- Preload and swap strategies
- Reduced layout shift
- Built-in fallback fonts

---

## Error Handling

### Global Error Boundary (`app/error.js`)
```javascript
"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7ed]">
      <div className="text-center max-w-md px-4">
        <div className="w-20 h-20 bg-[#f97316] rounded-full mx-auto mb-6 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-semibold transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-[#f97316] text-[#f97316] rounded-xl font-semibold hover:bg-[#fff7ed] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

**Key Features:**
- `"use client"` directive (Error boundaries must be Client Components)
- Receives `error` and `reset` props
- `reset()` function attempts to recover
- User-friendly UI with branded colors
- Two recovery options: Try Again or Go Home

### 404 Not Found Page (`app/not-found.js`)
```javascript
import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7ed]">
      <div className="text-center max-w-md px-4">
        <div className="w-20 h-20 bg-[#f97316] rounded-full mx-auto mb-6 flex items-center justify-center">
          <FileQuestion className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-semibold transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
```

**When 404 is triggered:**
- Manual: `notFound()` function from Next.js
- Automatic: When a slug doesn't exist in `generateStaticParams` with `dynamicParams: false`

---

## Components

### SeoWrapper Component (`components/seowrapper/SeoWrapper.jsx`)
This component **only injects JSON-LD structured data**. It follows Next.js 15 best practices where `<title>` and `<meta>` tags come from `generateMetadata()`.

```javascript
export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        alternateName: ["FI-ACC", "Bhumi Industrial Consultant", "Milind Rajhans Consultant"],
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office no 301/302, 3rd floor, Tulips Apartment",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.0117,
          longitude: 73.7862,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: ["Nashik", "Ambad MIDC", "Satpur MIDC", "Sinnar", "Pune", "Chakan"],
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        legalName: "Bhumi Industrial Consultant",
        foundingDate: "1999",
        founder: {
          "@type": "Person",
          name: "Milind Rajhans",
          honorificSuffix: "FI-ACC",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      ...schemas,
    ],
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
```

**Usage in pages:**
```javascript
<SeoWrapper pageUrl="/services/term-loans" schemas={[breadcrumb, serviceSchema, faqSchema]}>
  <main>...</main>
</SeoWrapper>
```

---

## Data Management

### Data Layer (`lib/data.js`)
Provides async functions to fetch service data with fallback patterns.

#### Key Functions:

1. **`getFinancialServiceData(slug)`** - Fetches detailed data for a single financial service
```javascript
export async function getFinancialServiceData(slug) {
  const seoData = seoFinancial[slug];
  if (!seoData) return null;

  const serviceDetails = {
    "term-loans": {
      name: "Term Loans",
      fullDesc: "Assistance in securing term loans for industrial projects...",
      detailedDesc: "We provide complete assistance in securing term loans...",
      features: ["Loan Assessment", "Documentation", "Bank Negotiation", ...],
      benefits: [...],
    },
    // ...
  };

  return serviceDetails[slug] || {
    name: seoData.title.split("|")[0].trim(),
    fullDesc: seoData.description,
    detailedDesc: seoData.description,
    features: [...], // Default features
    benefits: [...], // Default benefits
  };
}
```

2. **`getIndustrialServiceData(slug)`** - Fetches detailed data for a single industrial service

3. **`getAllFinancialServices()`** - Returns all financial services for listing pages

4. **`getAllIndustrialServices()`** - Returns all industrial services for listing pages

**Fallback Pattern**: Always provide fallback data to ensure pages render even if specific data isn't available.

---

## Static Generation (SSG)

### generateStaticParams() - Dynamic Page Generation
```javascript
export async function generateStaticParams() {
  // Returns array of { slug } objects for all possible routes
  return Object.keys(financialServices).map((slug) => ({ slug }));
}
export const dynamicParams = false; // 404 for non-generated paths
```

**How it works:**
1. `generateStaticParams()` runs at build time
2. Creates HTML files for every service in `financialServices`
3. `dynamicParams: false` means any URL not in this list returns 404

### force-static - Listing Pages
```javascript
export const dynamic = "force-static"; // Forces static generation
```

---

## Metadata Management

### generateMetadata() - Dynamic Page Metadata
For dynamic routes, we use `generateMetadata()` to create page-specific metadata:

```javascript
export async function generateMetadata({ params }) {
  const { slug } = await params; // Next.js 15 requires await
  const service = financialServices[slug];
  if (!service) return { title: "Service Not Found | Bhumi Industrial Consultant" };

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteSEO.baseUrl}/services/${slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}
```

**Key Points:**
- `params` must be awaited (Next.js 15 requirement)
- Returns 404-friendly metadata if service not found
- Uses service data from seoConfig

---

## Schema Markup (JSON-LD)

Three helper functions generate different schema types:

### 1. **getServiceSchema()**
```javascript
export function getServiceSchema(seoData, category, slug) {
  return {
    "@type": "Service",
    name: seoData.h1,
    description: seoData.description,
    url: `${siteSEO.baseUrl}/${category}/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      telephone: siteSEO.phone,
    },
    areaServed: { "@type": "City", name: "Nashik" },
    serviceType: category === "industrial" ? "Industrial Consulting" : "Financial Consulting",
  };
}
```

### 2. **getBreadcrumbSchema()**
```javascript
export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}
```

### 3. **getFAQSchema()**
```javascript
export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
```

**Usage Example:**
```javascript
const schemas = [
  getServiceSchema(seoData, "financial", slug),
  getBreadcrumbSchema([...]),
  getFAQSchema(content.faqs),
];
```

---

## Sitemap & Robots

### robots.js - Robots.txt Generator
```javascript
import { siteSEO } from "../utils/seoConfig.js";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/temp/"], // Block non-public paths
    },
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
    host: siteSEO.baseUrl,
  };
}
```
Generates `/robots.txt` at build time.

### sitemap.js - Sitemap.xml Generator
```javascript
import { siteSEO } from "../utils/seoConfig.js";

const staticPages = ["/", "/industrial", "/financial", "/about", "/contact"];
const industrialPages = ["/industrial/industrial-project-planning", ...];
const financialPages = ["/financial/industrial-deals", "/financial/term-loans", ...];

export default async function sitemap() {
  const baseUrl = siteSEO.baseUrl;
  const currentDate = new Date().toISOString();

  const allPages = [
    ...staticPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: url === "/" ? "daily" : "weekly",
      priority: url === "/" ? 1.0 : 0.8,
    })),
    ...industrialPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })),
    ...financialPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })),
  ];

  return allPages;
}
```

---

## Next.js Configuration

### next.config.mjs - Key Settings

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode

  // Image optimization
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bhumiindustrial.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "*.midcindia.org", pathname: "/**" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"], // Enable WebP for better compression
    minimumCacheTTL: 60,
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate",
          },
        ],
      },
    ];
  },

  // Build optimization
  turbopack: {}, // Use Turbopack in development
  output: "standalone", // Optimized for container deployment
  serverExternalPackages: ["@prisma/client"],

  // Environment variables
  env: {
    CUSTOM_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://bhumiindustrial.com",
    SITE_NAME: "Bhumi Industrial Consultant",
  },
};

export default nextConfig;
```

**Key Directives Explained:**
- **`output: "standalone"`**: Creates an optimized build with only necessary files for deployment
- **`compress: true`**: Enables gzip compression for faster loading
- **Security headers**: Protect against common web vulnerabilities
- **Image optimization**: Automatic WebP conversion, responsive images

---

## Best Practices & Patterns

### 1. **Separation of Concerns**
- SEO data in `seoConfig.js`
- Business logic in `lib/data.js`
- Presentation in page components
- Schema markup in dedicated functions
- Layout and error handling in root files

### 2. **Type Safety (Even in JavaScript)**
```javascript
// Use default values and fallbacks
const content = serviceContent[slug] || defaultContent;
const serviceData = await getServiceData(slug).catch(() => null);
```

### 3. **Error Handling**
```javascript
// Page level
if (!seoData) notFound(); // Next.js 404 page

// Data fetching
try {
  serviceData = await getFinancialServiceData(slug);
} catch (error) {
  console.error("Error fetching service data:", error);
  // Continue with fallback data
}

// Global error boundary in error.js
// 404 handling in not-found.js
```

### 4. **Performance Optimization**
- Static generation for all pages
- Font optimization with `next/font`
- Image optimization with Next.js Image component
- WebP format preference
- Preconnect to critical origins
- Preload LCP images
- Cache headers for static assets
- Gzip compression

### 5. **SEO Best Practices**
- Unique titles and descriptions for every page
- Canonical URLs to prevent duplicate content
- Structured data (LocalBusiness, Service, Breadcrumb, FAQ)
- Open Graph tags for social sharing
- Twitter cards
- XML sitemap
- robots.txt
- Geo tags for local SEO
- PWA manifest and icons
- Mobile app meta tags

### 6. **Next.js 15 Patterns**
- Await params in `generateMetadata()` and page components
- Use `notFound()` for 404 handling
- `force-static` for static generation
- `dynamicParams: false` for predefined routes
- Error boundaries in `error.js`
- 404 pages in `not-found.js`

### 7. **Maintainability**
- Centralized configuration in `seoConfig.js`
- Reusable schema generation functions
- Consistent data structure across services
- Fallback content for missing data
- Organized file structure

### 8. **Accessibility**
- Semantic HTML
- ARIA labels where needed
- Proper heading hierarchy
- Color contrast compliance
- Focus management

---

## Common Terms Explained

| Term | Meaning | Example |
|------|---------|---------|
| **SSG** | Static Site Generation - Pages built at compile time | `/services/term-loans` HTML file created during build |
| **ISR** | Incremental Static Regeneration - Update static pages after build | Not used (all pages static) |
| **Slug** | URL-friendly identifier | `term-loans` from `/services/term-loans` |
| **Canonical URL** | Preferred version of a page | `https://bhumiindustrial.com/services/term-loans` |
| **Open Graph** | Protocol for social media sharing | `og:image`, `og:title` meta tags |
| **JSON-LD** | JavaScript Object Notation for Linked Data | Schema.org markup in `<script>` tags |
| **Schema.org** | Vocabulary for structured data | `LocalBusiness`, `Service`, `FAQPage` |
| **Breadcrumb** | Navigation trail showing page hierarchy | Home > Services > Term Loans |
| **FI-ACC** | Financial Advisor - Certified Consultant | Milind Rajhans' credential |
| **LCP** | Largest Contentful Paint - Core Web Vital | Hero image loading optimization |
| **PWA** | Progressive Web App | Site manifest and icons |
| **Turbopack** | Next.js incremental bundler | Faster development builds |

---

## Environment Variables

```bash
# Required
NEXT_PUBLIC_BASE_URL=https://bhumiindustrial.com

# Optional (for Google Search Console)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

---

## Build & Deployment

### Development
```bash
npm run dev
# or
yarn dev
# Uses Turbopack for fast refresh
```

### Build
```bash
npm run build
# Output in .next folder (standalone mode)
# Generates:
# - Static HTML files for all routes
# - Optimized JavaScript bundles
# - Sitemap.xml and robots.txt
```

### Production
```bash
npm run start
# Starts production server on port 3000
```

### Docker Deployment (Standalone)
The `output: "standalone"` configuration creates an optimized build for containerization:

```dockerfile
FROM node:18-alpine
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Summary

This project demonstrates a production-ready Next.js 15 application with:

1. **Complete SEO optimization** with metadata, structured data, and sitemaps
2. **Static site generation** for all pages
3. **Optimized font loading** with next/font
4. **Comprehensive error handling** with error boundaries and 404 pages
5. **Performance optimizations** including image optimization, preloading, and caching
6. **Security headers** and best practices
7. **Modular architecture** with separation of concerns
8. **Type-safe patterns** even in JavaScript
9. **Local SEO focus** with geo tags and area targeting
10. **PWA capabilities** with manifest and icons

The codebase follows Next.js 15 best practices and is ready for production deployment with excellent SEO, performance, and user experience.
#   r i c h w e b n e x t  
 