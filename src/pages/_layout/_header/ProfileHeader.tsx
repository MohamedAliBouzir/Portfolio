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
          <NavLink id="Home" to="/"><Button icon="logo" iconSize="10"/></NavLink>
        </div>
        <div className="flex justify-center gap-5">
          {Object.values(PortfolioHome).map((value) => (
            <NavLink id={value.id} to={`${value.path}`}>
              <Button hoverShadow>
                {value.text}
              </Button>
            </NavLink>
          ))}
        </div>
        <div className="flex  space-x-2">
          <Button
            type="button"
            isLink
            hoverShadow
            color="secondary"
            size="sm"
            rounded="lg"
            icon={!darkModeStatus ? "Moon" : "Sun"}
            onClick={() => setDarkModeStatus((prev) => !prev)}
          />
        </div>
      </div>
    </Header>
  );
};

export default ProfileHeader;
