import { Typography } from "@mui/material";
import RiderListItem from "./RiderListItem.component";

const RiderListTable = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-[5%] w-full flex items-center">
        <div className=" w-[10%] h-2"></div>
        <Typography sx={{ width: "20%" }}>Rider Name</Typography>
        <Typography sx={{ width: "25%" }}>Contact</Typography>
        <Typography sx={{ width: "25%" }}>Earning</Typography>
        <Typography sx={{ width: "15%" }}>Detail</Typography>
      </div>
      <div className="flex flex-col gap-2 h-full w-full">
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
      </div>
    </div>
  );
};

export default RiderListTable;
