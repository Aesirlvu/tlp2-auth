import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

export const generarJwt = async (userId) => {
  const payload = { userId };

  try {
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "4h",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};
