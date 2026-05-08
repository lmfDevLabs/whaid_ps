import {initializeApp, getApps} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {timestampToIsoString} from "../utils/timestamps.js";

if (!getApps().length) {
  initializeApp();
}

const db = getFirestore();
const BLOG_POSTS_COLLECTION = "blog_posts";
const PUBLISHED_STATUS = "published";

const safeString = (value) => (typeof value === "string" ? value : "");
const safeNullableString = (value) => (
  typeof value === "string" && value ? value : null
);
const safeStringArray = (value) => (
  Array.isArray(value) ?
    value.filter((item) => typeof item === "string" && item) :
    []
);

const mapBasePost = (doc) => {
  const data = doc.data() || {};

  // Centralizamos los defaults para que Firestore pueda omitir opcionales
  // sin obligar al frontend a defenderse contra `undefined` en cada render.
  return {
    id: doc.id,
    title: safeString(data.title),
    slug: safeString(data.slug),
    excerpt: safeString(data.excerpt),
    cover_image_url: safeNullableString(data.cover_image_url),
    author: safeString(data.author),
    avatar_author: safeNullableString(data.avatar_author),
    role_author: safeNullableString(data.role_author),
    tags: safeStringArray(data.tags),
    published_at: timestampToIsoString(data.published_at),
  };
};

const mapPostListItem = (doc) => mapBasePost(doc);

const mapPostDetail = (doc) => {
  const data = doc.data() || {};

  return {
    ...mapBasePost(doc),
    // El contenido se entrega crudo: Markdown vive solo en el frontend y no se
    // normaliza, parsea ni transforma en la API.
    content: safeString(data.content),
    images: safeStringArray(data.images),
    video_url: safeNullableString(data.video_url),
    keyshot: safeNullableString(data.keyshot),
  };
};

const publishedPostsQuery = () => db
    .collection(BLOG_POSTS_COLLECTION)
    .where("status", "==", PUBLISHED_STATUS);

export const getPublishedPosts = async () => {
  const snapshot = await publishedPostsQuery()
      .orderBy("published_at", "desc")
      .get();

  return snapshot.docs.map(mapPostListItem);
};

export const getPublishedPostBySlug = async (slug) => {
  const snapshot = await publishedPostsQuery()
      .where("slug", "==", slug)
      .limit(1)
      .get();

  if (snapshot.empty) {
    return null;
  }

  return mapPostDetail(snapshot.docs[0]);
};
