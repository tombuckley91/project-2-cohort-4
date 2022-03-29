const express = require("express");
const { Hiring } = require("../../../models/index");

const router = express.Router();

// /api/hiring

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  try {
    const hiringData = await Hiring.create({
      hiringCost: req.body.hiringCost,
      studentId: req.body.studentId,
      carId: req.body.carId,
    });

    res.json(hiringData.get({ plain: true }));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
