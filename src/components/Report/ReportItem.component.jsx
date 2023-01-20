import { Typography } from "@mui/material";
const ReportItem = () => {
  return (
    <div className="flex h-[10%] w-full bg-white px-5 items-center">
      <div className="flex flex-col w-[20%]">
        <Typography className="text-xl text-gray">P01923</Typography>
        <Typography className="text-xs text-gray">12/12/21 02:35pm</Typography>
      </div>
      <div className="flex flex-col w-[30%]">
        <Typography className="text-xl text-gray">Chinedu Joseph</Typography>
        <Typography className="text-gray-500">Pay on drop-off</Typography>
      </div>
      <div className="flex w-[30%]">
        <Typography className="bg-lightGreen px-24 rounded-2xl py-1">
          Paid
        </Typography>
      </div>
      <Typography className="w-[20%] text-xl text-gray-500">₦1,500</Typography>
    </div>
  );
};

export default ReportItem;
