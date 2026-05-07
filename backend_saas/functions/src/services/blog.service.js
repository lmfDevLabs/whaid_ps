import {initializeApp, getApps} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {timestampToIsoString} from "../utils/timestamps.js";

if (!getApps().length) {
  initializeApp();
}

const db = getFirestore();
const BLOG_POSTS_COLLECTION = "blog_posts";
const PUBLISHED_STATUS = "published";

const mapPostListItem = (doc) => {
  const data = doc.data();

  return {
    id: doc.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    cover_image_url: data.cover_image_url != null ? data.cover_image_url : null,
    author: data.author,
    tags: Array.isArray(data.tags) ? data.tags : [],
    published_at: timestampToIsoString(data.published_at),
  };
};

const mapPostDetail = (doc) => {
  const data = doc.data();

  return {
    id: doc.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    cover_image_url: data.cover_image_url != null ? data.cover_image_url : null,
    author: data.author,
    tags: Array.isArray(data.tags) ? data.tags : [],
    published_at: timestampToIsoString(data.published_at),
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
