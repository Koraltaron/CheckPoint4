import { type ReactNode, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useLogin from "../utils/useLogin";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { isLogged } = useLogin();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return isLogged && children;
}

export default ProtectedRoutes;
