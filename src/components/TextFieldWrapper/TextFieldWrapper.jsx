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
            <MenuItem key={index} value={option?.value}>
              {option?.name}
            </MenuItem>
          );
        })}
      </TextField>
    );
  }

  return <TextField {...textFieldConfig} />;
};

TextFieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  /**The name of the field */
  options: PropTypes.array,
  /**Array of options to be displyed if the field is select */
};

export default TextFieldWrapper;
