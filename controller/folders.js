import { Categories, Folder } from "../relations/relations.js";

export const getFolders = async (req, res) => {
  const { id } = req.params;
  const folders = await Folder.findAll({
    where: {
      id_user: id,
    },
    attributes: ["id", "name", "id_user"],
    include: [
      {
        model: Categories,
        as: "categories",
        attributes: ["name"],
      },
    ],
  });

  if (!folders) return res.status(404).json({ message: "Folder not found" });
  res.json(folders);
};

export const saveFolder = async (req, res) => {
  const { id, name } = req.body;

  const folder = await Folder.create({ name, id_user: id });

  if (!folder) return res.status(404).json({ message: "Folder not found" });

  res.status(201).json(folder);
};

export const updateFolder = async (req, res) => {
  const { id, name } = req.body;

  const folder = await Folder.update({ name }, { where: { id_user: id } });

  if (!folder) return res.status(404).json({ message: "Folder not found" });

  res.json(folder);
};

export const deleteFolder = async (req, res) => {
  const { id } = req.params;

  const folder = await Folder.destroy({ where: { id } });

  if (!folder) return res.status(404).json({ message: "Folder not found" });

  res.json(folder);
};
