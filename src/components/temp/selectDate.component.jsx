import { Radio, TextField, Typography } from "@mui/material";
import { useState } from "react";

const selectDate = () => {
  const [dateSelector, setDateSelector] = useState("today");

  const handleDateSelection = (event) => {
    setDateSelector(event.target.value);
  };
  return (
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
  );
};

export default selectDate;
