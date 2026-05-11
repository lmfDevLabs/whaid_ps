const DEFAULT_BLOG_API_BASE_URL =
  "https://us-central1-whaid-public-site-dd23f.cloudfunctions.net/api";

export const getBlogApiBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_BLOG_API_BASE_URL ||
    process.env.BLOG_API_BASE_URL ||
    DEFAULT_BLOG_API_BASE_URL
  ).replace(/\/$/, "");
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
  return Array.isArray(payload?.posts) ? payload.posts : [];
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
  return payload?.post || null;
}
