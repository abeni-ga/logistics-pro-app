import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { InputLabel, Typography, IconButton } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";

const StepThree = ({ handlePrev }) => {
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
        <Typography>STEP 2 of 3</Typography>
        <div className="flex w-full">
          <span className="h-2 w-1/4 rounded-md bg-blue-800"></span>
          <span className="bg-red-800 h-2 w-1/4 rounded-md"></span>
          <span className="bg-green-100 h-2 w-1/4 rounded-md"></span>
          <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
        </div>
        <Typography>Company Contact Information</Typography>
      </div>
      <Typography>Fill in the contact below</Typography>
      <div className="flex flex-col gap-2">
        <InputLabel htmlFor="companyEmail">Company Email</InputLabel>
        <TextFieldWrapper
          id="companyEmail"
          name="companyEmail"
          label="Company Email"
          placeholder="companyabc@xyz.com"
        />
        <InputLabel htmlFor="companyPhoneNumber">
          Company Phone Number
        </InputLabel>
        <TextFieldWrapper
          id="companyPhoneNumber"
          name="companyPhoneNumber"
          label="Company Phone Number"
          placeholder="123456789"
        />
        <InputLabel htmlFor="contactPerson">Company Person</InputLabel>
        <TextFieldWrapper
          id="contactPerson"
          name="contactPerson"
          label="Contact Person"
          placeholder="Type in name of Contact Person for company"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="contactPersonPosition">
              Contact Person Position
            </InputLabel>
            <TextFieldWrapper
              id="contactPersonPosition"
              name="contactPersonPosition"
              placeholder="Type in position of contact person"
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel htmlFor="contactPersonPhoneNumber">
              Phone Number
            </InputLabel>
            <TextFieldWrapper
              id="contactPersonPhoneNumber"
              name="contactPersonPhoneNumber"
              placeholder="Contact Person's Phone Number"
            />
          </div>
        </div>
        <InputLabel htmlFor="deliveryTypeOperated">
          Delivery Type Operated
        </InputLabel>
        <TextFieldWrapper
          id="deliveryTypeOperated"
          name="deliveryTypeOperated"
          label="Delivery Type Operated"
        />
        <InputLabel htmlFor="postalNumber">P O Box Number</InputLabel>
        <TextFieldWrapper
          id="postalNumber"
          name="postalNumber"
          label="Postal Number"
          placeholder="Type in Postal Number"
        />
      </div>
    </div>
  );
};

export default StepThree;
