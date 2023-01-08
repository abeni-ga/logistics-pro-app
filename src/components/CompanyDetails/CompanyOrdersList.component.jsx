import { Typography } from "@mui/material";
import FilterAndActionButton from "../PageFilterAndButton/OrderViewHeader";
import CompanyOrdersTable from "./CompanyOrdersTable.component";
import { color } from "../../constants/Theme.js";
import Pulse from "../../assets/svg/Pulse.svg";
const CompanyOrdersList = () => {
  return (
    <div className="flex items-center w-[98%] flex-col gap-2">
      <FilterAndActionButton btnName="New Company" />
      <div className="flex justify-between pl-10 w-full">
        <Typography>Pool Order Taken</Typography>
        <div className="flex bg-indigo-500 items-center rounded-2xl px-4 py-2 gap-2">
          <img src={Pulse} alt="" />
          <div>
            <Typography sx={{ color: color.bgWhiteSmoke }}>Total</Typography>
            <Typography sx={{ color: "white" }}>N234,500:00</Typography>
          </div>
        </div>
      </div>
      <CompanyOrdersTable />
    </div>
  );
};

export default CompanyOrdersList;
