import express from "express";
import {
  listPublishedPosts,
  getPublishedPostBySlug,
} from "../controllers/blog.controller.js";

const router = new express.Router();

router.get("/posts", listPublishedPosts);
router.get("/posts/:slug", getPublishedPostBySlug);

export default router;
