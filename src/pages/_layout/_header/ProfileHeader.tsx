import { NavLink } from "react-router-dom";
import Button from "../../../components/tailwind/Button";
import Header from "../../../layout/Header/Header";
import { PortfolioHome } from "../../../menu";

const ProfileHeader = () => {
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
          <Button isLight color="primary">
            Theme
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default ProfileHeader;
