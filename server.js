const express = require("express");
const db = require("./config/connection");
const app = express();
const usersRoutes = require("./routes/users");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
app.use('/api/users', usersRoutes);


db.once("open", () => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
