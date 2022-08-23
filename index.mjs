import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/home", (req, res) => {
  res.send("Hasham Saleem");
});

app.get("/weather", (req, res) => {
  res.send({
    name: "karachi",
    time: 12,
    env: "rainy",
  });
});

app.get("/profile", (req, res) => {
  res.send("abdul Saleem");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
