import { Typography } from "@mui/material";
import RiderViewHeader from "../../PageFilterAndButton/RiderViewHeader.component";
import RiderAccountDetail from "../RiderInfo/RiderAccountDetail.component";
import RiderListTable from "../RIderListView/RiderListTable.component";
import RiderInfoDetail from "../RiderInfo/RiderInfoDetail.component";
import TablePagination from "../../Pagination/TablePagination.component";
const RiderList = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-[95%] h-full items-center">
        <div className="flex items-start w-full">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", paddingY: "20px", textAlign: "start" }}
          >
            Active Riders
          </Typography>
        </div>
        <div className="w-full flex">
          <RiderViewHeader btnName={"New Rider"} />
        </div>
        <div className="flex w-full h-screen">
          <div className="w-[65%] flex flex-col h-full gap-5">
            <div className="w-full h-[80%] overflow-auto">
              <RiderListTable />
            </div>
            <div className="w-full h-[5%]">
              <TablePagination />
            </div>
          </div>
          <div className="w-[35%] h-full flex flex-col items-center pt-8">
            <RiderInfoDetail />
            <RiderAccountDetail review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderList;
