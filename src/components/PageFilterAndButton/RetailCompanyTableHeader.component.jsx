import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PulseRed from "../../assets/svg/PulseRed.svg";
import Pulse from "../../assets/svg/Pulse.svg";
import FilterAndActionButton from "./OrderViewHeader";
const RetailTableHeader = () => {
  return (
    <div className="w-[98%] flex flex-col gap-20">
      <div className="flex self-end items-center gap-8">
        <Button
          className="bg-darkIndigo text-white rounded-lg"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Create Order
        </Button>
        <div className="flex">
          <div className="flex bg-darkIndigo items-center rounded-l-2xl px-4 py-2 gap-2">
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
          <div className="flex bg-white items-center rounded-r-2xl px-4 py-2 gap-2">
            <img src={PulseRed} alt="" />
            <div>
              <Typography className="text-lightGray text-xs font-bold">
                Total
              </Typography>
              <Typography className="text-lightGray,font-bold">
                N234,500:00
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <FilterAndActionButton btnName="Search" />
    </div>
  );
};

export default RetailTableHeader;
