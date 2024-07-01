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
  base64Image: {
    type: DataTypes.STRING(400000),
    allowNull: true,
  },
});

export default userProfile;
