const express = require("express");
const { Student, Car, Hiring } = require("../../../models/index");

const router = express.Router();

// /api/students

router.get("/", async (req, res) => {
  try {
    const studentsData = await Student.findAll();

    const students = studentsData.map((student) =>
      student.get({ plain: true })
    );

    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const studentData = await Student.findByPk(studentId, {
      include: [
        {
          model: Car,
          through: Hiring,
          as: "hired_cars",
        },
      ],
    });

    res.json(studentData.get({ plain: true }));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const studentData = await Student.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.json(studentData.get({ plain: true }));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
