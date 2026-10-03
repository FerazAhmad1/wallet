import { sequelize } from "../database/sequelize";
import { DataTypes } from "sequelize";

const Order = sequelize.define("order", {
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.ENUM(...["INR"]),
    allowNull: false,
  },
});

export default Order;
