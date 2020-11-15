import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "components/atoms/Typography";
import TextField from "components/atoms/TextField";
import Button from "components/atoms/Button";

const AddEventBanner = (props) => {
  const validate = { props };

  const [fieldToValidate, setFieldValidation] = useState({
    title: false,
    date: false,
    type: false,
  });

  const [inputFieldValue, setFieldValue] = useState({
    title: "",
    description: "",
    date: "",
    type: "",
  });

  const validateField = useCallback(
    (field) => {
      const input = inputFieldValue[field];
      const currentValidationState = fieldToValidate;
      if (input === null || input === "") {
        currentValidationState[field] = true;
      } else {
        currentValidationState[field] = false;
      }
      setFieldValidation({ ...currentValidationState });
      return !currentValidationState[field];
    },
    [inputFieldValue, fieldToValidate, setFieldValidation]
  );

  const isValid = useCallback(() => {
    let validationStatus = true;
    Object.keys(fieldToValidate).forEach((key, value) => {
      validationStatus = validationStatus && validateField(key);
    });
    return validationStatus;
  }, [fieldToValidate, validateField]);

  const handleFieldChange = useCallback(
    (field, value) => {
      const currentValidationState = fieldToValidate;
      currentValidationState[field] = false;
      setFieldValidation({ ...currentValidationState });

      const currentFieldValues = inputFieldValue;
      currentFieldValues[field] = value;
      setFieldValue({ ...currentFieldValues });
    },
    [fieldToValidate, inputFieldValue, setFieldValidation, setFieldValue]
  );

  const handleSubmit = useCallback(() => {
    if (!props.validate || (props.validate && isValid())) {
      props.onSubmit(inputFieldValue);
    }
  }, [props, isValid, inputFieldValue]);

  return (
    <Box component={Container}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="header">Add New Event</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Title"
            onChange={(event) => handleFieldChange("title", event.target.value)}
            error={fieldToValidate.title}
            onBlur={() => validate && validateField("title")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            onChange={(event) =>
              handleFieldChange("description", event.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Date and Time"
            onChange={(event) => handleFieldChange("date", event.target.value)}
            type="datetime-local"
            error={fieldToValidate.date}
            onBlur={() => validate && validateField("date")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Event Type"
            onChange={(event) => handleFieldChange("type", event.target.value)}
            error={fieldToValidate.type}
            onBlur={() => validate && validateField("type")}
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <Button title="Add Event" onClick={handleSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
};

AddEventBanner.propTypes = {
  validate: PropTypes.bool,
  onSubmit: PropTypes.func,
};

AddEventBanner.defaultProps = {
  validate: false,
};

export default AddEventBanner;
