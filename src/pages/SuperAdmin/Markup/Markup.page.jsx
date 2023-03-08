import {
  Button,
  CircularProgress,
  InputLabel,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import MarkUp from "../../../assets/svg/Markup.svg";
import MarkupItem from "../Markup/MarkupItem.pagecomp.jsx";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useCallback, useEffect, useState } from "react";
import { editMarkup, getMarkups } from "../../../utils/apis.js";
import { toast } from "react-toastify";
const Markup = () => {
  const [markupDetail, setMarkupDetail] = useState(null);
  const navigate = useNavigate();
  const [markups, setMarkups] = useState([]);
  const handleEditMarkup = async (values) => {
    try {
      const result = await editMarkup({}, values);
      handleGetMarkups();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMarkupDetail = (markup) => {
    setMarkupDetail(markup);
  };
  const handleGetMarkups = useCallback(async () => {
    const response = await getMarkups({});
    if (response?.status < 300) {
      setMarkups(response?.data?.data?.data);
      console.log(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  useEffect(() => {
    handleGetMarkups();
  }, [handleGetMarkups]);
  return markups.length > 0 ? (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-full py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Markup
        </Typography>
        <Button
          onClick={() => {
            navigate(routes.admin.addMarkup);
          }}
          variant="outlined"
          sx={{
            color: color.mainRed,
            borderColor: color.lightGray,
            ":hover": {
              borderColor: color.lightGray,
            },
          }}
          startIcon={<AddIcon />}
          size="large"
        >
          Add New
        </Button>
      </div>
      <div className="flex w-full h-[90%] justify-between">
        <div
          className={`flex flex-col gap-5 ${
            markupDetail ? "w-[68%]" : "w-full"
          }`}
        >
          <div className="flex min-h-[10%] bg-blue-100 rounded-xl items-center">
            <div className="flex w-[10%] h-2"></div>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
                width: "80%",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                width: "15%",
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Manage
            </Typography>
          </div>

          <div className="flex flex-col w-full h-full gap-2">
            {markups.map((markup, index) => {
              return (
                <MarkupItem
                  markup={markup}
                  onClick={() => {
                    handleMarkupDetail(markup);
                  }}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        {markupDetail ? (
          <div className="flex flex-col w-[30%] bg-white h-[60%] px-10 gap-5 justify-center relative">
            <CloseIcon
              className="absolute top-4 right-8"
              onClick={() => {
                handleMarkupDetail(null);
              }}
            />
            <Typography
              sx={{
                fontSize: "24px",
                fontColor: color.darkGray,
                fontWeight: "700",
              }}
            >
              {markupDetail.name}
            </Typography>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img src={MarkUp} alt="" className="self-start mt-1" />
                <div>
                  <Typography sx={{ color: color.darkGray }}>
                    Mark Up
                  </Typography>
                  <Typography
                    sx={{ color: color.darkIndigo, fontWeight: "700" }}
                  >
                    {`${markupDetail.percent}%`}
                  </Typography>
                </div>
              </div>
              <a href="#e" className="text-[#9CA3AF]">
                Edit
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Formik
                initialValues={{
                  type: markupDetail.type,
                  percent: markupDetail.percent,
                }}
                validationSchema={Yup.object({
                  type: Yup.string().required("Required"),
                  percent: Yup.number().required("Required"),
                })}
                onSubmit={(values) => {
                  const newValues = {
                    ...values,
                    name: markupDetail.name,
                    id: markupDetail._id,
                  };
                  handleEditMarkup(newValues);
                  console.log(values);
                }}
              >
                <Form>
                  <div className="flex flex-col gap-2">
                    <InputLabel
                      htmlFor="type"
                      sx={{
                        color: color.darkGray,
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
                      placeholder="Type"
                      name="type"
                    />
                  </div>
                  {/*                   <div className="flex flex-col gap-2">
                    <InputLabel
                      htmlFor="mode"
                      sx={{
                        color: color.darkGray,
                      }}
                    >
                      Mode
                    </InputLabel>
                    <TextFieldWrapper
                      id="mode"
                      placeholder="Mode"
                      name="mode"
                    />
                  </div> */}
                  <div className="flex flex-col gap-2">
                    <InputLabel
                      htmlFor="percent"
                      sx={{
                        color: color.darkGray,
                      }}
                    >
                      Rate
                    </InputLabel>
                    <TextFieldWrapper
                      id="percent"
                      placeholder="Enter Rate"
                      name="percent"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "15px",
                      borderRadius: "8px",
                      alignSelf: "flex-start",
                      color: "white",
                      backgroundColor: color.darkIndigo,
                      ":hover": {
                        color: "white",
                        backgroundColor: color.darkIndigo,
                      },
                    }}
                  >
                    Update
                  </Button>
                </Form>
              </Formik>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Markup;
