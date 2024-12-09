import { useMeasure } from "react-use";
// import Button from "../../components/tailwind/Button";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";
import PageWrapper from "../../layout/PageWrapper";
import { PortfolioHome } from "../../menu";

const Home = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.welcomePage.text}>
      <Page>Welcome page</Page>
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
