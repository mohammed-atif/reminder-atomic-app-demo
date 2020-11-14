import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const TextFieldComponent = (props) => (
  <TextField
    fullWidth
    label={props.label}
    defaultValue={props.value}
    required={props.required}
    onChange={props.onChange}
    error={props.error}
    helperText={props.errorMessage}
    type={props.type}
    onBlur={props.onBlur}
    variant="outlined"
    InputLabelProps={{
      shrink: true,
    }}
  />
);

TextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "datetime-local",
  ]),
  onBlur: PropTypes.func,
};

TextFieldComponent.defaultProps = {
  value: "",
  required: false,
  error: false,
  errorMessage: "",
  type: "text",
};

export default TextFieldComponent;
