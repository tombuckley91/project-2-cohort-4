const express = require("express");
const carsRouter = require("./cars");
const studentsRouter = require("./students");
const hiringsRouter = require("./hirings");

const router = express.Router();

router.use("/cars", carsRouter);
router.use("/students", studentsRouter);
router.use("/hirings", hiringsRouter);

module.exports = router;
