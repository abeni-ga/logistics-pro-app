import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import StandardButton from "../../../components/Buttons/StandardButton.component";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";

const Setting = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <Formik>
        <Form className="w-[50%] h-[60%] rounded-xl bg-white flex flex-col items-center justify-center gap-4 p-4">
          <Typography className="font-bold text-lg">Change Password</Typography>
          <TextFieldWrapper name="oldPassword" label="Old Password" />
          <TextFieldWrapper name="newPassword" label="New Password" />
          <TextFieldWrapper name="confirmPassword" label="Confirm Password" />
          <StandardButton type="submit">Change Password</StandardButton>
        </Form>
      </Formik>
    </div>
  );
};

export default Setting;
