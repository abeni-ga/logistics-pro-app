import { Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import StepOne from "../../../../components/Forms/RiderRegistration/Steps/StepOne.component";
import StepTwo from "../../../../components/Forms/RiderRegistration/Steps/StepTwo.component";
import StepThree from "../../../../components/Forms/RiderRegistration/Steps/StepThree.component";
import Complete from "../../../../components/Forms/RiderRegistration/Steps/Complete.component";
import StandardButton from "../../../../components/Buttons/StandardButton.component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes/siteRoutes.routes";
import { getUsers, register, uploadDocument } from "../../../../utils/apis";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { ROLE } from "../../../../constants/enum";

const RegisterRider = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(undefined);
  const [companies, setCompanies] = useState(undefined);
  const [postalAddress, setPostalAddress] = useState(undefined);
  const [files, setFiles] = useState(undefined);
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    firstName: "",
    lastName: "",
    deliveryCompany: "",
    asset: "",
    email: "",
    phoneNumber: "",
    contactPerson: "",
    address: "",
    contactPersonPostion: "",
    contactPersonPhoneNumber: "",
    postalAddress: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("*Required"),
    lastName: Yup.string().required("*Required"),
    asset: Yup.string().required("*Required"),
    // deliveryCompany: Yup.string().required("*Required"),
    email: Yup.string().required("*Required"),
    // phoneNumber: Yup.string().required("*Required"),
    contactPerson: Yup.string().required("*Required"),
    // address: Yup.string().required("*Required"),
    contactPersonPosition: Yup.string().required("*Required"),
    contactPersonPhoneNumber: Yup.string().required("*Required"),
    postalAddress: Yup.string().required("*Required"),
  });
  const handleGetUsers = useCallback(async () => {
    const params = new URLSearchParams({
      limit: 0,
      filterBy: "role",
      filterValue: "DeliveryCompany",
      populate: "detail",
      searchBy: "name",
      // keyWord: keyWord,
    });
    const response = await getUsers({}, `?${params.toString()}`);
    if (response?.status < 300) {
      setCompanies(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  const handleRegister = async (values) => {
    try {
      const result = await register({}, values);
      console.log(result);
      handleFiles();
      handleNext();
    } catch (error) {
      toast.error(error.response?.data?.message);
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
      prev < 4
        ? prev + 1
        : prev === 4
        ? navigate(routes.admin.dashboard)
        : prev,
    );
  };

  const steps = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            address={address}
            setAddress={setAddress}
            companies={companies}
          />
        );
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
  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  return companies ? (
    <div className="bg-blue-50 w-full">
      <div className="flex w-full h-full items-center justify-center pt-6">
        <div className="flex flex-col w-[45%] h-min rounded-2xl bg-white p-16 gap-4">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              const body = {
                role: ROLE.RIDER,
                address: address ? address.label : "",
                postalAddress: postalAddress ? postalAddress.label : "",
                ...values,
              };
              handleRegister(body);
            }}
          >
            {({ handleSubmit, errors }) => {
              // Object.keys(errors).map(
              //   (error) => error && toast.error(`${error} - ${errors[error]}`),
              // );
              console.log(errors);
              return (
                <Form>
                  {steps()}
                  <div className="w-full h-full flex justify-end mt-6">
                    <StandardButton
                      type="button"
                      size="large"
                      variant="contained"
                      onClick={step === 3 ? handleSubmit : handleNext}
                    >
                      {step < 3 ? "Next" : step === 3 ? "Finish" : "Continue"}
                    </StandardButton>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default RegisterRider;
