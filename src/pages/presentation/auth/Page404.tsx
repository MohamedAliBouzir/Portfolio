import { ReactTyped } from "react-typed";
import Page from "../../../components/layout/Page/Page";
import PageWrapper from "../../../components/layout/PageWrapper/PageWrapper";

const Page404 = () => {
  return (
    <PageWrapper>
      <Page className="h-full">
        <div className="flex text-center flex-col w-full h-full">
          <div className="text-6xl font-semibold text-purple-400">404</div>
          <ReactTyped
            strings={["Oops!", "Page Not Found", "Lost in Space?"]}
            className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </Page>
    </PageWrapper>
  );
};

export default Page404;
