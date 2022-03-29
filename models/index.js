const Student = require("./Student");
const Car = require("./Car");
const Hiring = require("./Hiring");

Student.belongsToMany(Car, {
  through: {
    model: Hiring,
    unique: false,
  },
  as: "hired_cars",
});

Car.belongsToMany(Student, {
  through: {
    model: Hiring,
    unique: false,
  },
  as: "student_drivers",
});

module.exports = { Student, Car, Hiring };
