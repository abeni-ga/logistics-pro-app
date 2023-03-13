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
import { register, uploadDocument } from "../../../../utils/apis";
import { toast } from "react-toastify";

const RegisterRetailCompany = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState(undefined);
  const navigate = useNavigate();
  const [address, setAddress] = useState(undefined);
  const [postalAddress, setPostalAddress] = useState(undefined);
  const INITIAL_VALUES = {
    role: "",
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyDescription: "",
    deliveryType: "",
    contactPerson: "",
    contactPersonPosition: "",
    contactPersonPhone: "",
    postalNumber: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    role: Yup.string().required("*Required"),
    userName: Yup.string().required("*Required"),
    firstName: Yup.string().required("*Required"),
    lastName: Yup.string().required("*Required"),
    phone: Yup.string().required("*Required"),
    email: Yup.string().required("*Required"),
    password: Yup.string().required("*Required"),
    confirmPassword: Yup.string().required("*Required"),
    companyDescription: Yup.string().required("*Required"),
    deliveryType: Yup.string().required("*Required"),
    contactPerson: Yup.string().required("*Required"),
    contactPersonPosition: Yup.string().required("*Required"),
    contactPersonPhone: Yup.string().required("*Required"),
    postalNumber: Yup.string().required("*Required"),
  });
  const handleRegister = async (values) => {
    try {
      const result = await register({}, values);
      console.log(result);
      handleFiles(result?.data?.data?.data?._id);
      handleNext();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const handleFiles = async (id) => {
    try {
      const formData = new FormData();
      formData.append("documentType", "BusinessRegistration");
      formData.append("documents", files.businessRegistration);
      formData.append("userId", id);

      const result = await uploadDocument(formData);
      return result;
    } catch (error) {}
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
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return (
          <StepTwo
            handlePrev={handlePrev}
            address={address}
            setAddress={setAddress}
          />
        );
      case 3:
        return (
          <StepThree
            handlePrev={handlePrev}
            postalAddress={postalAddress}
            setPostalAddress={setPostalAddress}
          />
        );
      case 4:
        return (
          <StepFour handlePrev={handlePrev} files={files} setFiles={setFiles} />
        );
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
            onSubmit={(values) => {
              const body = {
                address: address ? address.label : "",
                username: `${values.firstName} ${values.lastName}`,
                deliveryCompany: "63f394e16514bb00d013275d",
                postalAddress: postalAddress ? postalAddress.label : "",
                ...values,
              };
              console.log(body);
              handleRegister(body);
            }}
          >
            {({ handleSubmit, errors }) => {
              return (
                <Form>
                  {steps()}
                  <div className="w-full flex justify-end mt-6">
                    <StandardButton
                      size="large"
                      type="button"
                      variant="contained"
                      onClick={step === 4 ? handleSubmit : handleNext}
                    >
                      {step === 1 ? "Register" : step < 4 ? "Next" : "Finish"}
                    </StandardButton>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterRetailCompany;
