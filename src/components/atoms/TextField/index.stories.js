import React from "react";
import TextField from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const TextFieldComponent = {
  title: "Text Field",
  component: TextField,
  argTypes: { onChange: { action: "changed" } },
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
