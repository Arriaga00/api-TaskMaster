import { User } from "../relations/relations.js";
import bcrypt from "bcryptjs";
import saveImage from "../middleware/multer.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const saveUser = async (req, res) => {
  const { names, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  // saveImage(req.file, email);
  // res.status(200).json({ msg: "la imagen ha sido creada correctamente" });

  const user = await User.create({
    names,
    email,
    password: hashedPassword,
    confirm_password: password,
  });
  res.json({ msg: `el usuario  ${user.names} ha sido creado correctamente` });
};

export const updateUser = async (req, res) => {
  const { id, names, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.update(
    { names, email, password: hashedPassword, confirm_password: password },
    { where: { id } }
  );

  res.status(200).json({
    msg: `el usuario con el id: ${id} ha sido actualizado correctamente`,
    user,
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.destroy({ where: { id } });

  if (!user) {
    return res.status(404).json({
      msg: `el usuario con el id: ${id} no existe`,
    });
  }

  res.status(200).json({
    msg: `el usuario con el id: ${id} ha sido eliminado correctamente`,
    user,
  });
};
