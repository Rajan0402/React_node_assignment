import express from "express";
import cors from "cors";
import user from "./routes/user.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome!" });
});

app.use("/api/user", user);

export default app;
