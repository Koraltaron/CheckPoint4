import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";
import type { GameCharacter } from "../../types/modules/GameCharacter";

class GameCharacterRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from gamecharacter",
    );
    return rows as GameCharacter[];
  }

  async readById(id: string) {
    const [row] = await databaseClient.query<Rows>(
      "select * from gamecharacter where id = ?",
      [id],
    );
    return row as GameCharacter[];
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>(
      "delete from gamecharacter where id = ?",
      [id],
    );
    return result.affectedRows;
  }

  async create(character: Omit<GameCharacter, "id">) {
    const {
      name,
      role,
      image,
      status,
      vital_points,
      mana_points,
      initiative_score,
      description,
    } = character;
    const [result] = await databaseClient.query<Result>(
      "insert into gamecharacter (name, role, image, status, vital_points, mana_points, initiative_score, description) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        role,
        image,
        status,
        vital_points,
        mana_points,
        initiative_score,
        description,
      ],
    );

    return result.insertId;
  }
}

export default new GameCharacterRepository();
