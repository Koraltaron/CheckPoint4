import type { FormEvent } from "react";
import useToast from "../../hooks/useToast";

import "./CharacterForm.css";

function CharacterForm() {
  const { success, error } = useToast();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/gamecharacter`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.ok) {
      success("Le personnage a bien été créé !");
    } else {
      error("Une erreure s'est produite");
    }
  }

  return (
    <section className="character-form">
      <h2>Création de personnage</h2>
      <img
        alt="représentation du profil"
        src="https://www.jdr-odyssee.net/odyssee/univers/lib/exe/fetch.php/classes/amazone.jpg?w=300&tok=9e6671"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom du personnage</label>
        <input name="name" type="text" placeholder="Nom du personnage" />
        <label htmlFor="role">Allégeance</label>
        <select name="role" id="role">
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
        />
        <label htmlFor="manaPoints">Points de mana maximum</label>
        <input
          name="manaPoints"
          type="number"
          placeholder="Mana"
          min="1"
          max="50"
        />
        <label htmlFor="initiativeScore">Score d'initiative</label>
        <input
          name="initiativeScore"
          type="number"
          placeholder="Score d'initiative"
          min="1"
          max="50"
        />
        <label htmlFor="description">Informations du personnage</label>
        <textarea
          rows={50}
          name="description"
          placeholder="Renseigner les éléments caractéristiques du personnage : âge, apparence, histoire, caractère ..."
        />
        <button type="submit">Valider</button>
      </form>
    </section>
  );
}

export default CharacterForm;
