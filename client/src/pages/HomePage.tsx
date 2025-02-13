// import { MouseEvent, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Character from "../components/Character";
import TurnOrder from "../components/TurnOrder";
import "./HomePage.css";
import type { Characters } from "../types/Character";

function HomePage() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  // const [charChoice, setCharChoice] = useState(false);
  // const [newChar, setNewChar] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  // function handleClick(e: MouseEvent<HTMLButtonElement>) {
  //   const character = e.currentTarget.value;
  //   const findChar = characters.find((el) => character === el.name);
  //   if (findChar) {
  //     setNewChar(findChar);
  //   }
  // }

  return (
    <main className="homepage">
      <section>
        <h2>Liste des personnages</h2>
        {/* <button type="button" onClick={() => setCharChoice(!charChoice)}>
          {charChoice ? "Choisis un personnage" : "Ajoute un personnage"}
        </button>
        {charChoice &&
          characters.map((el) => {
            return (
              <button
                type="button"
                key={el.id}
                onClick={handleClick}
                value={el.name}
              >
                {el.name}
              </button>
            );
          })} */}

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
      </section>

      <TurnOrder data={characters} />
    </main>
  );
}

export default HomePage;
