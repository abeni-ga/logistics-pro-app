import { NavLink } from "react-router-dom";
import { Avatar, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../../assets/svg/Profile.svg";
import { routes } from "../../../routes/siteRoutes.routes";
const UserListItem = ({ company, route }) => {
  return (
    <NavLink
      to={`${
        company.role === "DeliveryCompany"
          ? routes.admin.deliveryCompanyDetail
          : company.role === "RetailCompany"
          ? routes.admin.retailCompanyDetail
          : routes.admin.customerDetail
      }/${company?._id}`}
    >
      <div className="flex min-h-[96px] items-center p-1 xl:p-4 bg-white w-full rounded-xl gap-1 xl:gap-2">
        <div className="w-[6%] xl:w-[8%]">
          <Avatar
            className="lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            src={Profile}
            alt=""
            variant="rounded"
          />
        </div>
        <div className="w-[18%]">
          <Typography className="text-xs xl:text-sm font-bold">
            {company?.detail?.name
              ? company?.detail?.name
              : company?.detail?.companyName
              ? company?.detail?.companyName
              : company?.detail?.firstName
              ? `${company?.detail?.firstName + company?.detail?.lastName}`
              : company?.username}
          </Typography>
          <Typography className="text-xs xl:text-sm text-lightGray">
            {company?.detail?.address}
          </Typography>
        </div>
        <Typography className="text-xs xl:text-sm w-[10%]">
          {company?._id.substring(0, 9)}
        </Typography>
        <div className="flex flex-col pl-1 w-[15%]">
          <Typography className="text-xs xl:text-sm font-bold">
            09162289232
          </Typography>
          <Typography className="text-xs xl:text-sm text-lightGray">
            Ibrahim Williams
          </Typography>
        </div>
        <div className="w-[15%]">
          <Typography className="text-xs xl:text-sm font-bold">
            Annual
          </Typography>
          <Typography className="text-xs xl:text-sm text-lightGray">
            21 Oct 2021 - 22 Oct 2022
          </Typography>
        </div>
        <Typography
          className={`text-xs xl:text-sm w-[12%] xl:w-[10%] font-bold text-[#053079]`}
        >
          N390,000.00
        </Typography>
        <div className="w-[6%] xl:w-[8%]">
          <Typography className="text-xs xl:text-sm font-bold">200</Typography>
          <Typography className="text-xs xl:text-sm text-lightGray">
            Active
          </Typography>
        </div>
        <div className="w-[8%]">
          <Typography
            className={`text-xs xl:text-sm color w-min rounded-lg p-2 text-white font-bold ${
              company?.vertified ? "bg-green-400" : "bg-red-400"
            }`}
          >
            {company?.vertified ? "Vertified" : "Pending"}
          </Typography>
        </div>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </NavLink>
  );
};

export default UserListItem;
