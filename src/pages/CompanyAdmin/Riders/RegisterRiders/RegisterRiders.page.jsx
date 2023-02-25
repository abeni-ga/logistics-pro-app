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
import { toast } from "react-toastify";
import { register } from "../../../../utils/apis";
import { getId } from "../../../../utils/tokenHandler";
import { CircularProgress } from "@mui/material";

const RegisterRider = () => {
  const [files, setFiles] = useState(undefined);
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(undefined);
  const [postalAddress, setPostalAddress] = useState(undefined);
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      const result = await register({}, values);
      console.log(result);
      if (result.status < 300) {
        console.log(result.data);
        setStep(5);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const INITIAL_VALUES = {
    firstName: "",
    lastName: "",
    address: "",
    asset: "",
    email: "",
    phone: "",
    contactPerson: "",
    contactPersonPosition: "",
    contactPersonPhone: "",
    poBOX: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("*Required"),
    lastName: Yup.string().required("*Required"),
    asset: Yup.string().required("*Required"),
    email: Yup.string().required("*Required").email("invalid email"),
    phone: Yup.string().required("*Required"),
    contactPerson: Yup.string().required("*Required"),
    contactPersonPosition: Yup.string().required("*Required"),
    contactPersonPhone: Yup.string().required("*Required"),
    poBOX: Yup.string().required("*Required"),
  });

  const handlePrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStep((prev) =>
      prev < 4
        ? prev + 1
        : prev === 5
        ? navigate(routes.company.dashboard)
        : prev
    );
  };

  const steps = () => {
    switch (step) {
      case 1:
        return <StepOne address={address} setAddress={setAddress} />;
      case 2:
        return (
          <StepTwo
            handlePrev={handlePrev}
            postalAddress={postalAddress}
            setPostalAddress={setPostalAddress}
          />
        );
      case 3:
        return (
          <StepThree
            handlePrev={handlePrev}
            setFiles={setFiles}
            files={files}
          />
        );
      case 5:
        return <Complete handlePrev={handlePrev} />;
      default:
        break;
    }
  };

  return (
    <div className="bg-blue-50 w-full">
      <div className="flex w-full h-full items-center justify-center pt-6">
        {step === 4 ? (
          <div className="w-full h-full flex items-center justify-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="flex flex-col w-[45%] h-min rounded-2xl bg-white p-16 gap-4">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                const deliveryCompany = getId();
                const newValues = {
                  ...values,
                  role: "Rider",
                  username: `${values.firstName} ${values.lastName}`,
                  address: address.label,
                  postalAddress: postalAddress.label,
                  deliveryCompany,
                  password: "password",
                };
                handleRegister(newValues);
                // console.log(newValues);
              }}
            >
              <Form>
                {steps()}
                <div className="w-full h-full flex justify-end mt-6">
                  <StandardButton
                    size="large"
                    variant="contained"
                    onClick={handleNext}
                    type={step === 3 ? "submit" : "button"}
                  >
                    {step < 3 ? "Next" : step === 3 ? "Finish" : "Continue"}
                  </StandardButton>
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterRider;
