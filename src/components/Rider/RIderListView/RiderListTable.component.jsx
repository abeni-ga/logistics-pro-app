import { Typography } from "@mui/material";
import RiderListItem from "./RiderListItem.component";

const RiderListTable = ({ riders }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="py-4 w-full flex items-center">
        <div className=" w-[10%] h-2"></div>
        <Typography className="w-[20%] text-lightGray">Rider Name</Typography>
        <Typography className="w-[25%] text-lightGray">Contact</Typography>
        <Typography className="w-[25%] text-lightGray">Earning</Typography>
        <Typography className="w-[15%] text-lightGray">Detail</Typography>
      </div>
      <div className="flex flex-col gap-2 h-full w-full">
        {Array.isArray(riders) &&
          riders.map((rider, index) => (
            <RiderListItem key={index} rider={rider} />
          ))}
      </div>
    </div>
  );
};

export default RiderListTable;
