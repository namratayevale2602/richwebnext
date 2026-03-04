// data/imageMapping.js
// This file maps image keys to actual image imports
// All images should be placed in the assets/images/ directory

import {
  // Benefits images
  sms,
  
  // Subtype images
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  pramotionalSMS,
  transactionalSMS,
  
  // Product images
  bulksmss,
  bulkvoicee,
  whatsappservices,
  digitalmarketing,
  whatsappchatbots,
  digitalautomationn,
  designdevelopementt,
  graphicDesignn,
  alertsytems,
  ivrr,
  bulkemails,
  
  // Industry images
  hospital,
  banking,
  insurance,
  finance,
  realestate,
  travel,
  ecommerce,
  education,
  automobile,
  entertainment,
  brodcasting,
  fitness,
  
  // Default/fallback image
  defaultImage,
} from "@/asset";

/**
 * Image Mapping Object
 * Maps string keys from JSON data to actual imported images
 * 
 * How to use:
 * import imageMapping from '@/data/imageMapping';
 * <Image src={imageMapping[imageKey]} alt="..." />
 */
const imageMapping = {
  // ============================================
  // PRODUCT IMAGES (from imagePaths.products)
  // ============================================
  bulksmss: bulksmss,
  bulkvoicee: bulkvoicee,
  whatsappservices: whatsappservices,
  digitalmarketing: digitalmarketing,
  whatsappchatbots: whatsappchatbots,
  digitalautomationn: digitalautomationn,
  designdevelopementt: designdevelopementt,
  graphicDesignn: graphicDesignn,
  alertsytems: alertsytems,
  ivrr: ivrr,
  bulkemails: bulkemails,
  
  // ============================================
  // SUBTYPE IMAGES (from imagePaths.subtypes)
  // ============================================
  pramotionalSMS: pramotionalSMS,
  transactionalSMS: transactionalSMS,
  sms: sms,
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  img5: img5,
  img6: img6,
  img7: img7,
  img8: img8,
  img9: img9,
  img10: img10,
  img11: img11,
  img12: img12,
  
  // ============================================
  // INDUSTRY IMAGES (from imagePaths.industries)
  // ============================================
  hospital: hospital,
  banking: banking,
  insurance: insurance,
  finance: finance,
  realestate: realestate,
  travel: travel,
  ecommerce: ecommerce,
  education: education,
  automobile: automobile,
  entertainment: entertainment,
  brodcasting: brodcasting,
  fitness: fitness,
  
  // ============================================
  // ALTERNATIVE NAMES / ALIASES
  // ============================================
  // Alternative spellings/names for backward compatibility
  "bulk-sms": bulksmss,
  "bulk-voice": bulkvoicee,
  "whatsapp-service": whatsappservices,
  "digital-marketing": digitalmarketing,
  "whats-chatbot": whatsappchatbots,
  "digital-auto": digitalautomationn,
  "design-develop": designdevelopementt,
  "graphic-design": graphicDesignn,
  "alert-system": alertsytems,
  "ivr-system": ivrr,
  "bulk-email": bulkemails,
  
  // Industry alternative names
  "healthcare": hospital,
  "bank": banking,
  "real-estate": realestate,
  "e-commerce": ecommerce,
  "auto": automobile,
  "broadcasting": brodcasting,
};

/**
 * Helper function to get image with fallback
 * @param {string} key - The image key to look up
 * @param {string} fallbackKey - Optional fallback key (defaults to 'img1')
 * @returns {string} The image source
 */
export const getImage = (key, fallbackKey = 'img1') => {
  return imageMapping[key] || imageMapping[fallbackKey] || imageMapping.img1;
};

/**
 * Get product image by slug
 * @param {string} slug - Product slug (e.g., 'bulk-sms')
 * @returns {string} Product image source
 */
export const getProductImage = (slug) => {
  const imageMap = {
    'bulk-sms': bulksmss,
    'bulk-voice': bulkvoicee,
    'whatsapp-service': whatsappservices,
    'digital-marketing': digitalmarketing,
    'whats-chatbot': whatsappchatbots,
    'digital-auto': digitalautomationn,
    'design-develop': designdevelopementt,
    'graphic-design': graphicDesignn,
    'alert-system': alertsytems,
    'ivr-system': ivrr,
    'bulk-email': bulkemails,
  };
  return imageMap[slug] || imageMapping.img1;
};

/**
 * Get industry image by industry name
 * @param {string} industry - Industry name (e.g., 'Hospital')
 * @returns {string} Industry image source
 */
export const getIndustryImage = (industry) => {
  const industryLower = industry?.toLowerCase() || '';
  const imageMap = {
    'hospital': hospital,
    'banking': banking,
    'insurance': insurance,
    'finance': finance,
    'realestate': realestate,
    'real estate': realestate,
    'travel': travel,
    'travels': travel,
    'ecommerce': ecommerce,
    'e-commerce': ecommerce,
    'education': education,
    'automobile': automobile,
    'entertainment': entertainment,
    'brodcasting': brodcasting,
    'broadcasting': brodcasting,
    'fitness': fitness,
  };
  
  // Try exact match first
  if (imageMap[industryLower]) return imageMap[industryLower];
  
  // Try partial match
  for (const [key, value] of Object.entries(imageMap)) {
    if (industryLower.includes(key)) return value;
  }
  
  return imageMapping.hospital; // Default fallback
};

/**
 * Preload critical images
 * This function can be called in layout.js to preload important images
 */
export const preloadCriticalImages = () => {
  const criticalImages = [
    bulksmss,
    whatsappservices,
    digitalmarketing,
  ];
  
  if (typeof window !== 'undefined') {
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
};

/**
 * Get all available image keys
 * @returns {Array<string>} Array of all image keys
 */
export const getAllImageKeys = () => {
  return Object.keys(imageMapping);
};

/**
 * Check if an image key exists
 * @param {string} key - The image key to check
 * @returns {boolean} True if the key exists
 */
export const hasImage = (key) => {
  return key in imageMapping;
};

// Default export with all mappings and helpers
export default imageMapping;