import { useEffect, useState } from "react";
import Character from "../components/Character";
import TurnOrder from "../components/TurnOrder";
import "./HomePage.css";

export interface Characters {
  id?: number;
  name: string;
  image: string;
  role: string;
  status: string;
  vital_points: number;
  mana_points: number;
  initiative_score?: number;
  description?: string;
}

function HomePage() {
  const [characters, setCharacters] = useState<Characters[] | []>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  return (
    <main className="homepage">
      <section>
        <h2>Liste des personnages</h2>
        {characters.length ? (
          characters.map((el) => (
            <Character
              key={el.id}
              name={el.name}
              image={el.image}
              role={el.role}
              status={el.status}
              vital_points={el.vital_points}
              mana_points={el.mana_points}
            />
          ))
        ) : (
          <p>Aucun personnage n'a été chargé</p>
        )}
      </section>

      <TurnOrder />
    </main>
  );
}

export default HomePage;
