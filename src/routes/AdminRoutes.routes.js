import { lazy } from "react";

import MainLayout from "../layouts/MainLayout.component";
import Loadable from "../components/Load/Loadable.component";
import { ADMINMENUITEMS } from "../constants/AdminMenus";
const ComponentTester = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/ComponentTester/ComponentTester.page.jsx")
  )
);

const Dashboard = Loadable(
  lazy(() => import("../pages/SuperAdmin/Dashboard/Dashboard.page"))
);

const OrderNow = Loadable(
  lazy(() => import("../pages/SuperAdmin/Orders/OrderNow/OrderNow.page"))
);
const OrderHistory = Loadable(
  lazy(() => import("../pages/SuperAdmin/OrderHistory/OrderHistory.page"))
);
const ListAllRider = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Riders/ListAllRiders/ListAllRider.page")
  )
);
const RegisterRider = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Riders/RegisterRiders/RegisterRiders.page")
  )
);
const ActiveRiders = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Riders/ActiveRiders/ActiveRiders.page")
  )
);
const RiderDetails = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Riders/RiderDetails/RiderDetails.page.jsx")
  )
);
const RiderJobHistory = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/Riders/RiderJobHistory/RiderJobHistory.page.jsx"
    )
  )
);
const LogisticsCompany = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/LogisticsCompany/LogisticsCompany.page")
  )
);
const RetailCompany = Loadable(
  lazy(() => import("../pages/SuperAdmin/RetailCompany/RetailCompany.page.jsx"))
);
const ActiveLogisticsCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/LogisticsCompany/ActiveLogisticsCompanies/ActiveLogisticsCompanies.page"
    )
  )
);
const ListAllLogisticsCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/LogisticsCompany/ListAllLogisticsCompanies/ListAllLogisticsCompanies.page"
    )
  )
);
const RegisterDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/DirectCustomer/RegisterDirectCustomer/RegisterDirectCustomer.page.jsx"
    )
  )
);
const DirectCustomerDetail = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/DirectCustomer/DirectCustomerDetail/DirectCustomerDetails.page.jsx"
    )
  )
);
const DirectCustomer = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/DirectCustomer/DirectCustomer.page.jsx")
  )
);
const ActiveDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/DirectCustomer/ActiveDirectCustomers/ActivieDirectCustomers.page.jsx"
    )
  )
);
const ListAllDirectCustomer = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/DirectCustomer/ListAllDirectCustomers/ListAllDirectCustomers.page.jsx"
    )
  )
);
const RegisterLogisticsCompany = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/LogisticsCompany/RegisterLogisticsCompany/RegisterLogisticsCompany.page"
    )
  )
);
const LogisticsCompanyDetail = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/LogisticsCompany/LogisticsCompaniesDetail/LogisticsCompaniesDetail.page.jsx"
    )
  )
);
const ActiveRetailCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/RetailCompany/ActiveRetailCompanies/ActivieRetailCompanies.page.jsx"
    )
  )
);
const ListAllRetailCompanies = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/RetailCompany/ListAllRetailCompanies/ListAllRetailCompanies.page"
    )
  )
);
const RegisterRetailCompany = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/RetailCompany/RegisterRetailCompanies/RegisterRetailCompanies.page.jsx"
    )
  )
);
const RetailCompanyDetail = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/RetailCompany/RetailCompaniesDetail/RetailCompaniesDetails.page.jsx"
    )
  )
);
const RetailCompanyOrderSummary = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/RetailCompany/RetailCompanyOrderSummary/RetailCompanyOrderSummary.page.jsx"
    )
  )
);
const ExchangePoolOrderList = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Orders/ExchangePool/ExchangePoolOrderList.jsx")
  )
);
const ExchangePoolOrderSummary = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/Orders/ExchangePool/ExchangeOrderPoolSummary.page"
    )
  )
);
const EchangePoolOrderHistory = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Orders/ExchangePool/ExchangeOrderHistory.page")
  )
);
const DirectCustomerOrderSummary = Loadable(
  lazy(() =>
    import(
      "../pages/SuperAdmin/DirectCustomer/DirectCustomerOrderSummary/DirectCustomerOrderSummary.page.jsx"
    )
  )
);
const CollectionCenter = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/CollectionCenter/CollectionCenter.page.jsx")
  )
);
const AddCollectionCenter = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/CollectionCenter/AddCollectionCenter.page.jsx")
  )
);
const Subscription = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Subscription/SubscriptionPlans.page.jsx")
  )
);
const AddSubscription = Loadable(
  lazy(() =>
    import("../pages/SuperAdmin/Subscription/AddSubscriptionPlan.page.jsx")
  )
);
const Delivery = Loadable(
  lazy(() => import("../pages/SuperAdmin/Delivery/DeliveryPlan.page.jsx"))
);
const AddDelivery = Loadable(
  lazy(() => import("../pages/SuperAdmin/Delivery/AddDeliveryPlan.page.jsx"))
);
const EditDelivery = Loadable(
  lazy(() => import("../pages/SuperAdmin/Delivery/EditDeliveryPlan.page.jsx"))
);
const Coupon = Loadable(
  lazy(() => import("../pages/SuperAdmin/Coupon/Coupon.page.jsx"))
);
const AddCoupon = Loadable(
  lazy(() => import("../pages/SuperAdmin/Coupon/AddCoupon.page.jsx"))
);
const Markup = Loadable(
  lazy(() => import("../pages/SuperAdmin/Markup/Markup.page.jsx"))
);
const AddMarkup = Loadable(
  lazy(() => import("../pages/SuperAdmin/Markup/AddMarkup.page.jsx"))
);
const Staff = Loadable(
  lazy(() => import("../pages/SuperAdmin/Staff/Staff.page.jsx"))
);
const AddStaff = Loadable(
  lazy(() => import("../pages/SuperAdmin/Staff/AddStaff.page.jsx"))
);

