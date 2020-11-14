import React from "react";
import AddEvent from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const AddEventComponent = {
  title: "AddEvent",
  component: AddEvent,
  argTypes: { onSubmit: { action: "submitted" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <AddEvent {...args} />
  </ThemeProvider>
);

export const SimpleAddEvent = Template.bind({});
SimpleAddEvent.args = {};

export const ValidateAddEvent = Template.bind({});
ValidateAddEvent.args = {
  validate: true,
};

export default AddEventComponent;
