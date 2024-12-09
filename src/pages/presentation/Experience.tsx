import { useMeasure } from "react-use";
// import Button from "../../components/tailwind/Button";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";
import PageWrapper from "../../layout/PageWrapper";
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
