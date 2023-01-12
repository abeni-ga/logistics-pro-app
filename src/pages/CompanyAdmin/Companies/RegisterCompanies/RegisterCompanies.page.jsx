import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import StepTwo from "../../../../components/Forms/CompanyRegistration/Steps/StepTwo.component";
import StepThree from "../../../../components/Forms/CompanyRegistration/Steps/StepThree.component";
import StepFour from "../../../../components/Forms/CompanyRegistration/Steps/StepFour.component";
import StepFive from "../../../../components/Forms/CompanyRegistration/Steps/StepFive.component";
import StandardButton from "../../../../components/Buttons/StandardButton.component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes/siteRoutes.routes";
import { Typography } from "@mui/material";

const RegisterCompany = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    userType: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    userType: Yup.string().required("*Required"),
  });

  const handlePrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStep((prev) =>
      prev < 4
        ? prev + 1
        : prev === 4
        ? navigate(routes.company.dashboard)
        : prev
    );
  };

  const steps = () => {
    switch (step) {
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree handlePrev={handlePrev} />;
      case 3:
        return <StepFour handlePrev={handlePrev} />;
      case 4:
        return <StepFive handlePrev={handlePrev} />;
      default:
        break;
    }
  };

  return (
    <div className="bg-blue-50 w-full">
      <div className="flex flex-col w-full h-full items-center">
        <div className="py-12">
          {step === 1 ? (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Create a company account
            </Typography>
          ) : step === 4 ? null : (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Company Registration
            </Typography>
          )}
        </div>
        <div className="flex flex-col w-2/5 h-min rounded-2xl bg-white p-16 gap-4">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
          >
            <Form>
              {steps()}
              <div className="w-full flex justify-end mt-6 pl-10">
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

export default RegisterCompany;
