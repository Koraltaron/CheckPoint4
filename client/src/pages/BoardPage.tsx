import CharacterForm from "../components/CharacterForm";
import CharacterList from "../components/CharacterList";
import "./BoardPage.css";

function BoardPage() {
  return (
    <main className="board-page">
      <CharacterForm />
      <CharacterList />
    </main>
  );
}

export default BoardPage;
