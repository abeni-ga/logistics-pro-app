import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <Typography variant="h1" className="text-2xl text-darkGray font-bold">
        Forgot Password
      </Typography>
      <Typography>
        Choose one of the best options that best suit your purpose on Real
        EstatePro
      </Typography>
      <TextField name="email" label="Email Address" type="email" />
      <div className="flex justify-between">
        <Typography className="text-lightGray font-bold">
          <a href="/company/signin">
            <ArrowBackIosIcon /> Back to Login
          </a>
        </Typography>
        <Button
          className="font-bold bg-darkIndigo rounded-lg"
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
