const express = require("express");
const router = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(() => {
  console.log(`App listening on port: ${PORT}`);
});
