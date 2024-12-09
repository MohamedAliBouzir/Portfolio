import { RouteProps } from "react-router-dom";
import { PortfolioHome } from "../menu";
import ProfileHeader from "../pages/_layout/_header/ProfileHeader";

const headers: RouteProps[] = [
  { path: PortfolioHome.welcomePage.path, element: <ProfileHeader /> },
];

export default headers;
