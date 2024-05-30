import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const Task = db.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_categories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      allowNull: false,
      validate: {
        isIn: {
          args: [["pending", "done", "cancelled"]],
          msg: "The status must be pending, done or cancelled",
        },
      },
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: {
          args: [["low", "medium", "high", "urgent"]],
          msg: "The priority must be low, medium, high or urgent",
        },
      },
    },
    tag: {
      type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "task",
  }
);

export default Task;
