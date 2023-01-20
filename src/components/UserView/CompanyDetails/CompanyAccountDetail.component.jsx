import { Avatar, Button, Typography } from "@mui/material";
import { useState } from "react";
import RegistrationDocument from "./RegistrationDocument/RegistrationDocument.component";

const CompanyAccountDetail = (props) => {
  const [doc, setDoc] = useState(false);
  return (
    <div className="flex flex-col w-11/12 items-center bg-white rounded-2xl -mt-10 pt-14">
      <div className="flex flex-col w-4/5 mb-3">
        <div className="bg-gray-50 p-4 rounded-lg">
          <Typography className="text-lightGray">
            FZ Deliveries is a company focused on pickup and deliveries of goods
            of customers within Lagos, Ibadan, Kano, Abuja and Port Harcourt
          </Typography>
        </div>
      </div>
      <div className="flex w-4/5 justify-between mb-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Typography className="text-lightGray">Reg No</Typography>
            <Typography className="text-base">#012345678</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Date Registered</Typography>
            <Typography className="text-base">07 Nov.2019 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Subscription</Typography>
            <Typography className="text-base">Annual Package</Typography>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <Typography
              className="px-[6px] py-[12px] text-2xl text-white bg-darkIndigo rounded-xl font-bold"
              variant="h2"
            >
              540
            </Typography>
            {props.retail ? (
              <Typography className="text-xl font-bold">
                Orders Requests
              </Typography>
            ) : (
              <Typography className="text-xl font-bold">
                Pool <br />
                Orders Picked
              </Typography>
            )}
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">
              Reference Contact
            </Typography>
            <div className="flex gap-4 mb-2">
              <Avatar />
              <div>
                <Typography className="font-bold">09162289232</Typography>
                <Typography className="text-lightGray">
                  Ibrahim Williams
                </Typography>
              </div>
              <Typography className="text-lightGray self-end">CEO</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex justify-between mb-3">
        <Button
          className="bg-lightBlue text-darkIndigo capitalize font-bold hover:bg-lightBlue"
          size="small"
          variant="contained"
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button
            className="capitalize text-darkIndigo border-darkIndigo rounded-lg"
            variant="outlined"
          >
            View Riders
          </Button>
          <Button
            className="capitalize bg-white round border-darkIndigo text-darkIndigo focus:bg-darkIndigo focus:text-white"
            variant="outlined"
          >
            View Orders
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {
          setDoc(!doc);
        }}
        className="w-full bg-white rounded-lg text-lightGray hover:text-lightGray hover:bg-white"
        size="large"
        variant="contained"
      >
        Registration Documents
      </Button>
      {doc ? (
        <div
          className={
            "w-full flex  flex-col gap-4  pb-4 items-center bg-[#E5E5E5]"
          }
        >
          <RegistrationDocument />
          <RegistrationDocument />
        </div>
      ) : null}
    </div>
  );
};

export default CompanyAccountDetail;
