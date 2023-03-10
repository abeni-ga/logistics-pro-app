import { Button, Typography } from "@mui/material";

const EarningTableItem = ({ transaction, index }) => {
  return (
    <div className="flex w-full justify-between border-b-2 py-4">
      <div className="flex flex-col items-start w-[20%] ">
        <Typography className="bg-bgWhiteSmoke py-0.5 px-2 rounded-md ">
          {index + 1}
        </Typography>
        <Typography className="text-darkIndigo">
          {transaction._id.substring(0, 9)}
        </Typography>
        <Typography className="text-lightGray">
          {transaction.createdAt.substring(0, 10)}
        </Typography>
      </div>
      <div className="flex flex-col w-[20%] items-center">
        <Typography className="text-bolow text-center">Cash</Typography>
        <Typography className="text-darkGray text-center">
          N110,100,500.00
        </Typography>
        <Typography className="text-center w-[75%] text-darkIndigo bg-lightBlue rounded-md">
          {`N${transaction.amount}`}
        </Typography>
      </div>
      <div className="flex flex-col items-center w-[20%]">
        <Typography className="text-center text-black">
          {transaction.partner}
        </Typography>
        <Typography
          className={`text-center w-[75%]   rounded-md ${
            transaction.status === "Completed"
              ? "text-brightGreen bg-lightGreen"
              : "text-red-500 bg-red-200"
          }`}
        >
          {transaction.status}
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
