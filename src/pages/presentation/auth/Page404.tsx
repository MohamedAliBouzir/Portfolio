import { useMeasure } from "react-use";
import Page from "../../../components/layout/Page"
import PageWrapper from "../../../components/layout/PageWrapper"
import { authPagesMenu } from "../../../menu";

const [ref] = useMeasure<HTMLDivElement>();
const Page404 = () => {
    return(
        <PageWrapper ref={ref} title={authPagesMenu.page404.text}>
        <Page>404 Not found</Page>
      </PageWrapper>
    )
}

export default Page404