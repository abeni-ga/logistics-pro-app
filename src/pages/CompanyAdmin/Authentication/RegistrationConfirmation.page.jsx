import React from "react";
import StepFive from "../../../components/Forms/CompanyRegistration/Steps/StepFive.component";
import { color } from "../../../constants/Theme";
import Logo from "../../../assets/svg/Logo.svg";
import { Button, Typography } from "@mui/material";

const RegistrationConfirmation = (props) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: color.bgWhiteSmoke }}
    >
      <div className="flex flex-col w-full h-screen items-center py-10">
        <div className="flex flex-row w-[90%] gap-2 ml-4">
          <img className="rounded-sm w-8" src={Logo} alt="POOL" />
          <h1 className="font-semibold">Pool</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          {props.confirm ? (
            <div className="flex rounded-2xl w-[30%] h-[40%] items-center bg-white">
              <StepFive />
            </div>
          ) : (
            <div className="flex flex-col rounded-2xl p-20 w-[30%] h-[40%] gap-10 justify-center items-center bg-white">
              <Typography
                variant="h2"
                sx={{ fontWeight: "700", fontSize: "28px" }}
              >
                Your email has been verified!
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                You can now proceed to complete your account registration. Click
                on the below to get on
              </Typography>
              <Button
                size="large"
                sx={{
                  backgroundColor: color.darkIndigo,
                  color: "white",
                  fontWeight: "700",
                  borderRadius: "10px",
                }}
              >
                Continue Registration
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
