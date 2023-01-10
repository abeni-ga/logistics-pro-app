import { Avatar, Button, Typography } from "@mui/material";
import { useState } from "react";
import { color } from "../../../constants/Theme";
import RegistrationDocument from "./RegistrationDocument/RegistrationDocument.component";

const CompanyAccountDetail = () => {
  const [doc, setDoc] = useState(false);
  return (
    <div className="flex flex-col w-11/12 items-center bg-white rounded-2xl gap-3 -mt-10 pt-10">
      <div className="flex flex-col w-4/5">
        <div className="bg-gray-50 p-4">
          <Typography sx={{ color: color.lightGray }}>
            FZ Deliveries is a company focused on pickup and deliveries of goods
            of customers within Lagos, Ibadan, Kano, Abuja and Port Harcourt
          </Typography>
        </div>
      </div>
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
            <Typography sx={{ color: color.lightGray }}>
              Subscription
            </Typography>
            <Typography>Annual Package</Typography>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <Typography
              variant="h4"
              sx={{
                padding: "6px 12px",
                color: "white",
                backgroundColor: "#2d5287",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              540
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Pool <br />
              Orders Picked
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
      <div className="w-4/5 flex justify-between">
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: color.lightBlue,
            color: color.darkIndigo,
            textTransform: "capitalize",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: color.lightBlue,
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
              color: color.darkIndigo,
              borderColor: color.darkIndigo,
              borderRadius: "10px",
            }}
          >
            View Riders
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              borderRadius: "10px",
              borderColor: color.darkIndigo,
              color: color.darkIndigo,
              ":focus": {
                backgroundColor: color.darkIndigo,
                color: "white",
              },
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
          boxShadow:
            "3px 3px 3px 3px rgb(0 0 0 / 0.3), 3px 4px 6px 4px rgb(0 0 0 / 0.3)",
          ":hover": {
            color: color.lightGray,
            backgroundColor: "white",
          },
        }}
      >
        Registration Documents
      </Button>
      {doc ? (
        <div className="w-full flex  flex-col gap-4 pb-4 items-center justify-center bg-slate-50">
          <RegistrationDocument />
          <RegistrationDocument />
        </div>
      ) : null}
    </div>
  );
};

export default CompanyAccountDetail;