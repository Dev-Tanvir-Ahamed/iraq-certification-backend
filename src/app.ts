import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import certificateRoutes from "./routes/certificateRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/certificate", certificateRoutes);

export default app;
