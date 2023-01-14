import RoomIcon from "@mui/icons-material/Room";
import {
  Avatar,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { color } from "../../constants/Theme.js";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfileCard from "./ProfileCard.component.jsx/ProfileCard.component.jsx";

const CompaniesOrderPoolSummary = () => {
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
      backgroundColor: "rgba(220,220,220,0.5)",
      // height: "50px",
      textAlign: "center",
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
        <div className="flex flex-col w-[48%] py-4">
          <div className="flex justify-between items-center pl-4 mb-0 bg-white rounded-xl w-full h-[15%]">
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
            </div>
            <div className="flex flex-col justify-center bg-red-500 px-4 h-full w-[30%] rounded-xl">
              <div className="flex">
                <Typography sx={{ color: "white" }}>Items:</Typography>
                <Typography sx={{ color: "white", fontWeight: "700" }}>
                  Books
                </Typography>
              </div>
              <div className="flex">
                <Typography sx={{ color: "white" }}>Notes:</Typography>
                <Typography sx={{ color: "white", fontWeight: "700" }}>
                  The books are about 36 in numbers
                </Typography>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center my-0">
            <div className="flex w-[95%] bg-gray-100 h-10 items-center ">
              <Typography>
                <RoomIcon />
              </Typography>
              <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
            </div>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map1.svg')]"></div>
          <div className="w-full h-[35%] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
            <Typography
              variant="h3"
              sx={{
                textAlign: "start",
                fontSize: "20px",
                fontWeight: "700",
                width: "100%",
              }}
            >
              Delivery Estimate
            </Typography>
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
        <div className="flex flex-col w-[48%] py-4">
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
              <Typography sx={{ color: color.lightGray }}>
                10/10/2021{" "}
              </Typography>
              <Typography sx={{ color: color.lightGray }}>01:37PM</Typography>
            </div>
          </div>
          <div className="flex w-full items-center justify-center my-0">
            <div className="flex w-[95%] bg-gray-100 h-10 items-center">
              <Typography>
                <RoomIcon />
              </Typography>
              <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
            </div>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map2.svg')]"></div>
          <div className="flex flex-col gap-3 w-full h-[35%] pt-2 bg-white rounded-xl items-center">
            <div className="flex w-[90%] items-center justify-center h-[15%]">
              <Typography
                sx={{
                  fontWeight: "bold",
                  width: "40%",
                }}
              >
                Push To Company
              </Typography>
              <SearchBox
                sx={{
                  width: "60%",
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
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesOrderPoolSummary;
