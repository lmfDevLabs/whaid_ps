const PRICING_LOGO_BASE_PATH = "/assets/logos_servicios";

export const PRICING_PROVIDERS = [
  { id: "gcp", logo: `${PRICING_LOGO_BASE_PATH}/google-cloud-logo.svg`, logoFallback: "GCP", services: 5 },
  { id: "openai", logo: `${PRICING_LOGO_BASE_PATH}/openai-logo.svg`, logoFallback: "AI", services: 2 },
  { id: "pinecone", logo: `${PRICING_LOGO_BASE_PATH}/pinecone-logo.svg`, logoFallback: "PC", services: 3 },
  { id: "algolia", logo: `${PRICING_LOGO_BASE_PATH}/algolia-logo.svg`, logoFallback: "AG", services: 3 },
  { id: "firecms", logo: `${PRICING_LOGO_BASE_PATH}/firecms-logo.svg`, logoFallback: "CMS", services: 3 },
  { id: "langsmith", logo: `${PRICING_LOGO_BASE_PATH}/langsmith-logo.svg`, logoFallback: "LS", services: 3 },
];
