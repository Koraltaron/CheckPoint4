import { type MouseEvent, useEffect, useState } from "react";
import type { Characters } from "../types/Character";
import "./CharacterList.css";
import CharacterDetails from "./CharacterDetails";

function CharacterList() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [details, setDetails] = useState(false);
  const [charName, setCharName] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const character = e.currentTarget.value;
    const findChar = characters.find((el) => character === el.name);
    if (findChar) {
      setCharName(findChar.name);
      if (charName.includes(character)) {
        setDetails(!details);
      }
    }
  }

  return (
    <section className="character-list">
      <h2>Liste des personnages</h2>
      {characters.length ? (
        characters.map((el) => {
          return (
            <article key={el.id}>
              <p>{el.name}</p>
              <button type="button" onClick={handleClick} value={el.name}>
                {details ? "Moins de détails" : "Plus de détails"}
              </button>
              {charName.includes(el.name) && details && (
                <CharacterDetails charId={el.id} />
              )}
            </article>
          );
        })
      ) : (
        <p>Aucun personnage trouvé</p>
      )}
    </section>
  );
}

export default CharacterList;
