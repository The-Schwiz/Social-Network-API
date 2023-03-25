const express = require("express");
const db = require("./config/connection");
const app = express();

db.once("open", () => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
