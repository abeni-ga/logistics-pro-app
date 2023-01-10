import { useState } from "react";
import { InputLabel, MenuItem, Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";

const StepOne = () => {
  const [asset, setAsset] = useState(null);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Add Rider
        </Typography>
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
          placeholder="24, Gbolahan Street..."
        />
        <InputLabel htmlFor="preferredAsset">Preferred Asset</InputLabel>
        <TextFieldWrapper
          value={asset}
          name="asset"
          id="asset"
          select
          placeholder="Select Preferred Asset"
          label="Select Preferred Asset"
          defaultValue="Bike"
          onChange={(event) => {
            setAsset(event.target.value);
          }}
        >
          <MenuItem value={"Bike"}>Bike</MenuItem>
        </TextFieldWrapper>
      </div>
    </div>
  );
};

export default StepOne;
