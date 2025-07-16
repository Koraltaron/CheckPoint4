import type { Characters } from "../../types/Character";
import Character from "../Character/Character";
import TurnOrder from "../TurnOrder/TurnOrder";
import "./BattleScene.css";

interface BattleSceneProps {
  characters: Characters[];
}

function BattleScene({ characters }: BattleSceneProps) {
  return (
    <>
      {characters.length &&
        characters.map((el) => {
          return (
            <section key={el.id} className="character-container">
              <Character
                id={el.id}
                name={el.name}
                image={el.image}
                role={el.role}
                status={el.status}
                vital_points={el.vital_points}
                mana_points={el.mana_points}
              />
            </section>
          );
        })}

      <TurnOrder data={characters} />
    </>
  );
}

export default BattleScene;
