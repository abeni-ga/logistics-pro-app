import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentsIcon from "@mui/icons-material/Payments";
import ListAltIcon from "@mui/icons-material/ListAlt";

export const MENUITEMS = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "Riders",
    icon: <PersonIcon />,
    type: "sub",
    active: false,
    children: [
      { path: "", title: "Active Today", type: "link" },
      {
        path: "",
        title: "Create New",
        type: "link",
      },
      { path: "", title: "All Riders", type: "link" },
    ],
  },
  {
    title: "Orders",
    icon: <PersonIcon />,
    type: "link",
    badgeType: "Primary",
    active: false,
    children: [
      { path: "", title: "In Orders", type: "link" },
      { path: "", title: "Order Each Pool", type: "link" },
      { path: "", title: "Create Order", type: "link" },
    ],
  },
  {
    path: "/orders",
    title: "Order History",
    icon: <ListAltIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/earning",
    title: "Earning",
    icon: <PaymentsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/reports",
    title: "Reports",
    icon: <AssessmentIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/settings",
    title: "Settings",
    icon: <SettingsIcon />,
    type: "link",
    active: false,
  },
  {
    path: "/supports",
    title: "Supports",
    icon: <Person2Icon />,
    type: "link",
    active: false,
  },
];
