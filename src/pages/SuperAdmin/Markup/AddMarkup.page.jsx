import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import * as Yup from "yup";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useState } from "react";
import { addMarkup } from "../../../utils/apis.js";
const AddMarkup = () => {
  const navigate = useNavigate();
  const [up, setUp] = useState(true);
  const handleAddMarkup = async (values) => {
    try {
      await addMarkup({}, values);
      navigate(routes.admin.markup);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex flex-col h-[20%] w-full gap-10">
        <div className="flex w-full items-center  justify-between">
          <div className="flex">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h2"
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Add Staff
            </Typography>
          </div>
          <Button
            onClick={() => {
              navigate(routes.admin.addStaff);
            }}
            sx={{ color: color.mainRed, borderColor: color.mainRed }}
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
        <div className="flex w-full gap-4">
          <Button
            className={`${
              up
                ? "text-white bg-darkIndigo w-32"
                : "text-darkIndigo border-lightGray w-32 border-2"
            }`}
            onClick={() => {
              setUp(true);
            }}
            variant="Contained"
            size="large"
          >
            Mark Up
          </Button>
          <Button
            className={`${
              !up
                ? "text-white bg-darkIndigo w-32"
                : "text-darkIndigo border-lightGray w-32"
            }`}
            onClick={() => {
              setUp(false);
            }}
            variant="outlined"
            size="large"
          >
            Mark Down
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-3">
        <Formik
          initialValues={{
            name: "",
            type: "",
            percent: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            type: Yup.string().required("Required"),
            percent: Yup.number().required("Required"),
          })}
          onSubmit={(values) => {
            handleAddMarkup(values);
            console.log(values);
          }}
        >
          {({ setFieldValue }) => {
            return (
              <Form className="w-full h-full">
                <div className="flex flex-col w-[80%] h-[60%] bg-white rounded-xl px-10 justify-center gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: color.darkGray,
                        fontSize: "21px",
                      }}
                    >
                      Company Name
                    </InputLabel>
                    <TextFieldWrapper
                      id="name"
                      name="name"
                      placeholder="Type or select an existing company"
                    />
                  </div>

                  <div className="flex gap-20">
                    <div className="flex flex-col gap-2 w-[25%]">
                      <InputLabel
                        htmlFor="type"
                        sx={{
                          color: color.darkGray,
                          fontSize: "21px",
                        }}
                      >
                        Type
                      </InputLabel>
                      <TextFieldWrapper
                        select
                        options={[
                          { name: "Mark Up", value: "Increment" },
                          { name: "Mark Down", value: "Decrement" },
                        ]}
                        value={up ? "Increment" : "Decrement"}
                        id="type"
                        name="type"
                        onChange={(e) => {
                          console.log(e.target.value, up);
                          setUp(e.target.value === "Increment" ? true : false);
                          setFieldValue("type", e.target.value);
                        }}
                      />
                    </div>
                    {/* <div className="flex flex-col gap-2 w-[20%]">
                  <InputLabel
                    htmlFor="mode"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Mode
                  </InputLabel>
                  <TextFieldWrapper select normal id="mode" name="mode " />
                </div> */}
                    <div className="flex flex-col gap-2 ">
                      <InputLabel
                        htmlFor="percent"
                        sx={{
                          color: color.darkGray,
                          fontSize: "21px",
                        }}
                      >
                        Rate
                      </InputLabel>
                      <TextFieldWrapper
                        id="percent"
                        name="percent"
                        placeholder="Enter Rate"
                      />
                    </div>
                  </div>
                  <div className="self-center">
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
                      Add Markup
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddMarkup;
