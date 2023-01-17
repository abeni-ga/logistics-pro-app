import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { useNavigate } from "react-router-dom";
const AddMarkup = () => {
  const navigate = useNavigate();
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
              navigate("/admin/setting/staff/add");
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
            onClick={() => {}}
            sx={{
              color: "white",
              backgroundColor: color.darkIndigo,
              width: "130px",
            }}
            variant="Contained"
            size="large"
          >
            Mark Up
          </Button>
          <Button
            onClick={() => {}}
            sx={{
              color: color.darkIndigo,
              borderColor: color.lightGray,
              width: "130px",
            }}
            variant="outlined"
            size="large"
          >
            Mark Down
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-3">
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[80%] h-[60%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2 w-full">
                <InputLabel
                  htmlFor="companyName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Company Name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="companyName"
                  name="companyName"
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
                  <TextFieldWrapper select normal id="type" name="type" />
                </div>
                <div className="flex flex-col gap-2 w-[20%]">
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
                </div>
                <div className="flex flex-col gap-2 ">
                  <InputLabel
                    htmlFor="rate"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Rate
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="rate"
                    name="rate"
                    placeholder="Enter Rate"
                  />
                </div>
              </div>
              <div className="self-center">
                <Button
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
        </Formik>
      </div>
    </div>
  );
};

export default AddMarkup;
