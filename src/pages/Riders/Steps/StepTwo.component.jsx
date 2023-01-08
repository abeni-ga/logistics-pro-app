import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { InputLabel, Typography, IconButton } from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const StepTwo = ({ handlePrev }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Add Rider
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
        <Typography>Rider Contact Information</Typography>
      </div>
      <Typography>Fill in the contact below</Typography>
      <div className="flex flex-col gap-2">
        <InputLabel htmlFor="riderEmail">Email Address</InputLabel>
        <TextFieldWrapper
          id="riderEmail"
          name="riderEmail"
          placeholder="companyabc@xyz.com"
        />
        <InputLabel htmlFor="riderPhoneNumber">Phone Number</InputLabel>
        <TextFieldWrapper
          id="riderPhoneNumber"
          name="riderPhoneNumber"
          placeholder="123456789"
        />
        <InputLabel htmlFor="contactPerson">Company Person</InputLabel>
        <TextFieldWrapper
          id="contactPerson"
          name="contactPerson"
          placeholder="Type in name of Contact Person for company"
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2 w-[48%]">
            <InputLabel htmlFor="contactPersonPosition">
              Contact Person Position
            </InputLabel>
            <TextFieldWrapper
              id="contactPersonPosition"
              name="contactPersonPosition"
              placeholder="Type in position of contact person"
            />
          </div>
          <div className="flex flex-col gap-2 w-[48%]">
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
        <InputLabel htmlFor="postalAddress">Postal Address</InputLabel>
        <TextFieldWrapper
          id="postalAddress"
          name="postalAddress"
          placeholder="24, Gbolahan Street..."
        />
        <InputLabel htmlFor="postalNumber">P O Box Number</InputLabel>
        <TextFieldWrapper
          id="postalNumber"
          name="postalNumber"
          placeholder="Type in Postal Number"
        />
      </div>
    </div>
  );
};

export default StepTwo;
