import express from "express";
import cors from "cors";
import "dotenv/config";
import { userRoutes } from "./users/infrastructure/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/users/', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`funcionando desde: ${port}`);
});