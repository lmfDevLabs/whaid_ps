export const normalizeBlogTags = (value) => {
  const candidates = Array.isArray(value) ? value : [value];

  return candidates
      .filter((tag) => typeof tag === "string")
      .map((tag) => tag.trim())
      .filter(Boolean);
};
