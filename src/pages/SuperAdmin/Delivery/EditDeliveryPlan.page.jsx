import AddIcon from "@mui/icons-material/Add";
import { color } from "../../../constants/Theme.js";
import * as Yup from "yup";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { ArrowBack } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { editDeliveryPlan } from "../../../utils/apis.js";
const EditDeliveryPlan = () => {
  const handleEditDeliveryPlan = async (values) => {
    try {
      const result = await editDeliveryPlan({}, values);
      navigate("/admin/delivery/all");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

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
              Edit Delivery Plans
            </Typography>
          </div>
          <Button
            onClick={() => {
              navigate("/admin/delivery/add");
            }}
            sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-3">
        <Formik
          initialValues={{
            name: location.state.plan.name,
            baseFare: location.state.plan.baseFare,
            perKm: location.state.plan.perKm,
            flatRate: location.state.plan.flatRate,
            description: location.state.plan.description,
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
            const newValue = { ...values, id: location.state.plan._id };
            handleEditDeliveryPlan(newValue);
          }}
        >
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-[90%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="name"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
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
                    htmlFor="baseFare"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
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
                  <InputLabel
                    htmlFor="perKm"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Fare per Km
                  </InputLabel>
                  <TextFieldWrapper id="perKm" name="perKm" placeholder="400" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[48%]">
                <InputLabel
                  htmlFor="flatRate"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
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
                  htmlFor="description"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Description
                </InputLabel>
                <TextFieldWrapper
                  sx={{ borderRadius: "0px" }}
                  multiline
                  rows={4}
                  id="description"
                  name="description"
                  placeholder="Delivery within 45 mins"
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "10px",
                  color: "white",
                  fontWeight: "700",
                  backgroundColor: color.darkIndigo,
                  alignSelf: "flex-start",
                  borderRadius: "8px",
                }}
              >
                Update plan
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditDeliveryPlan;
