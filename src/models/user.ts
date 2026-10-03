import { sequelize } from "../database/sequelize";
import { DataTypes } from "sequelize";
const USER = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
  },
});

export default USER;
