const express = require("express");
const { Student, Car, Hiring } = require("../models");
const withAuth = require("../utils/withAuth");

const router = express.Router();

router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    const { name } = (await Student.findByPk(req.session.studentId)).get({
      plain: true,
    });

    return res.render("homepage", {
      loggedIn: true,
      name,
    });
  }

  return res.render("homepage", {
    loggedIn: false,
  });
});

router.get("/dashboard", withAuth, async (req, res) => {
  const studentData = await Student.findByPk(req.session.studentId, {
    include: {
      model: Car,
      as: "hired_cars",
    },
  });

  const student = studentData.get({ plain: true });

  console.log(JSON.stringify(student));

  const { password, hired_cars, ...rest } = studentData.get({
    plain: true,
  });

  return res.render("dashboard", {
    loggedIn: true,
    student: rest,
    hirings: hired_cars,
  });
});

module.exports = router;
