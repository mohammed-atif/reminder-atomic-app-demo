import React from "react";
import Typography from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const TypographyComponent = {
  title: "Typography",
  component: Typography,
};

const Template = ({ children, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <Typography {...args}>{children}</Typography>
  </ThemeProvider>
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
  variant: "header",
};

export const Title = Template.bind({});
Title.args = {
  children: "Title",
  variant: "title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: "Subtitle",
  variant: "subtitle",
};

export const Body = Template.bind({});
Body.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  variant: "body",
};

export default TypographyComponent;
