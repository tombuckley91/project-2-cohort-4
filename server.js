const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const router = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: "cohort 4 the best cohort ever",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// @TODO - REMOVE FOR PRODUCTION
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});

console.log();
