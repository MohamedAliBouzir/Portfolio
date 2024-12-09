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
        <div className="flex-1 flex justify-center">
          {Object.entries(PortfolioHome).map(([key, value]) => (
            <Button isLink>{value.text}</Button>
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
