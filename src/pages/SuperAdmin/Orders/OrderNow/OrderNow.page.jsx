import FormOne from "../../../../components/Forms/CreateOrder/FormOne.component";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormTwo from "../../../../components/Forms/CreateOrder/FormTwo.component";
import { Button, IconButton, Typography } from "@mui/material";
import { color } from "../../../../constants/Theme.js";
import { useState } from "react";
import OrderPayment from "../../../../components/Forms/CreateOrder/OrderPayment.componenet";
import { useNavigate } from "react-router-dom";
const OrderNow = () => {
  const history = useNavigate();
  const INITIAL_VALUES = {
    userType: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    userType: Yup.string().required("*Required"),
  });
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex h-[15%] items-center">
        <IconButton
          onClick={() => {
            history(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Create Pool Order
        </Typography>
      </div>
      <Formik initialValues={INITIAL_VALUES} validationSchema={FORM_VALIDATION}>
        <Form className="h-full">
          {step === 1 ? (
            <div className="flex w-full h-full">
              <div className="flex flex-co w-[50%] h-full">
                <FormOne />
              </div>
              <div className="flex flex-col items-center gap-8 w-[50%] h-full">
                <FormTwo />
                <div className="flex w-[90%] justify-between">
                  <Button variant="outlined">Cancel</Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setStep(2);
                    }}
                    sx={{
                      backgroundColor: color.darkIndigo,
                      borderRadius: "10px",
                    }}
                  >
                    View Payment
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full">
              <OrderPayment />
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default OrderNow;
