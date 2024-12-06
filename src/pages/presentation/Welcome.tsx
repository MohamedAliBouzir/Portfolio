import Button from "../../components/tailwind/Button";
import useDarkMode from "../../hooks/useDarkMode";
import Page from "../../layout/Page";
import PageWrapper from "../../layout/PageWrapper";

const Welcome = () => {
  const { setDarkModeStatus } = useDarkMode();
  return (
    <PageWrapper>
      <Page>
        <div className="flex flex-row">
          <Button
            color="primary"
            shadow
            onClick={() => setDarkModeStatus((prev) => !prev)}
          >
            Switch Theme
          </Button>
        </div>
      </Page>
    </PageWrapper>
  );
};

Welcome.propTypes = {};

export default Welcome;
