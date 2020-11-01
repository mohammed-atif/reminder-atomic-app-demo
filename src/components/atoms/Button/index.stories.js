import React from "react";
import Button from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const ButtonComponent = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Primary Button",
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: "Disabled Button",
  disabled: true,
};

export default ButtonComponent;
