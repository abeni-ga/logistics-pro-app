import { useState } from "react";
import { MenuItem, Typography } from "@mui/material";
import TextFieldWrapper from "../../../TextFieldWrapper/TextFieldWrapper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";

const StepOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full">
        <span className="h-2 w-1/2 bg-blue-900 rounded-md"></span>
        <span className="h-2 w-1/2 bg-gray-300 rounded-md"></span>
      </div>
      <div>
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Basic Information
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Enter the following information below
        </Typography>
      </div>
      <TextFieldWrapper
        value={userType}
        name="user-type"
        id="user-type"
        select
        placeholder="Select User Type"
        label="Select User Type"
        defaultValue="Logistics"
        onChange={(event) => {
          setUserType(event.target.value);
        }}
      >
        <MenuItem value={"Logistics"}>Logistics</MenuItem>
      </TextFieldWrapper>
      <TextFieldWrapper
        name="companyName"
        label="Company Name"
        sx={{ borderRadius: "10px" }}
      />
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
        <Typography sx={{ fontSize: "14px" }}>
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
