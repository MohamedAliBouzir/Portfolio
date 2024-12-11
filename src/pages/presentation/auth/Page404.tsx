import Icon from "../../../components/icon/Icon";
import Page from "../../../components/layout/Page";
import PageWrapper from "../../../components/layout/PageWrapper";

const Page404 = () => {
  return (
    <PageWrapper>
      <Page>
        <Icon icon="Error" className="max-h-500 max-w-500"/>
      </Page>
    </PageWrapper>
  );
};

export default Page404;
