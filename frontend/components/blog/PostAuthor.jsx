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

const cleanText = (value) => (typeof value === "string" ? value.trim() : "");

export default function PostAuthor({author, avatar_author, role_author}) {
  const authorName = cleanText(author);
  const authorRole = cleanText(role_author);
  const avatarUrl = cleanText(avatar_author);

  if (!authorName && !avatarUrl && !authorRole) {
    return null;
  }

  return (
    <div className="post-author">
      {avatarUrl ? (
        <ImageWithFallback
          src={avatarUrl}
          alt={authorName ? `Avatar de ${authorName}` : "Avatar del autor"}
          className="post-author__avatar-img"
          fallbackClassName="post-author__avatar"
        />
      ) : (
        <div className="post-author__avatar">{initialsFromName(authorName)}</div>
      )}
      <div>
        {authorName ? <div className="post-author__name">{authorName}</div> : null}
        {authorRole ? <div className="post-author__role">{authorRole}</div> : null}
      </div>
    </div>
  );
}
