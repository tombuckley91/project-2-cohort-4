const express = require("express");
const petsRouter = require("./pets");
const studentsRouter = require("./students");

const router = express.Router();

router.use("/pets", petsRouter);
router.use("/students", studentsRouter);

module.exports = router;
