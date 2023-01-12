import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";
import { color } from "../../constants/Theme";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <Typography
        variant="h1"
        sx={{ fontWeight: "700", fontSize: "24px", color: color.darkGray }}
      >
        Create New Password
      </Typography>
      <Typography>Use an easy to remember but secure password</Typography>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
      <Button
        sx={{
          width: "fit-content",
          textTransform: "capitalize",
          fontWeight: "700",
          backgroundColor: color.darkIndigo,
          borderRadius: "10px",
        }}
        variant="contained"
        size="large"
        onClick={() => navigate(routes.company.vertify)}
      >
        Create
      </Button>
    </div>
  );
};

export default CreatePassword;
