import type { Characters } from "../pages/HomePage";
import "./TurnOrder.css";

function TurnOrder({ data }: { data: Characters[] }) {
  console.warn(data);
  return (
    <section className="turnorder">
      <h2>Turn Order</h2>

      {data.length ? (
        data.map((el) => {
          return (
            <article key={el.id}>
              <p>{el.name}</p>
              <p>{el.initiative_score}</p>
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
