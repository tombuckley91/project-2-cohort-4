const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hiring extends Model {}

Hiring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hiringCost: {
      // @TODO - affirm this is the right data type
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "student",
        key: "id",
        unique: false,
      },
    },
    carId: {
      type: DataTypes.INTEGER,
      references: {
        model: "car",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "hiring",
    underscored: true,
  }
);

module.exports = Hiring;
