import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

// Firebase Functions strips the function name (`api`) from the request path in
// deployed URLs, so expose both the deployed paths (`/health`, `/blog`) and
// the full Express paths (`/api/health`, `/api/blog`) used by local tooling.
app.use("/health", healthRoutes);
app.use("/blog", blogRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/blog", blogRoutes);

app.use((req, res) => {
  res.status(404).json({ok: false, error: "Route not found"});
});

export default app;
