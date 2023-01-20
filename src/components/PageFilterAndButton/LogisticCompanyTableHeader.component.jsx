import { Typography } from "@mui/material";

import Pulse from "../../assets/svg/Pulse.svg";
import FilterAndActionButton from "./OrderViewHeader";

const LogisticTableHeader = () => {
  return (
    <div className="w-[98%] flex flex-col gap-10">
      <FilterAndActionButton btnName="New Companys" />
      <div className="flex justify-between pl-10 w-full">
        <Typography className="self-end text-xl font-bold">
          Pool Order Taken
        </Typography>
        <div className="flex bg-[#4339F2] items-center rounded-2xl px-4 py-2 gap-2">
          <img src={Pulse} alt="" />
          <div>
            <Typography className="text-bgWhiteSmoke text-xs font-bold">
              Total
            </Typography>
            <Typography className="text-white font-bold">
              N234,500:00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticTableHeader;
