import { NavLink } from "react-router-dom";
import Button from "../../../components/tailwind/Button";
import Header from "../../../components/layout/Header/Header";
import { PortfolioHome } from "../../../menu";
import useDarkMode from "../../../hooks/useDarkMode";


const ProfileHeader = () => {
  const { setDarkModeStatus, darkModeStatus } = useDarkMode();
  return (
    <Header>
      <div className="flex flex-row items-center justify-between w-full mx-2">
        {/* First child: flex-1 */}
        <div className="flex-1 text-left">Web Site Logo</div>

        {/* Second child: flex-1 */}
        <div className="flex-1 flex justify-center gap-1">
          {Object.values(PortfolioHome).map((value) => (
            // <Button isLink>{value.text}</Button>
            <NavLink id={value.id} to={`${value.path}`}>{value.text}</NavLink>
          ))}
        </div>

        {/* Third child: flex-1 */}
        <div className="flex-1 flex justify-end space-x-2">
          <Button icon={!darkModeStatus ? "Moon" : "Sun"} onClick={() => setDarkModeStatus((prev) => !prev)}/>
        </div>
      </div>
    </Header>
  );
};

export default ProfileHeader;
