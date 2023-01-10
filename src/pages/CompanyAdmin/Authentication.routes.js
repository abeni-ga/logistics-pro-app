import { lazy } from "react";

import CommonLayout from "../layouts/CommonLayout.component";
import Loadable from "../components/Load/Loadable.component";

const LogIn = Loadable(
  lazy(() => import("../pages/SuperAdmin/Authentication/LogIn.page"))
);

const AuthenticationRoutes = {
  path: "/",
  element: <CommonLayout />,
  children: [
    {
      path: "/",
      element: <LogIn />,
    },
  ],
};

export default AuthenticationRoutes;
