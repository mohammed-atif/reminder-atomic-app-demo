import React from "react";
import EventList from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const EventListComponent = {
  title: "EventList",
  comonent: EventList,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <EventList {...args} />
  </ThemeProvider>
);

export const ListWithData = Template.bind({});
ListWithData.args = {
  title: "Upcoming Events",
  eventDataList: [
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
    {
      date: "12:12:12 12/12/12",
      title: "Storybook Event",
      type: "Reminder",
    },
  ],
};

export default EventListComponent;
