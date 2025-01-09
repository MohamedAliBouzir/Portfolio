import { useMeasure } from "react-use";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../components/layout/Page/Page";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import { PortfolioHome } from "../../menu";

const Home = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.welcomePage.text}>
      <Page className="w-full h-full bg-black">
        <div id="welcome page header container">
        {/* add image background none scrollable with the page (when scroll down it does scroll down too) */}
          <div id="image in cercle"></div>
          <div id="description profile part">
            <div id="position full js"></div>
            <div id="name typed"></div>
            <div id="titre software engineer"></div>
            <div id="short description "></div>
            <div id="media links"></div>
            <div id="short word"></div>
          </div>
        </div>
        <div id="current position">
          <div id="society logo"></div>
          <div id="society name"></div>
          <div id="position in society"></div>
          <div id="finished projects in society"></div>
          <div id="finished tasks in society"></div>
        </div>
      </Page>
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
