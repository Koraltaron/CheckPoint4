import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();
    if (users) {
      res.status(201).json(users);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const { mail, password, nickname } = req.body;

    const insertId = await userRepository.create({
      mail,
      password,
      nickname,
    });
    res.status(201).json({ insertId });
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(406).send("Cette adresse mail existe déjà");
    } else {
      res.status(404);
      next(err);
    }
  }
};

export default { browse, add };
