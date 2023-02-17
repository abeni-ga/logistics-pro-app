import {
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
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PulseRed from "../../../assets/svg/PulseRed.svg";
import Pulse from "../../../assets/svg/Pulse.svg";
import Reload from "../../../assets/svg/Reload.svg";
import { useState } from "react";
import Current from "../../../assets/svg/Current.svg";
import CompaniesOrderPoolTable from "../../../components/OrderPool/CompaniesOrderTable.component";
import { useNavigate } from "react-router-dom";
// import TablePagination from "../../../components/Pagination/TablePagination.component";

const ExchangePool = () => {
  const [selectedValue, setSelectedValue] = useState("current");
  const [dateSelector, setDateSelector] = useState("today");
  const [size, setSize] = useState(7);
  const navigate = useNavigate();
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
        <div className="flex items-center">
          <Typography className="font-bold py-3 xl:py-5 text-xl xl:text-2xl">
            Order Exchange Pool
          </Typography>
          <img src={Reload} alt="" className="w-5 xl:w-7" />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-[49%] xl:w-[40%]">
            <div className="flex items-center rounded-lg w-[22%] xl:w-[30%]">
              <Radio
                checked={dateSelector === "all-time"}
                onChange={handleDateSelection}
                value="all-time"
                name="date-radio-buttons"
                inputProps={{ "aria-label": "All Time" }}
              />
              <Typography className="font-bold text-xs xl:text-sm">
                Today
              </Typography>
            </div>
            <div className="flex items-center  bg-violet-500 w-[77] xl:w-[70%] rounded-lg px-2">
              <Radio
                checked={dateSelector === "other"}
                onChange={handleDateSelection}
                value="other"
                name="date-radio-buttons"
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <div className="flex flex-col gap-1">
                <Typography className="text-white text-xs xl:text-sm ">
                  Change period
                </Typography>
                <div className="flex gap-2">
                  <TextField
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          sm: "12px",
                          lg: "12px",
                          xl: "14px",
                        },
                      },
                    }}
                    className="text-xs"
                    variant="standard"
                    size="small"
                    type="date"
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        height: "15px",
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          sm: "12px",
                          lg: "12px",
                          xl: "14px",
                        },
                      },
                    }}
                    variant="standard"
                    type="date"
                    size="small"
                    InputProps={{
                      style: {
                        color: "white",
                        height: "15px",
                      },
                      disableUnderline: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex self-end items-center gap-8">
            <Button
              className="bg-darkIndigo text-white rounded-lg text-xs xl:text-sm"
              onClick={() => {
                navigate("/admin/orders/order-now");
              }}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create Order
            </Button>
            <div className="flex">
              <div className="flex bg-[#053079] items-center rounded-l-2xl px-4 py-2 gap-2">
                <img src={Pulse} alt="" />
                <div>
                  <Typography className="text-bgWhiteSmoke text-xs font-bold">
                    Total
                  </Typography>
                  <Typography className="text-white font-bold text:xs xl:text-sm">
                    N234,500:00
                  </Typography>
                </div>
              </div>
              <div className="flex bg-white items-center rounded-r-2xl px-4 py-2 gap-2">
                <img src={PulseRed} alt="" />
                <div>
                  <Typography className="text-lightGray font-bold text-xs">
                    Total
                  </Typography>
                  <Typography className="text-lightGray font-bold text:xs xl:text-sm">
                    N234,500:00
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-2">
          <div className="w-[49%] xl:w-[40%] flex items-center gap-2 bg-white p-4 rounded-lg justify-between">
            <Typography className="text-xs xl:text-sm">
              Order <br /> Options
            </Typography>
            <div className="flex items-center w-[40%] bg-bgWhiteSmoke pr-1 rounded-lg justify-between">
              <div className="flex items-center">
                <Radio
                  checked={selectedValue === "current"}
                  onChange={handleChange}
                  value="current"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Current" }}
                />
                <Typography className="text-xs xl:text-sm">
                  Pushed From Companies
                </Typography>
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
              <Typography className="text-xs xl:text-sm">New</Typography>
            </div>
            <div className="flex items-center w-[18%] border-2 rounded-lg">
              <Radio
                checked={selectedValue === "done"}
                onChange={handleChange}
                value="done"
                name="radio-buttons"
                inputProps={{ "aria-label": "Done" }}
              />
              <Typography className="text-xs xl:text-sm">Done</Typography>
            </div>
          </div>
          <div className=" flex items-center w-[40%]">
            <FormControl className="w-[15%]">
              <Select
                id="size"
                value={size}
                className="bg-white rounded-lg"
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
              className="bg-white w-[60%] rounded-lg"
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
      <div className="w-[95%] h-[90%]">
        <CompaniesOrderPoolTable />
      </div>
      <div className="w-[95%] h-[90%]">{/*  <TablePagination  />*/}</div>
    </div>
  );
};

export default ExchangePool;
