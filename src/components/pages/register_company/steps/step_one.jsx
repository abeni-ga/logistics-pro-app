import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import TextFieldWrapper from "./components/TextFieldWrapper/TextFieldWrapper.jsx";

const StepOne = () => {
  return (
    <Card>
      <CardContent className="w-90% flex flex-col content-center">
        <Typography variant="h4">Basic Information</Typography>
        <Typography>Enter the following information below</Typography>
        <Formik>
          <Form>
            <TextFieldWrapper
              name="User Type"
              label="User Type"
              size="small"
              margin="normal"
            />
            <TextFieldWrapper
              name="Company Name"
              label="Select User Type"
              size="small"
              margin="normal"
            />
            <div className="flex flex-row justify-between">
              <TextField
                name="first-name"
                label="First Name"
                size="small"
                margin="normal"
                className="w-45%"
              />
              <TextField
                name="last-name"
                label="Last Name"
                size="small"
                margin="normal"
                className="w-45%"
              />
            </div>
            <TextFieldWrapper
              name="company-address"
              label="Company Address"
              size="small"
              margin="normal"
            />
            <TextFieldWrapper
              name="phone-number"
              label="Phone Number"
              size="small"
              margin="normal"
            />
            <TextFieldWrapper
              name="company-email-address"
              label="Company Email Address"
              size="small"
              margin="normal"
            />
            <TextFieldWrapper
              name="password"
              label="Password"
              margin="normal"
            />
            <TextFieldWrapper
              name="confirm-password"
              label="Confirm Password"
              size="small"
            />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default StepOne;
