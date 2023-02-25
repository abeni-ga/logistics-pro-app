import { IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StandardButton from "../../../components/Buttons/StandardButton.component";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import SuccessDialogWithAction from "../../../components/Dialog/SuccessDialogWithButton.component.jsx";
import { addDeliveryPlan } from "../../../utils/apis";
import { toast } from "react-toastify";
const AddDeliveryPlan = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleaddDeliveryPlan = async (values) => {
    try {
      const result = await addDeliveryPlan({}, values);
      toast.success("Successfully Logged in!");
      console.log(result);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex h-[20%] w-full">
        <div className="flex w-full items-center  justify-between">
          <div className="flex gap-2 items-center">
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h2"
              sx={{ fontSize: "28px", fontWeight: "700" }}
            >
              Add Delivery Plans
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-3">
        <Formik
          initialValues={{
            name: "",
            baseFare: "",
            perKm: "",
            flatRate: "",
            description: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            baseFare: Yup.number("Base Fare must be number").required(
              "Required"
            ),
            perKm: Yup.number("Fare per Km must be number").required(
              "Required"
            ),
            flatRate: Yup.number("Flat Rate must be number").required(
              "Required"
            ),
            description: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            handleaddDeliveryPlan(values);
          }}
        >
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-[90%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2">
                <InputLabel className="text-darkGray text-xl" htmlFor="name">
                  Service name
                </InputLabel>
                <TextFieldWrapper
                  id="name"
                  label="Serice Name"
                  name="name"
                  placeholder="Same day delivery"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    className="text-darkGray text-xl"
                    htmlFor="baseFare"
                  >
                    Base Fare
                  </InputLabel>
                  <TextFieldWrapper
                    id="baseFare"
                    name="baseFare"
                    placeholder="400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel className="text-darkGray text-xl" htmlFor="perKm">
                    Fare per Km
                  </InputLabel>
                  <TextFieldWrapper id="perKm" name="perKm" placeholder="400" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[48%]">
                <InputLabel
                  className="text-darkGray text-xl"
                  htmlFor="flatRate"
                >
                  Flat Rate
                </InputLabel>
                <TextFieldWrapper
                  id="flatRate"
                  name="flatRate"
                  placeholder="400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputLabel
                  className="text-darkGray text-xl"
                  htmlFor="description"
                >
                  Description
                </InputLabel>
                <TextFieldWrapper
                  multiline
                  rows={4}
                  id="description"
                  name="description"
                  placeholder="Delivery within 45 mins"
                />
              </div>
              <StandardButton
                className="self-start"
                variant="contained"
                type="submit"
              >
                Add plan
              </StandardButton>
            </div>
          </Form>
        </Formik>
        <SuccessDialogWithAction
          content="Delivery plan was created successfully"
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default AddDeliveryPlan;
