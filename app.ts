import express from "express";

const app = express();

const port = 3000;

const DIRNAME = process.cwd();

app.use(express.static(DIRNAME + "/dist"));

app.get("/*", (req, res) => {
  res.sendFile(DIRNAME + "/dist/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
