import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";

const Welcome = () => {
  const { setDarkModeStatus } = useDarkMode();
  return (
    <Page>
      <button
        onClick={() => setDarkModeStatus((prev) => !prev)}
        className="p-4 rounded-full bg-gray-700 text-white hover:bg-gray-600"
      >
        Toggle Dark Mode
      </button>
    </Page>
  );
};

Welcome.propTypes = {};

export default Welcome;
