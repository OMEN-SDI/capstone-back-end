import express from "express";
export const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server!");
});
