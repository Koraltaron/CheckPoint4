import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";
import type { User } from "../../types/modules/User";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");
    return rows as User[];
  }

  async readByEmail(mail: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT password, mail FROM user WHERE mail = ?",
      [mail],
    );

    return rows[0] as User;
  }

  async create(user: Omit<User, "id">) {
    const { mail, password, nickname } = user;
    const [result] = await databaseClient.query<Result>(
      "insert into user (mail, password, nickname) values (?, ?, ?)",
      [mail, password, nickname],
    );

    return result.insertId;
  }
}

export default new UserRepository();
