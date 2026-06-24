import {siteUrl} from "./siteLinks";

export const WHAID_SOCIAL_FALLBACK_PATH = "/social/whaid-og-default.png";
export const WHAID_SOCIAL_FALLBACK_URL = `${siteUrl}${WHAID_SOCIAL_FALLBACK_PATH}`;

const HTTPS_PROTOCOLS = new Set(["http:", "https:"]);

const cleanString = (value) => (typeof value === "string" ? value.trim() : "");

const storageObjectToPublicUrl = (bucket, objectPath) => {
  if (!bucket || !objectPath) return "";
  return `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucket)}/o/${encodeURIComponent(objectPath)}?alt=media`;
};

const firebaseStorageUrlFromGs = (value) => {
  const raw = cleanString(value);
  if (!raw.startsWith("gs://")) return raw;

  const withoutScheme = raw.slice(5);
  const slashIndex = withoutScheme.indexOf("/");

  if (slashIndex === -1) return "";

  const bucket = withoutScheme.slice(0, slashIndex).trim();
  const objectPath = withoutScheme.slice(slashIndex + 1).trim();

  return storageObjectToPublicUrl(bucket, objectPath);
};

export const normalizeBlogImageUrl = (value) => firebaseStorageUrlFromGs(value);

export const resolveSocialImageUrl = (value) => {
  const normalized = normalizeBlogImageUrl(value);

  if (!normalized) return WHAID_SOCIAL_FALLBACK_URL;

  try {
    const url = new URL(normalized);
    if (!HTTPS_PROTOCOLS.has(url.protocol)) return WHAID_SOCIAL_FALLBACK_URL;
    return url.toString();
  } catch {
    return WHAID_SOCIAL_FALLBACK_URL;
  }
};

export const getPostSocialImage = (post) => {
  return resolveSocialImageUrl(post?.cover_image_url);
};
