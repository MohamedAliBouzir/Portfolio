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
      <div className="flex flex-row items-center justify-around w-full mx-2">
        <div>
          <NavLink id="Home" to="/" className="flex items-center">
            <Icon icon="logo" size="12" />
          </NavLink>
        </div>
        <div className="flex justify-center gap-5">
          {Object.values(PortfolioHome).map((value) => (
            <Button tag="a" to={`${value.path}`} isLink color="secondary">
              {value.text}
            </Button>
          ))}
        </div>
        <div className="flex  space-x-2">
          <Button
            type="button"
            isLink
            color="secondary"
            icon={!darkModeStatus ? "Moon" : "Sun"}
            onClick={() => setDarkModeStatus((prev) => !prev)}
          />
        </div>
      </div>
    </Header>
  );
};

export default ProfileHeader;
