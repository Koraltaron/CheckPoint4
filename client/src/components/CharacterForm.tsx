import "./CharacterForm.css";

function CharacterForm() {
  return (
    <section className="character-form">
      <h2>Création de personnage</h2>
      <img
        alt="représentation du profil"
        src="https://www.jdr-odyssee.net/odyssee/univers/lib/exe/fetch.php/classes/amazone.jpg?w=300&tok=9e6671"
      />
      <form>
        <label htmlFor="name">Nom du personnage</label>
        <input name="name" type="text" placeholder="Nom du personnage" />
        <label htmlFor="role">Allégeance</label>
        <input name="role" type="email" placeholder="Allié/ennemi ?" />
        <label htmlFor="vitalPoints">Points de vie maximum</label>
        <input name="vitalPoints" type="number" placeholder="PV" />
        <label htmlFor="manaPoints">Points de mana maximum</label>
        <input name="manaPoints" type="number" placeholder="Mana" />
        <label htmlFor="initiativeScore">Score d'initiative</label>
        <input
          name="initiativeScore"
          type="number"
          placeholder="Score d'initiative"
        />
        <label htmlFor="description">Informations du personnage</label>
        <textarea
          rows={10}
          name="description"
          placeholder="Renseigner les éléments caractéristiques du personnage : âge, apparence, histoire, caractère ..."
        />
        <button type="submit">Valider</button>
      </form>
    </section>
  );
}

export default CharacterForm;
