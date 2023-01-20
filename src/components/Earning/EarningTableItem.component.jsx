import { Button, Typography } from "@mui/material";

const EarningTableItem = () => {
  return (
    <div className="flex w-full justify-between border-b-2 py-4">
      <div className="flex flex-col items-start w-[20%] ">
        <Typography className="bg-bgWhiteSmoke py-0.5 px-2 rounded-md ">
          1
        </Typography>
        <Typography className="text-darkIndigo">#011211211</Typography>
        <Typography className="text-lightGray">02/03/21 10:25</Typography>
      </div>
      <div className="flex flex-col w-[20%] items-center">
        <Typography className="text-bolow text-center">Cash</Typography>
        <Typography className="text-darkGray text-center">
          N110,100,500.00
        </Typography>
        <Typography className="text-center w-[75%] text-darkIndigo bg-lightBlue rounded-md">
          N150.00
        </Typography>
      </div>
      <div className="flex flex-col items-center w-[20%]">
        <Typography className="text-center text-black">
          FZ <br /> Deliveries
        </Typography>
        <Typography className="text-center w-[75%] text-brightGreen bg-lightGreen rounded-md">
          Completed
        </Typography>
      </div>
      <div className="flex items-center justify-end w-[20%]">
        <Button
          className="text-lightGray border-lightGray rounded-lg"
          variant="outlined"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default EarningTableItem;
