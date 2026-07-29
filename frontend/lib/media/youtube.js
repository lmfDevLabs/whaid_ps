export function getYouTubeEmbedUrl(videoSource) {
  if (!videoSource || typeof videoSource !== "string") return "";

  const cleanSource = videoSource.trim();

  if (!cleanSource) return "";

  try {
    const url = new URL(cleanSource);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.replace("/", "").trim();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) {
        return cleanSource.replace("https://www.youtube.com", "https://www.youtube-nocookie.com");
      }

      const id = url.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
    }
  } catch {
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(cleanSource)}`;
  }

  return "";
}

export function getVideoSourceType(url) {
  if (!url || typeof url !== "string") return "unknown";

  const normalizedUrl = url.toLowerCase();

  if (
    normalizedUrl.includes("youtube.com") ||
    normalizedUrl.includes("youtu.be")
  ) {
    return "youtube";
  }

  if (
    normalizedUrl.includes(".mp4") ||
    normalizedUrl.includes("firebasestorage.googleapis.com")
  ) {
    return "mp4";
  }

  return "unknown";
}
