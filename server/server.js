import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// PORT (Render uses this)
const PORT = process.env.PORT || 5000;

// ✅ START SERVER (NO DB)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
