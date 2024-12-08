import Button from "../../components/tailwind/Button";
import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";
import PageWrapper from "../../layout/PageWrapper";

const Welcome = () => {
  const { setDarkModeStatus } = useDarkMode();
  return (
    <PageWrapper>
      <Page>
          <Button
            color="success"
            shadow
            rounded="full"
            isLight
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
