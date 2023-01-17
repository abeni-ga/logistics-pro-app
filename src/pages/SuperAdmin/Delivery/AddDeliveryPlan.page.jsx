import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SuccessDialogWithAction from "../../../components/Dialog/SuccessDialogWithButton.component.jsx";
import { useState } from "react";
const AddDeliveryPlan = () => {
  const [open, setOpen] = useState();
  const navigate = useNavigate();
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
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-[90%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Service name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="serviceName"
                  label="Serice Name"
                  name="serviceName"
                  placeholder="Same day delivery"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="serviceName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Base Fare
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="serviceName"
                    name="serviceName"
                    placeholder="400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="serviceName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Fare per Km
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="serviceName"
                    name="serviceName"
                    placeholder="400"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[48%]">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Flat Rate
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="serviceName"
                  name="serviceName"
                  placeholder="400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Description
                </InputLabel>
                <TextFieldWrapper
                  normal
                  sx={{ borderRadius: "0px" }}
                  multiline
                  rows={4}
                  id="serviceName"
                  name="serviceName"
                  placeholder="Delivery within 45 mins"
                />
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
                sx={{
                  marginTop: "10px",
                  color: "white",
                  fontWeight: "700",
                  backgroundColor: color.darkIndigo,
                  alignSelf: "flex-start",
                  borderRadius: "8px",
                }}
              >
                Add plan
              </Button>
            </div>
          </Form>
        </Formik>
        <SuccessDialogWithAction
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
