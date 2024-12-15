import { NavLink } from "react-router-dom";
import Button from "../../../components/tailwind/Button";
import Header from "../../../components/layout/Header/Header";
import { PortfolioHome } from "../../../menu";
import useDarkMode from "../../../hooks/useDarkMode";
import Icon from "../../../components/icon/Icon";

const ProfileHeader = () => {
  const { setDarkModeStatus, darkModeStatus } = useDarkMode();
  
  return (
    <Header>
      <div className="flex flex-row items-center justify-between sm:justify-around w-full mx-2">
        <div id="logo" className="Logo" rel="Logo">
          <NavLink id="Home" to="/" className="flex items-center">
            <Icon icon="logo" size="12" />
          </NavLink>
        </div>
        <div id="routes" className="hidden sm:flex justify-center gap-5" rel="Routes">
          {Object.values(PortfolioHome).map((value) => (
            <Button tag="a" to={`${value.path}`} isLink color="secondary">
              {value.text}
            </Button>
          ))}
        </div>
        <div id="dark-mode-button" className="hidden sm:flex space-x-2" rel="Dark mode">
          <Button
            type="button"
            isLink
            color="secondary"
            icon={!darkModeStatus ? "Moon" : "Sun"}
            onClick={() => setDarkModeStatus((prev) => !prev)}
          />
        </div>
        <div id="mobile-menu" className="block sm:hidden" rel="Mobile menu">
          <Icon icon="Menu" />
        </div>
      </div>
    </Header>
  );
};

export default ProfileHeader;
