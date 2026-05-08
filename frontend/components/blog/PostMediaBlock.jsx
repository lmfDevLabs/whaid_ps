import ImageWithFallback from "./ImageWithFallback";

export default function PostMediaBlock({images = [], video_url}) {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const hasVideo = Boolean(video_url);

  if (!safeImages.length && !hasVideo) {
    return null;
  }

  return (
    <section className="post-media-block" aria-label="Multimedia del post">
      {safeImages.length ? (
        <div className="post-image-pair">
          {safeImages.map((image, index) => (
            <div className="post-image" key={`${image}-${index}`}>
              <ImageWithFallback src={image} alt={`Imagen complementaria ${index + 1}`} className="post-image__img" />
            </div>
          ))}
        </div>
      ) : null}

      {hasVideo ? (
        <div className="post-video">
          <a href={video_url} target="_blank" rel="noreferrer" className="post-video__link">
            Ver video del post
          </a>
        </div>
      ) : null}
    </section>
  );
}
