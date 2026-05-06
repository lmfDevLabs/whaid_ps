import {
  getPublishedPosts,
  getPublishedPostBySlug as findPublishedPostBySlug,
} from "../services/blog.service.js";

export const listPublishedPosts = async (req, res) => {
  try {
    const posts = await getPublishedPosts();

    res.json({
      ok: true,
      count: posts.length,
      posts,
    });
  } catch (error) {
    console.error("Error listing published blog posts", error);
    res.status(500).json({ok: false, error: "Internal server error"});
  }
};

export const getPublishedPostBySlug = async (req, res) => {
  try {
    const post = await findPublishedPostBySlug(req.params.slug);

    if (!post) {
      return res.status(404).json({ok: false, error: "Post not found"});
    }

    return res.json({ok: true, post});
  } catch (error) {
    console.error("Error getting published blog post by slug", error);
    return res.status(500).json({ok: false, error: "Internal server error"});
  }
};
