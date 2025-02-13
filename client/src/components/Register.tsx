import type { FormEvent } from "react";
import "./Register.css";
import type { LoginProps } from "../types/LoginProps";

function Register({ setIsRegistered }: Readonly<LoginProps>) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (data.confirmation !== data.password) {
      alert("Les mots de passe doivent correspondre");
    } else if (data.conditions !== "on") {
      alert("Vous devez accepter les conditions générales d'utilisation");
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => console.warn(res));
    }
  }

  return (
    <section className="register-component">
      <h2>Création de compte</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">Pseudo</label>
        <input name="nickname" type="text" placeholder="pseudo" />
        <label htmlFor="mail">Email</label>
        <input name="mail" type="email" placeholder="email" />
        <label htmlFor="password">Mot de passe</label>
        <input name="password" type="password" placeholder="Mot de passe" />
        <label htmlFor="confirmation">Confirmation du mot de passe</label>
        <input
          name="confirmation"
          type="password"
          placeholder="Confirmation du mot de passe"
        />
        <div>
          <input name="conditions" type="checkbox" />
          <label htmlFor="conditions">Conditions générales</label>
        </div>

        <button type="submit">Valider</button>
      </form>
      <button type="button" onClick={() => setIsRegistered(true)}>
        Déjà un compte ? Connectez-vous !
      </button>
    </section>
  );
}

export default Register;
