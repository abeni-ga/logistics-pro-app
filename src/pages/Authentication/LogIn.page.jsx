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
import { color } from "../../constants/Theme";
import Logo from "../../assets/svg/Logo.svg";
import Scooter from "../../assets/svg/Scooter.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: color.bgWhiteSmoke }}
    >
      <div className="flex flex-col h-screen w-1/2 py-10">
        <div className="flex flex-row items-center gap-2 ml-4">
          <img className="rounded-sm w-8" src={Logo} alt="POOL" />
          <h1 className="font-semibold">Pool</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-10/12 h-full">
          <img className="w-60" src={Scooter} alt="" />
          <h1 className="text-4xl text-center font-semibold">
            Lets help you manage your <br /> riders and delivery systems.
          </h1>
          <h4 className="text-center text-gray-600">
            Every logistics company whether it’s a multi-national branding
            corporation or a regular local deserves the basic standard
            necessities in achieving a high service delivery
          </h4>
        </div>
      </div>

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
    </div>
  );
};

export default LogIn;
