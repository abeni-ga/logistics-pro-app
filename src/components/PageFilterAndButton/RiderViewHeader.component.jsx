import { color } from "../../constants/Theme.js";
import OrderViewHeader from "../PageFilterAndButton/OrderViewHeader.jsx";
import { IconButton, Radio, TextField, Typography } from "@mui/material";

import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RiderViewHeader = (props) => {
  const navigate = useNavigate();
  const [dateSelector, setDateSelector] = useState("today");
  const handleDateSelection = (e) => {
    setDateSelector(e.target.value);
  };
  const handleAction = () => {
    navigate("/admin/riders/register");
  };
  return (
    <div className="flex items-center w-full h-full gap-2 2xl:gap-10">
      <div className="flex w-[50%]">
        <div className="flex gap-4 w-[20%]">
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              paddingX: "15px",
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
              paddingX: "15px",
            }}
          >
            <img src={List} alt="" />
          </IconButton>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center rounded-lg ">
            <Radio
              checked={dateSelector === "all-time"}
              onChange={handleDateSelection}
              value="all-time"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "All Time" }}
            />
            <Typography sx={{ fontWeight: "bold" }}>All Time</Typography>
          </div>
          <div className="flex items-center rounded-lg px-4">
            <Radio
              checked={dateSelector === "other"}
              onChange={handleDateSelection}
              value="other"
              name="date-radio-buttons"
              inputProps={{ "aria-label": "other" }}
            />
            <div className="flex flex-col gap-1">
              <Typography sx={{ fontWeight: "700" }}>Change period</Typography>
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
      </div>
      <div className="w-[50%] flex items-center">
        <OrderViewHeader btnName={props.btnName} action={handleAction} />
      </div>
    </div>
  );
};

export default RiderViewHeader;
