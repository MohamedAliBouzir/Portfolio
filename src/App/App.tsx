import { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import {
  darkThemeClasses,
  lightThemeClasses,
  flexCenter,
  gradientCircle,
} from "./../styles/index";
import Wrapper from "../layout/Wrapper/Wrapper";
import classNames from "classnames";

const App = () => {
  const { themeStatus, darkModeStatus, setDarkModeStatus } = useDarkMode();
  const themeClasses =
    themeStatus === "dark" ? darkThemeClasses : lightThemeClasses;

  useEffect(() => {
    if (darkModeStatus) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkModeStatus]);

  return (
    <div className={classNames(themeClasses.container, "z-0")}>
      <div className={gradientCircle.container}>
        <div
          className={classNames(
            gradientCircle.circle,
            themeStatus === "dark" ? gradientCircle.dark : gradientCircle.light
          )}
        ></div>
      </div>
      <div className={flexCenter}>
        <Wrapper />
      </div>
    </div>
  );
};

export default App;
