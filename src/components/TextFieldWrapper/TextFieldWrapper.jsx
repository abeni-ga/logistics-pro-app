import PropTypes from "prop-types";
import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...otherProps }) => {
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
      <TextField {...textFieldConfig}>
        {otherProps.options.map((option, index) => {
          return (
            <MenuItem key={index} value={index + 1}>
              {option}
            </MenuItem>
          );
        })}
      </TextField>
    );
  }

  return <TextField {...textFieldConfig} />;
};

TextFieldWrapper.propTypes = {
  /**The name of the field */
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  /**Array of options to be displayed if the field is select */
  options: PropTypes.array,
};

export default TextFieldWrapper;
