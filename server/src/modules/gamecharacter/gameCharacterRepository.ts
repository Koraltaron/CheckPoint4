import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

interface GameCharacter {
  id: number;
  name: string;
  role: string;
  image: string;
  status: string;
  vital_points: number;
  mana_points: number;
  initiative_score: number;
  description: string;
}

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
