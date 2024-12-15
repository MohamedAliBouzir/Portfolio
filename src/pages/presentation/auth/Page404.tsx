import { ReactTyped } from "react-typed";
import Icon from "../../../components/icon/Icon";
import Page from "../../../components/layout/Page/Page";
import PageWrapper from "../../../components/layout/PageWrapper/PageWrapper";
import Button from "../../../components/tailwind/Button";

const Page404 = () => {
  return (
    <PageWrapper>
      <Page>
        {/* <Icon icon="Error" className="max-h-500 max-w-500" /> */}
        {/* <div className="w-full flex justify-center items-center flex-col h-full flex-1 ">
          <ReactTyped
            strings={["The requested URL was not found"]}
            typeSpeed={40}
            backSpeed={10}
            loop
            className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 absolute top-1/2 transform -translate-y-1/2"
          />
            <Button tag="a" to="/" rounded="lg" isLight color="primal" shadow hoverShadow>
              Return Home
            </Button>
        </div> */}
      <div className="flex text-center flex-col">
        <ReactTyped
          strings={['Oops!', 'Page Not Found', 'Lost in Space?']}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <Icon icon="Error" className="min-h-5 min-w-5 max-h-500 max-w-500" />
      </div>
      </Page>
    </PageWrapper>
  );
};

export default Page404;
