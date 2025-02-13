import { createContext, useState } from "react";
import type { Children, UserProps } from "../types/ContextProps";

export const UserContext = createContext<UserProps | null>(null);

export default function UserProvider({ children }: Readonly<Children>) {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
}
