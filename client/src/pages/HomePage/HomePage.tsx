import { useEffect, useState } from "react";
import type { Characters } from "../../types/Character";

import "./HomePage.css";
import BattleScene from "../../components/BattleScene/BattleScene";

function HomePage() {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  return (
    <main className="homepage">
      <BattleScene characters={characters} />
    </main>
  );
}

export default HomePage;
