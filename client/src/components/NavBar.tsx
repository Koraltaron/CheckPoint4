import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <img
          alt="logo de l'application"
          src="https://club-jdr.fr/wp-content/uploads/2021/12/jdr.png"
        />
      </Link>
      <h1>JDR Manager</h1>
      <nav>
        <NavLink to="/">Gestionnaire</NavLink>
        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/board">Création</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
