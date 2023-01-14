import PropTypes from "prop-types";
import React from "react";
import { TextField, MenuItem, styled } from "@mui/material";
import { useField } from "formik";
import { color } from "../../constants/Theme.js";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const TextBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: otherProps.normal ? "0px" : "10px",
    },
    "& .MuiFormLabel-root": {
      color: color.lightGray,
    },
    "& input::placeholder": {
      fontSize: "16px",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: color.lightGray,
    },
  }));
  const [field, mata] = useField(name);

  const textFieldConfig = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = mata.error;
  }

  if (otherProps.options) {
    return (
      <TextBox select {...textFieldConfig}>
        {otherProps.options.map((option, index) => {
          return (
            <MenuItem key={index} value={index + 1}>
              {option}
            </MenuItem>
          );
        })}
      </TextBox>
    );
  }

  return <TextBox {...textFieldConfig} />;
};

TextFieldWrapper.propTypes = {
  /**The name of the field */
  name: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  /**Array of options to be displayed if the field is select */
  options: PropTypes.array,
};

export default TextFieldWrapper;
