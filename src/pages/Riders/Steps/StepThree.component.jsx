import { useState, useRef } from "react";
import { IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Vector from "../../../assets/svg/Vector.svg";
import { color } from "../../../constants/Theme.js";

const StepThree = ({ handlePrev }) => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    console.log(files);
  };

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
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col justify-center items-center rounded-2xl border-2 border-gray-200 p-2 w-[50%]"
        >
          <img className="w-[10%]" src={Vector} alt="" />
          <Typography
            sx={{
              color: color.lightGray,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Drag and drop your NIN Registration Slip Here
          </Typography>
          <Typography sx={{ color: color.lightGray }}>or</Typography>
          <input
            type="file"
            multiple
            onChange={(e) => {
              setFiles(e.target.files);
            }}
            hidden
            ref={inputRef}
          />
          <Button
            onClick={() => {
              inputRef.current.click();
            }}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: color.lightGray,
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Select Files
          </Button>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col justify-center items-center rounded-2xl border-2  p-2 w-[50%]"
        >
          <img className="w-[10%]" src={Vector} alt="" />
          <Typography
            sx={{
              color: color.lightGray,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Drag and drop your NIN Registration Slip Here
          </Typography>
          <Typography sx={{ color: color.lightGray }}>or</Typography>
          <input
            type="file"
            multiple
            onChange={(e) => {
              setFiles(e.target.files);
            }}
            hidden
            ref={inputRef}
          />
          <Button
            onClick={() => {
              inputRef.current.click();
            }}
            sx={{ backgroundColor: color.darkIndigo }}
            variant="contained"
            size="large"
          >
            Select Files
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
