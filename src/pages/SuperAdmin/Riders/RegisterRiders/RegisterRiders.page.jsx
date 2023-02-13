import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import StepOne from "../../../../components/Forms/RiderRegistration/Steps/StepOne.component";
import StepTwo from "../../../../components/Forms/RiderRegistration/Steps/StepTwo.component";
import StepThree from "../../../../components/Forms/RiderRegistration/Steps/StepThree.component";
import Complete from "../../../../components/Forms/RiderRegistration/Steps/Complete.component";
import StandardButton from "../../../../components/Buttons/StandardButton.component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes/siteRoutes.routes";

const RegisterRider = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    firstName: "",
    lastName: "",
    asset: "",
    email: "",
    phoneNumber: "",
    contactPerson: "",
    contactPersonPostion: "",
    contactPersonPhoneNumber: "",
    postalAddress: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("*Required"),
    lastName: Yup.string().required("*Required"),
    asset: Yup.string().required("*Required"),
  });

  const handlePrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStep((prev) =>
      prev < 4 ? prev + 1 : prev === 4 ? navigate(routes.admin.dashboard) : prev
    );
  };

  const steps = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo handlePrev={handlePrev} />;
      case 3:
        return <StepThree handlePrev={handlePrev} />;
      case 4:
        return <Complete handlePrev={handlePrev} />;
      default:
        break;
    }
  };

  return (
    <div className="bg-blue-50 w-full">
      <div className="flex w-full h-full items-center justify-center pt-6">
        <div className="flex flex-col w-[45%] h-min rounded-2xl bg-white p-16 gap-4">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
          >
            <Form>
              {steps()}
              <div className="w-full h-full flex justify-end mt-6">
                <StandardButton
                  size="large"
                  variant="contained"
                  onClick={handleNext}
                >
                  {step < 3 ? "Next" : step === 3 ? "Finish" : "Continue"}
                </StandardButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterRider;
