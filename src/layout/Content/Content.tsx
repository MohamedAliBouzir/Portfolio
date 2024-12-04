import { Suspense } from "react"
import ContentRoutes from "./ContentRoutes"

const LOADING = (
    <div>Loading ...</div>
)

const Content = () => {
    return(
        <main>
            <Suspense fallback={LOADING}>
                <ContentRoutes />
            </Suspense>
        </main>
    )
}

export default Content;