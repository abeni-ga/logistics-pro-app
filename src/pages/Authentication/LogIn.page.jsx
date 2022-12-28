import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col w-2/6 h-3/5  rounded	bg-white p-16 justify-around">
        <div>
          <h1 className="text-4xl mb-2">You're Welcome Back!</h1>
          <h6>Enter the following information below</h6>
        </div>
        <div className="flex flex-col gap-6">
          <TextField label="Email Address" type="email" />
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
          <Button>Forgot Password?</Button>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <h6>Just joining us here?</h6>
            <Button variant="text">Register Now</Button>
          </div>
          <Button variant="contained" size="large">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
