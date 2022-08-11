import Login from "../components/pages/Login/Login";
import Profile from "../components/pages/Profile";
import Signup from "../components/pages/Signup/Signup";
import routeDefault from "../config";
import LayoutDefault from "../layout/LayoutDefault";
import LoginSignup from "../layout/LoginSignup";

const routesPublic = [
  { path: routeDefault.signIn, page: Login, layout: LoginSignup },
  { path: routeDefault.signUp, page: Signup, layout: LoginSignup },
  { path: routeDefault.profile, page: Profile, layout: LayoutDefault }
];

export default routesPublic;
