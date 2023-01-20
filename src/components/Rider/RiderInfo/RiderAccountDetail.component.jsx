import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RegistrationDocument from "../RegistrationDocument/RegistrationDocument.component";
import { useState } from "react";

const RiderAccountDetail = (props) => {
  const [doc, setDoc] = useState(false);
  const [current, setCurrent] = useState(0);

  const comments = [
    {
      userName: "Mike Umar",
      userType: "Customer",
      comment:
        "1 I like the way he related with me throughout my delivery request surely one of the best",
    },
    {
      userName: "Mike Umar",
      userType: "guest",
      comment:
        "2 like the way he related with me throughout my delivery request surely one of the best",
    },
    {
      userName: "Mike",
      userType: "Customer",
      comment:
        "3 I like the way he related with me throughout my delivery request surely one of the best",
    },
  ];
  const handleNextComment = () => {
    current < comments.length ? setCurrent((prev) => prev + 1) : setCurrent(0);
  };
  const handlePrevComment = () => {
    current === 0
      ? setCurrent(comments.length)
      : setCurrent((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col w-[90%] items-center bg-white h-min rounded-2xl gap-3 pt-12 -mt-10">
      <div className="flex w-4/5 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Typography className="text-lightGray">Reg No</Typography>
            <Typography>#012345678</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Date Registered</Typography>
            <Typography className="font-bold">07 Nov.2019 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Reviews</Typography>
            <Typography className="font-bold">60</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Orders Delivered</Typography>
            <Typography className="font-bold">250</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Typography
              className="px-3 py-1 bg-lightGray text-darkIndigo rounded-xl font-bold"
              variant="h6"
            >
              540
            </Typography>
            <Typography className="font-bold">
              Total <br />
              Orders Picked
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Total Earnings</Typography>
            <Typography className="text-darkIndigo font-bold">
              N390,000.00{" "}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Order Delivered</Typography>
            <Typography className="font-bold">200 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Orders Cancelled</Typography>
            <Typography className="font-bold">686 </Typography>
          </div>
        </div>
      </div>
      {props.review ? (
        <div className="h-30 w-full flex justify-center">
          <div className="relative h-full flex items-center justify-center w-[80%]">
            <IconButton
              className="absolute top-[45%] left-2 text-darkGray"
              onClick={handlePrevComment}
            >
              <ArrowBackIosIcon className="text-sm" />
            </IconButton>
            <IconButton
              className="absolute top-[45%] left-2 text-darkGray"
              onClick={handleNextComment}
            >
              <ArrowForwardIosIcon className="text-sm" />
            </IconButton>
            <div className="flex flex-col gap-4 w-[70%]">
              <div>
                <Typography className="text-darkGray">
                  {comments[current].comment}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography className="text-darkIndigo font-bold">
                  {comments[current].userName}
                </Typography>
                <Typography className="text-lightGray">
                  {comments[current].userType}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-4/5 flex justify-between">
        <Button
          className="bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
          size="small"
          variant="contained"
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button
            variant="contained"
            className="bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
          >
            View Riders
          </Button>
          <Button
            variant="contained"
            className="bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
          >
            View Orders
          </Button>
        </div>
      </div>
      <Button
        className="bg-white text-lightGray w-full capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
        onClick={() => {
          setDoc(!doc);
        }}
        size="large"
        variant="contained"
      >
        Registration Documents
      </Button>
      {doc ? (
        <div className="w-full flex  flex-col gap-4 pb-4 items-center justify-center">
          <RegistrationDocument />
          <RegistrationDocument />
        </div>
      ) : null}
    </div>
  );
};

export default RiderAccountDetail;
