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

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const affectedRows = await gameCharacterRepository.delete(id);
    if (affectedRows) {
      res.status(201).json({ affectedRows });
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newGameCharacter = {
      name: req.body.name,
      role: req.body.role,
      image: req.body.image,
      status: req.body.status,
      vital_points: req.body.vitalPoints,
      mana_points: req.body.manaPoints,
      initiative_score: req.body.initiativeScore,
      description: req.body.description,
    };

    const insertId = await gameCharacterRepository.create(newGameCharacter);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const {
      name,
      role,
      image,
      status,
      vitalPoints,
      manaPoints,
      initiativeScore,
      description,
    } = req.body;
    const id = Number(req.params.id);

    const affectedRows = await gameCharacterRepository.update({
      name,
      role,
      image,
      status,
      vitalPoints,
      manaPoints,
      initiativeScore,
      description,
      id,
    });
    res.status(201).json({ affectedRows });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, destroy, edit };
