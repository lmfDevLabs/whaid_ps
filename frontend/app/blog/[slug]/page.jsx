import {notFound} from "next/navigation";
import PostTemplate from "../../../components/blog/PostTemplate";
import {fetchPublishedPostBySlug} from "../../../lib/blogApi";
import {siteUrl} from "../../../lib/siteLinks";
import {getPostSocialImage} from "../../../lib/blogSocialMetadata";

export const dynamic = "force-dynamic";

const DEFAULT_TITLE = "Blog de Whaid";
const DEFAULT_DESCRIPTION = "Ideas y guías de Whaid sobre asistentes IA, WhatsApp y atención inteligente.";

const cleanText = (value) => (typeof value === "string" ? value.trim() : "");

const publishedTimeFromPost = (value) => {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
};

const getCanonicalPostUrl = (slug) => `${siteUrl}/blog/${encodeURIComponent(slug || "")}`;

export async function generateMetadata({params}) {
  const {slug} = await params;
  const post = await fetchPublishedPostBySlug(slug);

  if (!post) {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      alternates: {canonical: `${siteUrl}/blog`},
    };
  }

  const title = cleanText(post.title) || DEFAULT_TITLE;
  const description = cleanText(post.excerpt) || DEFAULT_DESCRIPTION;
  const canonicalUrl = getCanonicalPostUrl(slug);
  const socialImage = getPostSocialImage(post);
  const publishedTime = publishedTimeFromPost(post.published_at);
  const image = {
    url: socialImage,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title,
    description,
    alternates: {canonical: canonicalUrl},
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Whaid",
      type: "article",
      publishedTime,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function BlogPostPage({params}) {
  const {slug} = await params;
  const post = await fetchPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostTemplate post={post} slug={slug} />;
}
