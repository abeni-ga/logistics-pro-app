import { Typography } from "@mui/material";
import RiderViewHeader from "../../../components/PageFilterAndButton/RiderViewHeader.component";
import RiderAccountDetail from "../../../components/Rider/RiderInfo/RiderAccountDetail.component";
import RiderListTable from "../../../components/Rider/RIderListView/RiderListTable.component";
import RiderInfoDetail from "../../../components/Rider/RiderInfo/RiderInfoDetail.component";
const ListAllRider = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-[95%] h-full items-center">
        <div className="flex items-start w-full">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", paddingY: "20px", textAlign: "start" }}
          >
            Riders
          </Typography>
        </div>
        <div className="w-full flex">
          <RiderViewHeader btnName={"New Rider"} />
        </div>
        <div className="flex w-full h-screen">
          <div className="w-[65%] flex justify-center h-full">
            <div className="w-full">
              <RiderListTable />
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

export default ListAllRider;
