import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { color } from "../../constants/Theme";
import RiderInfoDetail from "./RiderInfoDetail.component";

const RiderAccountDetail = () => {
  const [doc, setDoc] = useState(false);
  return (
    <div className="flex flex-col w-11/12 items-center bg-white rounded-2xl gap-3">
      <RiderInfoDetail />
      <div
        className="flex w-4/5 justify-between
      "
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>Reg No</Typography>
            <Typography>#012345678</Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Date Registered
            </Typography>
            <Typography>07 Nov.2019 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>Reviews</Typography>
            <Typography>60</Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Orders Delivered
            </Typography>
            <Typography>250</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Typography
              variant="h6"
              sx={{
                padding: "6px 12px",
                color: color.darkIndigo,
                backgroundColor: color.lightGray,
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              540
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Total <br />
              Orders Picked
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Total Earnings
            </Typography>
            <Typography sx={{ color: color.darkIndigo }}>
              N390,000.00{" "}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Order Delivered
            </Typography>
            <Typography>200 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Orders Cancelled
            </Typography>
            <Typography>686 </Typography>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex justify-between">
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: color.bgWhiteSmoke, color: "#2d5287" }}
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
            View Riders
          </Button>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            View Orders
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {
          setDoc(!doc);
        }}
        size="large"
        variant="contained"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          backgroundColor: "white",
          borderRadius: "8px",
          color: color.lightGray,
        }}
      >
        Registration Documents
      </Button>
      {doc ? (
        <div className="w-full flex  flex-col gap-4 pb-4 items-center justify-center">
          <div className="flex w-[70%] justify-center items-center">
            <Typography sx={{ width: "50%" }}>
              Business Registration Slip
            </Typography>
            <Typography
              sx={{
                color: "green",
                width: "25%",
                textAlign: "center",
              }}
            >
              <CheckIcon />
            </Typography>
            <div className="w-[25%]">
              <Button sx={{ textTransform: "capitalize" }} variant="outlined">
                View
              </Button>
            </div>
          </div>
          <div className="flex w-[70%] justify-center items-center">
            <Typography sx={{ width: "50%" }}>
              Business Registration Slip
            </Typography>
            <Typography
              sx={{
                color: "green",
                width: "25%",
                textAlign: "center",
              }}
            >
              <CheckIcon />
            </Typography>
            <div className="w-[25%]">
              <Button sx={{ textTransform: "capitalize" }} variant="outlined">
                View
              </Button>
            </div>
          </div>
          <div className="flex w-[70%] justify-center items-center">
            <Typography sx={{ width: "50%" }}>
              Business Registration Slip
            </Typography>
            <Typography
              sx={{
                color: "green",
                width: "25%",
                textAlign: "center",
              }}
            >
              <CheckIcon />
            </Typography>
            <div className="w-[25%]">
              <Button sx={{ textTransform: "capitalize" }} variant="outlined">
                View
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RiderAccountDetail;
