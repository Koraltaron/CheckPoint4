import type { FormEvent } from "react";
import "./Register.css";
import useToast from "../../hooks/useToast";
import type { LoginProps } from "../../types/LoginProps";

function Register({ setIsRegistered }: Readonly<LoginProps>) {
  const { success, error } = useToast();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (data.confirmation !== data.password) {
      alert("Les mots de passe doivent correspondre");
    } else if (data.conditions !== "on") {
      alert("Vous devez accepter les conditions générales d'utilisation");
    } else {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        success("Votre compte a bien été créé");
        setIsRegistered(true);
      } else {
        error("Une erreur est survenue");
      }
    }
  }

  return (
    <section className="register-component">
      <h2>Création de compte</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">Pseudo</label>
        <input name="nickname" type="text" placeholder="Pseudo" />
        <label htmlFor="mail">Email</label>
        <input
          name="mail"
          type="email"
          placeholder="ex : jean-jacques.dupont@mail.fr"
        />
        <label htmlFor="password">Mot de passe</label>
        <input name="password" type="password" placeholder="***************" />
        <label htmlFor="confirmation">Confirmation du mot de passe</label>
        <input
          name="confirmation"
          type="password"
          placeholder="***************"
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
