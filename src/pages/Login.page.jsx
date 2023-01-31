import { Button, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { login } from "../utils/apis";
import { toast } from "react-toastify";
import UseLocalStorage from "../hooks/useLocalStorage.js";
import { ROLE } from "../constants/enum";
import { routes } from "../routes/siteRoutes.routes";
import { color } from "../constants/Theme";
import Logo from "../assets/svg/Logo.svg";
import Scooter from "../assets/svg/Scooter.svg";
import { Formik } from "formik";
import TextFieldWrapper from "../components/TextFieldWrapper/TextFieldWrapper";
import axios from "axios";
import { account } from "../constants/ApiEndpoints";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogIn = async (values) => {
    const header = {
      Authorization: "Bearer null",
      "Content-Type": "application/json",
    };
    const result = await login(header, values)
      .then((data) => {
        toast.success("Successfully Logged in!");
        UseLocalStorage("token", data.token);
        if (data.role === ROLE.ADMIN) {
          navigate(routes.admin.dashboard);
        } else {
          navigate(routes.company.dashboard);
        }
        return data;
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log("resu", result);
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: color.bgWhiteSmoke }}
    >
      <div className="flex flex-col h-screen w-1/2 py-10">
        <div className="flex flex-row items-center gap-2 ml-4">
          <img className="rounded-sm w-8" src={Logo} alt="POOL" />
          <h1 className="font-semibold">Pool</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-10/12 h-full">
          <img className="w-60" src={Scooter} alt="" />
          <h1 className="text-4xl text-center font-semibold">
            Lets help you manage your <br /> riders and delivery systems.
          </h1>
          <h4 className="text-center text-gray-600">
            Every logistics company whether it’s a multi-national branding
            corporation or a regular local deserves the basic standard
            necessities in achieving a high service delivery
          </h4>
        </div>
      </div>
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
            var data = JSON.stringify(values);
            handleLogIn(data);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className="flex flex-col gap-6">
                <TextFieldWrapper
                  label="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  onChange={props.handleChange}
                  value={props.values.email}
                />
                <TextFieldWrapper
                  label="Password"
                  onChange={props.handleChange}
                  value={props.values.password}
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
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
