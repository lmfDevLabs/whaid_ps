"use client";

import useLanguage from "../../../i18n/useLanguage";
import {getVideoSourceType, getYouTubeEmbedUrl} from "../../../lib/media/youtube";

export default function VideoEmbed({ videoUrl, titleKey }) {
  const {t} = useLanguage();
  const videoType = getVideoSourceType(videoUrl);
  const embedUrl = videoType === "youtube" ? getYouTubeEmbedUrl(videoUrl) : "";

  return (
    <div className="other-possibility-card__video" data-video-type={videoType}>
      {videoType === "youtube" && embedUrl ? (
        <iframe
          src={embedUrl}
          title={titleKey ? t(titleKey) : "Whaid video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : null}

      {videoType === "mp4" ? (
        <video
          controls
          playsInline
          preload="metadata"
          title={titleKey ? t(titleKey) : "Whaid video"}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      ) : null}

      {videoType === "unknown" || (videoType === "youtube" && !embedUrl) ? (
        <div className="other-possibility-card__video-fallback">
          Missing video source
        </div>
      ) : null}
    </div>
  );
}
