import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { InputLabel, Typography, IconButton } from "@mui/material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { googleApiKey } from "../../../../constants/ApiKey";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";

const StepThree = ({ handlePrev, postalAddress, setPostalAddress }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-start">
        <IconButton aria-label="back" onClick={handlePrev}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" className="text-2xl font-bold">
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
        {/* <InputLabel htmlFor="companyEmail">Company Email</InputLabel>
        <TextFieldWrapper
          name="companyEmail"
          placeholder="companyabc@xyz.com"
        />
        <InputLabel htmlFor="companyPhoneNumber">
          Company Phone Number
        </InputLabel>
        <TextFieldWrapper name="companyPhoneNumber" placeholder="123456789" /> */}
        <InputLabel htmlFor="contactPerson">Contact Person</InputLabel>
        <TextFieldWrapper
          name="contactPerson"
          placeholder="Type in name of Contact Person for company"
        />
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2 w-1/2">
            <InputLabel htmlFor="contactPersonPosition">
              Contact Person Position
            </InputLabel>
            <TextFieldWrapper
              name="contactPersonPosition"
              placeholder="Type in position of contact person"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <InputLabel htmlFor="contactPersonPhone">Phone Number</InputLabel>
            <TextFieldWrapper
              name="contactPersonPhone"
              placeholder="Contact Person's Phone Number"
            />
          </div>
        </div>
        <InputLabel htmlFor="postalAddress">Postal Address</InputLabel>
        <GooglePlacesAutocomplete
          name="postalAddress"
          apiKey={googleApiKey}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["ng"],
            },
          }}
          selectProps={{
            postalAddress,
            onChange: setPostalAddress,
            placeholder: "",
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
        <InputLabel htmlFor="postalNumber">P O Box Number</InputLabel>
        <TextFieldWrapper
          name="postalNumber"
          label="Postal Number"
          placeholder="Type in Postal Number"
        />
      </div>
    </div>
  );
};

export default StepThree;
