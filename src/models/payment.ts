import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize";

const Payment = sequelize.define("payment", {
  status: {
    type: DataTypes.ENUM(...["CREATED", "AUTHORIZED", "CAPTURED", "FAILED"]),
    allowNull: true,
  },
  razorpay_order_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Payment;
