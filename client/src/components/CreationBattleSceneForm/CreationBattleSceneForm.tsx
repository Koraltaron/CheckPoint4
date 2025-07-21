import { DiamondPlus, X } from "lucide-react";
import { useState } from "react";
import "./CreationBattleSceneForm.css";

function CreationBattleSceneForm() {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <section className="creation-battle-scene-form">
      <p>Nouvelle bataille !</p>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        {showForm ? <X /> : <DiamondPlus />}
      </button>
      {showForm && (
        <form>
          <label htmlFor="battle-name">Nom de votre bataille</label>
          <input
            type="text"
            placeholder="Ex : Bataille d'Erébor"
            id="battle-name"
          />

          <button type="submit">Valider la création de la bataille</button>
        </form>
      )}
    </section>
  );
}

export default CreationBattleSceneForm;
