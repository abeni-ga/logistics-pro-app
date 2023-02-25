import { Button, Typography } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";
import { recoveryPassword } from "../../../utils/apis";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    email: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required("*Required").email("invalid email"),
  });
  const handleRecovertPassword = async (values) => {
    try {
      const result = await recoveryPassword({}, values);
      console.log(result);
      if (result.status < 300) {
        navigate(routes.auth.new);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col w-[30%]  rounded-xl	bg-white p-16 gap-10">
      <Typography variant="h1" className="text-2xl text-darkGray font-bold">
        Forgot Password
      </Typography>
      <Typography>
        Choose one of the best options that best suit your purpose on Real
        EstatePro
      </Typography>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          handleRecovertPassword(values);
        }}
      >
        <Form className="flex flex-col gap-10">
          <TextFieldWrapper name="email" label="Email Address" />
          <div className="flex justify-between">
            <Typography className="text-lightGray font-bold">
              <a href="/">
                <ArrowBackIosIcon /> Back to Login
              </a>
            </Typography>
            <Button
              className="font-bold bg-darkIndigo rounded-lg"
              variant="contained"
              size="large"
              type="submit"
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPassword;
