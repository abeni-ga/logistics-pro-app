import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RegistrationDocument from "../RegistrationDocument/RegistrationDocument.component";
import { useState } from "react";

const RiderAccountDetail = ({ user, review }) => {
  const [doc, setDoc] = useState(false);
  const [current, setCurrent] = useState(0);

  const comments = [];
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
            <Typography>{user?._id.substring(0, 9)}</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Date Registered</Typography>
            <Typography className="font-bold">
              {user?.createdAt.substring(0, 10)}{" "}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Reviews</Typography>
            <Typography className="font-bold">{user?.review}</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Orders Delivered</Typography>
            <Typography className="font-bold">
              {user?.deliveredOrders}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Typography
              className="px-3 py-1 bg-lightGray text-darkIndigo rounded-xl font-bold"
              variant="h6"
            >
              {user?.totalOrder}
            </Typography>
            <Typography className="font-bold">
              Total <br />
              Orders Picked
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Total Earnings</Typography>
            <Typography className="text-darkIndigo font-bold">
              {user?.totalEarning}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Order Delivered</Typography>
            <Typography className="font-bold">
              {user?.deliveredOrders}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Orders Cancelled</Typography>
            <Typography className="font-bold">
              {user?.cancelledOrders}{" "}
            </Typography>
          </div>
        </div>
      </div>
      {review ? (
        <div className="h-30 w-full flex justify-center">
          <div className="relative h-full flex items-center justify-center w-[80%]">
            <IconButton
              className="absolute top-[45%] left-2 text-darkGray"
              onClick={handlePrevComment}
            >
              <ArrowBackIosIcon className="text-sm" />
            </IconButton>
            <IconButton
              className="absolute top-[45%] right-2 text-darkGray"
              onClick={handleNextComment}
            >
              <ArrowForwardIosIcon className="text-sm" />
            </IconButton>
            <div className="flex flex-col gap-4 w-[70%]">
              <div>
                <Typography className="text-darkGray">
                  {comments[current]?.comment}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography className="text-darkIndigo font-bold">
                  {comments[current]?.userName}
                </Typography>
                <Typography className="text-lightGray">
                  {comments[current]?.userType}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-4/5 flex justify-between">
        <Button
          className="text-[10px] 2xl:text-base bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
          size="small"
          variant="contained"
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button
            variant="contained"
            className="text-[10px] 2xl:text-base bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
          >
            View Riders
          </Button>
          <Button
            variant="contained"
            className="text-[10px] 2xl:text-base bg-bgWhiteSmoke text-darkIndigo capitalize rounded-lg hover:bg-bgWhiteSmoke hover:text-darkIndigo"
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
