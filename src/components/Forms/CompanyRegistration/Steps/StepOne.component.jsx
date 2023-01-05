import { useState } from "react";
import { Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";

const StepOne = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full">
        <span className="h-2 w-1/2 bg-blue-900 rounded-md"></span>
        <span className="h-2 w-1/2 bg-gray-300 rounded-md"></span>
      </div>
      <div>
        <Typography variant="h4">Basic Information</Typography>
        <Typography>Enter the following information below</Typography>
      </div>

      <TextFieldWrapper
        name="userType"
        label="Select User Type"
        size="medium"
      />
      <TextFieldWrapper name="companyName" label="Company Name" />
      <div className="flex flex-row gap-4">
        <TextFieldWrapper
          name="firstName"
          label="First Name"
          className="w-2/5"
        />
        <TextFieldWrapper name="lastName" label="Last Name" className="w-2/5" />
      </div>
      <TextFieldWrapper name="companyAddress" label="Company Address" />
      <TextFieldWrapper name="companyPhoneNumber" label="Phone Number" />
      <TextFieldWrapper
        name="companyEmailAddress"
        label="Company Email Address"
      />
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
        <Typography>
          By clicking "Next" you agree to our
          <a
            href="/#"
            className=" ml-1 text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Terms of Service,Privacy Policy,
          </a>{" "}
          and to receive marketing communications from Envoy.
        </Typography>
        {/* <div className="flex justify-between">
            <div className="flex items-center ml-8">
              <Typography>Got an account?</Typography>
              <a
                href="/#"
                className="ml-2 text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Sign In
              </a>
            </div>
            <Button color="primary" size="large" variant="contained">
              Register
            </Button>
          </div> */}
      </div>
    </div>
  );
};

export default StepOne;
