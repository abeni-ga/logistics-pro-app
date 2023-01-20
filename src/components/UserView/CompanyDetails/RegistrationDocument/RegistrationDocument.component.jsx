import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const RegistrationDocument = () => {
  return (
    <div className="flex w-[80%] justify-center items-center">
      <Typography className="w-[50%]">Business Registration Slip</Typography>
      <Typography className="text-green-700 w-[25%] text-center">
        <CheckIcon />
      </Typography>
      <div className="w-[25%]">
        <Button
          className="capitalize rounded-lg border-lightGray"
          variant="outlined"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default RegistrationDocument;
