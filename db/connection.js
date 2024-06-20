import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const env = process.env;

const db = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: "mysql",
  port: env.DB_PORT,
});

export default db;
