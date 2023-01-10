import { lazy } from "react";

import CommonLayout from "../layouts/CommonLayout.component";
import Loadable from "../components/Load/Loadable.component";

const LogIn = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Authentication/LogIn.page.jsx"))
);

const CompanyAuthenticationRoutes = {
  path: "/company",
  element: <CommonLayout />,
  children: [
    {
      path: "signin",
      element: <LogIn />,
    },
    {
      path: "signup",
      element: <LogIn signup />,
    },
  ],
};

export default CompanyAuthenticationRoutes;
