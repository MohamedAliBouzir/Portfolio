import Button from "../../../components/tailwind/Button";
import Header from "../../../layout/Header/Header";

const ProfileHeader = () => {
  return (
    <Header>
      <div className="flex flex-row items-center justify-between w-full">
        {/* First child: flex-1 */}
        <div className="flex-1 text-left">Web Site Logo</div>

        {/* Second child: flex-1 */}
        <div className="flex-1 flex justify-center">
          <Button>hello</Button>
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
