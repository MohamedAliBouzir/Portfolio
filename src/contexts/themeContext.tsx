// src/contexts/themeContext.tsx
import {
  createContext,
  FC,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

export interface IThemeContextProps {
  darkModeStatus: boolean;
  setDarkModeStatus: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

interface IThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({
  children,
}) => {
  const [darkModeStatus, setDarkModeStatus] = useState(
    localStorage.getItem("MABP_darkModeStatus")
      ? localStorage.getItem("MABP_darkModeStatus") === "true"
      : import.meta.env.VITE_APP_DARK_MODE === "true"
  );

  useLayoutEffect(() => {
    localStorage.setItem("MABP_darkModeStatus", darkModeStatus.toString());
  }, [darkModeStatus]);

  const values: IThemeContextProps = useMemo(
    () => ({ darkModeStatus, setDarkModeStatus }),
    [darkModeStatus]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
