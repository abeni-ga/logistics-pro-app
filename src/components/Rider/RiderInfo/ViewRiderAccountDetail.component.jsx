import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RegistrationDocument from "../RegistrationDocument/RegistrationDocument.component";
import { useState } from "react";

const ViewRiderAccountDetail = ({ user, review }) => {
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
      <div className="flex w-[85%] justify-between">
        <div className="flex flex-col xl:gap-4">
          <div className="flex flex-col">
            <Typography className="text-lightGray">Reg No</Typography>
            <Typography>{user?._id.substring(0, 9)}</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Date Registered</Typography>
            <Typography className="font-bold">
              {user?.createdAt.substring(0, 10)}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Asset</Typography>
            <Typography className="font-bold">
              {user?.asset ? user?.asset : ""}
            </Typography>
            {/* <Typography className="text-lightGray">4323AB LAGOS</Typography> */}
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Email Address</Typography>
            <Typography className="font-bold">{user?.email}</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Typography
              className="px-3 py-1 text-darkIndigo bg-lightGray rounded-xl font-bold"
              variant="h6"
            >
              {user?.orderPicked}
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
              {user?.deliveredOrder}{" "}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Orders Cancelled</Typography>
            <Typography className="font-bold">
              {user?.cancelledOrder}{" "}
            </Typography>
          </div>
        </div>
      </div>
      {review ? (
        <div className="h-30 w-full flex justify-center">
          <div className="relative h-full flex items-center justify-center w-[80%]">
            <IconButton
              className="absolute top-[45%] right-2 text-darkGray"
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
                  {comments[current].comment}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography className="text-darkIndigo font-bold">
                  {comments[current].userName}
                </Typography>
                <Typography className="text-lightGray">
                  {comments[current]}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-[85%]   flex flex-row justify-between items-center">
        <Button
          size="small"
          className="xl:h-auto  bg-bgWhiteSmoke text-darkIndigo hover:bg-bgWhiteSmoke hover:text-darkIndigo   capitalize rounded-md text-xs 2xl:text-sm"
          variant="contained"
        >
          view payment
        </Button>
        <div className="flex gap-1 xl:gap-4 items-center">
          <Button
            size="small"
            className=" xl:h-auto bg-bgWhiteSmoke text-darkIndigo hover:bg-bgWhiteSmoke hover:text-darkIndigo   capitalize rounded-md text-xs 2xl:text-sm"
            variant="contained"
          >
            View Riders
          </Button>
          <Button
            size="small"
            className=" bg-bgWhiteSmoke text-darkIndigo hover:bg-bgWhiteSmoke hover:text-darkIndigo   capitalize rounded-md text-xs 2xl:text-sm"
            variant="contained"
          >
            View Orders
          </Button>
        </div>
      </div>
      <Button
        className="w-full bg-white rounded-lg text-lightGray hover:bg-bgWhiteSmoke hover:text-darkIndigo"
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

export default ViewRiderAccountDetail;
