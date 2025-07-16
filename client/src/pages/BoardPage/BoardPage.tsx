import { useState } from "react";
import CharacterForm from "../../components/CharacterForm/CharacterForm";
import CharacterList from "../../components/CharacterList/CharacterList";
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
