import type { RequestHandler } from "express";
import gameCharacterRepository from "./gameCharacterRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const gameCharacters = await gameCharacterRepository.readAll();
    if (gameCharacters) {
      res.status(201).json(gameCharacters);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gameCharacter = await gameCharacterRepository.readById(id);
    if (gameCharacter) {
      res.status(201).json(gameCharacter);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
