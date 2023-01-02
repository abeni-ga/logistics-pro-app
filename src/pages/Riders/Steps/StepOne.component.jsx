import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const StepOne = () => {
  const [asset, setAsset] = useState(null);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h5">Add Rider</Typography>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Typography>STEP 1 of 3</Typography>
        <div className="flex w-full">
          <span className="h-2 w-1/4 rounded-md bg-blue-800"></span>
          <span className="bg-red-100 h-2 w-1/4 rounded-md"></span>
          <span className="bg-green-100 h-2 w-1/4 rounded-md"></span>
          <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
        </div>
        <Typography>Rider Basic Information</Typography>
      </div>
      <Typography>Fill in the information below</Typography>
      <div className="flex flex-col gap-4">
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <TextFieldWrapper
          id="firstName"
          name="firstName"
          placeholder="Type First Name"
        />
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <TextFieldWrapper
          id="lastName"
          rows={4}
          name="lastName"
          placeholder="Type Last Name"
        />
        <InputLabel htmlFor="riderAddress">Address</InputLabel>
        <TextFieldWrapper
          id="riderAddress"
          name="riderAddress"
          label="Address"
        />
        <InputLabel htmlFor="preferredAsset">Preferred Asset</InputLabel>
        <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: "white" }}>
          <Select
            id="type"
            size="large"
            value={asset}
            onChange={(e) => {
              setAsset(e.target.value);
            }}
          >
            <MenuItem default value={"Bike"}>
              Bike
            </MenuItem>
            <MenuItem value={"Motor Bicycle"}>Motor Bicycle</MenuItem>
            <MenuItem value={"Vehicle"}>Vehicle</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default StepOne;
