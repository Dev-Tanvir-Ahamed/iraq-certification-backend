import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import voterRoutes from "./routes/VoterRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/voters", voterRoutes);

export default app;
