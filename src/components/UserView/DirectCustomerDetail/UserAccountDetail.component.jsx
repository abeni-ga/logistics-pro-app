import { Avatar, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { color } from "../../../constants/Theme";

const UserAccountDetail = () => {
  const [doc, setDoc] = useState(false);
  return (
    <div className="flex flex-col w-11/12 items-center bg-white rounded-2xl -mt-10 pt-12">
      <div className="flex flex-col w-4/5">
        <div className="bg-gray-50 p-4  mb-3">
          <Typography sx={{ color: color.lightGray, borderRadius: "10px" }}>
            FZ Deliveries is a company focused on pickup and deliveries of goods
            of customers within Lagos, Ibadan, Kano, Abuja and Port Harcourt
          </Typography>
        </div>
      </div>
      <div
        className="flex w-4/5 justify-between mb-3
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
            <Typography sx={{ color: color.lightGray }}>
              Subscription
            </Typography>
            <Typography>Annual Package</Typography>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-3">
          <div className="flex items-center gap-4">
            <Typography
              variant="h2"
              sx={{
                padding: "6px 12px",
                color: "white",
                fontSize: "28px",
                backgroundColor: color.darkIndigo,
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              540
            </Typography>
            <Typography variant="" sx={{ fontWeight: "bold" }}>
              Orders Requests
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Reference Contact
            </Typography>
            <div className="flex gap-4 mb-2">
              <Avatar />
              <div>
                <Typography>09162289232</Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Ibrahim Williams
                </Typography>
              </div>
              <Typography sx={{ color: color.lightGray, alignSelf: "end" }}>
                CEO
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex justify-between mb-3">
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: color.bgWhiteSmoke,
            color: "#2d5287",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: color.bgWhiteSmoke,
            },
          }}
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              borderColor: color.darkIndigo,
              color: color.darkIndigo,
            }}
          >
            View Riders
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              backgroundColor: color.darkIndigo,
            }}
          >
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
          ":hover": {
            backgroundColor: "white",
          },
        }}
      >
        Registration Documents
      </Button>
      {doc ? (
        <div
          className={`w-full flex  flex-col gap-4  pb-4 items-center justify-center bg-[${color.bgWhiteSmoke}]`}
        >
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

export default UserAccountDetail;
