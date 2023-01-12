import { InputLabel, MenuItem, Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import { useState } from "react";

const StepTwo = ({ handlePrev }) => {
  const [deliveryType, setDeliveryType] = useState(null);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-start">
        <Typography variant="h5" sx={{ fontWeight: "700", fontSize: "28px" }}>
          Account Registration
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
        <Typography>Company Basic Information</Typography>
      </div>
      <Typography>Fill in the information below</Typography>
      <div className="flex flex-col gap-4">
        <InputLabel htmlFor=" companyName">Company Name</InputLabel>
        <TextFieldWrapper
          id="companyName"
          name="companyName"
          placeholder="Type Company Name"
        />
        <InputLabel htmlFor="companyDescription">
          Company Description
        </InputLabel>
        <TextFieldWrapper
          id="companyDescription"
          multiline
          rows={4}
          name="companyDescription"
          placeholder="Type in Company Description"
        />
        <InputLabel htmlFor="companyAddress">Company Address</InputLabel>
        <TextFieldWrapper
          id="companyAddress"
          name="companyAddress"
          placeholder="Company Address"
        />
        <InputLabel htmlFor="deliveryTypeOperated">
          Delivery Type Operated
        </InputLabel>
        <TextFieldWrapper
          value={deliveryType}
          name="user-type"
          id="outlined-user-type"
          label="Select Deliery Type"
          select
          defaultValue="logistics"
          onChange={(event) => {
            setDeliveryType(event.target.value);
          }}
        >
          <MenuItem value={"Bike"}>Bike</MenuItem>
        </TextFieldWrapper>
      </div>
    </div>
  );
};

export default StepTwo;
