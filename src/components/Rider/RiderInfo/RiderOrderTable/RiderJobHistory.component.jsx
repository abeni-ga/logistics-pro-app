import {
  Avatar,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Radio,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import PPic from "../../../../assets/svg/PPic.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Check from "../../../../assets/svg/Check.svg";
import HistoryTrackerCard from "../../HistoryTrackerCard/HistoryTrackerCard.component.jsx";
import Current from "../../../../assets/svg/Current.svg";
import Bajaj from "../../../../assets/svg/Bajaj.svg";
import { color } from "../../../../constants/Theme.js";

const RiderJobHistroyComp = () => {
  const [selectedValue, setSelectedValue] = useState("current");
  const [dateSelector, setDateSelector] = useState("today");
  const [company, setCompany] = useState("all-companies");

  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));

  const handleDateSelection = (event) => {
    setDateSelector(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className=" px-12 w-[95%] h-full flex justify-between">
      <div className="w-[38%] h-full flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex items-center rounded-lg">
            <Radio
              checked={dateSelector === "today"}
              onChange={handleDateSelection}
              value="today"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "Today" }}
            />
            <Typography sx={{ fontWeight: "bold" }}>Today</Typography>
          </div>
          <div className="flex items-center rounded-lg bg-gray-200 px-2">
            <Radio
              checked={dateSelector === "other"}
              onChange={handleDateSelection}
              value="other"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "other" }}
            />
            <div className="flex flex-col gap-1">
              <Typography>Change period</Typography>
              <div className="flex gap-2">
                <TextField
                  variant="standard"
                  size="small"
                  type="date"
                  InputProps={{
                    style: {
                      height: "15px",
                    },
                    disableUnderline: true,
                  }}
                />
                <TextField
                  variant="standard"
                  type="date"
                  size="small"
                  InputProps={{
                    style: {
                      height: "15px",
                    },
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg p-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center w-[40%] pr-1 bg-slate-100 rounded-lg justify-between">
              <div className="flex items-center">
                <Radio
                  checked={selectedValue === "current"}
                  onChange={handleChange}
                  value="current"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Current" }}
                />
                <Typography>Current</Typography>
              </div>
              <img src={Current} alt="" />
            </div>
            <div className="flex items-center w-[18%] border-2 rounded-lg">
              <Radio
                checked={selectedValue === "all"}
                onChange={handleChange}
                value="all"
                name="radio-buttons"
                inputProps={{ "aria-label": "All" }}
              />
              <Typography>All</Typography>
            </div>
            <div className="flex items-center w-[18%] border-2 rounded-lg">
              <Radio
                checked={selectedValue === "new"}
                onChange={handleChange}
                value="new"
                name="radio-buttons"
                inputProps={{ "aria-label": "New" }}
              />
              <Typography>New</Typography>
            </div>
            <div className="flex items-center w-[18%] border-2 rounded-lg">
              <Radio
                checked={selectedValue === "done"}
                onChange={handleChange}
                value="done"
                name="radio-buttons"
                inputProps={{ "aria-label": "Done" }}
              />
              <Typography>Done</Typography>
            </div>
          </div>
        </div>
        <div className="h-[10%] flex items-center rounded-lg">
          <FormControl
            sx={{
              m: 1,
              width: "40%",
            }}
          >
            <Select
              id="company"
              value={company}
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            >
              <MenuItem default value={"all-companies"}>
                All Companies
              </MenuItem>
            </Select>
          </FormControl>
          <SearchBox
            sx={{
              backgroundColor: "white",
              width: "55%",
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
        <div className="flex flex-col w-full h-full">
          <div className="bg-blue-500 h-[50%] rounded-xl w-[90%]">
            <div className=" flex h-[40%] border-b-2 px-4 justify-between items-center">
              <div className=" flex flex-col h-full justify-center  ">
                <div className="flex  w-full items-center gap-4">
                  <Typography sx={{ color: "white" }}>#00112233</Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      backgroundColor: color.brightGreen,
                      padding: "4px",
                      fontSize: "12px",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    In Transit
                  </Typography>
                </div>
                <Typography sx={{ fontWeight: "700", color: "white" }}>
                  DELIVERY OF BOOKS
                </Typography>
              </div>
              <Typography
                sx={{ color: "white", fontWeight: "700", fontSize: "20px" }}
              >
                N36,899.00
              </Typography>
            </div>
            <div className="h-[60%] flex p-4 items-center gap-16 w-full">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div>
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: "small",
                        color: "white",
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Typography sx={{ color: "white" }}>From</Typography>
                    <Typography sx={{ color: "white", fontWeight: "700" }}>
                      14, Kumolu Street. Ikeja, Lagos
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div>
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: "small",
                        color: "white",
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Typography sx={{ color: "white" }}>To</Typography>
                    <Typography sx={{ color: "white", fontWeight: "700" }}>
                      14, Kumolu Street. Ikeja, Lagos
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="self-end">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: color.darkIndigo,
                    alignSelf: "end",
                  }}
                >
                  View Tracking
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full gap-4 pt-4">
            <HistoryTrackerCard />
            <HistoryTrackerCard />
            <HistoryTrackerCard />
            <HistoryTrackerCard />
          </div>
        </div>
      </div>
      <div className="w-[58%] h-full bg-gray-300 flex flex-col justify-between items-center">
        <div className="flex flex-col h-[60%] w-full items-center bg-black">
          <div className="border-b-2 h-[30%] flex flex-col bg-white justify-center px-10 gap-4 w-full">
            <Typography>Order Track History</Typography>
            <div className="flex gap-8">
              <div>
                <Typography sx={{ color: color.lightGray }}>
                  Order No
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  #00112233
                </Typography>
              </div>
              <div>
                <Typography sx={{ color: color.lightGray }}>Status:</Typography>
                <Typography
                  sx={{
                    color: color.darkIndigo,
                    backgroundColor: color.lightBlue,
                    padding: "4px",
                    borderRadius: "5px",
                  }}
                >
                  Delivered
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex  items-center h-[70%] bg-white w-full">
            <div className="flex flex-col h-full border-r-2 w-[60%] justify-center">
              <div className="flex flex-col h-[60%] px-10 justify-center gap-4">
                <Typography>Order Assigned to:</Typography>
                <div className="flex items-center gap-4">
                  <Avatar src={PPic} />
                  <div className="flex flex-col gap-1">
                    <Typography sx={{ fontWeight: "700" }}>
                      Bola Davies
                    </Typography>
                    <Typography sx={{ color: color.lightGray }}>
                      08121212122 | boladavies@gmail.com
                    </Typography>
                  </div>
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    width: "fit-content",
                    marginLeft: "24px",
                    textTransform: "capitalize",
                    color: color.lightGray,
                    borderColor: color.lightGray,
                    borderRadius: "10px",
                    ":hover": {
                      color: color.lightGray,
                      borderColor: color.lightGray,
                    },
                  }}
                >
                  View Rider
                </Button>
              </div>
              <div className="w-full h-0.5 bg-gray-200"></div>
              <div className=" flex flex-col gap-2 px-10 h-[39%] justify-center w-full">
                <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                  RIde Information
                </Typography>
                <div className="flex gap-2">
                  <Avatar src={Bajaj} />
                  <div>
                    <Typography sx={{ color: color.lightGray }}>
                      BAJAJ (White)
                    </Typography>
                    <Typography sx={{ color: color.lightGray }}>
                      4323AB LAGOS
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-[45%] h-full pl-10">
              <div className="flex flex-col gap-4 pt-10 h-[80%]">
                <div className="flex items-center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "small",
                      color: color.lightGray,
                    }}
                  />
                  <Typography sx={{ color: color.lightGray }}>
                    14, Kumolu Street. Ikeja, Lagos
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "small",
                      color: color.lightGray,
                    }}
                  />
                  <Typography sx={{ color: color.lightGray }}>
                    14, Kumolu Street. Ikeja, Lagos
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "small",
                      color: color.lightGray,
                    }}
                  />
                  <Typography sx={{ color: color.lightGray }}>
                    14, Kumolu Street. Ikeja, Lagos
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "small",
                      color: color.lightGray,
                    }}
                  />
                  <Typography sx={{ color: color.lightGray }}>
                    14, Kumolu Street. Ikeja, Lagos
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "small",
                      color: color.lightGray,
                    }}
                  />
                  <Typography sx={{ color: color.lightGray }}>
                    14, Kumolu Street. Ikeja, Lagos
                  </Typography>
                </div>
              </div>
              <Button
                size="small"
                variant="contained"
                sx={{
                  color: color.darkIndigo,
                  backgroundColor: color.lightGray,
                  width: "25%",
                }}
              >
                Delivered
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[url('/src/assets/svg/Map1.svg')] h-[40%] w-full flex items-end justify-center">
          <div className="w-[90%] bg-white flex justify-between p-4 mb-4">
            <div className="flex flex-col">
              <Typography sx={{ color: color.lightGray }}>
                Current Location
              </Typography>
              <div className="flex gap-1">
                <Typography sx={{ color: color.lightGray, fontWeight: "bold" }}>
                  Palm Groove
                </Typography>
                <img src={Check} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography sx={{ color: color.lightGray }}>
                Last Location
              </Typography>
              <div className="flex gap-1">
                <Typography sx={{ color: color.lightGray, fontWeight: "bold" }}>
                  15 Mins ago
                </Typography>
                <img src={Check} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography sx={{ color: color.lightGray }}>Speed</Typography>
              <div className="flex gap-1">
                <Typography sx={{ color: color.lightGray, fontWeight: "bold" }}>
                  63 Km/hr
                </Typography>
                <img src={Check} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography sx={{ color: color.lightGray }}>Distance</Typography>
              <div className="flex gap-1">
                <Typography sx={{ color: color.lightGray, fontWeight: "bold" }}>
                  103 Km
                </Typography>
                <img src={Check} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderJobHistroyComp;
