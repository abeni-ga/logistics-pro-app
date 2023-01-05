import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { routes } from "../../routes/siteRoutes.routes";
import { color } from "../../constants/Theme";

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-2/6 h-3/5  rounded-xl	bg-white p-16 justify-around gap-10">
      <div>
        <h1 className="text-4xl mb-2 font-semibold text-gray-700">
          You're Welcome Back!
        </h1>
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
        <a
          href="/#"
          className="text-center text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Forgot Password?
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h6>Just joining us here?</h6>
          <a
            href="/#"
            className="ml-2 text-center text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Register Now
          </a>
        </div>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: color.indigo }}
          onClick={() => navigate(routes.admin.dashboard)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LogInForm;
