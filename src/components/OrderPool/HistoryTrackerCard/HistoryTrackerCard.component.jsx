import { Typography } from "@mui/material";
const HistoryTrackerCard = () => {
  return (
    <div className="bg-white rounded-lg h-[20%] px-4 w-[90%] flex flex-col justify-center">
      <div className="flex  w-full items-center gap-4">
        <Typography>#00112233</Typography>
        <Typography className="bg-brightGreen p-1 rounded-md">
          In Transit
        </Typography>
      </div>
      <Typography>DELIVERY OF BOOKS</Typography>
    </div>
  );
};

export default HistoryTrackerCard;
