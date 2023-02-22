import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { InputLabel, MenuItem, Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import { googleApiKey } from "../../../../constants/ApiKey";

const StepTwo = ({ handlePrev, address, setAddress }) => {
  const deliveryType = [
    { name: "Bike", value: "Bike" },
    { name: "Bajaj", value: "Bajaj" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-start">
        <Typography variant="h5" className="text-2xl font-bold">
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
        {/*         <InputLabel htmlFor=" companyNamee">Company Name</InputLabel>
        <TextFieldWrapper name="companyNamee" placeholder="Type Company Name" /> */}
        <InputLabel htmlFor="companyDescription">
          Company Description
        </InputLabel>
        <TextFieldWrapper
          multiline
          rows={4}
          name="companyDescription"
          placeholder="Type in Company Description"
        />
        <InputLabel htmlFor="companyAddress">Company Address</InputLabel>
        <GooglePlacesAutocomplete
          name="address"
          id="address"
          apiKey={googleApiKey}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["ng"],
            },
          }}
          selectProps={{
            address,
            onChange: setAddress,
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
        <InputLabel htmlFor="deliveryTypeOperated">
          Delivery Type Operated
        </InputLabel>
        <TextFieldWrapper
          name="deliveryType"
          placeholder="Select Deliery Type"
          select
          options={deliveryType}
          defaultValue="Bike"
        >
          <MenuItem value={"Bike"}>Bike</MenuItem>
        </TextFieldWrapper>
      </div>
    </div>
  );
};

export default StepTwo;
