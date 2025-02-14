import { useState } from "react";
import CharacterForm from "../components/CharacterForm";
import CharacterList from "../components/CharacterList";
import "./BoardPage.css";

function BoardPage() {
  const [refresh, setRefresh] = useState(false);
  return (
    <main className="board-page">
      <CharacterForm />
      <CharacterList refresh={refresh} setRefresh={setRefresh} />
    </main>
  );
}

export default BoardPage;
