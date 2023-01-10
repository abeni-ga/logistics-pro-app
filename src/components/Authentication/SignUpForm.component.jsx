import { Formik, Form } from "formik";
import StepOne from "../Forms/CompanyRegistration/Steps/StepOne.component";

const SignUpForm = () => {
  return (
    <div className="flex flex-col w-2/6 rounded-xl	bg-white p-16 justify-around gap-10">
      <Formik>
        <Form>
          <StepOne />
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
