import { Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
const HistoryTrackerCard = () => {
  return (
    <div className="bg-white rounded-lg h-[20%] px-4 w-[90%] flex flex-col justify-center">
      <div className="flex  w-full items-center gap-4">
        <Typography sx={{ color: color.darkIndigo }}>#00112233</Typography>
        <Typography
          sx={{
            backgroundColor: color.brightGreen,
            padding: "4px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          In Transit
        </Typography>
      </div>
      <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
        DELIVERY OF BOOKS
      </Typography>
    </div>
  );
};

export default HistoryTrackerCard;
