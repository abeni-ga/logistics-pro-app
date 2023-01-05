import { Typography } from "@mui/material";
import Like from "../../../../assets/svg/Like.svg";
const StepFive = () => {
  return (
    <div className="flex flex-col rounded w-full h-min items-center justify-center gap-4 p-10">
      <Typography variant="h5">Registration was successful</Typography>
      <img className="w-40" src={Like} alt="" />
      <Typography>
        Thank you registration has been completed. We will vet your application
        and get back to you via email.
      </Typography>
    </div>
  );
};

export default StepFive;
