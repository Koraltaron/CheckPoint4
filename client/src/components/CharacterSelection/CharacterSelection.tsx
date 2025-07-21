import { X } from "lucide-react";
import type { Characters } from "../../types/Character";

import "./CharacterSelection.css";

interface CharacterSelectionProps {
  showCharacters: boolean;
  setShowCharacters: (value: boolean) => void;
  characters: Characters[];
  setSelectedName: (value: string | null) => void;
  setCharacterName: (value: string[]) => void;
}

function CharacterSelection({
  showCharacters,
  setShowCharacters,
  characters,
  setSelectedName,
  setCharacterName,
}: CharacterSelectionProps) {
  return (
    <div className="selection">
      <button
        type="button"
        onClick={() => {
          setShowCharacters(!showCharacters);
        }}
      >
        Show characters
      </button>
      {characters.length &&
        characters.map((el) => {
          return (
            <button
              type="button"
              key={el.id}
              className={showCharacters ? "visible-button" : "invisible-button"}
              onClick={() => {
                setSelectedName(el.name);
              }}
            >
              {el.name}
            </button>
          );
        })}

      {showCharacters && (
        <button
          type="button"
          onClick={() => {
            setCharacterName([]);
            setSelectedName(null);
          }}
        >
          <X color="black" size={20} />
        </button>
      )}
    </div>
  );
}

export default CharacterSelection;
