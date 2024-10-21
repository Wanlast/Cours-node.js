const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./view/index.html"));
});

app.get("/json", (req, res) => {
  const name = process.env.NAME || "Antho";
  res.json({ name });
});

app.listen(PORT, () =>
  console.log(`le serveur est lance sur le port : ${PORT}.`)
);
