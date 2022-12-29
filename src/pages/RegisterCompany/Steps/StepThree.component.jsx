import { Formik, Form } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, InputLabel, Typography, IconButton } from "@mui/material";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const StepThree = () => {
  return (
    <div className="flex w-full h-full items-center justify-center pt-6">
      <div className="flex flex-col w-2/5 h-full rounded bg-white p-16 justify-evenly">
        <div className="flex items-center gap-3">
          <IconButton aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5">Account Registration</Typography>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Typography>STEP 2 of 3</Typography>
          <div className="flex w-full">
            <span className="h-2 w-1/4 rounded-md bg-blue-800"></span>
            <span className="bg-red-800 h-2 w-1/4 rounded-md"></span>
            <span className="bg-green-100 h-2 w-1/4 rounded-md"></span>
            <span className="bg-yellow-100 h-2 w-1/4 rounded-md"></span>
          </div>
          <Typography>Company Contact Information</Typography>
        </div>
        <Typography>Fill in the contact below</Typography>
        <Formik>
          <Form className="flex flex-col gap-2">
            <InputLabel htmlFor="companyEmail">Company Email</InputLabel>
            <TextFieldWrapper
              id="companyEmail"
              name="companyEmail"
              label="Company Email"
              placeholder="companyabc@xyz.com"
            />
            <InputLabel htmlFor="companyPhoneNumber">
              Company Phone Number
            </InputLabel>
            <TextFieldWrapper
              id="companyPhoneNumber"
              name="companyPhoneNumber"
              label="Company Phone Number"
              placeholder="123456789"
            />
            <InputLabel htmlFor="contactPerson">Company Person</InputLabel>
            <TextFieldWrapper
              id="contactPerson"
              name="contactPerson"
              label="Contact Person"
              placeholder="Type in name of Contact Person for company"
            />
            <div className="flex gap-2">
              <InputLabel htmlFor="contactPersonPosition">
                Contact Person Position
              </InputLabel>
              <TextFieldWrapper
                id="contactPersonPosition"
                name="contactPersonPosition"
                label="Contact Person Position"
                placeholder="Type in position of contact person"
              />
              <InputLabel htmlFor="contactPersonPhoneNumber">
                Phone Number
              </InputLabel>
              <TextFieldWrapper
                id="contactPersonPhoneNumber"
                name="contactPersonPhoneNumber"
                label="Phone Number"
                placeholder="Contact Person's Phone Number"
              />
            </div>
            <InputLabel htmlFor="deliveryTypeOperated">
              Delivery Type Operated
            </InputLabel>
            <TextFieldWrapper
              id="deliveryTypeOperated"
              name="deliveryTypeOperated"
              label="Delivery Type Operated"
            />
            <InputLabel htmlFor="postalNumber">P O Box Number</InputLabel>
            <TextFieldWrapper
              id="postalNumber"
              name="postalNumber"
              label="Postal Number"
              placeholder="Type in Postal Number"
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

export default StepThree;
