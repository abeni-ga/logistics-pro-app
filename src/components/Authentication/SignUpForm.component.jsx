import { Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import StepOne from "../Forms/CompanyRegistration/Steps/StepOne.component";
import { color } from "../../constants/Theme.js";

const SignUpForm = () => {
  return (
    <div className="flex flex-col w-2/6 rounded-xl	bg-white p-16 justify-around gap-10">
      <Formik>
        <Form>
          <StepOne />
          <div className="flex w-full justify-between pl-10 pt-10 items-center">
            <Typography>
              Got an account?
              <a
                href="http://localhost:3000/company/signin"
                className="text-blue-900"
              >
                Sign in
              </a>
            </Typography>
            <Button
              size="large"
              sx={{
                backgroundColor: color.darkIndigo,
                color: "white",
                borderRadius: "10px",
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
