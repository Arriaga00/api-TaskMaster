import { Tasks } from "../relations/relations.js";

export const getTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Tasks.findAll({
    where: {
      id_user: id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "status",
      "priority",
      "tag",
      "due_date",
      "id_categories",
    ],
  });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const {
    id_user,
    id_categories,
    title,
    description,
    status,
    priority,
    tag,
    due_date,
  } = req.body;
  const task = await Tasks.create({
    id_user,
    id_categories,
    title,
    description,
    status,
    priority,
    tag,
    due_date,
  });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const { id, title, description, status, priority, tag, due_date } = req.body;
  const task = await Tasks.update(
    {
      title,
      description,
      status,
      priority,
      tag,
      due_date,
    },
    { where: { id } }
  );
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Tasks.destroy({ where: { id } });

  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};
