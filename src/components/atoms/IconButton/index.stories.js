import React from "react";
import IconButton from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import DeleteIcon from "@material-ui/icons/Delete";

const IconButtonComponent = {
  title: "Icon Button",
  component: IconButton,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <IconButton {...args} />
  </ThemeProvider>
);

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  icon: <DeleteIcon />,
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  icon: <DeleteIcon />,
  disabled: true,
};

export default IconButtonComponent;
