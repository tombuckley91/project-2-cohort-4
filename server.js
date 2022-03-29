const express = require("express");
const router = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// @TODO - REMOVE FOR PRODUCTION
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});
