import { User, Folder, Categories } from "../relations/relations.js";
import bcrypt from "bcryptjs";
// import saveImage from "../middleware/multer.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return res.status(404).json({
      msg: `el usuario con el id: ${id} no existe`,
    });
  }

  res.status(200).json({
    id: user.id,
    names: user.names,
    email: user.email,
  });
};

export const saveUser = async (req, res) => {
  const { names, email, password } = req.body;
  // saveImage(req.file, email);
  // res.status(200).json({ msg: "la imagen ha sido creada correctamente" });

  const userFind = await User.findOne({ where: { email } });

  if (userFind) {
    return res.status(400).json({
      msg: `el usuario con el email: ${email} ya existe`,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    names,
    email,
    password: hashedPassword,
    confirm_password: password,
  });

  const folder = await Folder.create({
    name: "Principal",
    id_user: user.dataValues.id,
  });
  const category = await Categories.create({
    name: "General",
    id_folder: folder.dataValues.id,
  });

  res.json({
    msg: `el usuario  ${user.names} ha sido creado correctamente`,
  });
};

export const updateUser = async (req, res) => {
  const { id, names, email, password } = req.body;

  const userFront = await User.findOne({ where: { id } });

  if (password === undefined || password === null || password === "") {
    password = userFront.password;
  }

  if (!userFront) {
    res.status(400).json({
      msg: `el usuario con el id: ${id} no existe`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.update(
    { names, email, password: hashedPassword, confirm_password: password },
    { where: { id } }
  );

  res.status(200).json({
    msg: `el usuario con el id: ${id} ha sido actualizado correctamente`,
    user: {
      id: userFront.id,
      names: userFront.names,
      email: userFront.email,
    },
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
