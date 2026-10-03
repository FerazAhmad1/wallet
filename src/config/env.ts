import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const required = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
};

const ENV_VARIABLES = {
  DB_HOST: required(process.env.DB_HOST, "DB_HOST"),
  DB_NAME: required(process.env.DB_NAME, "DB_NAME"),
  DB_PORT: required(process.env.DB_PORT, "DB_PORT"),
  DB_USER: required(process.env.DB_USER, "DB_USER"),

  // Password is intentionally optional for your local PostgreSQL setup
  DB_PASSWORD: process.env.DB_PASSWORD,
};

export default ENV_VARIABLES;
