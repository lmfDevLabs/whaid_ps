import {notFound} from "next/navigation";
import PostTemplate from "../../../components/blog/PostTemplate";
import {fetchPublishedPostBySlug} from "../../../lib/blogApi";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({params}) {
  const {slug} = await params;
  const post = await fetchPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostTemplate post={post} />;
}
