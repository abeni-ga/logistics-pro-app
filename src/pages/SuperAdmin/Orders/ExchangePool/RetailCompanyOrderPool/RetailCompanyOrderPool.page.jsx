import {
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
import Current from "../../../../../assets/svg/Current.svg";
import CompaniesOrderPoolTable from "../../../../../components/OrderPool/CompaniesOrderTable.component";

const RetailCompanyOrderPool = () => {
  const [selectedValue, setSelectedValue] = useState("current");
  const [dateSelector, setDateSelector] = useState("today");
  const [size, setSize] = useState(7);

  const handleDateSelection = (event) => {
    setDateSelector(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center ">
      <div className=" w-[95%] flex flex-col">
        <div className="flex">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              paddingY: "20px",
              textAlign: "start",
              width: "100%",
            }}
          >
            Order Exchange Pool
          </Typography>
        </div>
        <div className="flex w-[35%]">
          <div className="flex items-center rounded-lg w-[35%]">
            <Radio
              checked={dateSelector === "all-time"}
              onChange={handleDateSelection}
              value="all-time"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "All Time" }}
            />
            <Typography sx={{ fontWeight: "bold" }}>All Time</Typography>
          </div>
          <div className="flex items-center bg-white border-2 w-[70%] rounded-lg px-4">
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
                  inputProps={{
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
                  inputProps={{
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
        <div className="w-full flex justify-between">
          <div className="w-[40%]">
            <div className="h-[15%] rounded-lg p-2">
              <div className="flex items-center gap-2 bg-white p-4 rounded-lg">
                <Typography>Order Options</Typography>
                <div className="flex items-center w-[50%] pr-1 rounded-lg justify-between">
                  <div className="flex items-center">
                    <Radio
                      checked={selectedValue === "current"}
                      onChange={handleChange}
                      value="current"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Current" }}
                    />
                    <Typography>Pushed From Companies</Typography>
                  </div>
                  <img src={Current} alt="" />
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
          </div>
          <div className=" flex items-center w-[40%]">
            <FormControl
              sx={{
                m: 1,
                width: "15%",
              }}
            >
              <Select
                id="size"
                value={size}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <MenuItem default value={7}>
                  7
                </MenuItem>
                <MenuItem value={8}>9</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </FormControl>
            <SearchBox
              sx={{
                backgroundColor: "white",
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
        </div>
      </div>
      <div className="w-[95%]">
        <CompaniesOrderPoolTable />
      </div>
    </div>
  );
};

export default RetailCompanyOrderPool;
