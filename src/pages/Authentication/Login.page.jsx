import LogInForm from "./Forms/LogInForm";
import SignUpForm from "./Forms/SignUpForm";
import ForgotPassword from "./Forms/ForgotPassword";
import CreatePassword from "./Forms/CreatePassword";
import RecoveryMail from "./Forms/RecoveryMail";
import { color } from "../../constants/Theme";
import Logo from "../../assets/svg/Logo.svg";
import Scooter from "../../assets/svg/Scooter.svg";

const LogIn = (props) => {
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
      {props.signup ? (
        <SignUpForm />
      ) : props.forgot ? (
        <ForgotPassword />
      ) : props.create ? (
        <CreatePassword />
      ) : props.recovery ? (
        <RecoveryMail />
      ) : (
        <LogInForm />
      )}
    </div>
  );
};

export default LogIn;
