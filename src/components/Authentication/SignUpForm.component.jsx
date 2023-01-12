import { Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import StepOne from "../Forms/CompanyRegistration/Steps/StepOne.component";
import { color } from "../../constants/Theme.js";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-2/6 rounded-xl	bg-white p-16 justify-around gap-10">
      <Formik>
        <Form>
          <StepOne />
          <div className="flex w-full justify-between pl-10 pt-10 items-center">
            <Typography>
              Got an account?
              <a href="/company/signin" className="text-blue-900">
                Sign in
              </a>
            </Typography>
            <Button
              onClick={() => {
                navigate(routes.company.confirm);
              }}
              size="large"
              sx={{
                backgroundColor: color.darkIndigo,
                color: "white",
                borderRadius: "10px",
                ":hover": {
                  backgroundColor: color.darkIndigo,
                  color: "white",
                },
              }}
            >
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
