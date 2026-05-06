import express from "express";

const router = new express.Router();

router.get("/", (req, res) => {
  res.json({ok: true, service: "whaid-blog-api"});
});

export default router;
