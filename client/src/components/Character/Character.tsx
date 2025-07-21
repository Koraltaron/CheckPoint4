import { type KeyboardEvent, useState } from "react";
import type { Characters } from "../../types/Character";
import "./Character.css";

function Character({
  name,
  image,
  role,
  status,
  vital_points,
  mana_points,
}: Readonly<Characters>) {
  const [vital, setVital] = useState(vital_points);
  const [mana, setMana] = useState(mana_points);

  function handlePVKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const damages = e.currentTarget.value;
      if (vital > 0) {
        if (Number(damages) < vital) {
          setVital(vital - Number(damages));
        } else {
          setVital(0);
        }
      } else {
        setVital(0);
      }

      e.currentTarget.value = "";
    }
  }

  function handleManaKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const manaUsed = e.currentTarget.value;
      if (mana > 0) {
        if (Number(manaUsed) < mana) {
          setMana(mana - Number(manaUsed));
        } else {
          setMana(0);
        }
      } else {
        setMana(0);
      }
      e.currentTarget.value = "";
    }
  }

  return (
    <section className="character">
      <section className="identity">
        <img alt="miniature du personnage" src={image} />
        <h3>{name}</h3>
        <p>Role : {role}</p>
        <p>Statut : {vital === 0 ? "K.O." : status}</p>
      </section>
      <section className="ressources">
        <label htmlFor="vitalPoints">
          PV = {vital}/{vital_points}
        </label>
        <input
          name="vitalPoints"
          type="number"
          placeholder="Dégâts subis"
          onKeyDown={handlePVKeyDown}
          className={vital === 0 ? "out-ressource" : "fine"}
          disabled={vital === 0}
        />
        <label htmlFor="manaPoints">
          Mana = {mana}/{mana_points}
        </label>
        <input
          name="manaPoints"
          type="number"
          placeholder="Mana dépensé"
          onKeyDown={handleManaKeyDown}
          className={mana === 0 ? "out-ressource" : "fine"}
          disabled={mana === 0}
        />
      </section>
    </section>
  );
}

export default Character;
