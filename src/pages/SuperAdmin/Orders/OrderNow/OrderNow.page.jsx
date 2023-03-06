import FormOne from "../../../../components/Forms/CreateOrder/FormOne.component";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormTwo from "../../../../components/Forms/CreateOrder/FormTwo.component";
import { Button, IconButton, Typography } from "@mui/material";
import { color } from "../../../../constants/Theme.js";
import { useCallback, useEffect, useState } from "react";
import OrderPayment from "../../../../components/Forms/CreateOrder/OrderPayment.componenet";
import { useNavigate } from "react-router-dom";
import { getDeliveryPlans } from "../../../../utils/apis";
import { toast } from "react-toastify";
const OrderNow = () => {
  const [deliveryPlans, setDeliveryPlans] = useState([]);
  const [plans, setPlans] = useState([]);
  const handleGetDeliveryPlans = useCallback(async () => {
    const response = await getDeliveryPlans({});
    if (response?.status < 300) {
      setDeliveryPlans(response?.data?.data?.data);
      const plan = deliveryPlans.map((plan) => ({
        name: plan.name,
        value: plan._id,
      }));
      setPlans(plan);
      console.log(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, [deliveryPlans]);
  useEffect(() => {
    handleGetDeliveryPlans();
  }, [handleGetDeliveryPlans]);
  const history = useNavigate();
  const INITIAL_VALUES = {
    deliveryPlan: "",
    itemName: "",
    quantity: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    deliveryDescription: "",
    recieverName: "",
    recieverPhone: "",
    deliveryDate: "",
    deliveryTime: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    deliveryPlan: Yup.string().required("*Required"),
    itemName: Yup.string().required("*Required"),
    quantity: Yup.number("invalid input").required("*Required"),
    customerName: Yup.string().required("*Required"),
    customerPhone: Yup.string().required("*Required"),
    customerEmail: Yup.string().required("*Required"),
    deliveryDescription: Yup.string().required("*Required"),
    recieverName: Yup.string().required("*Required"),
    recieverPhone: Yup.string().required("*Required"),
    deliveryDate: Yup.date().required("*Required"),
    deliveryTime: Yup.string().required("*Required"),
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
                <FormOne plans={plans} />
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
