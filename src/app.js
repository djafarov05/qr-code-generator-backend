import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/index.js";
import { authRoutes, userRoutes, qrCodeRoutes } from "./routes/index.js";

const app = express();

const allowedOrigins = Array.from(
  { length: 11 },
  (_, i) => `http://localhost:${5170 + i}`   // 5170-5180
);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",   authRoutes);
app.use("/api/users",  userRoutes);
app.use("/api/qrcodes", qrCodeRoutes);

app.use(errorHandler);

export default app;
