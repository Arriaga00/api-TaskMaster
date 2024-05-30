import { Categories, Tasks } from "../relations/relations.js";

export const getCategories = async (req, res) => {
  const { id } = req.params;
  const categories = await Categories.findAll({
    where: {
      id_folder: id,
    },
    include: [
      {
        model: Tasks,
        as: "tasks",
        attributes: [
          "id",
          "id_user",
          "id_categories",
          "title",
          "description",
          "status",
          "priority",
          "tag",
          "due_date",
        ],
      },
    ],
  });
  res.json(categories);
};

export const saveCategory = async (req, res) => {
  const { name, id } = req.body;
  const category = await Categories.create({ name, id_folder: id });
  res.json({
    msg: `la categoria ${name} ha sido creada correctamente`,
    category,
  });
};

export const updateCategory = async (req, res) => {
  const { id, name } = req.body;
  const category = await Categories.update(
    { name },
    { where: { id_folder: id } }
  );
  res.status(200).json({
    msg: `la categoria con el id: ${id} ha sido actualizada correctamente`,
    category,
  });
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Categories.destroy({ where: { id_folder: id } });
  if (!category) {
    return res.status(404).json({
      msg: `la categoria con el id: ${id} no existe`,
    });
  }
  res.status(200).json({
    msg: `la categoria con el id: ${id} ha sido eliminada correctamente`,
    category,
  });
};
