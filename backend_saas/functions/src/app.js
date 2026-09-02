import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import demoRoutes from "./routes/demo.routes.js";

const app = express();

app.use(cors({origin: true}));
app.use(express.json({limit: "12kb", strict: true}));

// Firebase Functions strips the function name (`api`) from the request path in
// deployed URLs, so expose both the deployed paths (`/health`, `/blog`) and
// the full Express paths (`/api/health`, `/api/blog`) used by local tooling.
app.use("/health", healthRoutes);
app.use("/blog", blogRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/blog", blogRoutes);
app.use("/demo", demoRoutes);
app.use("/api/demo", demoRoutes);

app.use((error, req, res, next) => {
  if (error?.type === "entity.too.large" || error instanceof SyntaxError) {
    return res.status(400).json({ok: false, code: "INVALID_REQUEST"});
  }
  next(error);
});

app.use((req, res) => {
  res.status(404).json({ok: false, error: "Route not found"});
});

export default app;
