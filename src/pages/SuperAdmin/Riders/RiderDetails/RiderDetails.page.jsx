import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import FilterAndActionButton from "../../../../components/PageFilterAndButton/OrderViewHeader";
import RiderOrderTable from "../../../../components/Rider/RiderInfo/RiderOrderTable/RiderOrderTable.compnent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Pulse from "../../../../assets/svg/Pulse.svg";
import RiderInfoDetail from "../../../../components/Rider/RiderInfo/RiderInfoDetail.component";
import ViewRiderAccountDetail from "../../../../components/Rider/RiderInfo/ViewRiderAccountDetail.component";
import RiderPersonalInfo from "../../../../components/Rider/RiderInfo/RiderPersonalInfo.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";

const RiderDetails = () => {
  const [display, setDisplay] = useState("order-history");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full gap-10 px-5">
      <div className=" flex flex-col gap-5">
        <div className="flex">
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
        <div className="flex">
          <div
            className="w-[22%] lg:w-[18%] xl:w-[13%] flex justify-center font-bold"
            onClick={() => {
              setDisplay("order-history");
            }}
          >
            Order History
          </div>
          <div
            className="w-[22%] lg:w-[18%] xl:w-[13%] flex justify-center font-bold"
            onClick={() => {
              setDisplay("personal-detail");
            }}
          >
            Personal Details
          </div>
        </div>
        <div className="flex">
          <div
            className={`w-[22%] lg:w-[18%] xl:w-[13%] h-1 ${
              display === "order-history" ? "bg-indigo-700" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-[22%] lg:w-[18%] xl:w-[13%] h-1 ${
              display === "personal-detail" ? "bg-indigo-700" : "bg-gray-300"
            }`}
          ></div>
          <div className="w-[10%] h-1 bg-gray-300"></div>
          <div className="w-[70%] h-1 bg-gray-300"></div>
        </div>
      </div>
      {display === "order-history" ? (
        <div className="flex w-full">
          <div className="w-[35%] h-full flex flex-col items-center">
            {}
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
                      sx={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography sx={{ color: "white" }}>N234,500:00</Typography>
                  </div>
                </div>
              </div>
              <RiderOrderTable />
              <TablePagination />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center w-full h-full">
          <RiderPersonalInfo />
        </div>
      )}
    </div>
  );
};

export default RiderDetails;
