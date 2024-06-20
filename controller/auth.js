import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
// import fs from "node:fs";
// import path from "node:path";
import { differenceInMinutes } from "date-fns";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }

    const isValid = await bcrypt.compare(password, user.dataValues.password);

    const currentTime = new Date();
    const blockedTime = new Date(user.last_failed_login);
    const minuteDifference = differenceInMinutes(currentTime, blockedTime);

    if (user.blocked) {
      if (minuteDifference >= 3) {
        await User.update(
          { blocked: false, failed_login: 0 },
          { where: { email } }
        );
        throw new Error("Usuario desbloqueado");
      } else {
        res.status(401).json({
          msg: `El usuario está bloqueado, póngase en contacto con el servicio de atención al cliente `,
        });
      }
      return true;
    }

    if (!isValid) {
      let failed_login = user.failed_login || 0;
      failed_login++;

      const currentDate = new Date().toISOString();
      if (failed_login >= 120) {
        await User.update(
          { blocked: true, last_failed_login: currentDate },
          { where: { email } }
        );

        res.status(404).json({
          msg: `El usuario ha sido bloqueado por demasiados intentos fallidos.`,
        });
        return;
      } else {
        await User.update(
          { failed_login: 0, last_failed_login: currentDate },
          { where: { email } }
        );
        res.status(404).json({ msg: `El Correo/contraseña no es correcto` });
        return;
      }
    }

    const payload = { id: user.dataValues.id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // const filePath = `uploads/${user.dataValues.email}.png`;
    // const fileBuffer = fs.readFileSync(filePath);

    return res.status(200).json({
      user: {
        id: user.dataValues.id,
        email: user.dataValues.email,
        names: user.dataValues.names,
        // image: fileBuffer.toString("base64") || null,
      },
      token,
    });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};
