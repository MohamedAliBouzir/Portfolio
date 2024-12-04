import { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { darkThemeClasses, lightThemeClasses, flexCenter } from "./../styles/index";
import Wrapper from "../layout/Wrapper/Wrapper";


const App = () => {
  const { themeStatus, darkModeStatus, setDarkModeStatus } = useDarkMode();
  const themeClasses = themeStatus === "dark" ? darkThemeClasses : lightThemeClasses;
  useEffect(() => {
    if (darkModeStatus) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkModeStatus]);
  return (
    <div className={themeClasses.container}>
      <div className={flexCenter}>
        <Wrapper />
      </div>
    </div>
  );
}

export default App;
