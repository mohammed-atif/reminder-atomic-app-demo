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
};

TextFieldComponent.defaultProps = {
  value: "",
  required: false,
  error: false,
  errorMessage: "",
};

export default TextFieldComponent;
