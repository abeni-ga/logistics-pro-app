import { color } from "../../constants/Theme.js";
import OrderViewHeader from "../PageFilterAndButton/OrderViewHeader.jsx";
import { IconButton, Radio, Typography } from "@mui/material";

import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";
import { useState } from "react";

const RiderViewHeader = (props) => {
  const [dateSelector, setDateSelector] = useState("today");
  const handleDateSelection = (e) => {
    setDateSelector(e.target.value);
  };
  return (
    <div className="flex items-center w-full h-full gap-10">
      <div className="flex w-[40%]">
        <div className="flex gap-4 w-[30%]">
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              paddingX: "20px",
            }}
          >
            <img src={Menu} alt="" />
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: color.darkIndigo,
              borderRadius: "12px",
              paddingX: "20px",
            }}
          >
            <img src={List} alt="" />
          </IconButton>
        </div>
        <div className="flex w-full">
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
          <div className="flex items-center bg-white border-2 w-[65%] rounded-lg">
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
      </div>
      <div className="w-[50%] flex items-center">
        <OrderViewHeader btnName={props.btnName} />
      </div>
    </div>
  );
};

export default RiderViewHeader;
