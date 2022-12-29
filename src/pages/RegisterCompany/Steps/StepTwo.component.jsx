import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputLabel, Typography, Button } from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const StepTwo = () => {
  const INITIAL_VALUES = {
    companyName: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    companyName: Yup.string().required("*Required"),
  });

  return (
    <div className="flex w-full h-full items-center justify-center pt-6">
      <div className="flex flex-col w-2/5 h-full rounded bg-white p-16 justify-between">
        <div>
          <Typography variant="h5">Account Registration</Typography>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography>STEP 1 of 3</Typography>
          <div className="flex w-full">
            <span className="h-2 w-1/4 rounded-md bg-blue-800"></span>
            <span className="bg-red-100 h-2 w-1/4 rounded-md"></span>
            <span className="bg-green-100 h-2 w-1/4 rounded-md"></span>
            <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
          </div>
          <Typography>Company Basic Information</Typography>
        </div>
        <Typography>Fill in the information below</Typography>
        <Formik>
          <Form className="flex flex-col gap-4">
            <InputLabel htmlFor="companyName">Company Name</InputLabel>
            <TextFieldWrapper
              id="companyName"
              name="companyName"
              label="Company Name"
              placeholder="Company Name"
            />
            <InputLabel htmlFor="companyDescription">
              Company Description
            </InputLabel>
            <TextFieldWrapper
              id="companyDescription"
              multiline
              rows={4}
              name="companyDescription"
              label="Company Description"
            />
            <InputLabel htmlFor="companyAddress">Company Address</InputLabel>
            <TextFieldWrapper
              id="companyAddress"
              name="companyAddress"
              label="Company Address"
            />
            <InputLabel htmlFor="deliveryTypeOperated">
              Delivery Type Operated
            </InputLabel>
            <TextFieldWrapper
              id="deliveryTypeOperated"
              name="deliveryTypeOperated"
              label="Delivery Type Operated"
            />
            <div className="flex justify-end mt-2">
              <Button color="primary" size="large" variant="contained">
                Next
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default StepTwo;
