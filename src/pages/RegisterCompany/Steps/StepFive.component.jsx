import { Button, Typography } from "@mui/material";
import Like from "../../../assets/svg/Group.svg";
const StepFive = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col w-1/3 h-min rounded bg-white gap-4 justify-center items-center p-10">
        <Typography variant="h5">Registration was successful</Typography>
        <img className="w-40" src={Like} alt="" />
        <Typography>
          Thank you registration has been completed. We will vet your
          application and get back to you via email.
        </Typography>
        <Button variant="contained" size="small">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepFive;
