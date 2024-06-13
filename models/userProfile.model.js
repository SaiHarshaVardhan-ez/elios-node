import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const userProfile = sequelize.define("employeeProfiles", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  profilePic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default userProfile;
