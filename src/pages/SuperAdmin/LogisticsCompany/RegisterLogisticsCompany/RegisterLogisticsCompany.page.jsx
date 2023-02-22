import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { register } from "../../../../utils/apis";

const RegisterLogisticsCompany = () => {
  const [address, setAddress] = useState(undefined);
  const [postalAddress, setPostalAddress] = useState(undefined);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    role: "",
    companyName: "",
    firstName: "",
    lastName: "",
    companyAddress: "",
    phoneNumber: "",
    companyEmailAddress: "",
    password: "",
    confirmPassword: "",
    companyDescription: "",
    deliveryType: "",
    contactPerson: "",
    contactPersonPosition: "",
    contactPersonPhoneNumber: "",
    postalAddress: "",
    postalNumber: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    role: Yup.string().required("*Required"),
    companyName: Yup.string().required("*Required"),
    firstName: Yup.string().required("*Required"),
    lastName: Yup.string().required("*Required"),
    password: Yup.string().required("*Required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
    // companyAddress: Yup.string().required("*Required"),
    phoneNumber: Yup.string().required("*Required"),
    email: Yup.string().required("*Required").email("invalid email"),
    companyDescription: Yup.string().required("*Required"),
    deliveryType: Yup.string().required("*Required"),
    contactPerson: Yup.string().required("*Required"),
    contactPersonPosition: Yup.string().required("*Required"),
    contactPersonPhoneNumber: Yup.string().required("*Required"),
    // postalAddress: Yup.string().required("*Required"),
    postalNumber: Yup.string().required("*Required"),
  });
  useEffect(() => {
    console.log("address", address);
    console.log("postalAddress", postalAddress);
  }, [address, postalAddress]);

  const handleRegister = async (values) => {
    try {
      const result = await register({}, values);
      console.log(result);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handlePrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStep((prev) =>
      prev < 5 ? prev + 1 : prev === 5 ? navigate(routes.admin.dashboard) : prev
    );
  };

  const steps = () => {
    if (step === 1) {
      return <StepOne address={address} setAddress={setAddress} />;
    } else if (step === 2) {
      return (
        <StepTwo
          handlePrev={handlePrev}
          address={address}
          setAddress={setAddress}
        />
      );
    } else if (step === 3) {
      return (
        <StepThree
          handlePrev={handlePrev}
          postalAddress={postalAddress}
          setPostalAddress={setPostalAddress}
        />
      );
    } else if (step === 4) {
      return <StepFour handlePrev={handlePrev} />;
    } else if (step === 5) {
      return <StepFive handlePrev={handlePrev} />;
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
          ) : step === 5 ? null : (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Company Registration
            </Typography>
          )}
        </div>
        <div className="flex flex-col w-2/5 h-min rounded-2xl bg-white p-16 gap-4">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              const newValues = {
                ...values,
                username: `${values.firstName} ${values.lastName}`,
                companyAddress: address ? address.label : "",
                postalAddress: postalAddress ? postalAddress.label : "",
              };
              handleRegister(newValues);
              console.log(newValues);
            }}
          >
            <Form>
              {steps()}
              <div className="w-full flex justify-between mt-6 pl-10">
                {step === 1 ? (
                  <Typography>
                    Got an account?
                    <a
                      href="#l"
                      className="text-blue-800 hover:text-blue-600 visited:text-violet-500"
                    >
                      Sign in
                    </a>
                  </Typography>
                ) : (
                  <div></div>
                )}

                <StandardButton
                  size="large"
                  type={step === 4 ? "submit" : "button"}
                  variant="contained"
                  onClick={handleNext}
                >
                  {step === 1
                    ? "Register"
                    : step < 4
                    ? "Next"
                    : step === 4
                    ? "Finish"
                    : "Continue"}
                </StandardButton>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogisticsCompany;
