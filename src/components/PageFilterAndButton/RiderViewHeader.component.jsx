import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardButton from "../Buttons/StandardButton.component";
import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";
import { routes } from "../../routes/siteRoutes.routes";

const RiderViewHeader = ({
  btnName,
  handleSearch,
  handlePageLimit,
  setRiders,
  pageLimit,
}) => {
  const navigate = useNavigate();
  const [action, setAction] = useState("export");
  const [size, setSize] = useState(pageLimit);
  const [search, setSearch] = useState("");

  const [dateSelector, setDateSelector] = useState("today");
  const handleDateSelection = (e) => {
    setDateSelector(e.target.value);
  };
  const handleAction = () => {
    navigate(routes.admin.registerRider);
  };
  useEffect(() => {
    handlePageLimit(size);
  }, [handlePageLimit, size]);
  return (
    <div className="flex items-center w-full h-full gap-2 2xl:gap-10">
      <div className="flex w-[50%] md:w-[50%] lg:w-[41%] xl:w-[50%] gap-2 items-center">
        <div className="flex h-full items-center gap-2 xl:gap-4 w-[20%]">
          <IconButton className="bg-white rounded-xl w-[40px] h-[40px]">
            <img src={Menu} alt="" />
          </IconButton>
          <IconButton
            className="bg-darkIndigo rounded-xl w-[40px] h-[40px]"
            variant="contained"
            color="primary"
          >
            <img src={List} alt="" />
          </IconButton>
        </div>
        <div className="flex w-[80%] flex-col xl:flex-row items-start">
          <div className="flex  items-center ">
            <Radio
              checked={dateSelector === "all-time"}
              onChange={handleDateSelection}
              value="all-time"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "All Time" }}
            />
            <Typography className="font-bold">All Time</Typography>
          </div>
          <div className="flex items-center rounded-lg">
            <Radio
              checked={dateSelector === "other"}
              onChange={handleDateSelection}
              value="other"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "other" }}
            />
            <div className="flex flex-col gap-1">
              <Typography className="font-bold">Change period</Typography>
              <div className="flex gap-1 bg-blue-100 p-1 rounded-lg">
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
      </div>
      <div className="md:w-[50%] lg:w-[58%] xl:w-[50%] flex items-center">
        <div className="flex flex-col md:flex-row items-center w-full gap-1 2xl:gap-4 ">
          <div className="flex w-full md:w-[35%] gap-1 items-center">
            <Select
              className="bg-white rounded-lg w-[40%]"
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
            <Select
              className="bg-white rounded-lg w-[60%]"
              id="size"
              value={size}
              onChange={(e) => {
                console.log("header page limit", e.target.value);
                setSize(e.target.value);
              }}
            >
              <MenuItem default value={7}>
                7
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </div>
          <div className="flex w-full md:w-[64%] items-center gap-1">
            <TextField
              className="bg-white w-[69%] rounded-lg"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                  setSearch("");
                }
              }}
              value={search}
              placeholder="search here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <StandardButton
              className="w-[30%]"
              variant="contained"
              onClick={handleAction}
            >
              {btnName}
            </StandardButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderViewHeader;
