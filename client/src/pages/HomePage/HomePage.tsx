import { useEffect, useState } from "react";
import type { Characters } from "../../types/Character";

import "./HomePage.css";
import BattleScene from "../../components/BattleScene/BattleScene";
import CreationBattleSceneForm from "../../components/CreationBattleSceneForm/CreationBattleSceneForm";

function HomePage() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [battleScene, setBattleScene] = useState<boolean>(false); // TODO: to be replaced with a fetch of previous battle scene

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter`)
      .then((response) => response.json())
      .then((result) => setCharacters(result));
  }, []);

  return (
    <main className="homepage">
      <p>Voulez-vous créer une nouvelle partie ?</p>
      <button
        type="button"
        onClick={() => {
          setBattleScene(true);
        }}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => {
          setBattleScene(false);
        }}
      >
        Non
      </button>
      {battleScene ? (
        <BattleScene characters={characters} />
      ) : (
        <CreationBattleSceneForm />
      )}
    </main>
  );
}

export default HomePage;
