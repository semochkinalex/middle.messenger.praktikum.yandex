import express from 'express';

const app = express()

const port = 3000;

const DIRNAME = process.cwd();  

app.use("/", express.static(DIRNAME + "/"));

app.get('/*', (req, res, next) => {
  res.sendFile(DIRNAME +"/dist/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
