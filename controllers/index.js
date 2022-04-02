const express = require("express");

const apiRouter = require("./api");
const homeRouter = require("./homeRoutes");
// const { Student } = require("../models");
// const withAuth = require("../utils/withAuth");

const router = express.Router();

router.use("/api", apiRouter);
router.use("/", homeRouter);

// router.get("/profile/", withAuth, async (req, res) => {
//   const studentData = await Student.findByPk(req.session.studentId);

//   const student = studentData.get({ plain: true });

//   res.json({ student });

//   //   res.render("profile", { student });
// });

module.exports = router;
