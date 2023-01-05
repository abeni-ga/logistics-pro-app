import { lazy } from "react";

import MainLayout from "../layouts/MainLayout.component";
import Loadable from "../components/Load/Loadable.component";
import Dashboard from "../pages/Dashboard/Dashboard.page";

// const Dashboard = Loadable(
//   lazy(() => import("../pages/Dashboard/Dashboard.page")),
// );

const OrderNow = Loadable(
  lazy(() => import("../pages/Orders/OrderNow/OrderNow.page"))
);
const ExchangePool = Loadable(
  lazy(() => import("../pages/Orders/ExchangePool/ExchangePool.page"))
);
const InternalOrders = Loadable(
  lazy(() => import("../pages/Orders/InternalOrders/InternalOrders.page"))
);
const OrderHistory = Loadable(
  lazy(() => import("../pages/OrderHistory/OrderHistory.page"))
);
const ListAllRider = Loadable(
  lazy(() => import("../pages/Riders/ListAllRiders/ListAllRider.page"))
);
const RegisterRider = Loadable(
  lazy(() => import("../pages/Riders/RegisterRiders/RegisterRiders.page"))
);
const ActiveRiders = Loadable(
  lazy(() => import("../pages/Riders/ActiveRiders/ActiveRiders.page"))
);

const LogisticsCompany = Loadable(
  lazy(() => import("../pages/LogisticsCompany/LogisticsCompany.page"))
);
const RetailCompany = Loadable(
  lazy(() => import("../pages/RetailCompany/RetailCompany.page.jsx"))
);
const ActiveLogisticsCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/LogisticsCompany/ActiveLogisticsCompanies/ActiveLogisticsCompanies.page"
    )
  )
);
const ListAllLogisticsCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/LogisticsCompany/ListAllLogisticsCompanies/ListAllLogisticsCompanies.page"
    )
  )
);
const RegisterLogisticsCompany = Loadable(
  lazy(() =>
    import(
      "../pages/LogisticsCompany/RegisterLogisticsCompany/RegisterLogisticsCompany.page"
    )
  )
);
const LogisticsCompanyDetail = Loadable(
  lazy(() =>
    import(
      "../pages/LogisticsCompany/LogisticsCompaniesDetail/LogisticsCompaniesDetail.page.jsx"
    )
  )
);
const ActiveRetailCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/RetailCompany/ActiveRetailCompanies/ActivieRetailCompanies.page.jsx"
    )
  )
);
const ListAllRetailCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/RetailCompany/ListAllRetailCompanies/ListAllRetailCompanies.page"
    )
  )
);
const RegisterRetailCompany = Loadable(
  lazy(() =>
    import(
      "../pages/RetailCompany/RegisterRetailCompanies/RegisterRetailCompanies.page.jsx"
    )
  )
);
const RetailCompanyDetail = Loadable(
  lazy(() =>
    import(
      "../pages/RetailCompany/RetailCompaniesDetail/RetailCompaniesDetails.page.jsx"
    )
  )
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
      children: [
        { path: "active", element: <ActiveRiders /> },
        { path: "register", element: <RegisterRider /> },
        { path: "all", element: <ListAllRider /> },
      ],
    },
    {
      path: "logistics-company",
      element: <LogisticsCompany />,
      children: [
        { path: "active", element: <ActiveLogisticsCompanies /> },
        { path: "register", element: <RegisterLogisticsCompany /> },
        { path: "all", element: <ListAllLogisticsCompanies /> },
        { path: "detail", element: <LogisticsCompanyDetail /> },
      ],
    },
    {
      path: "retail-company",
      element: <RetailCompany />,
      children: [
        { path: "active", element: <ActiveRetailCompanies /> },
        { path: "register", element: <RegisterRetailCompany /> },
        { path: "all", element: <ListAllRetailCompanies /> },
        { path: "detail", element: <RetailCompanyDetail /> },
      ],
    },
    {
      path: "orders",
      element: <Orders />,
      children: [
        { path: "order-now", element: <OrderNow /> },
        { path: "in-orders", element: <InternalOrders /> },
        { path: "exch-pool", element: <ExchangePool /> },
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

export default AdminRoutes;
