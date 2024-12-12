import { ReactTyped } from "react-typed";
import Icon from "../../../components/icon/Icon";
import Page from "../../../components/layout/Page/Page";
import PageWrapper from "../../../components/layout/PageWrapper/PageWrapper";
import Button from "../../../components/tailwind/Button";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <PageWrapper>
      <Page>
        <Icon icon="Error" className="max-h-500 max-w-500" />
        <div className="w-full flex justify-center items-center flex-col h-full flex-1 ">
          <ReactTyped
            strings={[
              "The requested URL was not found on this server",
              "You may have mistyped the address or the page may have moved.",
              "Thanks !",
            ]}
            typeSpeed={40}
            backSpeed={10}
            loop
            className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 absolute top-1/2 transform -translate-y-1/2"
          />
          <NavLink id="Home" to="/">
            <Button isLight rounded="lg" color="primary" shadow hoverShadow>
              Return Home
            </Button>
          </NavLink>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default Page404;
