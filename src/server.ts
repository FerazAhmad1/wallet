import "./config/env";
import app from "./app";
import User from "./models/user";
import Order from "./models/order";
import Payment from "./models/payment";

import { sequelize } from "./database/sequelize";

const PORT = 8000;

async function startServer() {
  try {
    await sequelize.authenticate();
    User.hasOne(Order);
    Order.belongsTo(User);
    Order.hasMany(Payment);
    Payment.belongsTo(Order);
    await sequelize.sync();
    console.log("Database is connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();
