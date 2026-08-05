"use client";

import {useState} from "react";
import TranslatedText from "../../../i18n/TranslatedText";

const VIDEO_ID = "wxwoSewiKwQ";
const MAX_RES_THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const FALLBACK_THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export default function PitchSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-pitch" id="pitch" aria-label="Video pitch">
      <div className="container video-pitch__inner">
        <div className="video-pitch__copy">
          <span className="eyebrow video-pitch__eyebrow"><TranslatedText i18nKey="pitch_eyebrow" /></span>
          <h3><TranslatedText i18nKey="pitch_title" /></h3>
          <p><TranslatedText i18nKey="pitch_sub" /></p>
        </div>

        <div className="video-pitch__player">
          {isPlaying ? (
            <iframe
              className="video-pitch__iframe"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Video pitch de Whaid"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              className="video-pitch__preview"
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Reproducir video pitch de Whaid"
            >
              <img
                className="video-pitch__thumbnail"
                src={MAX_RES_THUMBNAIL}
                alt=""
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = FALLBACK_THUMBNAIL;
                }}
              />
              <span className="video-pitch__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19" /></svg>
              </span>
              <span className="video-pitch__caption"><TranslatedText i18nKey="pitch_caption" /></span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
