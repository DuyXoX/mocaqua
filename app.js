const express = require("express");

const hostname = "localhost";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello web mocaqua");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});