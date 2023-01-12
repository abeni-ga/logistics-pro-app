import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";
import { color } from "../../constants/Theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <Typography
        variant="h1"
        sx={{ fontWeight: "700", fontSize: "24px", color: color.darkGray }}
      >
        Forgot Password
      </Typography>
      <Typography>
        Choose one of the best options that best suit your purpose on Real
        EstatePro
      </Typography>
      <TextField name="email" label="Email Address" type="email" />
      <div className="flex justify-between">
        <Typography
          sx={{ fontWeight: "600", lineHeight: "18px", color: color.darkGray }}
        >
          <a href="/company/signin">
            <ArrowBackIosIcon /> Back to Login
          </a>
        </Typography>
        <Button
          sx={{
            textTransform: "capitalize",
            fontWeight: "700",
            backgroundColor: color.darkIndigo,
            borderRadius: "10px",
          }}
          variant="contained"
          size="large"
          onClick={() => navigate(routes.company.createPassword)}
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
