import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PPic from "../../../../../assets/svg/PPic.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { color } from "../../../../../constants/Theme.js";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const CompanyOrderSummary = () => {
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
      backgroundColor: "rgba(220,220,220,0.5)",
    },
  }));
  const history = useNavigate();
  return (
    <div className="flex m-8 flex-col h-screen">
      <div className="h-[15%]">
        <div className="flex items-center gap-2">
          <NavLink>
            <IconButton
              onClick={() => {
                history(-1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </NavLink>
          <Typography className="font-bold" variant="h6">
            Order Summary
          </Typography>
        </div>
        <div>
          <Typography className="text-darkGray ">Order No:</Typography>
          <Typography className="font-bold text-darkGray" variant="h6">
            #00112233
          </Typography>
        </div>
      </div>

      <div className="flex w-full h-full justify-around ">
        <div className="flex flex-col w-[48%] py-4 gap-1">
          <div className="flex flex-col justify-center px-4 bg-white rounded-xl w-full h-[15%]">
            <div className="flex gap-4">
              <Typography className="font-bold text-darkGray">
                Picked by:
              </Typography>
              <div className="flex gap-2">
                <Avatar />
                <div className="">
                  <Typography className="font-bold text-darkGray">
                    Olaniyi Ojo David
                  </Typography>
                  <Typography className="text-lightGray">
                    091612891010
                  </Typography>
                </div>
              </div>
              <Typography>10/10/2021 </Typography>
              <Typography>01:37PM</Typography>
              <Typography className="font-bold text-darkGray">
                ₦2,500
              </Typography>
            </div>
            <div className="flex justify-between w-[75%]">
              <div className="flex">
                <Typography>
                  <LocationOnOutlinedIcon className="text-yellow" />
                </Typography>
                <Typography className="font-bold text-darkGray">
                  14, Kumolu Street. Ikeja, Lagos
                </Typography>
              </div>
              <div className="flex gap-4">
                <Typography className="text-lightGray">
                  Pickup Type :
                </Typography>
                <Typography className="font-bold text-darkGray">
                  BIKE
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 bg-white rounded-lg w-full h-[15%]">
            <div className="flex gap-8">
              <Typography>Item:</Typography>
              <Typography className="font-bold text-darkGray">Book</Typography>
            </div>
            <div className="flex gap-8">
              <Typography>Note:</Typography>
              <Typography className="font-bold text-darkGray">
                The books are about 36 in number
              </Typography>
            </div>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map1.svg')]"></div>
          <div className="w-full h-[35%] bg-white rounded-xl flex flex-col items-center justify-center gap-2">
            <Typography className="font-bold text-darkGray" variant="h6">
              Delivery Estimate
            </Typography>
            <div className="h-0.5 bg-gray-200 w-[90%]"></div>
            <div className="flex flex-col w-[90%] gap-2">
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">
                  Basic fair/Km
                </Typography>
                <Typography className="text-lightGray">N420.00</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">
                  Est. Distance to pick-up
                </Typography>
                <Typography className="text-lightGray">4.2Km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">
                  Est. Distance to delivery
                </Typography>
                <Typography className="text-lightGray">4.2Km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">
                  Est. Fair Total
                </Typography>
                <Typography className="text-lightGray">N14,320.00</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">Tax</Typography>
                <Typography className="text-lightGray">N250</Typography>
              </div>
              <div className="h-0.5 bg-gray-200 w-full"></div>
              <div className="flex justify-between">
                <Typography className="font-bold text-darkGray">
                  Total
                </Typography>
                <Typography className="text-lightGray">N14,150.00</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[48%] items-center py-4">
          <div className="flex flex-col justify-center px-4 bg-white rounded-xl w-full h-[15%]">
            <div className="flex gap-4">
              <Typography className="font-bold text-darkGray">
                Receiving:
              </Typography>
              <div className="flex gap-2">
                <Avatar />
                <div className="">
                  <Typography className="font-bold text-darkGray">
                    Olaniyi Ojo David
                  </Typography>
                  <Typography className="text-lightGray">
                    091612891010
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[98%] p-1 bg-bgWhiteSmoke">
            <LocationOnOutlinedIcon className="text-yellow" />
            <Typography className="font-bold text-darkGray">
              14, Kumolu Street. Ikeja, Lagos
            </Typography>
          </div>
          <div className="w-full h-[35%] mb-4 bg-white rounded-xl bg-[url('/src/assets/svg/Map2.svg')]"></div>
          <div className="flex flex-col gap-3 w-full h-[20%]  bg-white rounded-xl items-center justify-center">
            <div className="flex w-[90%] justify-between items-center">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: color.darkGray,
                }}
              >
                Rider
              </Typography>
              <SearchBox
                className="w-[60%] h-[80%] rounded-lg"
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
                <Avatar src={PPic} />
                <div className="">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Bolade Davies
                  </Typography>
                  <div className="flex">
                    <LocationOnOutlinedIcon className="text-lightGray" />
                    <Typography className="text-lightGray">Ikeja </Typography>
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

export default CompanyOrderSummary;
