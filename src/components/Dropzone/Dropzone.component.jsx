import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Vector from "../../assets/svg/Vector.svg";
import VectorBlue from "../../assets/svg/VectorBlue.svg";

const Dropzone = ({ open, setFiles }) => {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({});
  useEffect(() => {
    setFiles({ businessRegistration: acceptedFiles });
  }, [acceptedFiles, setFiles]);
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-200 p-2"
    >
      <input {...getInputProps()} />
      <img
        className="w-10"
        src={acceptedFiles.length > 0 ? VectorBlue : Vector}
        alt=""
      />
      {isDragActive ? (
        <Typography className="dropzone-content">
          Release to drop the files here
        </Typography>
      ) : (
        <>
          <Typography>Drag and drop business registration file here</Typography>
          <Typography>or</Typography>
        </>
      )}

      <Button
        onClick={open}
        variant="contained"
        size="large"
        className={`${
          acceptedFiles.length > 0 ? "bg-darkIndigo" : "bg-gray-500"
        }`}
      >
        Select Files
      </Button>
    </div>
  );
};

export default Dropzone;
