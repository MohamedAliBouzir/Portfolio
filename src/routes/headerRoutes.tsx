import { RouteProps } from "react-router-dom";
import ProfileHeader from "../pages/_layout/_header/ProfileHeader";

const headers: RouteProps[] = [
  { path: "*", element: <ProfileHeader /> },
];

export default headers;
