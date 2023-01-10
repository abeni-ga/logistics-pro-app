import FormOne from "../../../components/Forms/CreateOrder/FormOne.component";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormTwo from "../../../components/Forms/CreateOrder/FormTwo.component";
import { Button } from "@mui/material";
import { color } from "../../../constants/Theme.js";
const OrderNow = () => {
  const INITIAL_VALUES = {
    userType: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    userType: Yup.string().required("*Required"),
  });
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex h-[15%] ">header</div>
      <Formik initialValues={INITIAL_VALUES} validationSchema={FORM_VALIDATION}>
        <Form className="h-full">
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
          <div></div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderNow;
