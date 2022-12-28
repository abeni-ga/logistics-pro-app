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
        <Formik>
          <Form className="flex flex-col gap-4">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Company Name
            </InputLabel>
            <TextFieldWrapper name="companyName" placeholder="Company Name" />
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Company Description
            </InputLabel>
            <TextFieldWrapper
              name="Company Description"
              label="Company Description"
            />
            Company Address
            <TextFieldWrapper name="Company Address" label="Company Address" />
            <TextFieldWrapper
              name="Delivery Type Operated"
              label="Delivery Type Operated"
            />
            <div className="flex justify-end">
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
