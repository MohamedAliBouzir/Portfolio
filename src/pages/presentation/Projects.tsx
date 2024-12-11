import { useMeasure } from "react-use";
// import Button from "../../components/tailwind/Button";
// import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../components/layout/Page";
import PageWrapper from "../../components/layout/PageWrapper";
import { PortfolioHome } from "../../menu";

const Projects = () => {
  // const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title={PortfolioHome.ProjectsPage.text}>
      <Page>Projects page</Page>
    </PageWrapper>
  );
};

Projects.propTypes = {};

export default Projects;
