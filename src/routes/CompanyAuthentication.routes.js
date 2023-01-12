import { lazy } from "react";

import CommonLayout from "../layouts/CommonLayout.component";
import Loadable from "../components/Load/Loadable.component";
import RegistrationConfirmation from "../pages/CompanyAdmin/Authentication/RegistrationConfirmation.page";

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
    { path: "confirm", element: <RegistrationConfirmation confirm /> },
    { path: "vertify", element: <RegistrationConfirmation /> },
    { path: "forgot", element: <LogIn forgot /> },
    { path: "new", element: <LogIn create /> },
    { path: "recovery", element: <LogIn recovery /> },
  ],
};

export default CompanyAuthenticationRoutes;
