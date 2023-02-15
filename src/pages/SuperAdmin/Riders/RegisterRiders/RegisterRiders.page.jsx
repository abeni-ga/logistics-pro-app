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
import { register, uploadDocument } from "../../../../utils/apis";
import { toast } from "react-toastify";

const RegisterRider = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState(undefined);
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
  const handleRegister = async (values) => {
    try {
      const result = await register({}, values);
      console.log(result);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleFiles = async () => {
    try {
      const formData = new FormData();
      formData.append("documentType", "BusinessRegistration");
      formData.append("documents", files.businessRegistration);

      const result = await uploadDocument(formData);
      return result;
    } catch (error) {}
  };
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
        return (
          <StepThree
            handlePrev={handlePrev}
            files={files}
            setFiles={setFiles}
          />
        );
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
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              {steps()}
              <div className="w-full h-full flex justify-end mt-6">
                <StandardButton
                  type={step === 3 ? "submit" : "button"}
                  size="large"
                  variant="contained"
                  onClick={
                    step === 3
                      ? () => {
                          handleFiles();
                          handleNext();
                        }
                      : handleNext
                  }
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
