import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  styled,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EarningTable from "../../../components/Earning/EarningTable.component";
const Transaction = () => {
  const [action, setAction] = useState("export");
  const [size, setSize] = useState(7);
  const [dateSelector, setDateSelector] = useState("today");
  const handleDateSelection = (event) => {
    setDateSelector(event.target.value);
  };
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col w-full h-[20%] justify-center">
        <div className="pl-10 pt-5">
          <Typography
            varaint="h2"
            sx={{ fontSize: "28px", fontWeight: "bold" }}
          >
            Transaction
          </Typography>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex  items-center gap-4 w-[45%]">
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
            <div className="flex items-center w-[70%] rounded-lg px-4">
              <Radio
                checked={dateSelector === "other"}
                onChange={handleDateSelection}
                value="other"
                name="date-radio-buttons"
                inputProps={{ "aria-label": "other" }}
              />
              <div className="flex flex-col gap-1">
                <Typography>Change period</Typography>
                <div className="flex gap-2 bg-blue-100 p-1 rounded-lg">
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
          <div className="flex items-center gap-4 w-[45%]">
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
            <FormControl sx={{ m: 1, width: "20%" }}>
              <Select
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                id="quantity"
                value={action}
                placeholder="show"
                label=""
                onChange={(e) => {
                  setAction(e.target.value);
                }}
              >
                <MenuItem value={"export"}>Export</MenuItem>
              </Select>
            </FormControl>
            <SearchBox
              sx={{
                backgroundColor: "white",
                width: "40%",
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
      <div className="flex w-[90%] h-full justify-between">
        <div className="w-[49%]">
          <EarningTable />
        </div>
        <div className="w-[49%] h-full">
          <div className="bg-white w-full p-4 rounded-xl h-[50%]">
            Order Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
