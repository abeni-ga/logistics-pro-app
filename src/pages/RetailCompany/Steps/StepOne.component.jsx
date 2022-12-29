import { useState } from "react";
import { Typography } from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

const StepOne = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography variant="h4">Basic Information</Typography>
        <Typography>Enter the following information below</Typography>
      </div>

      <TextFieldWrapper
        name="userType"
        label="Select User Type"
        size="medium"
      />
      <TextFieldWrapper name="Company Name" label="Company Name" />
      <div className="flex flex-row gap-4">
        <TextFieldWrapper
          name="first-name"
          label="First Name"
          className="w-2/5"
        />
        <TextFieldWrapper
          name="last-name"
          label="Last Name"
          className="w-2/5"
        />
      </div>
      <TextFieldWrapper name="company-address" label="Company Address" />
      <TextFieldWrapper name="phone-number" label="Phone Number" />
      <TextFieldWrapper
        name="company-email-address"
        label="Company Email Address"
      />
      <div className="flex flex-col gap-4">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={() => {}}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            id="outlined-adornment-confirm-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={() => {}}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
