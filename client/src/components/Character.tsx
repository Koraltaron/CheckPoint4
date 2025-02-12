import type { Characters } from "../pages/HomePage";
import "./Character.css";

function Character({
  name,
  image,
  role,
  status,
  vital_points,
  mana_points,
}: Readonly<Characters>) {
  return (
    <section className="character">
      <img alt="miniature du personnage" src={image} />
      <section className="identity">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{status}</p>
      </section>
      <section className="ressources">
        <p>PV = {vital_points}</p>
        <p>Mana = {mana_points}</p>
      </section>
    </section>
  );
}

export default Character;
