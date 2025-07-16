// import { MouseEvent, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Character from "../../components/Character/Character";
import TurnOrder from "../../components/TurnOrder/TurnOrder";

import type { Characters } from "../../types/Character";

import "./HomePage.css";

function HomePage() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  return (
    <main className="homepage">
      <section>
        <h2>Liste des personnages</h2>

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
