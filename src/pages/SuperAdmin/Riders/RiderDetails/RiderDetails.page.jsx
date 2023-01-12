import { IconButton, Typography } from "@mui/material";
import FilterAndActionButton from "../../../../components/PageFilterAndButton/OrderViewHeader";
import RiderOrderTable from "../../../../components/Rider/RiderInfo/RiderOrderTable/RiderOrderTable.compnent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Pulse from "../../../../assets/svg/Pulse.svg";
import RiderInfoDetail from "../../../../components/Rider/RiderInfo/RiderInfoDetail.component";
import ViewRiderAccountDetail from "../../../../components/Rider/RiderInfo/ViewRiderAccountDetail.component";

const RiderDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="h-[15%] flex items-center">
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          View Rider
        </Typography>
      </div>
      <div className="flex w-full h-screen">
        <div className="w-[35%] h-full flex flex-col items-center">
          <RiderInfoDetail />
          <ViewRiderAccountDetail />
        </div>
        <div className="w-[65%] flex justify-center h-min">
          <div className="flex items-center w-[98%] flex-col gap-2">
            <FilterAndActionButton btnName="Search" />
            <div className="flex justify-between items-center w-full">
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                  alignSelf: "flex-end",
                }}
              >
                Order Histor
              </Typography>
              <div className="flex bg-[#4339F2] items-center rounded-2xl px-4 py-2 gap-2">
                <img src={Pulse} alt="" />
                <div>
                  <Typography
                    sx={{ color: "white", fontWeight: "700", fontSize: "12px" }}
                  >
                    Total
                  </Typography>
                  <Typography sx={{ color: "white" }}>N234,500:00</Typography>
                </div>
              </div>
            </div>
            <RiderOrderTable />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RiderDetails;
