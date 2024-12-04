import useDarkMode from "../../hooks/useDarkMode";

const Welcome = () => {
  const { setDarkModeStatus } = useDarkMode();
  return <button
  onClick={() => setDarkModeStatus((prev) => !prev)}
  className="p-4 rounded-full bg-gray-700 text-white hover:bg-gray-600"
>
  Toggle Dark Mode
</button>;
};

Welcome.propTypes = {};

export default Welcome;
