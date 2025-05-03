import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/index.js";
import { authRoutes, userRoutes, qrCodeRoutes, emailRoutes } from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:9000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/qrcodes", qrCodeRoutes);
app.use("/api/email", emailRoutes);

app.use(errorHandler);

export default app;
