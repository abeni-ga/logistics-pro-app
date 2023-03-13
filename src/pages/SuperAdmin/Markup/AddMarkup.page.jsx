import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import * as Yup from "yup";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useCallback, useEffect, useState } from "react";
import { addMarkup, getUsers } from "../../../utils/apis.js";
import { toast } from "react-toastify";
const AddMarkup = () => {
  const [companies, setCompanies] = useState([]);
  const handleGetUsers = useCallback(async () => {
    const params = new URLSearchParams({
      limit: 0,
      filterBy: "role",
      filterValue: "DeliveryCompany",
      populate: "detail",
    });
    const response = await getUsers({}, `?${params.toString()}`);
    if (response?.status < 300) {
      console.log(response);
      const list = response?.data?.data?.data.map((comp) => {
        return { name: comp?.username, value: comp._id };
      });
      console.log(list);
      setCompanies(list);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  const generalValidation = Yup.object({
    name: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    percent: Yup.number().required("Required"),
  });
  const specificValidation = Yup.object({
    account: Yup.string().required("Require"),
    name: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    percent: Yup.number().required("Required"),
  });
  const navigate = useNavigate();
  const [isGeneral, setIsGeneral] = useState(true);
  const handleAddMarkup = async (values) => {
    try {
      await addMarkup({}, values);
      navigate(routes.admin.markup);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
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
              Add Markup
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
              isGeneral
                ? "text-white bg-darkIndigo w-32"
                : "text-darkIndigo border-lightGray w-32 border-2"
            }`}
            onClick={() => {
              setIsGeneral(true);
            }}
            variant="Contained"
            size="large"
          >
            General
          </Button>
          <Button
            className={`${
              !isGeneral
                ? "text-white bg-darkIndigo w-32"
                : "text-darkIndigo border-lightGray w-32"
            }`}
            onClick={() => {
              setIsGeneral(false);
            }}
            variant="outlined"
            size="large"
          >
            Specific
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-3">
        <Formik
          initialValues={{
            name: "",
            account: "",
            type: "",
            percent: "",
          }}
          validationSchema={isGeneral ? generalValidation : specificValidation}
          onSubmit={(values) => {
            handleAddMarkup(values);
            console.log(values);
          }}
        >
          {({ setFieldValue }) => {
            return isGeneral ? (
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
                      Markup Title
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
                        id="type"
                        name="type"
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
            ) : (
              <Form className="w-full h-full">
                <div className="flex flex-col w-[80%] h-[60%] bg-white rounded-xl px-10 justify-center gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <InputLabel
                      htmlFor="account"
                      sx={{
                        color: color.darkGray,
                        fontSize: "21px",
                      }}
                    >
                      Company
                    </InputLabel>
                    <TextFieldWrapper
                      select
                      options={companies}
                      id="account"
                      name="account"
                      placeholder="Type or select an existing company"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: color.darkGray,
                        fontSize: "21px",
                      }}
                    >
                      Markup Title
                    </InputLabel>
                    <TextFieldWrapper
                      id="name"
                      name="name"
                      placeholder="Type Markup title"
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
                        id="type"
                        name="type"
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
