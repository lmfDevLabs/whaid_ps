export default function PostTags({tags = [], className = "post-tags"}) {
  const safeTags = Array.isArray(tags) ? tags.filter(Boolean) : [];

  if (!safeTags.length) {
    return null;
  }

  return (
    <div className={className}>
      {safeTags.map((tag) => (
        <span className="post-meta__tag" key={tag}>{tag}</span>
      ))}
    </div>
  );
}
