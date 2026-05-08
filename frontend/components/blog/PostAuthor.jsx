import ImageWithFallback from "./ImageWithFallback";

const initialsFromName = (name) => {
  if (!name) return "W";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "W";
};

export default function PostAuthor({author, avatar_author, role_author}) {
  if (!author && !avatar_author && !role_author) {
    return null;
  }

  return (
    <div className="post-author">
      {avatar_author ? (
        <ImageWithFallback
          src={avatar_author}
          alt={author ? `Avatar de ${author}` : "Avatar del autor"}
          className="post-author__avatar-img"
          fallbackClassName="post-author__avatar"
        />
      ) : (
        <div className="post-author__avatar">{initialsFromName(author)}</div>
      )}
      <div>
        {author ? <div className="post-author__name">{author}</div> : null}
        {role_author ? <div className="post-author__role">{role_author}</div> : null}
      </div>
    </div>
  );
}
