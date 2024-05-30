import { User } from "../relations/relations.js";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND);

export const changePassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ msg: "El usuario no existe" });
  }

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [`${user.email}`],
    subject: "Cambio de contraseña",
    html: "<strong>Aqui puedes cambiar tu contraseña : url</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
};
