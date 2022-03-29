const express = require("express");
const { Car } = require("../../../models");

const router = express.Router();

// /api/cars

router.get("/", async (req, res) => {
  try {
    const carsData = await Car.findAll();

    const cars = carsData.map((car) => car.get({ plain: true }));

    res.json(cars);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const carData = await Car.create({
      make: req.body.make,
      model: req.body.model,
      registration: req.body.registration,
    });

    res.json(carData.get({ plain: true }));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
