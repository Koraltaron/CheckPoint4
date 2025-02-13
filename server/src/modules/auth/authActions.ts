import type { RequestHandler } from "express";
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { password, mail } = req.body;

    const user = await userRepository.readByEmail(mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    if (user.password === password) {
      res.sendStatus(200);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

export default { login };
