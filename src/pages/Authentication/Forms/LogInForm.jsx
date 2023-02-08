import { Button, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import { login } from "../../../utils/apis";
import { toast } from "react-toastify";
import { ROLE } from "../../../constants/enum";
import { routes } from "../../../routes/siteRoutes.routes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const LogInForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogIn = async (values) => {
    const header = {
      Authorization: "Bearer null",
      "Content-Type": "application/json",
    };
    try {
      const result = await login(header, values);
      toast.success("Successfully Logged in!");
      console.log(result);
      if (result.data.data.account?.role === ROLE.ADMIN) {
        navigate(routes.admin.dashboard);
      } else {
        navigate(routes.company.dashboard);
      }
      console.log("resultttt", result.data.account);
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col w-2/6 h-3/5  rounded-xl	bg-white p-16 justify-around gap-10">
      <div>
        <h1 className="text-4xl mb-2 font-semibold text-gray-700">
          You're Welcome Back!
        </h1>
        <h6>Enter the following information below</h6>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          handleLogIn(values);
        }}
      >
        <Form>
          <div className="flex flex-col gap-6">
            <TextFieldWrapper
              label="Email Address"
              id="email"
              type="email"
              name="email"
            />
            <TextFieldWrapper
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      onMouseDown={() => {}}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <a
              href="/company/forgot"
              className="text-center text-blue-800 hover:text-blue-600 visited:text-purple-600 self-end"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <h6>Just joining us here?</h6>
              <a
                href="/company/signup"
                className="ml-2 text-center text-blue-800 hover:text-blue-600 visited:text-purple-600"
              >
                Register Now
              </a>
            </div>
            <Button
              type="submit"
              className="bg-darkIndigo"
              variant="contained"
              size="large"
            >
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;
