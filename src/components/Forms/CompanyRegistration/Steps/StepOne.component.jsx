import { useState } from "react";
import { Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import { googleApiKey } from "../../../../constants/ApiKey";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const StepOne = ({ address, setAddress }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const type = [
    { name: "Delivery Company", value: "DeliveryCompany" },
    { name: "Retail Company", value: "RetailCompany" },
    { name: "Directe Customer", value: "Direct Customer" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full">
        <span className="h-2 w-1/2 bg-blue-900 rounded-md"></span>
        <span className="h-2 w-1/2 bg-gray-300 rounded-md"></span>
      </div>
      <div>
        <Typography variant="h2" className="text-2xl font-bold">
          Basic Information
        </Typography>
        <Typography className="text=xs">
          Enter the following information below
        </Typography>
      </div>
      <TextFieldWrapper
        options={type}
        select
        name="role"
        placeholder="Select User Type"
        label="Select User Type"
        defaultValue="DeliveryCompany"
      ></TextFieldWrapper>
      <TextFieldWrapper
        name="companyName"
        label="Company Name"
        className="rounded-lg"
      />
      <div className="flex flex-row gap-2">
        <TextFieldWrapper
          name="firstName"
          label="First Name"
          className="w-1/2"
        />
        <TextFieldWrapper name="lastName" label="Last Name" className="w-1/2" />
      </div>
      <GooglePlacesAutocomplete
        name="address"
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
      <TextFieldWrapper name="phoneNumber" label="Phone Number" />
      <TextFieldWrapper name="email" label="Company Email Address" />
      <div className="flex flex-col gap-4">
        <TextFieldWrapper
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={() => {}}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextFieldWrapper
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  onMouseDown={() => {}}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography>
          By clicking "Next" you agree to our
          <a
            href="/#"
            className=" ml-1 text-blue-800 hover:text-blue-600 visited:text-purple-600"
          >
            Terms of Service,Privacy Policy,
          </a>{" "}
          and to receive marketing communications from Envoy.
        </Typography>
      </div>
    </div>
  );
};

export default StepOne;
