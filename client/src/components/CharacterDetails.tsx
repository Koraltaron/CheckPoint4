import { type FormEvent, useEffect, useState } from "react";
import "./CharacterDetails.css";
import useToast from "../hooks/useToast";
import type { Characters } from "../types/Character";

function CharacterDetails({ charId }: Readonly<CharacterDetailsProps>) {
  const [character, setCharacter] = useState<Characters[] | null>(null);
  const [edit, setEdit] = useState(false);
  const { success, error } = useToast();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gamecharacter/${charId}`)
      .then((response) => response.json())
      .then((result) => setCharacter(result));
  }, [charId]);

  async function handleDelete() {
    const verification = prompt(
      "Êtes-vous sûr de vouloir supprimer ce personnage (oui/non) ?",
    );

    if (verification === "oui") {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/gamecharacter/${charId}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        success("Le personnage a bien été supprimé de la base de donnée");
      } else {
        error("Une erreur est survenue lors de la suppression");
      }
    }
  }

  async function handleEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const image = "test.png";
    const status = "vivant";
    const {
      name,
      role,
      description,
      vitalPoints,
      manaPoints,
      initiativeScore,
    } = data;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/gamecharacter/${charId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          image,
          status,
          name,
          role,
          description,
          vitalPoints,
          manaPoints,
          initiativeScore,
        }),
      },
    );
    if (response.ok) {
      success("La base de donnée a bien été mise à jour");
    } else {
      error("Une erreur est survenue lors de la modification du personnage");
    }
  }

  return (
    <section className="details">
      <img alt="/" src="/" />
      <form onSubmit={handleEdit}>
        <label htmlFor="name">Nom du personnage</label>
        <input
          name="name"
          type="text"
          placeholder="Nom du personnage"
          disabled={!edit}
          defaultValue={character?.length && character[0].name}
        />
        <label htmlFor="role">Allégeance</label>
        <select
          name="role"
          id="role"
          disabled={!edit}
          defaultValue={character?.length && character[0].role}
        >
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
          defaultValue={character?.length && character[0].vital_points}
        />
        <label htmlFor="manaPoints">Points de mana maximum</label>
        <input
          name="manaPoints"
          type="number"
          placeholder="Mana"
          min="1"
          max="50"
          disabled={!edit}
          defaultValue={character?.length && character[0].mana_points}
        />
        <label htmlFor="initiativeScore">Score d'initiative</label>
        <input
          name="initiativeScore"
          type="number"
          placeholder="Score d'initiative"
          min="1"
          max="50"
          disabled={!edit}
          defaultValue={character?.length && character[0].initiative_score}
        />
        <label htmlFor="description">Informations du personnage</label>
        <textarea
          rows={10}
          name="description"
          placeholder="Renseigner les éléments caractéristiques du personnage : âge, apparence, histoire, caractère ..."
          disabled={!edit}
          defaultValue={character?.length && character[0].description}
        />
        <button type="submit" disabled={!edit}>
          Valider
        </button>
      </form>
      <div className="button-container">
        <button type="button" onClick={handleDelete}>
          Supprimer
        </button>
        <button type="button" onClick={() => setEdit(!edit)}>
          Modifier
        </button>
      </div>
    </section>
  );
}

export default CharacterDetails;
