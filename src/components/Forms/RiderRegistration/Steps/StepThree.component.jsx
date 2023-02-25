import { IconButton, Typography } from "@mui/material";
import Dropzone from "../../../../components/Dropzone/Dropzone.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StepThree = ({ handlePrev, setFiles, files }) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">Add Rider</Typography>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <Typography>STEP 3 of 3</Typography>
        <div className="flex w-full">
          <span className="h-2 w-1/4 rounded-md bg-blue-800"></span>
          <span className="bg-red-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-green-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
        </div>
        <Typography>Upload Company Documents</Typography>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <Dropzone setFiles={setFiles} files={files} />
        <Dropzone setFiles={setFiles} files={files} />
      </div>
    </div>
  );
};

export default StepThree;
