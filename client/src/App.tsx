import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <img
        className="background"
        src="https://www.sitegeek.fr/wp-content/uploads/2016/09/Jeu-de-r%C3%B4le-papier-860x570.jpg"
        alt="background font"
      />
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
