import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentsIcon from "@mui/icons-material/Payments";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BusinessRounded } from "@mui/icons-material";

export const ADMINMENUITEMS = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    path: "/admin/riders",
    title: "Riders",
    icon: <PersonIcon />,
    type: "sub",
    active: false,
    children: [
      { path: "/admin/riders/active", title: "Active Today", type: "link" },
      {
        path: "/admin/riders/register",
        title: "Create New",
        type: "link",
      },
      { path: "/admin/riders/all", title: "All Riders", type: "link" },
    ],
  },
  {
    path: "/admin/logistics-company",
    title: "Logistics Company",
    icon: <BusinessRounded />,
    type: "link",
    active: false,
    children: [
      {
        path: "/admin/logistics-company/active",
        title: "Active Today",
        type: "link",
      },
      {
        path: "/admin/logistics-company/register",
        title: "Create New",
        type: "link",
      },
      {
        path: "/admin/logistics-company/all",
        title: "All Logistics Companies",
        type: "link",
      },
    ],
  },
  {
    path: "/admin/retail-company",
    title: "Retail Company",
    icon: <BusinessRounded />,
    type: "link",
    active: false,
    children: [
      {
        path: "/admin/retail-company/active",
        title: "Active Today",
        type: "link",
      },
      {
        path: "/admin/retail-company/register",
        title: "Create New",
        type: "link",
      },
      {
        path: "/admin/retail-company/all",
        title: "All Retail Companies",
        type: "link",
      },
    ],
  },
  {
    path: "/admin/orders",
    title: "Orders",
    icon: <ListAltIcon />,
    type: "link",
    badgeType: "Primary",
    active: false,
    children: [
      { path: "/admin/orders/in-orders", title: "In Orders", type: "link" },
      {
        path: "/admin/orders/exch-pool",
        title: "Order Exch Pool",
        type: "link",
      },
      { path: "/admin/orders/order-now", title: "Create Order", type: "link" },
    ],
  },
  {
    path: "/admin/order-history",
    title: "Order History",
    icon: <FormatListBulletedIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/admin/earning",
    title: "Earning",
    icon: <PaymentsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/admin/report",
    title: "Reports",
    icon: <AssessmentIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/admin/setting",
    title: "Settings",
    icon: <SettingsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/admin/support",
    title: "Supports",
    icon: <Person2Icon />,
    type: "link",
    active: false,
  },
];
