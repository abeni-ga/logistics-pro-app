import { InputLabel, Typography } from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const StepTwo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h5">Account Registration</Typography>
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
        <InputLabel htmlFor="companyName">Company Name</InputLabel>
        <TextFieldWrapper
          id="companyName"
          name="companyName"
          label="Company Name"
          placeholder="Company Name"
        />
        <InputLabel htmlFor="companyDescription">
          Company Description
        </InputLabel>
        <TextFieldWrapper
          id="companyDescription"
          multiline
          rows={4}
          name="companyDescription"
          label="Company Description"
        />
        <InputLabel htmlFor="companyAddress">Company Address</InputLabel>
        <TextFieldWrapper
          id="companyAddress"
          name="companyAddress"
          label="Company Address"
        />
        <InputLabel htmlFor="deliveryTypeOperated">
          Delivery Type Operated
        </InputLabel>
        <TextFieldWrapper
          id="deliveryTypeOperated"
          name="deliveryTypeOperated"
          label="Delivery Type Operated"
        />
      </div>
    </div>
  );
};

export default StepTwo;
