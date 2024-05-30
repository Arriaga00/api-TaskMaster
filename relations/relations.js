import User from "../models/user.js";
import Folder from "../models/folders.js";
import Categories from "../models/categories.js";
import Tasks from "../models/task.js";

Folder.belongsTo(User, { foreignKey: "id_user", as: "user" });
// Folder.hasMany(Tasks, { foreignKey: "id_folder" });
Folder.hasMany(Categories, { foreignKey: "id_folder", as: "categories" });

Categories.belongsTo(Folder, { foreignKey: "id_folder", as: "categories" });
Categories.hasMany(Tasks, { foreignKey: "id_categories", as: "tasks" });

Tasks.belongsTo(User, { foreignKey: "id_user" });
// Tasks.belongsTo(Folder, { foreignKey: "id_folder" });
Tasks.belongsTo(Categories, { foreignKey: "id_categories" });

export { User, Folder, Categories, Tasks };
