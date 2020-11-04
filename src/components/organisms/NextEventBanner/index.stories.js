import React from "react";
import NextEventBanner from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const NextEventBannerComponent = {
  title: "NextEventBanner",
  component: NextEventBanner,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <NextEventBanner {...args} />
  </ThemeProvider>
);

export const BannerWithNextEvent = Template.bind({});
BannerWithNextEvent.args = {
  date: "12:12:12 12/12/12",
  title: "Next Event",
  description: "Next Event Description",
  type: "Reminder",
};

export default NextEventBannerComponent;
