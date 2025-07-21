import { useEffect, useState } from "react";
import type { Characters } from "../../types/Character";
import Character from "../Character/Character";
import TurnOrder from "../TurnOrder/TurnOrder";
import "./BattleScene.css";
import { X } from "lucide-react";
import CharacterSelection from "../CharacterSelection/CharacterSelection";

interface BattleSceneProps {
  characters: Characters[];
}

function BattleScene({ characters }: BattleSceneProps) {
  const [showCharacters, setShowCharacters] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [characterName, setCharacterName] = useState<string[]>([]);

  useEffect(() => {
    if (selectedName && !characterName.includes(selectedName)) {
      setCharacterName((prev) => [...prev, selectedName]);
    }
  }, [selectedName, characterName]);

  const filteredCharacterList =
    characterName.length > 0
      ? characters.filter((el) => characterName.includes(el.name))
      : [];

  return (
    <>
      <section className="battle-scene">
        <CharacterSelection
          showCharacters={showCharacters}
          setShowCharacters={setShowCharacters}
          characters={characters}
          setSelectedName={setSelectedName}
          setCharacterName={setCharacterName}
        />
        <div className="character-list-div">
          <h2>Liste des personnages</h2>
          {filteredCharacterList.length > 0 &&
            filteredCharacterList.map((el) => {
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
                  <button
                    type="button"
                    onClick={() => {
                      setCharacterName((prev) =>
                        prev.filter((name) => name !== el.name),
                      );
                      if (selectedName === el.name) {
                        setSelectedName(null);
                      }
                    }}
                  >
                    <X color="black" size={20} />
                  </button>
                </section>
              );
            })}
        </div>
        <TurnOrder filteredCharacterList={filteredCharacterList} />
      </section>
    </>
  );
}

export default BattleScene;
