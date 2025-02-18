import { useMeasure } from "react-use";
// import Button from "../../components/tailwind/Button";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../components/layout/Page/Page";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import { PortfolioHome } from "../../menu";

const Experience = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.ExperiencePage.text}>
      <Page>Experience page</Page>
    </PageWrapper>
  );
};

Experience.propTypes = {};

export default Experience;
