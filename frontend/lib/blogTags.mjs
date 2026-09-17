const spanishCollator = new Intl.Collator("es", {sensitivity: "base"});

export const normalizeTagKey = (value) => (
  typeof value === "string" ? value.trim().toLocaleLowerCase("es") : ""
);

export const normalizePostTags = (value) => {
  const candidates = Array.isArray(value) ? value : [value];
  const tags = new Map();

  candidates.forEach((candidate) => {
    if (typeof candidate !== "string") return;
    const label = candidate.trim();
    const key = normalizeTagKey(label);
    if (key && !tags.has(key)) tags.set(key, label);
  });

  return [...tags.entries()].map(([key, label]) => ({key, label}));
};

export const getPostTagKeys = (post) => normalizePostTags(post?.tags).map(({key}) => key);

export const getBlogCategories = (posts) => {
  const categories = new Map();

  posts.forEach((post) => {
    normalizePostTags(post?.tags).forEach(({key, label}) => {
      if (!categories.has(key)) categories.set(key, label);
    });
  });

  return [...categories.entries()]
    .map(([key, label]) => ({key, label}))
    .sort((left, right) => spanishCollator.compare(left.label, right.label));
};
