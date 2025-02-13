import { useEffect, useState } from "react";
import "./CharacterDetails.css";
import type { Characters } from "../pages/HomePage";

interface CharacterDetailsProps {
  charId: number;
}

function CharacterDetails({ charId }: Readonly<CharacterDetailsProps>) {
  const [character, setCharacter] = useState<Characters | null>(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter/${charId}`)
      .then((response) => response.json())
      .then((result) => setCharacter(result));
  }, [charId]);

  return (
    <section className="details">
      <img alt="/" src="/" />
      <form>
        <label htmlFor="name">Nom du personnage</label>
        <input
          name="name"
          type="text"
          placeholder="Nom du personnage"
          disabled={!edit}
          defaultValue={character ? character.name : ""}
        />
        <label htmlFor="role">Allégeance</label>
        <select name="role" id="role" disabled={!edit}>
          <option value="">--Allégeance du personnage--</option>
          <option value="ally">allié</option>
          <option value="ennemy">ennemi</option>
        </select>
        <label htmlFor="vitalPoints">Points de vie maximum</label>
        <input
          name="vitalPoints"
          type="number"
          placeholder="PV"
          min="15"
          max="100"
          disabled={!edit}
        />
        <label htmlFor="manaPoints">Points de mana maximum</label>
        <input
          name="manaPoints"
          type="number"
          placeholder="Mana"
          min="1"
          max="50"
          disabled={!edit}
        />
        <label htmlFor="initiativeScore">Score d'initiative</label>
        <input
          name="initiativeScore"
          type="number"
          placeholder="Score d'initiative"
          min="1"
          max="50"
          disabled={!edit}
        />
        <label htmlFor="description">Informations du personnage</label>
        <textarea
          rows={10}
          name="description"
          placeholder="Renseigner les éléments caractéristiques du personnage : âge, apparence, histoire, caractère ..."
          disabled={!edit}
        />
        <button type="submit">Valider</button>
      </form>
      <div className="button-container">
        <button type="button">Supprimer</button>
        <button type="button" onClick={() => setEdit(!edit)}>
          Modifier
        </button>
      </div>
    </section>
  );
}

export default CharacterDetails;
