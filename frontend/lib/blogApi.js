const DEFAULT_BLOG_API_BASE_URL =
  "https://us-central1-whaid-public-site-dd23f.cloudfunctions.net/api";

export const getBlogApiBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_BLOG_API_BASE_URL ||
    process.env.BLOG_API_BASE_URL ||
    DEFAULT_BLOG_API_BASE_URL
  ).replace(/\/$/, "");
};

const toPublicStorageUrl = (value) => {
  if (typeof value !== "string") return value;

  const raw = value.trim();
  if (!raw) return "";

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) {
    return raw;
  }

  if (!raw.startsWith("gs://")) {
    return raw;
  }

  const withoutScheme = raw.slice(5);
  const slashIndex = withoutScheme.indexOf("/");

  if (slashIndex === -1) {
    return raw;
  }

  const bucket = withoutScheme.slice(0, slashIndex).trim();
  const objectPath = withoutScheme.slice(slashIndex + 1).trim();

  if (!bucket || !objectPath) {
    return raw;
  }

  return `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucket)}/o/${encodeURIComponent(objectPath)}?alt=media`;
};

const normalizePostMediaFields = (post) => {
  if (!post || typeof post !== "object") {
    return post;
  }

  return {
    ...post,
    cover_image_url: toPublicStorageUrl(post.cover_image_url),
    avatar_author: toPublicStorageUrl(post.avatar_author),
  };
};

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

export async function fetchPublishedPosts() {
  const response = await fetch(`${getBlogApiBaseUrl()}/blog/posts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const payload = await safeJson(response);
  const posts = Array.isArray(payload?.posts) ? payload.posts : [];

  return posts.map(normalizePostMediaFields);
}

export async function fetchPublishedPostBySlug(slug) {
  if (!slug) {
    return null;
  }

  const response = await fetch(
    `${getBlogApiBaseUrl()}/blog/posts/${encodeURIComponent(slug)}`,
    {cache: "no-store"},
  );

  if (!response.ok) {
    return null;
  }

  const payload = await safeJson(response);
  return normalizePostMediaFields(payload?.post || null);
}
