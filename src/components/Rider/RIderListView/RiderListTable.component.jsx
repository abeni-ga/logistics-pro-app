import { Typography } from "@mui/material";
import RiderListItem from "./RiderListItem.component";

const RiderListTable = ({
  riders,
  handleUserDetail,
  handlePageLimit,
  handleOffset,
  pageSize,
  pageLimit,
}) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="py-4 w-full flex items-center">
        <div className=" w-[10%] h-2"></div>
        {/* Make this loop */}
        <Typography className="w-[20%] text-lightGray">Rider Name</Typography>
        <Typography className="w-[25%] text-lightGray">Contact</Typography>
        <Typography className="w-[25%] text-lightGray">Earning</Typography>
        <Typography className="w-[15%] text-lightGray">Detail</Typography>
      </div>
      <div className="flex flex-col gap-2 w-full overflow-auto">
        {Array.isArray(riders) &&
          riders.map((rider, index) => (
            <RiderListItem
              key={index}
              rider={rider}
              onClick={() => handleUserDetail(rider)}
            />
          ))}
      </div>
    </div>
  );
};

export default RiderListTable;
