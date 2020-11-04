import React from "react";
import EventListItem from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const EventListItemComponent = {
  title: "EventListItem",
  comonent: EventListItem,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <EventListItem {...args} />
  </ThemeProvider>
);

export const ListItemWithData = Template.bind({});
ListItemWithData.args = {
  eventData: {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
};

export default EventListItemComponent;
