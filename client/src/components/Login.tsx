import type { FormEvent } from "react";
import "./Login.css";
import useToast from "../hooks/useToast";

export interface LoginProps {
  setIsRegistered: (value: boolean) => void;
}

function Login({ setIsRegistered }: Readonly<LoginProps>) {
  const { success, error } = useToast();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      success("Vous vous êtes bien connecté !");
    } else {
      error("Les informations renseignées ne sont pas valides");
    }
  }

  return (
    <section className="login-component">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Email</label>
        <input name="mail" type="email" placeholder="email" />
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
