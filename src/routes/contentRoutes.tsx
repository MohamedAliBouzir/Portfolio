import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { authPagesMenu, PortfolioHome } from "../menu";

const PORTFOLIO = {
  HOME: lazy(() => import("../pages/presentation/Home")),
  EXPERIENCE: lazy(() => import("../pages/presentation/Experience")),
  PROJECTS: lazy(() => import("../pages/presentation/Projects")),
  CONTACT: lazy(() => import("../pages/presentation/Contact")),
};

const AUTH = {
  PAGE_404: lazy(() => import("./../pages/presentation/auth/Page404")),
};

const presentation: RouteProps[] = [
  {
    path: PortfolioHome.welcomePage.path,
    element: <PORTFOLIO.HOME />,
  },
  {
    path: PortfolioHome.ExperiencePage.path,
    element: <PORTFOLIO.EXPERIENCE />,
  },
  {
    path: PortfolioHome.ProjectsPage.path,
    element: <PORTFOLIO.PROJECTS />,
  },
  {
    path: PortfolioHome.ContactPage.path,
    element: <PORTFOLIO.CONTACT />,
  },
];

const auth: RouteProps[] = [
  {
    path: authPagesMenu.page404.path,
    element: <AUTH.PAGE_404 />,
  },
];

const contents = [...presentation, ...auth];

export default contents;
