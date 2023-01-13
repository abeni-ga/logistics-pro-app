import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RegistrationDocument from "../RegistrationDocument/RegistrationDocument.component";
import { useState } from "react";
import { color } from "../../../constants/Theme";

const ViewRiderAccountDetail = (props) => {
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
            <Typography sx={{ color: color.lightGray }}>Reg No</Typography>
            <Typography>#012345678</Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Date Registered
            </Typography>
            <Typography sx={{ fontWeight: "700" }}>07 Nov.2019 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>Asset</Typography>
            <Typography sx={{ fontWeight: "700" }}>Bike | BAJAJ</Typography>
            <Typography sx={{ color: color.lightGray }}>
              4323AB LAGOS
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Email Address
            </Typography>
            <Typography sx={{ fontWeight: "700" }}>abcd@gmail.com</Typography>
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
            <Typography sx={{ color: color.darkIndigo, fontWeight: "700" }}>
              N390,000.00
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Order Delivered
            </Typography>
            <Typography sx={{ fontWeight: "700" }}>200 </Typography>
          </div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>
              Orders Cancelled
            </Typography>
            <Typography sx={{ fontWeight: "700" }}>686 </Typography>
          </div>
        </div>
      </div>
      {props.review ? (
        <div className="h-30 w-full flex justify-center">
          <div className="relative h-full flex items-center justify-center w-[80%]">
            <IconButton
              sx={{
                position: "absolute",
                top: "45%",
                left: "10px",
                color: color.darkGray,
              }}
              onClick={handlePrevComment}
            >
              <ArrowBackIosIcon sx={{ fontSize: "small" }} />
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                top: "45%",
                right: "10px",
                color: color.darkGray,
              }}
              onClick={handleNextComment}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "small" }} />
            </IconButton>
            <div className="flex flex-col gap-4 w-[70%]">
              <div>
                <Typography sx={{ color: color.darkGray }}>
                  {comments[current].comment}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography sx={{ fontWeight: "700", color: color.darkIndigo }}>
                  {comments[current].userName}
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  {comments[current].userType}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-4/5 flex justify-between">
        <Button
          size="small"
          variant="contained"
          sx={{
            ":hover": {
              backgroundColor: color.bgWhiteSmoke,
              color: color.darkIndigo,
            },
            backgroundColor: color.bgWhiteSmoke,
            color: color.darkIndigo,
            textTransform: "capitalize",
            borderRadius: "10px",
          }}
        >
          view payment
        </Button>
        <div className="flex gap-4">
          <Button
            variant="contained"
            sx={{
              ":hover": {
                backgroundColor: color.bgWhiteSmoke,
                color: color.darkIndigo,
              },
              backgroundColor: color.bgWhiteSmoke,
              color: color.darkIndigo,
              textTransform: "capitalize",
              borderRadius: "10px",
            }}
          >
            View Riders
          </Button>
          <Button
            variant="contained"
            sx={{
              ":hover": {
                backgroundColor: color.bgWhiteSmoke,
                color: color.darkIndigo,
              },
              backgroundColor: color.bgWhiteSmoke,
              color: color.darkIndigo,
              textTransform: "capitalize",
              borderRadius: "10px",
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
          ":hover": {
            backgroundColor: color.bgWhiteSmoke,
            color: color.darkIndigo,
          },
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
          <RegistrationDocument />
          <RegistrationDocument />
        </div>
      ) : null}
    </div>
  );
};

export default ViewRiderAccountDetail;
