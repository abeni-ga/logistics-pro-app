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
import { color } from "../../../constants/Theme.js";
import { useState } from "react";
import Current from "../../../assets/svg/Current.svg";
import CompaniesOrderPoolTable from "../../../components/OrderPool/CompaniesOrderTable.component";
import { useNavigate } from "react-router-dom";
import TablePagination from "../../../components/Pagination/TablePagination.component";

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
        <div className="flex w-full justify-between">
          <div className="flex w-[35%]">
            <div className="flex items-center rounded-lg w-[35%]">
              <Radio
                checked={dateSelector === "all-time"}
                onChange={handleDateSelection}
                value="all-time"
                name="date-radio-buttons"
                inputProps={{ "aria-label": "All Time" }}
              />
              <Typography sx={{ fontWeight: "bold" }}>Today</Typography>
            </div>
            <div className="flex items-center  bg-violet-500 w-[70%] rounded-lg px-4">
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
                <Typography sx={{ color: "white" }}>Change period</Typography>
                <div className="flex gap-2">
                  <TextField
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
              onClick={() => {
                navigate("/admin/orders/order-now");
              }}
              variant="contained"
              sx={{
                backgroundColor: color.darkIndigo,
                color: "white",
                borderRadius: "10px",
              }}
              startIcon={<AddIcon />}
            >
              Create Order
            </Button>
            <div className="flex">
              <div className="flex bg-[#053079] items-center rounded-l-2xl px-4 py-2 gap-2">
                <img src={Pulse} alt="" />
                <div>
                  <Typography
                    sx={{
                      color: color.bgWhiteSmoke,
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography sx={{ color: "white", fontWeight: "700" }}>
                    N234,500:00
                  </Typography>
                </div>
              </div>
              <div className="flex bg-white items-center rounded-r-2xl px-4 py-2 gap-2">
                <img src={PulseRed} alt="" />
                <div>
                  <Typography
                    sx={{
                      color: color.lightGray,
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{ color: color.lightGray, fontWeight: "700" }}
                  >
                    N234,500:00
                  </Typography>
                </div>
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
      <div className="w-[95%] h-[90%]">
        <CompaniesOrderPoolTable />
      </div>
      <div className="w-[95%] h-[90%]">
        <TablePagination />
      </div>
    </div>
  );
};

export default ExchangePool;
