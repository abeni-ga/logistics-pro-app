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
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import HistoryTrackerCard from "./HistoryTrackerCard/HistoryTrackerCard.component.jsx";
import Current from "../../assets/svg/Current.svg";

const CompaniesOrderHistroyComp = () => {
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
        <div className=" flex h-[10%] rounded-lg items-center justify-between">
          <div className="flex items-center w-[35%] rounded-lg">
            <Radio
              checked={dateSelector === "today"}
              onChange={handleDateSelection}
              value="today"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "Today" }}
            />
            <Typography className="font-bold">Today</Typography>
          </div>
          <div className="flex items-center w-[65%] bg-white border-2 rounded-lg">
            <Radio
              checked={dateSelector === "other"}
              onChange={handleDateSelection}
              value="other"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "other" }}
            />
            <div className="flex">
              <Typography>Change period</Typography>
            </div>
          </div>
        </div>
        <div className="h-[15%] bg-white rounded-lg p-2">
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
        <div className="h-[10%] bg-white flex items-center rounded-lg">
          <FormControl className="w-[40%]">
            <Select
              id="company"
              value={company}
              className="bg-white rounded-lg"
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
            className="bg-white w-[55%] rounded-lg"
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
                  <Typography className="text-white">#00112233</Typography>
                  <Typography className="bg-brightGreen p-1 rounded-md text-white">
                    In Transit
                  </Typography>
                </div>
                <Typography className="text-white text-base font-bold">
                  DELIVERY OF BOOKS
                </Typography>
              </div>
              <Typography variant="h6" className="text-white font-bold">
                N36,899.00
              </Typography>
            </div>
            <div className="h-[60%]">5</div>
          </div>
          <div className="flex flex-col h-full gap-2">
            <HistoryTrackerCard />
            <HistoryTrackerCard />
            <HistoryTrackerCard />
            <HistoryTrackerCard />
          </div>
        </div>
      </div>
      <div className="w-[58%] h-full bg-gray-300 flex flex-col justify-between items-center">
        <div className="flex flex-col h-full w-full items-center">
          <div className="border-b-2 h-[15%] flex flex-col bg-white justify-center px-10 gap-4 w-full">
            <div className="flex gap-8">
              <Typography className="text-lightGray font-bold">
                Order Tracking
              </Typography>
              <Typography>#00112233</Typography>
            </div>
            <div className="flex gap-2">
              <Avatar variant="rounded" />
              <div>
                <Typography className="font-bold"> FZ Deliveries</Typography>
                <Typography className="text-lightGray">
                  46, Alade Road, Allen Avenue Lagos
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex border-b-2 items-center h-[30%] bg-white px-10 w-full">
            <div className="flex flex-col gap-4 w-[55%]">
              <div className="flex items-center gap-4">
                <Avatar />
                <div>
                  <Typography>Assigned Rider</Typography>
                  <Typography>Ibrahim Downey</Typography>
                </div>
              </div>
              <div className="flex border-2 rounded-lg py-3 items-center justify-center gap-6">
                <div className="flex flex-col">
                  <Typography>Phone Number:</Typography>
                  <Typography>080808080809</Typography>
                </div>
                <div className="flex flex-col">
                  <Typography>Email Address:</Typography>
                  <Typography>Emailaddress@gmail.com</Typography>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-min ml-6 capitalize bg-lightGray"
              >
                View Rider
              </Button>
            </div>
            <div className="flex w-[45%] bg-slate-300">2</div>
          </div>
          <div className=" flex flex-col gap-2 px-10 justify-center border-b-2 h-[15%] bg-white w-full">
            <Typography className="font-bold">RIde Information</Typography>
            <div className="flex">
              <Avatar />
              <div>
                <Typography>BAJAJ (White)</Typography>
                <Typography>4323AB LAGOS</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] bg-white flex justify-between p-4 mb-4">
          <div className="flex flex-col">
            <Typography className="text-lightGray">Current Location</Typography>
            <Typography className="text-lightGray font-bold">
              Palm Groove
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Last Location</Typography>
            <Typography className="text-lightGray font-bold">
              15 Mins ago
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Speed</Typography>
            <Typography className="text-lightGray font-bold">
              63 Km/hr
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Distance</Typography>
            <Typography className="text-lightGray font-bold">103 Km</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesOrderHistroyComp;
