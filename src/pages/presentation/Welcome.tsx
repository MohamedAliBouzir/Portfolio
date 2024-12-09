import { useMeasure } from "react-use";
import Button from "../../components/tailwind/Button";
import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";
import PageWrapper from "../../layout/PageWrapper";

const Welcome = () => {
  const { setDarkModeStatus } = useDarkMode();
  const [ref] = useMeasure<HTMLDivElement>();
  return (
    <PageWrapper ref={ref} title="Welcome">
      <Page>
          <Button
            color="info"
            shadow
            rounded="lg"
            onClick={() => setDarkModeStatus((prev) => !prev)}
          >
            Switch Theme
          </Button>
      </Page>
    </PageWrapper>
  );
};

Welcome.propTypes = {};

export default Welcome;
