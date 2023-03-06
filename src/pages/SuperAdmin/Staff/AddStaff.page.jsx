import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
const AddStaff = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex h-[15%] w-full">
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
      </div>
      <div className="flex flex-col w-full h-full gap-3">
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[60%] h-[60%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="userType"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Select user Type
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    select
                    id="userType"
                    name="userType"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="role"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Role
                  </InputLabel>
                  <TextFieldWrapper select normal id="role" name="role" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="firstName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    First Name
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="firstName"
                    name="firstName"
                    placeholder="Type first name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="lastName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Last Name
                  </InputLabel>
                  <TextFieldWrapper
                    select
                    normal
                    id="lastName"
                    name="lastName"
                    placeholder="Type last name"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="phone"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Phone Number
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="phone"
                    name="phone"
                    placeholder="08170000560"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="email"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    E-mail Address
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="email"
                    name="email"
                    placeholder="you@address.com"
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
                  Add staff
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddStaff;
