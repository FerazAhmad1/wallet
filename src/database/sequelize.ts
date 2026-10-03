import { Sequelize } from "sequelize";
import ENV_VARIABLES from "../config/env";
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = ENV_VARIABLES;
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "postgres",
  logging: console.log,
});
