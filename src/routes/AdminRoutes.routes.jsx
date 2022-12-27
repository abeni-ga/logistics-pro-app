import { lazy } from "react";

import MainLayout from "../layouts/MainLayout.component";
import Loadable from "../components/Load/Loadable.component";
import Dashboard from "../pages/Dashboard/Dashboard.page";

// const Dashboard = Loadable(
//   lazy(() => import("../pages/Dashboard/Dashboard.page")),
// );

const OrderHistory = Loadable(
  lazy(() => import("../pages/OrderHistory/OrderHistory.page")),
);
const Earning = Loadable(lazy(() => import("../pages/Earning/Earning.page")));
const Report = Loadable(lazy(() => import("../pages/Report/Report.page")));
const Setting = Loadable(lazy(() => import("../pages/Setting/Setting.page")));
const Support = Loadable(lazy(() => import("../pages/Support/Support.page")));
const Riders = Loadable(lazy(() => import("../pages/Riders/Riders.page")));
const Orders = Loadable(lazy(() => import("../pages/Orders/Orders.page")));

const AdminRoutes = {
  path: "/admin",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "riders",
      element: <Riders />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "order-history",
      element: <OrderHistory />,
    },
    {
      path: "earning",
      element: <Earning />,
    },
    {
      path: "report",
      element: <Report />,
    },
    {
      path: "setting",
      element: <Setting />,
    },
    {
      path: "support",
      element: <Support />,
    },
  ],
};

export default AdminRoutes;
