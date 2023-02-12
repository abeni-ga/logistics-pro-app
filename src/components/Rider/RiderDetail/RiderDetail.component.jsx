import { useCallback, useEffect, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import FilterAndActionButton from "../../PageFilterAndButton/OrderViewHeader";
import RiderOrderTable from "../RiderInfo/RiderOrderTable/RiderOrderTable.compnent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Pulse from "../../../assets/svg/Pulse.svg";
import RiderInfoDetail from "../RiderInfo/RiderInfoDetail.component";
import ViewRiderAccountDetail from "../RiderInfo/ViewRiderAccountDetail.component";
import RiderPersonalInfo from "../RiderInfo/RiderPersonalInfo.component";
import { toast } from "react-toastify";
import { getUser } from "../../../utils/apis";
// import TablePagination from "../../Pagination/TablePagination.component";

const RiderDetail = ({ userId }) => {
  const handleGetUser = useCallback(async () => {
    const response = await getUser(userId);
    if (response?.status < 300) {
      console.log(response);
    } else {
      toast.error(response?.statusText);
    }
  }, [userId]);
  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);
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
              display === "order-history" ? "bg-darkIndigo" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-[22%] lg:w-[18%] xl:w-[13%] h-1 ${
              display === "personal-detail" ? "bg-darkIndigo" : "bg-gray-300"
            }`}
          ></div>
          <div className="w-[56%] xl:w-[74%] lg:w-[60%] h-1 bg-gray-300"></div>
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
                <Typography className="font-bold text-lg self-end">
                  Order Histor
                </Typography>
                <div className="flex bg-[#4339F2] items-center rounded-2xl px-4 py-2 gap-2">
                  <img src={Pulse} alt="" />
                  <div>
                    <Typography className="text-white font-bold text-xs">
                      Total
                    </Typography>
                    <Typography className="text-white">N234,500:00</Typography>
                  </div>
                </div>
              </div>
              <RiderOrderTable />
              {/* <TablePagination /> */}
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

export default RiderDetail;
