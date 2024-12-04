import { ReactNode } from "react";

export interface IThemeContextProps {
  darkModeStatus: boolean;
  setDarkModeStatus: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export interface IThemeContextProviderProps {
    children: ReactNode;
}
