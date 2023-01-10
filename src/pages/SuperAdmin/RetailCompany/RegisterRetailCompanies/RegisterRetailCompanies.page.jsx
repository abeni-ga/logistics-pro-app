import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import StepOne from "../../../../components/Forms/CompanyRegistration/Steps/StepOne.component";
import StepTwo from "../../../../components/Forms/CompanyRegistration/Steps/StepTwo.component";
import StepThree from "../../../../components/Forms/CompanyRegistration/Steps/StepThree.component";
import StepFour from "../../../../components/Forms/CompanyRegistration/Steps/StepFour.component";
import StepFive from "../../../../components/Forms/CompanyRegistration/Steps/StepFive.component";
import StandardButton from "../../../../components/Buttons/StandardButton.component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes/siteRoutes.routes";
import { Typography } from "@mui/material";

const RegisterRetailCompany = () => {
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
      prev < 5 ? prev + 1 : prev === 5 ? navigate(routes.admin.dashboard) : prev
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
        return <StepFour handlePrev={handlePrev} />;
      case 5:
        return <StepFive handlePrev={handlePrev} />;
      default:
        break;
    }
  };

  return (
    <div className="bg-blue-50 w-full">
      <div className="flex flex-col w-full h-full items-center justify-center pt-6">
        <div className="py-12">
          {step === 1 ? (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Create a company account
            </Typography>
          ) : step === 5 ? null : (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Company Registration
            </Typography>
          )}
        </div>
        <div className="flex flex-col w-2/5 h-min rounded bg-white p-16 gap-4">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
          >
            <Form>
              {steps()}
              <div className="w-full flex justify-end mt-6">
                <StandardButton
                  size="large"
                  variant="contained"
                  onClick={handleNext}
                >
                  {step === 1 ? "Register" : step < 5 ? "Next" : "Finish"}
                </StandardButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterRetailCompany;