const Earning = Loadable(
  lazy(() => import("../pages/SuperAdmin/Earning/Earning.page"))
);
const Transaction = Loadable(
  lazy(() => import("../pages/SuperAdmin/Transaction/Transaction.page.jsx"))
);
const Report = Loadable(
  lazy(() => import("../pages/SuperAdmin/Report/Report.page"))
);
const Setting = Loadable(
  lazy(() => import("../pages/SuperAdmin/Setting/Setting.page"))
);
const Support = Loadable(
  lazy(() => import("../pages/SuperAdmin/Support/Support.page"))
);
const Riders = Loadable(
  lazy(() => import("../pages/SuperAdmin/Riders/Riders.page"))
);
const Orders = Loadable(
  lazy(() => import("../pages/SuperAdmin/Orders/Orders.page"))
);

const AdminRoutes = {
  path: "/admin",
  element: <MainLayout menuItems={ADMINMENUITEMS} />,
  children: [
    { path: "component", element: <ComponentTester /> },
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
        { path: "detail/:id", element: <RiderDetails /> },
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
        { path: "detail/:id", element: <LogisticsCompanyDetail /> },
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
          path: "detail/:id",
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
        { path: "detail/:id", element: <DirectCustomerDetail /> },
        { path: "order-summary", element: <DirectCustomerOrderSummary /> },
      ],
    },
    {
      path: "orders",
      element: <Orders />,
      children: [
        { path: "order-now", element: <OrderNow /> },
        { path: "in-orders", element: <ExchangePoolOrderList /> },
        {
          path: "exch-pool",
          element: <ExchangePoolOrderList />,
        },
        {
          path: "order-summary",
          element: <ExchangePoolOrderSummary />,
        },
        {
          path: "order-history",
          element: <EchangePoolOrderHistory />,
        },
      ],
    },
    {
      path: "order-history",
      element: <OrderHistory />,
    },
    {
      path: "collection-center",
      element: <CollectionCenter />,
    },
    {
      path: "collection-center/add",
      element: <AddCollectionCenter />,
    },
    {
      path: "subscription",
      element: <Subscription />,
    },
    {
      path: "subscription/add",
      element: <AddSubscription />,
    },
    {
      path: "delivery/all",
      element: <Delivery />,
    },
    {
      path: "delivery/add",
      element: <AddDelivery />,
    },
    {
      path: "delivery/edit",
      element: <EditDelivery />,
    },
    {
      path: "coupon/all",
      element: <Coupon />,
    },
    {
      path: "coupon/add",
      element: <AddCoupon />,
    },
    {
      path: "markup/all",
      element: <Markup />,
    },
    {
      path: "markup/add",
      element: <AddMarkup />,
    },
    {
      path: "staff/all",
      element: <Staff />,
    },
    {
      path: "staff/add",
      element: <AddStaff />,
    },

    {
      path: "earning",
      element: <Earning Earning />,
    },
    {
      path: "transaction",
      element: <Transaction />,
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
