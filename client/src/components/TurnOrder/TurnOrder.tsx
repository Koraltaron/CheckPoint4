import type { Characters } from "../../types/Character";
import "./TurnOrder.css";

function TurnOrder({ data }: Readonly<{ data: Characters[] }>) {
  return (
    <section className="turnorder">
      <h2>Turn Order</h2>

      {data.length ? (
        data.map((el) => {
          return (
            <article key={el.id}>
              <p>{el.name}</p>
              <p>Score d'intiative = {el.initiative_score}</p>
            </article>
          );
        })
      ) : (
        <p>Aucune donnée trouvée</p>
      )}
    </section>
  );
}

export default TurnOrder;
