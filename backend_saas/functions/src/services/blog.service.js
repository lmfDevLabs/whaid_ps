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

const sortByPublishedDateDesc = (left, right) => {
  const leftDate = left.published_at ?
    new Date(left.published_at).getTime() :
    0;
  const rightDate = right.published_at ?
    new Date(right.published_at).getTime() :
    0;

  return rightDate - leftDate;
};

export const getPublishedPosts = async () => {
  // No usamos orderBy("published_at") porque Firestore excluye documentos sin
  // ese campo. `published_at` es opcional, así que ordenamos en memoria y los
  // posts sin fecha quedan al final sin desaparecer del listado.
  const snapshot = await publishedPostsQuery().get();

  return snapshot.docs.map(mapPostListItem).sort(sortByPublishedDateDesc);
};

export const getPublishedPostBySlug = async (slug) => {
  const safeSlug = safeString(slug);

  if (!safeSlug) {
    return null;
  }

  const snapshot = await publishedPostsQuery()
      .where("slug", "==", safeSlug)
      .limit(1)
      .get();

  if (!snapshot.empty) {
    return mapPostDetail(snapshot.docs[0]);
  }

  // Fallback controlado: si un post publicado aún no tiene `slug`, el frontend
  // enlaza usando `id`. Esto mantiene navegable una única entrada real sin
  // cambiar el modelo ni inventar slugs en la API.
  const doc = await db.collection(BLOG_POSTS_COLLECTION).doc(safeSlug).get();

  const data = doc.data() || {};

  if (!doc.exists || data.status !== PUBLISHED_STATUS) {
    return null;
  }

  return mapPostDetail(doc);
};
