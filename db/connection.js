import { Sequelize } from "sequelize";

const db = new Sequelize("taskmaster", "root", "Arriaga00", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export default db;
