const express = require("express");

const router = express.Router();

// /api/pets

router.get("/", (req, res) => {
  // Grab all pets
  res.json({ breed: "jack russel", name: "Jack" });
});

module.exports = router;
