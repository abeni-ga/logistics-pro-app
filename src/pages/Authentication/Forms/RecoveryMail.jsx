import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Mail from "../../../assets/svg/Mail.svg";

const RecoveryMail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <img src={Mail} alt="" width="100px" height="100px" />
      <Typography variant="h1" className="text-2xl text-darkGray font-bold">
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
        <Typography className="text-darkGray font-bold">
          <a href="/company/signin">
            <ArrowBackIosIcon /> Back to Login
          </a>
        </Typography>
        <Button
          className="font-bold bg-darkIndigo rounded-lg"
          variant="contained"
          size="large"
          onClick={() => navigate(routes.company.vertify)}
        >
          Resend Email
        </Button>
      </div>
    </div>
  );
};

export default RecoveryMail;
