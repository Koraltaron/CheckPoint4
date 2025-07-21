import type { Characters } from "../../types/Character";
import "./TurnOrder.css";

function TurnOrder({
  filteredCharacterList,
}: Readonly<{ filteredCharacterList: Characters[] }>) {
  return (
    <section className="turnorder">
      <h2>Turn Order</h2>

      {filteredCharacterList.length ? (
        filteredCharacterList.map((el) => {
          return (
            <article key={el.id}>
              <p>{el.name}</p>
              <p>Score d'intiative = {el.initiative_score}</p>
            </article>
          );
        })
      ) : (
        <p>Aucun personnage n'a été sélectionné !</p>
      )}
    </section>
  );
}

export default TurnOrder;
