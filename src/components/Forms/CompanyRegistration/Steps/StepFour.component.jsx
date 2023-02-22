import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Dropzone from "../../../Dropzone/Dropzone.component";

const StepFour = ({ handlePrev, setFiles }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-start">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" className="text-2xl font-bold">
          Account Registration
        </Typography>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <Typography>STEP 3 of 3</Typography>
        <div className="flex w-full">
          <span className="bg-blue-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-red-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-green-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
        </div>
        <Typography>Upload Company Documents</Typography>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Dropzone setFiles={setFiles} />
      </div>
    </div>
  );
};

export default StepFour;
