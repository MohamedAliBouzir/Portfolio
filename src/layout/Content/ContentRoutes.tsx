import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import contents from './../../routes/contentRoutes';

const PAGE_404 = lazy(() => import ('./../../pages/presentation/auth/Page404'));
const ContentRoutes = () => {
    return (
        <Routes>
            {contents.map((page) => (
                <Route key={page.path} {...page} />
            ))}
            <Route path='*' element={<PAGE_404 />} />
        </Routes>
    )
}

export default ContentRoutes