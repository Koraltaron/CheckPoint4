import type { FormEvent } from "react";
import "./Register.css";
import type { LoginProps } from "./Login";

function Register({ setIsRegistered }: Readonly<LoginProps>) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.warn(data);
  }

  return (
    <section className="register-component">
      <h2>Création de compte</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Pseudo</label>
        <input name="pseudo" type="text" placeholder="pseudo" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="email" />
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
