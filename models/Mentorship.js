const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Mentorship = sequelize.define("Mentorship", {
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mentorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Mentorship;