import { Button, Typography } from "@mui/material";
import { color } from "../../constants/Theme.js";
const EarningCompanyTableItem = () => {
  return (
    <div className="flex w-full border-b-2 py-4">
      <div className="flex flex-col items-start w-[25%] ">
        <Typography className="text-darkGray font-bold">Mon</Typography>
        <Typography className="text-lightGray">02/03/21 10:25</Typography>
      </div>
      <div className="w-[20%]">
        <Typography className="text-darkGray">4 Orders</Typography>
      </div>
      <div className="flex flex-col w-[20%] items-start">
        <Typography className="text-darkIndigo bg-lightBlue rounded-md px-2">
          N16,400
        </Typography>
      </div>
      <div className="flex flex-col items-center w-[15%]">
        <Typography>4</Typography>
        <Typography>Deliveries</Typography>
      </div>
      <div className="flex items-center justify-end w-[15%]">
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

export default EarningCompanyTableItem;
