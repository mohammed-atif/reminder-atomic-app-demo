import React from "react";
import TextField from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const TextFieldComponent = {
  title: "Text Field",
  component: TextField,
  argTypes: { onChange: { action: "changed" }, onBlur: { action: "blurred" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TextField {...args} />
  </ThemeProvider>
);

export const EmptyTextField = Template.bind({});
EmptyTextField.args = {
  label: "Empty Label",
};

export const FilledTextField = Template.bind({});
FilledTextField.args = {
  label: "Filled Label",
  value: "Pre filled value",
};

export const RequiredTextField = Template.bind({});
RequiredTextField.args = {
  label: "Required Label",
  required: true,
};

export const PasswordTextField = Template.bind({});
PasswordTextField.args = {
  label: "Password Type",
  type: "password",
};

export const EmailTextField = Template.bind({});
EmailTextField.args = {
  label: "Email Type",
  type: "email",
};

export const DateTextField = Template.bind({});
DateTextField.args = {
  label: "Date Type",
  type: "date",
};

export const TimeTextField = Template.bind({});
TimeTextField.args = {
  label: "Time Type",
  type: "time",
};

export const DateTimeTextField = Template.bind({});
DateTimeTextField.args = {
  label: "Date Time Type",
  type: "datetime-local",
};

export const EmptyErrorTextField = Template.bind({});
EmptyErrorTextField.args = {
  label: "Empty Error Label",
  error: true,
};

export const ErrorMessageTextField = Template.bind({});
ErrorMessageTextField.args = {
  label: "Error Message Label",
  error: true,
  errorMessage: "This is an error",
};

export default TextFieldComponent;
