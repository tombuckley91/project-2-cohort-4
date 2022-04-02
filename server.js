const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebars = require("express-handlebars");

const router = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;
const hbs = handlebars.create();

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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

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
