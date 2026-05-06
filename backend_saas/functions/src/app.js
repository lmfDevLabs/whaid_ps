import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/blog", blogRoutes);

app.use((req, res) => {
  res.status(404).json({ok: false, error: "Route not found"});
});

export default app;
