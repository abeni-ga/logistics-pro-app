import { lazy } from "react";

import CommonLayout from "../layouts/CommonLayout.component";
import Loadable from "../components/Load/Loadable.component";

const LogIn = Loadable(
  lazy(() => import("../pages/Authentication/Login.page.jsx"))
);
const RegistrationConfirmation = Loadable(
  lazy(() => import("../pages/Authentication/RegistrationConfirmation.page"))
);

const AuthenticationRoutes = {
  path: "/",
  element: <CommonLayout />,
  children: [
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "signup",
      element: <LogIn signup />,
    },
    { path: "signup/confirm", element: <RegistrationConfirmation confirm /> },
    { path: "vertify", element: <RegistrationConfirmation /> },
    { path: "forgot", element: <LogIn forgot /> },
    { path: "new", element: <LogIn create /> },
    { path: "recovery", element: <LogIn recovery /> },
  ],
};

export default AuthenticationRoutes;
