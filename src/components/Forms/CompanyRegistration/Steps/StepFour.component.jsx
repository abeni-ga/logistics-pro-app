import { useState, useRef } from "react";
import { IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Vector from "../../../../assets/svg/Vector.svg";

const StepFour = ({ handlePrev }) => {
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-start">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" sx={{ fontWeight: "700", fontSize: "28px" }}>
          Account Registration
        </Typography>
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
      <div className="flex flex-col gap-4 items-center justify-center">
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-200 p-2"
        >
          <img className="w-10" src={Vector} alt="" />
          <Typography>Drag and drop business registration file here</Typography>
          <Typography>or</Typography>
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
          >
            Select Files
          </Button>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-200 p-2"
        >
          <img className="w-10" src={Vector} alt="" />
          <Typography>Drag and drop business registration file here</Typography>
          <Typography>or</Typography>
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
          >
            Select Files
          </Button>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-200 p-2"
        >
          <img className="w-10" src={Vector} alt="" />
          <Typography>Drag and drop business registration file here</Typography>
          <Typography>or</Typography>
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
          >
            Select Files
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
