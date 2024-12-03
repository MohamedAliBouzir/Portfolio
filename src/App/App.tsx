import { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { darkThemeClasses, lightThemeClasses, flexCenter, buttonCommons } from "./../styles/index";
function App() {
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
        <button
          onClick={() => setDarkModeStatus(prev => !prev)}
          className={`${buttonCommons} ${themeClasses.button}`}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
