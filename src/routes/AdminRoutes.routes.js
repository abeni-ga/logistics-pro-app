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
const RiderDetails = Loadable(
  lazy(() => import("../pages/Riders/RiderDetails/RiderDetails.page.jsx"))
);
const RiderJobHistory = Loadable(
  lazy(() => import("../pages/Riders/RiderJobHistory/RiderJobHistory.page.jsx"))
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
const RegisterDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/DirectCustomer/RegisterDirectCustomer/RegisterDirectCustomer.page.jsx"
    )
  )
);
const DirectCustomerDetail = Loadable(
  lazy(() =>
    import(
      "../pages/DirectCustomer/DirectCustomerDetail/DirectCustomerDetails.page.jsx"
    )
  )
);
const DirectCustomer = Loadable(
  lazy(() => import("../pages/DirectCustomer/DirectCustomer.page.jsx"))
);
const ActiveDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/DirectCustomer/ActiveDirectCustomers/ActivieDirectCustomers.page.jsx"
    )
  )
);
const ListAllDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/DirectCustomer/ListAllDirectCustomers/ListAllDirectCustomers.page.jsx"
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
const RetailCompanyOrderSummary = Loadable(
  lazy(() =>
    import(
      "../pages/RetailCompany/RetailCompanyOrderSummary/RetailCompanyOrderSummary.page.jsx"
    )
  )
);
const DirectCustomerOrderPool = Loadable(
  lazy(() =>
    import(
      "../pages/Orders/ExchangePool/DirectCustomerOrderPool/DirectCusomerOrderPool.page.jsx"
    )
  )
);
const RetailCompanyOrderPool = Loadable(
  lazy(() =>
    import(
      "../pages/Orders/ExchangePool/RetailCompanyOrderPool/RetailCompanyOrderPool.page.jsx"
    )
  )
);
const DirectCustomerOrderPoolSummary = Loadable(
  lazy(() =>
    import(
      "../pages/Orders/ExchangePool/DirectCustomerOrderPool/DirectCustomerOrderPoolSummary.page"
    )
  )
);
const DirectCustomerOrderHistory = Loadable(
  lazy(() =>
    import(
      "../pages/Orders/ExchangePool/DirectCustomerOrderPool/DirectCustomerOrderHistory.page"
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
        { path: "detail", element: <RiderDetails /> },
        { path: "history", element: <RiderJobHistory /> },
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
        {
          path: "detail",
          element: <RetailCompanyDetail />,
        },
        { path: "order-summary", element: <RetailCompanyOrderSummary /> },
      ],
    },
    {
      path: "direct-customer",
      element: <DirectCustomer />,
      children: [
        { path: "active", element: <ActiveDirectCustomer /> },
        { path: "register", element: <RegisterDirectCustomer /> },
        { path: "all", element: <ListAllDirectCustomer /> },
        { path: "detail", element: <DirectCustomerDetail /> },
      ],
    },
    {
      path: "orders",
      element: <Orders />,
      children: [
        { path: "order-now", element: <OrderNow /> },
        { path: "in-orders", element: <InternalOrders /> },
        {
          path: "exch-pool",
          element: <ExchangePool />,
        },
        { path: "direct-customer", element: <DirectCustomerOrderPool /> },
        { path: "retail-company", element: <RetailCompanyOrderPool /> },
        {
          path: "direct-customer/summary",
          element: <DirectCustomerOrderPoolSummary />,
        },
        {
          path: "direct-customer/order-history",
          element: <DirectCustomerOrderHistory />,
        },
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
