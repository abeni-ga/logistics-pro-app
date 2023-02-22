import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Autocomplete, InputLabel, MenuItem, Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import { googleApiKey } from "../../../../constants/ApiKey";

const StepOne = ({ address, setAddress, companies }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h5" className="font-bold">
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
            placeholder: "helo",
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
        <InputLabel htmlFor="deliveryCompany">Delivery Company</InputLabel>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={companies.map((option) => option.username)}
          renderInput={(params) => (
            <TextFieldWrapper
              {...params}
              name="deliveryCompany"
              id="deliveryCompany"
            />
          )}
        />
        <InputLabel htmlFor="preferredAsset">Preferred Asset</InputLabel>
        <TextFieldWrapper
          name="asset"
          id="asset"
          select
          placeholder="Select Preferred Asset"
          label="Select Preferred Asset"
          defaultValue="Bike"
        >
          <MenuItem value={"Bike"}>Bike</MenuItem>
        </TextFieldWrapper>
      </div>
    </div>
  );
};

export default StepOne;
