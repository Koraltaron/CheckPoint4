import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "./LoginPage.css";

function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <main className="login-page">
      <section className="login-register-container">
        {isRegistered ? (
          <Login setIsRegistered={setIsRegistered} />
        ) : (
          <Register setIsRegistered={setIsRegistered} />
        )}
      </section>
    </main>
  );
}

export default LoginPage;
