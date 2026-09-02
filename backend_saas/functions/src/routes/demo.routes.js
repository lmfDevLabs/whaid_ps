import {Router} from "express";
import {submitDemo} from "../controllers/demo.controller.js";

// Router is an Express factory despite its constructor-style name.
// eslint-disable-next-line new-cap
const router = Router();
router.post("/", submitDemo);
router.all("/", (req, res) => res.status(405).json({ok: false, code: "METHOD_NOT_ALLOWED"}));
export default router;
