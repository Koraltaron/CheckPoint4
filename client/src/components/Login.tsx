import type { FormEvent } from "react";
import "./Login.css";

export interface LoginProps {
  setIsRegistered: (value: boolean) => void;
}

function Login({ setIsRegistered }: Readonly<LoginProps>) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.warn(data);
  }

  return (
    <section className="login-component">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="email" />
        <label htmlFor="password">Mot de passe</label>
        <input name="password" type="password" placeholder="Mot de passe" />

        <button type="submit">Connexion</button>
      </form>
      <p>Mot de passe oublié ?</p>
      <button type="button" onClick={() => setIsRegistered(false)}>
        Pas de compte ? Créer votre compte !
      </button>
    </section>
  );
}

export default Login;
