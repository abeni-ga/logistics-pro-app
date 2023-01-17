import { Typography } from "@mui/material";
import RiderJobHistroyComp from "../../../../components/Rider/RiderInfo/RiderOrderTable/RiderJobHistory.component";

const RiderJobHistory = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[15%] pl-12 pt-10">
        <Typography variant=" h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Order History
        </Typography>
      </div>
      <RiderJobHistroyComp />
    </div>
  );
};

export default RiderJobHistory;
