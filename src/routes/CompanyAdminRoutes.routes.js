import { lazy } from "react";

import MainLayout from "../layouts/MainLayout.component";
import Loadable from "../components/Load/Loadable.component";
import { COMPANYADMINMENUITEMS } from "../constants/CompanyAdminMenu.js";
const Dashboard = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Dashboard/Dashboard.page"))
);

const OrderNow = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Orders/OrderNow/OrderNow.page"))
);
const ExchangePool = Loadable(
  lazy(() =>
    import("../pages/CompanyAdmin/Orders/ExchangePool/ExchangePool.page")
  )
);
const InternalOrders = Loadable(
  lazy(() =>
    import(
      "../pages/CompanyAdmin/Orders/InternalOrders/InternalOrderPool.page.jsx"
    )
  )
);
const InternalOrderSummary = Loadable(
  lazy(() =>
    import(
      "../pages/CompanyAdmin/Orders/InternalOrders/InternalOrderPoolSummary.page"
    )
  )
);
const OrderHistory = Loadable(
  lazy(() => import("../pages/CompanyAdmin/OrderHistory/OrderHistory.page"))
);
const ListAllRider = Loadable(
  lazy(() =>
    import("../pages/CompanyAdmin/Riders/ListAllRiders/ListAllRider.page")
  )
);
const RegisterRider = Loadable(
  lazy(() =>
    import("../pages/CompanyAdmin/Riders/RegisterRiders/RegisterRiders.page")
  )
);
const ListAllCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/CompanyAdmin/Companies/ListAllCompanies/ListAllCompanies.page"
    )
  )
);
const RegisterCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/CompanyAdmin/Companies/RegisterCompanies/RegisterCompanies.page"
    )
  )
);
const RiderDetails = Loadable(
  lazy(() =>
    import("../pages/CompanyAdmin/Riders/RiderDetails/RiderDetails.page.jsx")
  )
);

const Earning = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Earning/Earning.page"))
);
const Report = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Report/Report.page"))
);
const Setting = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Setting/Setting.page"))
);
const Support = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Support/Support.page"))
);
const Riders = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Riders/Riders.page"))
);
const Companies = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Companies/Companies.page"))
);
const Orders = Loadable(
  lazy(() => import("../pages/CompanyAdmin/Orders/Orders.page"))
);

const CompanyAdminRoutes = {
  path: "/company-admin",
  element: <MainLayout menuItems={COMPANYADMINMENUITEMS} />,
  children: [
    { path: "component", element: "" },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "riders",
      element: <Riders />,
      children: [
        { path: "new", element: <RegisterRider /> },
        { path: "view", element: <ListAllRider /> },
        { path: "detail", element: <RiderDetails /> },
      ],
    },
    {
      path: "companies",
      element: <Companies />,
      children: [
        { path: "new", element: <RegisterCompanies /> },
        { path: "view", element: <ListAllCompanies /> },
      ],
    },
    {
      path: "orders",
      element: <Orders />,
      children: [
        { path: "new", element: <OrderNow /> },
        { path: "in", element: <InternalOrders /> },
        { path: "pool", element: <ExchangePool /> },
        { path: "in-summary", element: <InternalOrderSummary /> },
      ],
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

export default CompanyAdminRoutes;
