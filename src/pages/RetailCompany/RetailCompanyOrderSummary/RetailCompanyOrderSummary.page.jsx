import RoomIcon from "@mui/icons-material/Room";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { color } from "../../../constants/Theme.js";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RetailCompanyOrderSummary = () => {
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
      backgroundColor: "rgba(220,220,220,0.5)",
    },
  }));
  return (
    <div className="flex m-8 flex-col h-screen">
      <div className="h-[15%]">
        <div className="flex items-center gap-2">
          <NavLink>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </NavLink>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Order Summary
          </Typography>
        </div>
        <div>
          <Typography>Order No:</Typography>
          <Typography sx={{ fontWeight: "bold" }}>#00112233</Typography>
        </div>
      </div>

      <div className="flex w-full h-full justify-around ">
        <div className="flex flex-col w-[48%] py-4 gap-1">
          <div className="flex flex-col justify-center px-4 bg-white rounded-xl w-full h-[15%]">
            <div className="flex gap-4">
              <Typography>Picked by:</Typography>
              <div className="flex gap-2">
                <Avatar />
                <div className="">
                  <Typography>Olaniyi Ojo David</Typography>
                  <Typography sx={{ color: color.lightGray }}>
                    091612891010
                  </Typography>
                </div>
              </div>
              <Typography sx={{ color: color.lightGray }}>
                10/10/2021{" "}
              </Typography>
              <Typography sx={{ color: color.lightGray }}>01:37PM</Typography>
              <Typography> ₦2,500</Typography>
            </div>
            <div className="flex justify-between w-[75%]">
              <div className="flex">
                <Typography>
                  <RoomIcon />
                </Typography>
                <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
              </div>
              <div className="flex gap-4">
                <Typography sx={{ color: color.lightGray }}>
                  Pickup Type :
                </Typography>
                <Typography>BIKE</Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 bg-white rounded-lg w-full h-[15%]">
            <div className="flex gap-8">
              <Typography>Item:</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Book</Typography>
            </div>
            <div className="flex gap-8">
              <Typography>Note:</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                The books are about 36 in number
              </Typography>
            </div>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map1.svg')]"></div>
          <div className="w-full h-[35%] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
            <Typography>Delivery Estimate</Typography>
            <div className="h-0.5 bg-gray-200 w-[90%]"></div>
            <div className="flex flex-col w-[90%] gap-2">
              <div className="flex justify-between">
                <Typography>Basic fair/Km</Typography>
                <Typography sx={{ color: color.lightGray }}>N420.00</Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Est. Distance to pick-up</Typography>
                <Typography sx={{ color: color.lightGray }}>4.2Km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Est. Distance to delivery</Typography>
                <Typography sx={{ color: color.lightGray }}>4.2Km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Est. Fair Total</Typography>
                <Typography sx={{ color: color.lightGray }}>
                  N14,320.00
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Tax</Typography>
                <Typography sx={{ color: color.lightGray }}>N250</Typography>
              </div>
              <div className="h-0.5 bg-gray-200 w-full"></div>
              <div className="flex justify-between">
                <Typography>Total</Typography>
                <Typography sx={{ color: color.lightGray }}>
                  N14,150.00
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[48%] py-4">
          <div className="flex flex-col justify-center px-4 bg-white rounded-xl w-full h-[15%]">
            <div className="flex gap-4">
              <Typography>Receiving:</Typography>
              <div className="flex gap-2">
                <Avatar />
                <div className="">
                  <Typography>Olaniyi Ojo David</Typography>
                  <Typography sx={{ color: color.lightGray }}>
                    091612891010
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[75%]">
              <div className="flex">
                <Typography>
                  <RoomIcon />
                </Typography>
                <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
              </div>
            </div>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map2.svg')]"></div>
          <div className="flex flex-col gap-3 w-full h-[20%]  bg-white rounded-xl items-center justify-center">
            <div className="flex w-[90%] justify-between items-center">
              <Typography>Rider</Typography>
              <SearchBox
                sx={{
                  width: "60%",
                  height: "80%",
                  borderRadius: "10px",
                }}
                variant="outlined"
                placeholder="search company here"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <span className="h-0.5 w-[90%] bg-gray-300"></span>
            <div className="border-y-2 border-gray-200 w-[90%] py-2 flex items-center justify-between">
              <div className="flex gap-4">
                <Avatar />
                <div className="">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Bolade Davies
                  </Typography>
                  <div className="flex">
                    <Typography sx={{ color: color.lightGray }}>
                      <RoomIcon />
                    </Typography>
                    <Typography sx={{ color: color.lightGray }}>
                      Ikeja{" "}
                    </Typography>
                  </div>
                </div>
              </div>
              <Button
                size="small"
                sx={{
                  color: color.lightGray,
                  textTransform: "capitalize",
                  fontSize: "16px",
                  borderRadius: "12px",
                  borderColor: color.lightGray,
                }}
                variant="outlined"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailCompanyOrderSummary;
