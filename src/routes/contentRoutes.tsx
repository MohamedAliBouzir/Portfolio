import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { authPagesMenu, PortfolioHome } from "../menu";

const WELCOME = {
  WELCOME: lazy(() => import("./../pages/presentation/Welcome")),
};

const AUTH = {
  PAGE_404: lazy(() => import("./../pages/presentation/auth/Page404")),
};

const presentation: RouteProps[] = [
  {
    path: PortfolioHome.welcomePage.path,
    element: <WELCOME.WELCOME />,
  },
  {
    path: authPagesMenu.page404.path,
    element: <AUTH.PAGE_404 />,
  },
];

const contents = [...presentation];

export default contents;
