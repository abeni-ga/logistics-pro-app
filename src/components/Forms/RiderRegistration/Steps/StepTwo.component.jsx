import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { InputLabel, Typography, IconButton } from "@mui/material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import { googleApiKey } from "../../../../constants/ApiKey";
const StepTwo = ({ handlePrev, postalAddress, setPostalAddress }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" className="font-bold">
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
        <TextFieldWrapper name="email" placeholder="companyabc@xyz.com" />
        <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
        <TextFieldWrapper name="phone" placeholder="123456789" />
        <InputLabel htmlFor="contactPerson">Contact Person</InputLabel>
        <TextFieldWrapper
          name="contactPerson"
          placeholder="Type in name of Contact Person for company"
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2 w-[48%]">
            <InputLabel htmlFor="contactPersonPosition">
              Contact Person Position
            </InputLabel>
            <TextFieldWrapper
              name="contactPersonPosition"
              placeholder="Type in position of contact person"
            />
          </div>
          <div className="flex flex-col gap-2 w-[48%]">
            <InputLabel htmlFor="contactPersonPhone">Phone Number</InputLabel>
            <TextFieldWrapper
              name="contactPersonPhoneNumber"
              placeholder="Contact Person's Phone Number"
            />
          </div>
        </div>
        <InputLabel htmlFor="postalAddress">Postal Address</InputLabel>
        <GooglePlacesAutocomplete
          apiKey={googleApiKey}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["ng"],
            },
          }}
          selectProps={{
            postalAddress,
            onChange: setPostalAddress,
            placeholder: "24, Gbolahan Street, Ajah, Lagos",
            styles: {
              input: (provided) => ({
                ...provided,
                height: "50px",
              }),
              option: (provided) => ({
                ...provided,
              }),
              singleValue: (provided) => ({
                ...provided,
              }),
            },
          }}
        />
        <InputLabel htmlFor="postalAddress">P O Box Number</InputLabel>
        <TextFieldWrapper name="postalAddress" placeholder="Type in Postal Number" />
      </div>
    </div>
  );
};

export default StepTwo;
