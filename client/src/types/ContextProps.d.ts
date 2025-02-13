export type Children = {
  children: ReactNode;
};

export type UserProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};
