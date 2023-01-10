import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";
import { color } from "../../constants/Theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Mail from "../../assets/svg/Mail.svg";

const RecoveryMail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <img src={Mail} alt="" width="100px" height="100px" />
      <Typography
        variant="h1"
        sx={{ fontWeight: "700", fontSize: "24px", color: color.darkGray }}
      >
        A Password Recovery Mail Has Been Sent to you
      </Typography>
      <Typography>
        A password reset mail has just been sent to your email:
        abcd...@gmail.com <br />
        <a href="#e" className="text-blue-700">
          Change Email
        </a>
      </Typography>
      <TextField name="email" label="Email Address" type="email" />
      <div className="flex justify-between">
        <Typography
          sx={{ fontWeight: "600", lineHeight: "18px", color: color.darkGray }}
        >
          <a href="http://localhost:3000/company/login">
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
          onClick={() => navigate(routes.admin.dashboard)}
        >
          Resend Email
        </Button>
      </div>
    </div>
  );
};

export default RecoveryMail;
