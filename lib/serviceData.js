// lib/serviceData.js
import productsData from "@/data/products.json";
import { industrialServices, softwareServices, digitalMarketingServices } from "@/utils/seoConfig";

/**
 * Get all products for listing pages
 * @returns {Promise<Array>} Array of all products with basic info
 */
export async function getAllProducts() {
  return productsData.products.map((product) => ({
    slug: product.slug,
    name: product.title,
    title: product.title,
    description: product.fullDesc,
    image: product.image,
  }));
}

/**
 * Get detailed product data by slug with SEO enrichment
 * @param {string} slug - The product slug (e.g., "bulk-sms")
 * @returns {Promise<Object|null>} Detailed product data with SEO info or null
 */
export async function getProductData(slug) {
  const product = productsData.products.find(p => p.slug === slug) || null;
  
  if (!product) return null;
  
  // Enrich product with SEO data from seoConfig
  let seoData = null;
  
  // Check in industrialServices
  if (industrialServices[slug]) {
    seoData = industrialServices[slug];
  }
  // Check in softwareServices
  else if (softwareServices[slug]) {
    seoData = softwareServices[slug];
  }
  // Check in digitalMarketingServices
  else if (digitalMarketingServices[slug]) {
    seoData = digitalMarketingServices[slug];
  }
  
  return {
    ...product,
    seoData
  };
}

/**
 * Get all services from seoConfig for services listing page
 * @returns {Promise<Array>} Array of all services with SEO data
 */
export async function getAllServices() {
  return [
    ...Object.values(industrialServices),
    ...Object.values(softwareServices),
    ...Object.values(digitalMarketingServices)
  ];
}

/**
 * Get featured products for homepage
 * @param {number} limit - Maximum number of products to return
 * @returns {Promise<Array>} Array of featured products
 */
export async function getFeaturedProducts(limit = 6) {
  const featuredSlugs = [
    "bulkSMS",
    "whatsappService",
    "digitalMarketing",
    "graphicDesign",
    "ivrSystem",
    "bulkEmail",
  ];
  
  return productsData.products
    .filter(product => featuredSlugs.includes(product.slug))
    .slice(0, limit)
    .map(product => ({
      slug: product.slug,
      name: product.title,
      description: product.fullDesc,
      image: product.image,
    }));
}

/**
 * Get product statistics
 * @returns {Promise<Object>} Product statistics
 */
export async function getProductStatistics() {
  const products = productsData.products;
  
  return {
    totalProducts: products.length,
    totalWithSubtypes: products.filter(p => p.subtypes?.length > 0).length,
    totalWithBenefits: products.filter(p => p.benefits?.length > 0).length,
  };
}

/**
 * Search products by name or description
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching products
 */
export async function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  
  return productsData.products
    .filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.fullDesc.toLowerCase().includes(searchTerm)
    )
    .map(product => ({
      slug: product.slug,
      name: product.title,
      description: product.fullDesc,
      image: product.image,
    }));
}

/**
 * Get similar products
 * @param {string} slug - Current product slug
 * @param {number} limit - Maximum number of products to return
 * @returns {Promise<Array>} Array of similar products
 */
export async function getSimilarProducts(slug, limit = 3) {
  return productsData.products
    .filter(product => product.slug !== slug)
    .slice(0, limit)
    .map(product => ({
      slug: product.slug,
      name: product.title,
      description: product.fullDesc,
      image: product.image,
    }));
}