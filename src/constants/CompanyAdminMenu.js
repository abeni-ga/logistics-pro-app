import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentsIcon from "@mui/icons-material/Payments";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BusinessRounded } from "@mui/icons-material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

export const COMPANYADMINMENUITEMS = [
  {
    path: "/company-admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    path: "/company-admin/companies",
    title: "Companies",
    icon: <BusinessRounded />,
    type: "link",
    active: false,
    children: [
      {
        path: "/company-admin/companies/new",
        title: "Create New",
        type: "link",
      },
      {
        path: "/company-admin/companies/view",
        title: "View Companies",
        type: "link",
      },
    ],
  },
  {
    path: "/company-admin/riders",
    title: "Riders",
    icon: <DirectionsBikeIcon />,
    type: "link",
    active: false,
    children: [
      {
        path: "/company-admin/riders/new",
        title: "Create New",
        type: "link",
      },
      {
        path: "/company-admin/riders/view",
        title: "View Riders",
        type: "link",
      },
    ],
  },
  {
    path: "/company-admin/orders",
    title: "Orders",
    icon: <ListAltIcon />,
    type: "link",
    badgeType: "Primary",
    active: false,
    children: [
      {
        path: "/company-admin/orders/in",
        title: "In-Orders",
        type: "link",
      },
      {
        path: "/company-admin/orders/pool",
        title: "Order Exch. Pool",
        type: "link",
      },
      {
        path: "/company-admin/orders/new",
        title: "Create",
        type: "link",
      },
    ],
  },
  {
    path: "/company-admin/order-history",
    title: "Order History",
    icon: <FormatListBulletedIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/company-admin/earning",
    title: "Earning",
    icon: <PaymentsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/company-admin/report",
    title: "Reports",
    icon: <AssessmentIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/company-admin/setting",
    title: "Settings",
    icon: <SettingsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/company-admin/support",
    title: "Supports",
    icon: <Person2Icon />,
    type: "link",
    active: false,
  },
];
