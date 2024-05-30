import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routesUser from "./routes/user.js";
import routesCategories from "./routes/categories.js";
import routesFolders from "./routes/folders.js";
import routesTask from "./routes/task.js";
import routesAuth from "./routes/auth.js";
import routesReloadPassword from "./routes/changePassword.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (_req, res) => {
  res.json("Bienvenido a la API de la aplicación de tareas");
});

app.use("/api/users", routesUser);
app.use("/api/categories", routesCategories);
app.use("/api/folders", routesFolders);
app.use("/api/tasks", routesTask);
app.use("/api/auth", routesAuth);
app.use("/api/reload-password", routesReloadPassword);

app.get("*", (_req, res) => {
  res.status(404).json({ message: "Not found" });
});

const port = process.env.PORT ?? 3500;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
